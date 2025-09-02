"use client";

import { useParams, useRouter } from "next/navigation";
import Canvas from "./canvas";
import Header from "./header";
import Sidebar from "./sidebar";
import { use, useCallback, useEffect, useState } from "react";
import { useEditorStore } from "@/store";
import { getUserDesignByID } from "@/services/design-service";
import Properties from "./properties";
import { addImageToCanvas, addShapeToCanvas, addTextToCanvas, centerCanvas } from "@/fabric/fabric-utils";
import { rgbToHex } from "@/lib/utils";


function MainEditor() {
  const params = useParams();
  const router = useRouter();
  const designId = params?.slug;

  const [isLoading, setIsLoading] = useState(!!designId);
  const [loadAttempted, setLoadAttempted] = useState(false);
  const [imageCodiaJson, setImageCodiaJson] = useState(null);

  const [error, setError] = useState(null);

  const {
    canvas,
    setDesignId,
    resetStore,
    setName,
    setShowProperties,
    showProperties,
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
      const scaleFactor = 2;

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
              // Handle image elements without source but with style (like button backgrounds)
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
              });
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
            // Create background for layer elements
            if (styleConfig) {
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


              });
            }
            break;

          case "Body":
            // Root element, no need to render anything specifically
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
      setIsLoading(false);

    } catch (e) {
      console.error("Failed to load Codia JSON design:", e);
      setError("Failed to load design");
      setIsLoading(false);
    }
  }, [canvas, designId, loadAttempted]);

  // Helper function to get font weight
  const getFontWeight = (fontStyle) => {
    if (!fontStyle) return "normal";
    const style = fontStyle.toLowerCase();
    if (style.includes("bold")) return "bold";
    if (style.includes("medium")) return "500";
    if (style.includes("semi")) return "600";
    return "normal";
  };

  // Helper function to get text alignment
  const getTextAlign = (textAlign) => {
    if (!textAlign || !Array.isArray(textAlign)) return "left";
    return textAlign[0].toLowerCase();
  };


  useEffect(() => {
    // setTimeout(() => {
    //   loadDesign()
    // }, 100)

    // if (!designId) {
    //   setTimeout(() => {
    //     console.log("No design ID found");
    //     canvas?.clear();

    //     canvas?.height && canvas.setHeight(500);
    //     canvas?.width && canvas.setWidth(400);
    //     canvas.backgroundColor = "#ffffff"
    //     canvas.renderAll();
    //   }, 100)


    // }
  }, [canvas, designId, loadAttempted, router]);

  useEffect(() => {
    if (imageCodiaJson) {
      // Load the design from the Codia JSON
      loadDesign(imageCodiaJson);
    }
  }, [imageCodiaJson]);

  // useEffect(() => {
  //   centerCanvas(canvas, showProperties, isEditing);
  // }, [canvas, showProperties, isEditing])

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


    </div>
  );
}

export default MainEditor;
