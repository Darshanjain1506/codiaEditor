"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import Canvas from "./canvas";
import Header from "./header";
import Sidebar from "./sidebar";
import { use, useCallback, useEffect, useState } from "react";
import { useEditorStore } from "@/store";
import { getUserDesignByID } from "@/services/design-service";
import Properties from "./properties";
import { addImageToCanvas, addShapeToCanvas, addTextToCanvas, centerCanvas } from "@/fabric/fabric-utils";
import { rgbToHex } from "@/lib/utils";
import axios from "axios";
import DesignLoadingComponent from "./loading/DesignLoadingComponent"; // Import the loading component
import DesignSavingComponent from "./loading/DesignSavingComponent";

function MainEditor() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = params?.token;

  const designId = params?.slug;
  console.log(token, "searchParams");

  const [isLoading, setIsLoading] = useState(!!designId);
  const [loadAttempted, setLoadAttempted] = useState(false);
  const [imageCodiaJson, setImageCodiaJson] = useState(null);
  const [loadingStage, setLoadingStage] = useState("Initializing"); // New state for loading stages

  const [error, setError] = useState(null);

  const {
    canvas,
    setDesignId,
    resetStore,
    setName,
    setShowProperties,
    showProperties,
    saveStatus,
    isEditing,
  } = useEditorStore();

  useEffect(() => {
    //reset the store
    resetStore();

    //set the design id
    if (designId) setDesignId(designId);

    return () => {
      resetStore();
    };
  }, []);

  useEffect(() => {
    setLoadAttempted(false);
    setError(null);
  }, [designId]);

  useEffect(() => {
    if (isLoading && !canvas && designId) {
      const timer = setTimeout(() => {
        if (isLoading) {
          console.log("Canvas init timeout");
          setIsLoading(false);
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, canvas, designId]);

  useEffect(() => {
    if (canvas) {
      console.log("Canvas is now available in editor");
    }
  }, [canvas]);

  //load the design ->
  const loadDesign = useCallback(async (codiaJson) => {
    if (!canvas || loadAttempted) return;

    try {
      setIsLoading(true);
      setLoadAttempted(true);


      // Fetch data from your API
      let data;
      if (!codiaJson) {
        const response = await getUserDesignByID(designId);
        data = response.data;
      } else {
        data = codiaJson;
      }

      if (!data?.data?.visualElement) {
        throw new Error("Invalid design data structure");
      }

      const { configuration, visualElement } = data.data;


      // Reset and set canvas dimensions
      canvas.clear();
      const width = visualElement?.styleConfig?.widthSpec?.value;
      const height = visualElement?.styleConfig?.heightSpec?.value;

      const containerWidth = window.innerWidth * 0.7;
      const containerHeight = window.innerHeight * 0.8;

      const scaleFactorX = width > containerWidth ? width / containerWidth : 1;
      const scaleFactorY = height > containerHeight ? height / containerHeight : 1;
      const scaleFactor = Math.max(scaleFactorX, scaleFactorY);

      canvas.setHeight(height / scaleFactor);
      canvas.setWidth(width / scaleFactor);

      // Set background color
      const bgColor = visualElement?.styleConfig?.backgroundSpec?.backgroundColor;
      if (bgColor) {
        const hex = rgbToHex(...bgColor.rgb);
        canvas.backgroundColor = hex;
      }



      // Unified function to render elements
      const renderElement = async (element, parentX = 0, parentY = 0) => {
        const { elementType, layoutConfig, styleConfig, contentData, childElements } = element;

        // Calculate absolute position
        const [relativeX, relativeY] = layoutConfig?.absoluteAttrs?.coord || [0, 0];
        const absoluteX = parentX + relativeX;
        const absoluteY = parentY + relativeY;

        const width = styleConfig?.widthSpec?.value || null;
        const height = styleConfig?.heightSpec?.value || null;
        const opacity = styleConfig?.opacityLevel !== undefined ? styleConfig.opacityLevel / 255 : 1;
        const rotation = styleConfig?.rotationAngle || 0;

        // Common properties for all elements
        const commonProps = {
          left: absoluteX / scaleFactor,
          top: absoluteY / scaleFactor,
          opacity,
          angle: rotation,
          selectable: true,
        };

        // Render based on element type
        switch (elementType) {
          case "Image":
            if (contentData?.imageSource) {
              await addImageToCanvas(
                canvas,
                contentData.imageSource,
                absoluteX / scaleFactor,
                absoluteY / scaleFactor,
                width / scaleFactor,
                height / scaleFactor,
                true
              );
            } else if (styleConfig) {
              await addShapeToCanvas(canvas, "rectangle", {
                ...commonProps,
                width: width / scaleFactor,
                height: height / scaleFactor,
                fill: styleConfig.textColor
                  ? `rgb(${styleConfig.textColor.rgbValues.join(",")})`
                  : 'transparent',
                stroke: styleConfig.borderConfig?.borderColor
                  ? `rgb(${styleConfig.borderConfig.borderColor.rgbValues.join(",")})`
                  : undefined,
                strokeWidth: styleConfig.borderConfig?.borderWidth || 0,
                rx: styleConfig.borderConfig?.borderRadius?.[0] / scaleFactor || 0,
                ry: styleConfig.borderConfig?.borderRadius?.[1] / scaleFactor || 0,
              }, true);
            }
            break;

          case "Text":
            if (contentData?.textValue) {
              await addTextToCanvas(canvas, contentData.textValue, {
                ...commonProps,
                fontSize: (styleConfig?.textConfig?.fontSize || 20) / scaleFactor,
                fontFamily: styleConfig?.textConfig?.fontFamily || "Arial",
                fill: styleConfig?.textColor
                  ? `rgb(${styleConfig.textColor.rgbValues.join(",")})`
                  : "#000000",
                fontWeight: getFontWeight(styleConfig?.textConfig?.fontStyle),
                textAlign: getTextAlign(styleConfig?.textConfig?.textAlign),
                width: width / scaleFactor,
                height: height / scaleFactor,
              });
            }
            break;

          case "Layer":
            if (styleConfig && styleConfig.textColor) {
              await addShapeToCanvas(canvas, "rectangle", {
                ...commonProps,
                width: width / scaleFactor,
                height: height / scaleFactor,
                fill: styleConfig.textColor
                  ? `rgb(${styleConfig.textColor.rgbValues.join(",")})`
                  : 'transparent',
                stroke: styleConfig.borderConfig?.borderColor
                  ? `rgb(${styleConfig.borderConfig.borderColor.rgbValues.join(",")})`
                  : undefined,
                strokeWidth: styleConfig.borderConfig?.borderWidth || 0,
                rx: styleConfig.borderConfig?.borderRadius?.[0] / scaleFactor || 0,
                ry: styleConfig.borderConfig?.borderRadius?.[1] / scaleFactor || 0,
              }, true);
            }
            break;

          case "Body":
            break;

          default:
            console.warn(`Unhandled element type: ${elementType}`);
        }

        // Recursively render child elements
        if (childElements && Array.isArray(childElements)) {
          for (const childElement of childElements) {
            await renderElement(childElement, absoluteX, absoluteY);
          }
        }
      };

      // Start rendering from root elements
      if (visualElement?.childElements && Array.isArray(visualElement.childElements)) {
        for (const element of visualElement.childElements) {
          await renderElement(element, 0, 0);
        }
      }



      canvas.renderAll();

      // Add a small delay before hiding loading to show completion
      setTimeout(() => {
        setIsLoading(false);
      }, 800);

    } catch (e) {
      console.error("Failed to load Codia JSON design:", e);
      setError("Failed to load design");
      setIsLoading(false);
    }
  }, [canvas, designId, loadAttempted]);

  const loadEditorDesign = useCallback(async (editorJson) => {
    if (!canvas || loadAttempted) return;
    try {
      setIsLoading(true);
      setLoadAttempted(true);


      const design = editorJson;

      if (design) {
        setName(design.name);
        setDesignId(designId);



        try {
          if (design.canvasData) {
            canvas.clear();
            if (design.width && design.height) {
              canvas.setDimensions({
                width: design.width,
                height: design.height,
              });
            }

            const canvasData =
              typeof design.canvasData === "string"
                ? JSON.parse(design.canvasData)
                : design.canvasData;

            const hasObjects =
              canvasData.objects && canvasData.objects.length > 0;

            if (canvasData.background) {
              canvas.backgroundColor = canvasData.background;
            } else {
              canvas.backgroundColor = "#ffffff";
            }

            if (!hasObjects) {
              canvas.renderAll();
              setTimeout(() => setIsLoading(false), 500);
              return true;
            }



            canvas
              .loadFromJSON(design.canvasData)
              .then((canvas) => {
                canvas.requestRenderAll();
                setTimeout(() => setIsLoading(false), 500);
              });
          } else {
            console.log("no canvas data");
            canvas.clear();
            canvas.setWidth(design.width);
            canvas.setHeight(design.height);
            canvas.backgroundColor = "#ffffff";
            canvas.renderAll();
            setTimeout(() => setIsLoading(false), 500);
          }
        } catch (e) {
          console.error(("Error loading canvas", e));
          setError("Error loading canvas");
          setIsLoading(false);
        }
      }
    } catch (e) {
      console.error("Failed to load design", e);
      setError("failed to load design");
      setIsLoading(false);
    }
  }, [canvas, designId, loadAttempted, setDesignId]);

  // Helper functions remain the same
  const getFontWeight = (fontStyle) => {
    if (!fontStyle) return "normal";
    const style = fontStyle.toLowerCase();
    if (style.includes("bold")) return "bold";
    if (style.includes("medium")) return "500";
    if (style.includes("semi")) return "600";
    return "normal";
  };

  const getTextAlign = (textAlign) => {
    if (!textAlign || !Array.isArray(textAlign)) return "left";
    return textAlign[0].toLowerCase();
  };

  useEffect(() => {
    if (imageCodiaJson) {
      if (!imageCodiaJson.isCodiaJson) {
        loadEditorDesign(imageCodiaJson.data);
      } else {
        loadDesign(imageCodiaJson.data);
      }
      setTimeout(() => {
        setLoadingStage("success");
      }, 1000);

    }
  }, [imageCodiaJson, canvas]);

  useEffect(async () => {
    try {
      console.log("starting pulling", token);
      setLoadingStage("Fetching Design Data");
      if (!token) return;

      const res = await axios.get("http://localhost:4001/api/v1/editor/get", {
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = JSON.parse(res.data.currentEditableMedia.inputMediaJson);

      setImageCodiaJson({
        data,
        isCodiaJson: res.data.post.editedMedia.length === 1,
      });
      // Update loading stage
      console.log(res, "dsfjbjksdfjksdjkfnjksdjk");

    } catch (error) {

      console.log(error, "error in fetching the data");
      setError("Failed to fetch design data");
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!canvas) return;

    const handleSelectionCreated = () => {
      const activeObject = canvas.getActiveObject();
      console.log(activeObject, "activeObject");
      if (activeObject) {
        setShowProperties(true);
      }
    };

    const handleSelectionCleared = () => {
      setShowProperties(false);
    };

    canvas.on("selection:created", handleSelectionCreated);
    canvas.on("selection:updated", handleSelectionCreated);
    canvas.on("selection:cleared", handleSelectionCleared);

    return () => {
      canvas.off("selection:created", handleSelectionCreated);
      canvas.off("selection:updated", handleSelectionCreated);
      canvas.off("selection:cleared", handleSelectionCleared);
    };
  }, [canvas]);



  // Show error state if there's an error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLineJoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Failed to Load Design</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header imageCodiaJson={imageCodiaJson} setImageCodiaJson={setImageCodiaJson} />
      <div className="flex flex-1 overflow-hidden">
        {isEditing && <Sidebar />}

        <div className="flex-1 flex flex-col overflow-hidden relative">
          <main className="flex-1 overflow-hidden bg-[#f0f0f0] flex items-center justify-center">
            <Canvas />
          </main>
        </div>
      </div>
      {showProperties && isEditing && <Properties />}
      {loadingStage !== "success" && <DesignLoadingComponent />}
      {(saveStatus === "Saving..." || saveStatus === "Saved...") && <DesignSavingComponent />}
    </div>
  );
}

export default MainEditor;