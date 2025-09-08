import { useEditorStore } from "@/store";
import React, { useEffect, useState } from "react";
import { Check, Download, Loader2 } from "lucide-react";
import ExportModal from "../export";
import { exportAsJson, exportAsPng } from "@/services/export-service";
import { Button } from "@/components/ui/button";

const DesignSavingComponent = () => {
    const { saveStatus, canvas } = useEditorStore();
    const [visible, setVisible] = useState(false);
    const [isExporting, setIsExporting] = useState(false)


    // control visibility
    useEffect(() => {
        if (saveStatus === "Saving..." || saveStatus === "Saved...") {
            setVisible(true);
        }

    }, [saveStatus]);

    const handleExport = async () => {
        if (!canvas) return;
        setIsExporting(true);

        try {
            let successFlag = false;
            successFlag = exportAsPng(canvas, "PNG FileName");




            if (successFlag) {
                setTimeout(() => {
                    onClose();
                }, 500);
            }
        } catch (e) {
            throw new Error("Export failed");
        } finally {
            setIsExporting(false);
        }
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center space-y-6">
                {/* Spinner while saving */}
                {saveStatus === "Saving..." && (
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-green-100 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-green-500 border-r-green-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                )}

                {/* Success check when saved */}
                {saveStatus === "Saved..." && (
                    <div className="relative">
                        <div className="w-16 h-16 border-8 border-green-300 rounded-full flex items-center justify-center">
                            <Check className="w-8 h-8 text-green-500 animate-scale-in" />
                        </div>
                    </div>
                )}

                {/* Text */}
                <div className="text-center">
                    {saveStatus === "Saving..." && (
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            Saving Design
                        </h2>
                    )}
                    {saveStatus === "Saved..." && (
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Design Saved
                            </h2>
                            <div>
                                <Button
                                    onClick={handleExport}
                                    disabled={isExporting}
                                    className="min-w-[120px] bg-green-700 text-white"
                                    variant="default"
                                >
                                    {isExporting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4" />
                                            Exporting...
                                        </>
                                    ) : (
                                        <>
                                            <Download className="mr-2 h-4 w-4" />
                                            Export Png
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Animated dots only while saving */}
                    {saveStatus === "Saving..." && (
                        <div className="flex items-center justify-center space-x-1">
                            <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0s" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                            ></div>
                            <div
                                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.4s" }}
                            ></div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default DesignSavingComponent;
