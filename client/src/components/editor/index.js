"use client";

import { useParams, useRouter } from "next/navigation";
import Canvas from "./canvas";
import Header from "./header";
import Sidebar from "./sidebar";
import { useCallback, useEffect, useState } from "react";
import { useEditorStore } from "@/store";
import { getUserDesignByID } from "@/services/design-service";
import Properties from "./properties";
import { addImageToCanvas, addTextToCanvas, centerCanvas } from "@/fabric/fabric-utils";
import { rgbToHex } from "@/lib/utils";


function MainEditor() {
  const params = useParams();
  const router = useRouter();
  const designId = params?.slug;

  const [isLoading, setIsLoading] = useState(!!designId);
  const [loadAttempted, setLoadAttempted] = useState(false);
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
  const loadDesign = useCallback(async () => {
    if (!canvas || loadAttempted) return;
    try {
      setIsLoading(true);
      setLoadAttempted(true);
      const scaleFactor = 2;
      // Fetch data from your API (change URL/service if needed)
      const response = await getUserDesignByID(designId);
      const data = response.data;

      if (!data?.data?.visualElement) {
        throw new Error("Invalid design data structure");
      }

      const { configuration, visualElement } = data.data;

      // 1. Reset and set canvas dimensions
      canvas.clear();
      const width = visualElement?.styleConfig?.widthSpec?.value // Use width if available
      const height = visualElement?.styleConfig?.heightSpec?.value // Use height if available
      console.log(canvas, "canvas in load design", width, height);

      canvas.setHeight(height / scaleFactor);
      canvas.setWidth(width / scaleFactor);
      canvas.renderAll();
      // 2. Set background color
      const bgColor = visualElement?.styleConfig?.backgroundSpec?.backgroundColor;
      const hex = rgbToHex(...bgColor.rgb);
      canvas.backgroundColor = hex;
      // 3. Iterate through elements
      for (const element of visualElement?.childElements) {
        const { elementType, layoutConfig, styleConfig, contentData } = element;
        const [x, y] = layoutConfig?.absoluteAttrs?.coord || [0, 0];
        const width = styleConfig?.widthSpec?.value || null;
        const height = styleConfig?.heightSpec?.value || null;

        if (elementType === "Image") {
          await addImageToCanvas(canvas, contentData?.imageSource, x / scaleFactor, y / scaleFactor, width / scaleFactor, height / scaleFactor, false);
        }

        if (elementType === "Text") {
          addTextToCanvas(canvas, contentData?.textValue || "Sample Text", {
            left: x / scaleFactor,
            top: y / scaleFactor,
            fontSize: styleConfig?.textConfig?.fontSize / scaleFactor || 20,
            fontFamily: styleConfig?.textConfig?.fontFamily || "Arial",
            fill: styleConfig?.textColor
              ? `rgb(${styleConfig.textColor.rgbValues.join(",")})`
              : "#000000",
            fontWeight: styleConfig?.textConfig?.fontStyle === "bold" ? "bold" : "normal",
          });

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

  // const loadDesign = useCallback(async () => {
  //   if (!canvas || loadAttempted) return;
  //   try {
  //     setIsLoading(true);
  //     setLoadAttempted(true);

  //     const response = await getUserDesignByID(designId);
  //     const design = response.data;
  //     console.log(design, "sdfsdf");

  //     if (design) {
  //       //update name
  //       setName(design?.name);

  //       //set the design ID just incase after getting the data
  //       setDesignId(designId);

  //       try {
  //         if (design.canvasData) {
  //           canvas.clear();
  //           if (design.width && design.height) {
  //             canvas.setDimensions({
  //               width: design.width,
  //               height: design.height,
  //             });
  //           }

  //           const canvasData =
  //             typeof design.canvasData === "string"
  //               ? JSON.parse(design.canvasData)
  //               : design.canvasData;

  //           const hasObjects =
  //             canvasData.objects && canvasData.objects.length > 0;

  //           if (canvasData.background) {
  //             canvas.backgroundColor = canvasData.background;
  //           } else {
  //             canvas.backgroundColor = "#ffffff";
  //           }

  //           if (!hasObjects) {
  //             canvas.renderAll();
  //             return true;
  //           }

  //           canvas
  //             .loadFromJSON(design.canvasData)
  //             .then((canvas) => canvas.requestRenderAll());
  //         } else {
  //           console.log("no canvas data");
  //           canvas.clear();
  //           canvas.setWidth(design.width);
  //           canvas.setHeight(design.height);
  //           canvas.backgroundColor = "#ffffff";
  //           canvas.renderAll();
  //         }
  //       } catch (e) {
  //         console.error(("Error loading canvas", e));
  //         setError("Error loading canvas");
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }

  //     console.log(response);
  //   } catch (e) {
  //     console.error("Failed to load design", e);
  //     setError("failed to load design");
  //     setIsLoading(false);
  //   }
  // }, [canvas, loadAttempted, setDesignId]);




  useEffect(() => {
    setTimeout(() => {
      loadDesign()
    }, 100)

    // if (!designId) {
    //   setTimeout(() => {
    //     console.log("No design ID found");
    //     canvas?.clear();

    //     // canvas?.height && canvas.setHeight(400);
    //     // canvas?.width && canvas.setWidth(700);
    //     // canvas.backgroundColor = "#ffffff"
    //     canvas.renderAll();
    //   }, 100)


    // }
  }, [canvas, designId, loadAttempted, router]);

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
      <Header />
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
