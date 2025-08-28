"use client";

import { useParams, useRouter } from "next/navigation";
import Canvas from "./canvas";
import Header from "./header";
import Sidebar from "./sidebar";
import { useCallback, useEffect, useState } from "react";
import { useEditorStore } from "@/store";
import { getUserDesignByID } from "@/services/design-service";
import Properties from "./properties";
import { addImageToCanvas, addTextToCanvas } from "@/fabric/fabric-utils";
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

      canvas.setHeight(height);
      canvas.setWidth(width);
      canvas.renderAll();
      // 2. Set background color
      const bgColor = visualElement?.styleConfig?.backgroundSpec?.backgroundColor;
      const hex = rgbToHex(...bgColor.rgb);
      canvas.backgroundColor = hex;
      // 3. Iterate through elements
      for (const element of visualElement.childElements) {
        const { elementType, layoutConfig, styleConfig, contentData } = element;
        const [x, y] = layoutConfig?.absoluteAttrs?.coord || [0, 0];

        if (elementType === "Image") {
          await new Promise((resolve) => {

            addImageToCanvas(canvas, contentData.imageSource).then(() => resolve());

          });
        }

        if (elementType === "Text") {
          addTextToCanvas(canvas, contentData.textValue || "Sample Text", {
            left: x,
            top: y,
            fontSize: styleConfig?.textConfig?.fontSize || 20,
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


  useEffect(() => {
    setTimeout(() => {
      loadDesign()
    }, 500)

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
