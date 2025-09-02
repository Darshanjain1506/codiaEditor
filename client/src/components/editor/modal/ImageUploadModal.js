import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, ImageIcon, Loader2 } from 'lucide-react';
import { uploadFileWithAuth } from '@/services/upload-service';
import axios from 'axios';

const ImageUploadModal = ({ isOpen, onClose, imageCodiaJson, setImageCodiaJson }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState(null);
  const [imageData, setImageData] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      throw new Error('Please upload a valid image file (JPEG, PNG, GIF, or WebP)');
    }

    if (file.size > maxSize) {
      throw new Error('File size must be less than 10MB');
    }

    return true;
  };

  const processImageFile = async (file) => {
    setIsProcessing(true);
    setError(null);

    try {
      validateFile(file);

      // Create preview
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setUploadProgress(20);
      // Simulate processing progress

      const result = await uploadFileWithAuth(file);
      console.log(result.data.url, "sdfsdfsdf");
      const imageUrl = result.data.url;
      setUploadProgress(40);

      // Call Codia API to convert image to design
      setUploadProgress(60);
      const response = await axios.post(
        'https://api.codia.ai/v1/open/image_to_design',
        { image_url: imageUrl },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CODIA_API_KEY}`,
          },
        }
      );

      setUploadProgress(80);


      // Convert image to canvas-ready format
      const imageData = response?.data
      // const imageData = {
      //   "code": 0,
      //   "message": "ok",
      //   "data": {
      //     "configuration": {
      //       "baseWidth": 1024,
      //       "measurementUnit": "px",
      //       "scalingFactor": 1
      //     },
      //     "visualElement": {
      //       "elementId": "root_0",
      //       "elementName": "Root",
      //       "elementType": "Body",
      //       "layoutConfig": {
      //         "positionMode": "Normal",
      //         "flexibleMode": "Absolute",
      //         "absoluteAttrs": {
      //           "align": [
      //             "LEFT",
      //             "TOP"
      //           ],
      //           "coord": [
      //             0,
      //             0
      //           ],
      //           "orginCoord": [
      //             0,
      //             0
      //           ]
      //         }
      //       },
      //       "styleConfig": {
      //         "widthSpec": {
      //           "sizing": "FILL",
      //           "value": 1024
      //         },
      //         "heightSpec": {
      //           "sizing": "FILL",
      //           "value": 1024
      //         },
      //         "backgroundSpec": {
      //           "backgroundColor": {
      //             "hex": null,
      //             "rgb": [
      //               0,
      //               0,
      //               0
      //             ]
      //           },
      //           "type": "COLOR"
      //         },
      //         "opacityLevel": 0,
      //         "overflowMode": [
      //           "scroll",
      //           "scroll"
      //         ]
      //       },
      //       "processingMeta": {
      //         "surfaceArea": 1048576,
      //         "detectionScore": 0,
      //         "textContainerized": false
      //       },
      //       "childElements": [
      //         {
      //           "elementId": "ImageView_0_0_1024_1024_1",
      //           "elementName": "Image",
      //           "elementType": "Image",
      //           "layoutConfig": {
      //             "positionMode": "Absolute",
      //             "absoluteAttrs": {
      //               "align": [
      //                 "LEFT",
      //                 "TOP"
      //               ],
      //               "coord": [
      //                 0,
      //                 0
      //               ],
      //               "orginCoord": [
      //                 0,
      //                 0
      //               ]
      //             }
      //           },
      //           "styleConfig": {
      //             "widthSpec": {
      //               "sizing": "FIXED",
      //               "value": 1024
      //             },
      //             "heightSpec": {
      //               "sizing": "FIXED",
      //               "value": 1024
      //             }
      //           },
      //           "processingMeta": {
      //             "surfaceArea": 1048576,
      //             "detectionScore": 0,
      //             "textContainerized": false
      //           },
      //           "contentData": {
      //             "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-01/ae5deca2-75af-4c8b-a457-cc1a48914005/out/20250901210910910947_0915749cc75a46f09a466fcd11d90306/20250901210916-image_ae5deca2-75af-4c8b-a457-cc1a48914005.png"
      //           }
      //         },
      //         {
      //           "elementId": "ViewGroup_0_339_1024_685_2",
      //           "elementName": "Groups",
      //           "elementType": "Layer",
      //           "layoutConfig": {
      //             "positionMode": "Absolute",
      //             "absoluteAttrs": {
      //               "align": [
      //                 "LEFT",
      //                 "TOP"
      //               ],
      //               "coord": [
      //                 0,
      //                 339
      //               ],
      //               "orginCoord": [
      //                 0,
      //                 339
      //               ]
      //             }
      //           },
      //           "styleConfig": {
      //             "widthSpec": {
      //               "sizing": "FIXED",
      //               "value": 1024
      //             },
      //             "heightSpec": {
      //               "sizing": "FIXED",
      //               "value": 685
      //             }
      //           },
      //           "processingMeta": {
      //             "surfaceArea": 701440,
      //             "detectionScore": 0,
      //             "textContainerized": false
      //           },
      //           "childElements": [
      //             {
      //               "elementId": "ViewGroup_0_891_1024_132_3",
      //               "elementName": "Groups",
      //               "elementType": "Layer",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     0,
      //                     552
      //                   ],
      //                   "orginCoord": [
      //                     0,
      //                     891
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 1024
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 132
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 135168,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "childElements": [
      //                 {
      //                   "elementId": "Background_0_891_1024_132_4",
      //                   "elementName": "Background",
      //                   "elementType": "Image",
      //                   "layoutConfig": {
      //                     "positionMode": "Absolute",
      //                     "absoluteAttrs": {
      //                       "align": [
      //                         "LEFT",
      //                         "TOP"
      //                       ],
      //                       "coord": [
      //                         0,
      //                         0
      //                       ],
      //                       "orginCoord": [
      //                         0,
      //                         891
      //                       ]
      //                     }
      //                   },
      //                   "styleConfig": {
      //                     "widthSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 1024
      //                     },
      //                     "heightSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 132
      //                     }
      //                   },
      //                   "processingMeta": {
      //                     "surfaceArea": 135168,
      //                     "detectionScore": 0,
      //                     "textContainerized": false
      //                   },
      //                   "contentData": {
      //                     "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-01/4089967e-4921-48c5-86eb-8cd5e4cae6fb/out/20250901210910910947_0915749cc75a46f09a466fcd11d90306/20250901210916-image_4089967e-4921-48c5-86eb-8cd5e4cae6fb.png"
      //                   }
      //                 },
      //                 {
      //                   "elementId": "TextView_818_967_164_29_5",
      //                   "elementName": "12-25 lakhs",
      //                   "elementType": "Text",
      //                   "layoutConfig": {
      //                     "positionMode": "Absolute",
      //                     "absoluteAttrs": {
      //                       "align": [
      //                         "LEFT",
      //                         "TOP"
      //                       ],
      //                       "coord": [
      //                         823,
      //                         76
      //                       ],
      //                       "orginCoord": [
      //                         823,
      //                         967
      //                       ]
      //                     }
      //                   },
      //                   "styleConfig": {
      //                     "widthSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 159
      //                     },
      //                     "heightSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 29
      //                     },
      //                     "textConfig": {
      //                       "fontFamily": "Inter",
      //                       "fontFamilyRec": "Inter",
      //                       "fontScoreRec": 0.9737410226371139,
      //                       "fontSize": 27,
      //                       "fontStyle": "bold",
      //                       "fontStyleRec": "Bold",
      //                       "textAlign": [
      //                         "LEFT",
      //                         "CENTER"
      //                       ]
      //                     },
      //                     "textColor": {
      //                       "rgbValues": [
      //                         249,
      //                         217,
      //                         218
      //                       ]
      //                     },
      //                     "opacityLevel": 255,
      //                     "rotationAngle": 0,
      //                     "textExtraction": {
      //                       "rows_text_position": [
      //                         [
      //                           {
      //                             "binary": null,
      //                             "binary_height": 26,
      //                             "index": 93,
      //                             "lang": "en",
      //                             "ocr_box": [
      //                               [
      //                                 818,
      //                                 967
      //                               ],
      //                               [
      //                                 982,
      //                                 967
      //                               ],
      //                               [
      //                                 982,
      //                                 996
      //                               ],
      //                               [
      //                                 818,
      //                                 996
      //                               ]
      //                             ],
      //                             "parent_index": null,
      //                             "rec_score": 0.9685409069061279,
      //                             "single_box": true,
      //                             "style": null,
      //                             "text": "12-25 lakhs",
      //                             "text_font_list": [
      //                               {
      //                                 "class_id": 1148,
      //                                 "label": "News Cycle-Bold",
      //                                 "probability": 0.5166612267494202
      //                               },
      //                               {
      //                                 "class_id": 123,
      //                                 "label": "Arial Narrow-Bold",
      //                                 "probability": 0.26349368691444397
      //                               },
      //                               {
      //                                 "class_id": 114,
      //                                 "label": "Archivo Narrow-Bold",
      //                                 "probability": 0.12489508837461472
      //                               },
      //                               {
      //                                 "class_id": 1712,
      //                                 "label": "Stick No Bills-Bold",
      //                                 "probability": 0.05331164225935936
      //                               },
      //                               {
      //                                 "class_id": 1630,
      //                                 "label": "Smooch Sans-Bold",
      //                                 "probability": 0.006593246478587389
      //                               },
      //                               {
      //                                 "class_id": 1459,
      //                                 "label": "Roboto-Bold",
      //                                 "probability": 0.004805571865290403
      //                               },
      //                               {
      //                                 "class_id": 1346,
      //                                 "label": "Pragati Narrow-Bold",
      //                                 "probability": 0.004621068015694618
      //                               },
      //                               {
      //                                 "class_id": 643,
      //                                 "label": "Freeman-Regular",
      //                                 "probability": 0.00323684373870492
      //                               },
      //                               {
      //                                 "class_id": 1652,
      //                                 "label": "Sofia Sans Semi Condensed-Bold",
      //                                 "probability": 0.0031402839813381433
      //                               },
      //                               {
      //                                 "class_id": 1328,
      //                                 "label": "Plus Jakarta Sans-Bold",
      //                                 "probability": 0.002812454476952553
      //                               }
      //                             ],
      //                             "text_is_container": false,
      //                             "under_line": false
      //                           }
      //                         ]
      //                       ],
      //                       "single_height": 27,
      //                       "text_box_height": 27,
      //                       "text_entity_list_index": 7,
      //                       "text_font_width": 164,
      //                       "text_lang": "en"
      //                     }
      //                   },
      //                   "processingMeta": {
      //                     "surfaceArea": 4756,
      //                     "detectionScore": 0,
      //                     "textContainerized": false
      //                   },
      //                   "contentData": {
      //                     "textValue": "12-25 lakhs"
      //                   }
      //                 },
      //                 {
      //                   "elementId": "TextView_808_915_177_50_6",
      //                   "elementName": "12-25-25",
      //                   "elementType": "Text",
      //                   "layoutConfig": {
      //                     "positionMode": "Absolute",
      //                     "absoluteAttrs": {
      //                       "align": [
      //                         "LEFT",
      //                         "TOP"
      //                       ],
      //                       "coord": [
      //                         810,
      //                         24
      //                       ],
      //                       "orginCoord": [
      //                         810,
      //                         915
      //                       ]
      //                     }
      //                   },
      //                   "styleConfig": {
      //                     "widthSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 175
      //                     },
      //                     "heightSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 50
      //                     },
      //                     "textConfig": {
      //                       "fontFamily": "Inter",
      //                       "fontFamilyRec": null,
      //                       "fontScoreRec": null,
      //                       "fontSize": 41,
      //                       "fontStyle": "bold",
      //                       "fontStyleRec": null,
      //                       "textAlign": [
      //                         "LEFT",
      //                         "CENTER"
      //                       ]
      //                     },
      //                     "textColor": {
      //                       "rgbValues": [
      //                         248,
      //                         223,
      //                         223
      //                       ]
      //                     },
      //                     "opacityLevel": 255,
      //                     "rotationAngle": 0,
      //                     "textExtraction": {
      //                       "rows_text_position": [
      //                         [
      //                           {
      //                             "binary": null,
      //                             "binary_height": 40,
      //                             "index": 90,
      //                             "lang": "en",
      //                             "ocr_box": [
      //                               [
      //                                 808,
      //                                 915
      //                               ],
      //                               [
      //                                 985,
      //                                 915
      //                               ],
      //                               [
      //                                 985,
      //                                 965
      //                               ],
      //                               [
      //                                 808,
      //                                 965
      //                               ]
      //                             ],
      //                             "parent_index": null,
      //                             "rec_score": 0.9997650384902954,
      //                             "single_box": true,
      //                             "style": null,
      //                             "text": "12-25-25",
      //                             "text_font_list": [
      //                               {
      //                                 "class_id": 643,
      //                                 "label": "Freeman-Regular",
      //                                 "probability": 0.44591018557548523
      //                               },
      //                               {
      //                                 "class_id": 1461,
      //                                 "label": "Roboto Condensed-Bold",
      //                                 "probability": 0.4065886437892914
      //                               },
      //                               {
      //                                 "class_id": 1346,
      //                                 "label": "Pragati Narrow-Bold",
      //                                 "probability": 0.07609601318836212
      //                               },
      //                               {
      //                                 "class_id": 1441,
      //                                 "label": "Reddit Sans Condensed-Bold",
      //                                 "probability": 0.025844678282737732
      //                               },
      //                               {
      //                                 "class_id": 208,
      //                                 "label": "Barlow Semi Condensed-Bold",
      //                                 "probability": 0.020000247284770012
      //                               },
      //                               {
      //                                 "class_id": 1275,
      //                                 "label": "Pathway Extreme-Bold",
      //                                 "probability": 0.005794223863631487
      //                               },
      //                               {
      //                                 "class_id": 1439,
      //                                 "label": "Reddit Sans-Bold",
      //                                 "probability": 0.0017960029654204845
      //                               },
      //                               {
      //                                 "class_id": 114,
      //                                 "label": "Archivo Narrow-Bold",
      //                                 "probability": 0.0017561411950737238
      //                               },
      //                               {
      //                                 "class_id": 1712,
      //                                 "label": "Stick No Bills-Bold",
      //                                 "probability": 0.0017348076216876507
      //                               },
      //                               {
      //                                 "class_id": 556,
      //                                 "label": "Epilogue-Bold",
      //                                 "probability": 0.0014717280864715576
      //                               }
      //                             ],
      //                             "text_is_container": false,
      //                             "under_line": false
      //                           }
      //                         ]
      //                       ],
      //                       "single_height": 41,
      //                       "text_box_height": 41,
      //                       "text_entity_list_index": 4,
      //                       "text_font_width": 177,
      //                       "text_lang": "en"
      //                     }
      //                   },
      //                   "processingMeta": {
      //                     "surfaceArea": 8850,
      //                     "detectionScore": 0,
      //                     "textContainerized": false
      //                   },
      //                   "contentData": {
      //                     "textValue": "12-25-25"
      //                   }
      //                 },
      //                 {
      //                   "elementId": "ImageView_775_920_30_47_7",
      //                   "elementName": "Image",
      //                   "elementType": "Image",
      //                   "layoutConfig": {
      //                     "positionMode": "Absolute",
      //                     "absoluteAttrs": {
      //                       "align": [
      //                         "LEFT",
      //                         "TOP"
      //                       ],
      //                       "coord": [
      //                         780,
      //                         35
      //                       ],
      //                       "orginCoord": [
      //                         780,
      //                         926
      //                       ]
      //                     }
      //                   },
      //                   "styleConfig": {
      //                     "widthSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 23
      //                     },
      //                     "heightSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 36
      //                     }
      //                   },
      //                   "processingMeta": {
      //                     "surfaceArea": 1410,
      //                     "detectionScore": 0,
      //                     "textContainerized": false
      //                   },
      //                   "contentData": {
      //                     "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-01/c4b7bb86-9bf1-4c4d-bd0e-ebcea81d4903/out/20250901210910910947_0915749cc75a46f09a466fcd11d90306/20250901210916-image_c4b7bb86-9bf1-4c4d-bd0e-ebcea81d4903.png"
      //                   }
      //                 },
      //                 {
      //                   "elementId": "TextView_30_921_657_86_8",
      //                   "elementName": "To make this wor",
      //                   "elementType": "Text",
      //                   "layoutConfig": {
      //                     "positionMode": "Absolute",
      //                     "absoluteAttrs": {
      //                       "align": [
      //                         "LEFT",
      //                         "TOP"
      //                       ],
      //                       "coord": [
      //                         36,
      //                         30
      //                       ],
      //                       "orginCoord": [
      //                         36,
      //                         921
      //                       ]
      //                     }
      //                   },
      //                   "styleConfig": {
      //                     "widthSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 651
      //                     },
      //                     "heightSpec": {
      //                       "sizing": "FIXED",
      //                       "value": 86
      //                     },
      //                     "textConfig": {
      //                       "fontFamily": "Inter",
      //                       "fontFamilyRec": "Inter",
      //                       "fontScoreRec": 0.9718738275114447,
      //                       "fontSize": 37,
      //                       "fontStyle": "semi_bold",
      //                       "fontStyleRec": "Bold",
      //                       "textAlign": [
      //                         "LEFT",
      //                         "CENTER"
      //                       ]
      //                     },
      //                     "textColor": {
      //                       "rgbValues": [
      //                         242,
      //                         201,
      //                         202
      //                       ]
      //                     },
      //                     "opacityLevel": 255,
      //                     "rotationAngle": 0,
      //                     "textExtraction": {
      //                       "rows_text_position": [
      //                         [
      //                           {
      //                             "binary": null,
      //                             "binary_height": 41,
      //                             "index": 78,
      //                             "lang": "en",
      //                             "ocr_box": [
      //                               [
      //                                 30,
      //                                 921
      //                               ],
      //                               [
      //                                 685,
      //                                 921
      //                               ],
      //                               [
      //                                 685,
      //                                 969
      //                               ],
      //                               [
      //                                 30,
      //                                 969
      //                               ]
      //                             ],
      //                             "parent_index": null,
      //                             "rec_score": 0.9973362684249878,
      //                             "single_box": true,
      //                             "style": null,
      //                             "text": "To make this world a fashionabeplace by",
      //                             "text_font_list": [
      //                               {
      //                                 "class_id": 1148,
      //                                 "label": "News Cycle-Bold",
      //                                 "probability": 0.477922648191452
      //                               },
      //                               {
      //                                 "class_id": 310,
      //                                 "label": "Cabin-Regular",
      //                                 "probability": 0.3129132390022278
      //                               },
      //                               {
      //                                 "class_id": 1077,
      //                                 "label": "Microsoft Sans Serif-Regular",
      //                                 "probability": 0.08055083453655243
      //                               },
      //                               {
      //                                 "class_id": 118,
      //                                 "label": "Archivo-Regular",
      //                                 "probability": 0.06300225108861923
      //                               },
      //                               {
      //                                 "class_id": 125,
      //                                 "label": "Arial Narrow-Regular",
      //                                 "probability": 0.020042752847075462
      //                               },
      //                               {
      //                                 "class_id": 1465,
      //                                 "label": "Roboto Flex-Regular",
      //                                 "probability": 0.00810907781124115
      //                               },
      //                               {
      //                                 "class_id": 1713,
      //                                 "label": "Stick No Bills-Regular",
      //                                 "probability": 0.0034183303359895945
      //                               },
      //                               {
      //                                 "class_id": 1149,
      //                                 "label": "News Cycle-Regular",
      //                                 "probability": 0.0023049330338835716
      //                               },
      //                               {
      //                                 "class_id": 126,
      //                                 "label": "Arial-Regular",
      //                                 "probability": 0.0018832571804523468
      //                               },
      //                               {
      //                                 "class_id": 802,
      //                                 "label": "Instrument Sans-Regular",
      //                                 "probability": 0.0017265034839510918
      //                               }
      //                             ],
      //                             "text_is_container": false,
      //                             "under_line": false
      //                           }
      //                         ],
      //                         [
      //                           {
      //                             "binary": null,
      //                             "binary_height": 37,
      //                             "index": 79,
      //                             "lang": "en",
      //                             "ocr_box": [
      //                               [
      //                                 31,
      //                                 960
      //                               ],
      //                               [
      //                                 449,
      //                                 960
      //                               ],
      //                               [
      //                                 449,
      //                                 1007
      //                               ],
      //                               [
      //                                 31,
      //                                 1007
      //                               ]
      //                             ],
      //                             "parent_index": null,
      //                             "rec_score": 0.9989235401153564,
      //                             "single_box": true,
      //                             "style": null,
      //                             "text": "making fashion affordable.",
      //                             "text_font_list": [
      //                               {
      //                                 "class_id": 1148,
      //                                 "label": "News Cycle-Bold",
      //                                 "probability": 0.785298228263855
      //                               },
      //                               {
      //                                 "class_id": 118,
      //                                 "label": "Archivo-Regular",
      //                                 "probability": 0.09306265413761139
      //                               },
      //                               {
      //                                 "class_id": 125,
      //                                 "label": "Arial Narrow-Regular",
      //                                 "probability": 0.01769403927028179
      //                               },
      //                               {
      //                                 "class_id": 1222,
      //                                 "label": "Oregano-Regular",
      //                                 "probability": 0.007870769128203392
      //                               },
      //                               {
      //                                 "class_id": 1370,
      //                                 "label": "Puritan-Regular",
      //                                 "probability": 0.0065463329665362835
      //                               },
      //                               {
      //                                 "class_id": 1713,
      //                                 "label": "Stick No Bills-Regular",
      //                                 "probability": 0.005906743463128805
      //                               },
      //                               {
      //                                 "class_id": 634,
      //                                 "label": "Fragment Mono-Regular",
      //                                 "probability": 0.005224049091339111
      //                               },
      //                               {
      //                                 "class_id": 802,
      //                                 "label": "Instrument Sans-Regular",
      //                                 "probability": 0.004340469371527433
      //                               },
      //                               {
      //                                 "class_id": 1789,
      //                                 "label": "Trocchi-Regular",
      //                                 "probability": 0.003933004569262266
      //                               },
      //                               {
      //                                 "class_id": 310,
      //                                 "label": "Cabin-Regular",
      //                                 "probability": 0.003390831872820854
      //                               }
      //                             ],
      //                             "text_is_container": false,
      //                             "under_line": false
      //                           }
      //                         ]
      //                       ],
      //                       "single_height": 37,
      //                       "text_box_height": 86,
      //                       "text_entity_list_index": 0,
      //                       "text_font_width": 655,
      //                       "text_lang": "en"
      //                     }
      //                   },
      //                   "processingMeta": {
      //                     "surfaceArea": 56502,
      //                     "detectionScore": 0,
      //                     "textContainerized": false
      //                   },
      //                   "contentData": {
      //                     "textValue": "To make this world a fashionabeplace by\nmaking fashion affordable."
      //                   }
      //                 }
      //               ],
      //               "contentData": {
      //                 "imageSource": ""
      //               }
      //             },
      //             {
      //               "elementId": "ImageView_32_338_991_553_9",
      //               "elementName": "Image",
      //               "elementType": "Image",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     32,
      //                     -1
      //                   ],
      //                   "orginCoord": [
      //                     32,
      //                     338
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 991
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 553
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 548023,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "contentData": {
      //                 "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-01/9fcca590-9390-4a34-9529-6c6fe9a43ee1/out/20250901210910910947_0915749cc75a46f09a466fcd11d90306/20250901210916-image_9fcca590-9390-4a34-9529-6c6fe9a43ee1.png"
      //               }
      //             }
      //           ],
      //           "contentData": {
      //             "imageSource": ""
      //           }
      //         },
      //         {
      //           "elementId": "ViewGroup_0_0_1024_338_10",
      //           "elementName": "Groups",
      //           "elementType": "Layer",
      //           "layoutConfig": {
      //             "positionMode": "Absolute",
      //             "absoluteAttrs": {
      //               "align": [
      //                 "LEFT",
      //                 "TOP"
      //               ],
      //               "coord": [
      //                 0,
      //                 0
      //               ],
      //               "orginCoord": [
      //                 0,
      //                 0
      //               ]
      //             }
      //           },
      //           "styleConfig": {
      //             "widthSpec": {
      //               "sizing": "FIXED",
      //               "value": 1024
      //             },
      //             "heightSpec": {
      //               "sizing": "FIXED",
      //               "value": 338
      //             }
      //           },
      //           "processingMeta": {
      //             "surfaceArea": 346112,
      //             "detectionScore": 0,
      //             "textContainerized": false
      //           },
      //           "childElements": [
      //             {
      //               "elementId": "TextView_428_275_284_33_11",
      //               "elementName": "by trained profe",
      //               "elementType": "Text",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     434,
      //                     275
      //                   ],
      //                   "orginCoord": [
      //                     434,
      //                     275
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 278
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 33
      //                 },
      //                 "textConfig": {
      //                   "fontFamily": "Inter",
      //                   "fontFamilyRec": "Inter",
      //                   "fontScoreRec": 0.9995450506066845,
      //                   "fontSize": 29,
      //                   "fontStyle": "regular",
      //                   "fontStyleRec": "Regular",
      //                   "textAlign": [
      //                     "LEFT",
      //                     "CENTER"
      //                   ]
      //                 },
      //                 "textColor": {
      //                   "rgbValues": [
      //                     58,
      //                     58,
      //                     58
      //                   ]
      //                 },
      //                 "opacityLevel": 255,
      //                 "rotationAngle": 0,
      //                 "textExtraction": {
      //                   "rows_text_position": [
      //                     [
      //                       {
      //                         "binary": null,
      //                         "binary_height": 28,
      //                         "index": 89,
      //                         "lang": "en",
      //                         "ocr_box": [
      //                           [
      //                             428,
      //                             275
      //                           ],
      //                           [
      //                             712,
      //                             275
      //                           ],
      //                           [
      //                             712,
      //                             308
      //                           ],
      //                           [
      //                             428,
      //                             308
      //                           ]
      //                         ],
      //                         "parent_index": null,
      //                         "rec_score": 0.9858381152153015,
      //                         "single_box": true,
      //                         "style": null,
      //                         "text": "by trained professionals",
      //                         "text_font_list": [
      //                           {
      //                             "class_id": 802,
      //                             "label": "Instrument Sans-Regular",
      //                             "probability": 0.6915324926376343
      //                           },
      //                           {
      //                             "class_id": 1149,
      //                             "label": "News Cycle-Regular",
      //                             "probability": 0.29079684615135193
      //                           },
      //                           {
      //                             "class_id": 125,
      //                             "label": "Arial Narrow-Regular",
      //                             "probability": 0.016109799966216087
      //                           },
      //                           {
      //                             "class_id": 1713,
      //                             "label": "Stick No Bills-Regular",
      //                             "probability": 0.0006005952600389719
      //                           },
      //                           {
      //                             "class_id": 552,
      //                             "label": "Englebert-Regular",
      //                             "probability": 0.0003236040356568992
      //                           },
      //                           {
      //                             "class_id": 667,
      //                             "label": "Geneva-Regular",
      //                             "probability": 0.0001228200417244807
      //                           },
      //                           {
      //                             "class_id": 693,
      //                             "label": "Glass Antiqua-Regular",
      //                             "probability": 0.000059398345911176875
      //                           },
      //                           {
      //                             "class_id": 559,
      //                             "label": "Epilogue-Regular",
      //                             "probability": 0.000039078626286936924
      //                           },
      //                           {
      //                             "class_id": 1442,
      //                             "label": "Reddit Sans Condensed-Regular",
      //                             "probability": 0.00003213962190784514
      //                           },
      //                           {
      //                             "class_id": 118,
      //                             "label": "Archivo-Regular",
      //                             "probability": 0.000019813887774944305
      //                           }
      //                         ],
      //                         "text_is_container": false,
      //                         "under_line": false
      //                       }
      //                     ]
      //                   ],
      //                   "single_height": 29,
      //                   "text_box_height": 29,
      //                   "text_entity_list_index": 3,
      //                   "text_font_width": 284,
      //                   "text_lang": "en"
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 9372,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "contentData": {
      //                 "textValue": "by trained professionals"
      //               }
      //             },
      //             {
      //               "elementId": "TextView_333_203_605_72_12",
      //               "elementName": "Efficient, scien",
      //               "elementType": "Text",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     338,
      //                     203
      //                   ],
      //                   "orginCoord": [
      //                     338,
      //                     203
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 600
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 72
      //                 },
      //                 "textConfig": {
      //                   "fontFamily": "Inter",
      //                   "fontFamilyRec": "Inter",
      //                   "fontScoreRec": 0.9998689889907837,
      //                   "fontSize": 39,
      //                   "fontStyle": "semi_bold",
      //                   "fontStyleRec": "Bold",
      //                   "textAlign": [
      //                     "LEFT",
      //                     "CENTER"
      //                   ]
      //                 },
      //                 "textColor": {
      //                   "rgbValues": [
      //                     47,
      //                     47,
      //                     47
      //                   ]
      //                 },
      //                 "opacityLevel": 255,
      //                 "rotationAngle": 0,
      //                 "textExtraction": {
      //                   "rows_text_position": [
      //                     [
      //                       {
      //                         "binary": null,
      //                         "binary_height": 33,
      //                         "index": 81,
      //                         "lang": "en",
      //                         "ocr_box": [
      //                           [
      //                             334,
      //                             203
      //                           ],
      //                           [
      //                             934,
      //                             203
      //                           ],
      //                           [
      //                             934,
      //                             243
      //                           ],
      //                           [
      //                             334,
      //                             243
      //                           ]
      //                         ],
      //                         "parent_index": null,
      //                         "rec_score": 0.9887888431549072,
      //                         "single_box": true,
      //                         "style": null,
      //                         "text": "Efficient, scientifice infvored, confssiintiialy",
      //                         "text_font_list": [
      //                           {
      //                             "class_id": 1148,
      //                             "label": "News Cycle-Bold",
      //                             "probability": 0.9997479319572449
      //                           },
      //                           {
      //                             "class_id": 123,
      //                             "label": "Arial Narrow-Bold",
      //                             "probability": 0.0000912483228603378
      //                           },
      //                           {
      //                             "class_id": 1346,
      //                             "label": "Pragati Narrow-Bold",
      //                             "probability": 0.00003993661084678024
      //                           },
      //                           {
      //                             "class_id": 1630,
      //                             "label": "Smooch Sans-Bold",
      //                             "probability": 0.000018381942936684936
      //                           },
      //                           {
      //                             "class_id": 256,
      //                             "label": "Big Shoulders Text-Bold",
      //                             "probability": 0.00001812825576053001
      //                           },
      //                           {
      //                             "class_id": 114,
      //                             "label": "Archivo Narrow-Bold",
      //                             "probability": 0.000015823557987459935
      //                           },
      //                           {
      //                             "class_id": 124,
      //                             "label": "Arial Narrow-Bold Italic",
      //                             "probability": 0.000009858221346803475
      //                           },
      //                           {
      //                             "class_id": 927,
      //                             "label": "Lato-Bold Italic",
      //                             "probability": 0.000005010828772356035
      //                           },
      //                           {
      //                             "class_id": 1712,
      //                             "label": "Stick No Bills-Bold",
      //                             "probability": 0.000004289186563255498
      //                           },
      //                           {
      //                             "class_id": 58,
      //                             "label": "Alumni Sans-Bold",
      //                             "probability": 0.00000363559183824691
      //                           }
      //                         ],
      //                         "text_is_container": false,
      //                         "under_line": false
      //                       }
      //                     ],
      //                     [
      //                       {
      //                         "binary": null,
      //                         "binary_height": 39,
      //                         "index": 82,
      //                         "lang": "en",
      //                         "ocr_box": [
      //                           [
      //                             333,
      //                             236
      //                           ],
      //                           [
      //                             746,
      //                             236
      //                           ],
      //                           [
      //                             746,
      //                             275
      //                           ],
      //                           [
      //                             333,
      //                             275
      //                           ]
      //                         ],
      //                         "parent_index": null,
      //                         "rec_score": 0.9526295065879822,
      //                         "single_box": true,
      //                         "style": null,
      //                         "text": "awopsod budgee, HairXpresso",
      //                         "text_font_list": [
      //                           {
      //                             "class_id": 1148,
      //                             "label": "News Cycle-Bold",
      //                             "probability": 0.9998689889907837
      //                           },
      //                           {
      //                             "class_id": 123,
      //                             "label": "Arial Narrow-Bold",
      //                             "probability": 0.00009342762496089563
      //                           },
      //                           {
      //                             "class_id": 1347,
      //                             "label": "Pragati Narrow-Regular",
      //                             "probability": 0.000007004365670582047
      //                           },
      //                           {
      //                             "class_id": 1630,
      //                             "label": "Smooch Sans-Bold",
      //                             "probability": 0.0000032782093057903694
      //                           },
      //                           {
      //                             "class_id": 1712,
      //                             "label": "Stick No Bills-Bold",
      //                             "probability": 0.000001515714984634542
      //                           },
      //                           {
      //                             "class_id": 273,
      //                             "label": "Black And White Picture-Regular",
      //                             "probability": 0.0000012245965308466111
      //                           },
      //                           {
      //                             "class_id": 1337,
      //                             "label": "Pontano Sans-Bold",
      //                             "probability": 0.0000011571072491278755
      //                           },
      //                           {
      //                             "class_id": 468,
      //                             "label": "DIN Alternate-Bold",
      //                             "probability": 0.0000010331962130294414
      //                           },
      //                           {
      //                             "class_id": 256,
      //                             "label": "Big Shoulders Text-Bold",
      //                             "probability": 8.650486620354059e-7
      //                           },
      //                           {
      //                             "class_id": 125,
      //                             "label": "Arial Narrow-Regular",
      //                             "probability": 7.802634058862168e-7
      //                           }
      //                         ],
      //                         "text_is_container": false,
      //                         "under_line": false
      //                       }
      //                     ]
      //                   ],
      //                   "single_height": 39,
      //                   "text_box_height": 72,
      //                   "text_entity_list_index": 2,
      //                   "text_font_width": 600,
      //                   "text_lang": "en"
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 43560,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "contentData": {
      //                 "textValue": "Efficient, scientifice infvored, confssiintiialy\nawopsod budgee, HairXpresso"
      //               }
      //             },
      //             {
      //               "elementId": "TextView_170_131_768_69_13",
      //               "elementName": "AF.PRECISION TEC",
      //               "elementType": "Text",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     176,
      //                     131
      //                   ],
      //                   "orginCoord": [
      //                     176,
      //                     131
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 762
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 69
      //                 },
      //                 "textConfig": {
      //                   "fontFamily": "Inter",
      //                   "fontFamilyRec": "Inter",
      //                   "fontScoreRec": 0.835802367888391,
      //                   "fontSize": 62,
      //                   "fontStyle": "bold",
      //                   "fontStyleRec": "Bold",
      //                   "textAlign": [
      //                     "LEFT",
      //                     "CENTER"
      //                   ]
      //                 },
      //                 "textColor": {
      //                   "rgbValues": [
      //                     206,
      //                     74,
      //                     74
      //                   ]
      //                 },
      //                 "opacityLevel": 255,
      //                 "rotationAngle": 0,
      //                 "textExtraction": {
      //                   "rows_text_position": [
      //                     [
      //                       {
      //                         "binary": null,
      //                         "binary_height": 61,
      //                         "index": 88,
      //                         "lang": "en",
      //                         "ocr_box": [
      //                           [
      //                             170,
      //                             131
      //                           ],
      //                           [
      //                             938,
      //                             131
      //                           ],
      //                           [
      //                             938,
      //                             200
      //                           ],
      //                           [
      //                             170,
      //                             200
      //                           ]
      //                         ],
      //                         "parent_index": null,
      //                         "rec_score": 0.9661897420883179,
      //                         "single_box": true,
      //                         "style": null,
      //                         "text": "AF.PRECISION TECHINPURISS",
      //                         "text_font_list": [
      //                           {
      //                             "class_id": 1437,
      //                             "label": "Reddit Mono-Bold",
      //                             "probability": 0.6701697111129761
      //                           },
      //                           {
      //                             "class_id": 307,
      //                             "label": "Cabin Condensed-Bold",
      //                             "probability": 0.08408958464860916
      //                           },
      //                           {
      //                             "class_id": 1253,
      //                             "label": "PT Sans Narrow-Bold",
      //                             "probability": 0.04564221203327179
      //                           },
      //                           {
      //                             "class_id": 643,
      //                             "label": "Freeman-Regular",
      //                             "probability": 0.04248398542404175
      //                           },
      //                           {
      //                             "class_id": 58,
      //                             "label": "Alumni Sans-Bold",
      //                             "probability": 0.031671203672885895
      //                           },
      //                           {
      //                             "class_id": 542,
      //                             "label": "Encode Sans Condensed-Bold",
      //                             "probability": 0.01937948539853096
      //                           },
      //                           {
      //                             "class_id": 1642,
      //                             "label": "Sofia Sans Condensed-Bold",
      //                             "probability": 0.017764920368790627
      //                           },
      //                           {
      //                             "class_id": 1630,
      //                             "label": "Smooch Sans-Bold",
      //                             "probability": 0.013577990233898163
      //                           },
      //                           {
      //                             "class_id": 1712,
      //                             "label": "Stick No Bills-Bold",
      //                             "probability": 0.012592554092407227
      //                           },
      //                           {
      //                             "class_id": 1461,
      //                             "label": "Roboto Condensed-Bold",
      //                             "probability": 0.003928820602595806
      //                           }
      //                         ],
      //                         "text_is_container": false,
      //                         "under_line": false
      //                       }
      //                     ]
      //                   ],
      //                   "single_height": 62,
      //                   "text_box_height": 62,
      //                   "text_entity_list_index": 1,
      //                   "text_font_width": 768,
      //                   "text_lang": "en"
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 52992,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "contentData": {
      //                 "textValue": "AF.PRECISION TECHINPURISS"
      //               }
      //             },
      //             {
      //               "elementId": "TextView_376_45_164_47_14",
      //               "elementName": "JAWED",
      //               "elementType": "Text",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     381,
      //                     45
      //                   ],
      //                   "orginCoord": [
      //                     381,
      //                     45
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 159
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 47
      //                 },
      //                 "textConfig": {
      //                   "fontFamily": "Inter",
      //                   "fontFamilyRec": "Aclonica",
      //                   "fontScoreRec": 0.9748409986495972,
      //                   "fontSize": 35,
      //                   "fontStyle": "bold",
      //                   "fontStyleRec": "Regular",
      //                   "textAlign": [
      //                     "LEFT",
      //                     "CENTER"
      //                   ]
      //                 },
      //                 "textColor": {
      //                   "rgbValues": [
      //                     48,
      //                     48,
      //                     48
      //                   ]
      //                 },
      //                 "opacityLevel": 255,
      //                 "rotationAngle": 0,
      //                 "textExtraction": {
      //                   "rows_text_position": [
      //                     [
      //                       {
      //                         "binary": null,
      //                         "binary_height": 35,
      //                         "index": 91,
      //                         "lang": "en",
      //                         "ocr_box": [
      //                           [
      //                             376,
      //                             45
      //                           ],
      //                           [
      //                             540,
      //                             45
      //                           ],
      //                           [
      //                             540,
      //                             92
      //                           ],
      //                           [
      //                             376,
      //                             92
      //                           ]
      //                         ],
      //                         "parent_index": null,
      //                         "rec_score": 0.9998215436935425,
      //                         "single_box": true,
      //                         "style": null,
      //                         "text": "JAWED",
      //                         "text_font_list": [
      //                           {
      //                             "class_id": 6,
      //                             "label": "Aclonica-Regular",
      //                             "probability": 0.9748409986495972
      //                           },
      //                           {
      //                             "class_id": 968,
      //                             "label": "Libre Franklin-Bold",
      //                             "probability": 0.011447349563241005
      //                           },
      //                           {
      //                             "class_id": 153,
      //                             "label": "Asul-Bold",
      //                             "probability": 0.0023553092032670975
      //                           },
      //                           {
      //                             "class_id": 1489,
      //                             "label": "Rosario-Bold",
      //                             "probability": 0.0018810621695593
      //                           },
      //                           {
      //                             "class_id": 1900,
      //                             "label": "Young Serif-Regular",
      //                             "probability": 0.001134658814407885
      //                           },
      //                           {
      //                             "class_id": 353,
      //                             "label": "Caudex-Bold",
      //                             "probability": 0.0009780232794582844
      //                           },
      //                           {
      //                             "class_id": 1778,
      //                             "label": "Trade Winds-Regular",
      //                             "probability": 0.0008550017955712974
      //                           },
      //                           {
      //                             "class_id": 1481,
      //                             "label": "RocknRoll One-Regular",
      //                             "probability": 0.0008265074575319886
      //                           },
      //                           {
      //                             "class_id": 494,
      //                             "label": "Della Respira-Regular",
      //                             "probability": 0.0006074923439882696
      //                           },
      //                           {
      //                             "class_id": 373,
      //                             "label": "Cherry Cream Soda-Regular",
      //                             "probability": 0.0005879684467799962
      //                           }
      //                         ],
      //                         "text_is_container": false,
      //                         "under_line": false
      //                       }
      //                     ]
      //                   ],
      //                   "single_height": 35,
      //                   "text_box_height": 35,
      //                   "text_entity_list_index": 5,
      //                   "text_font_width": 164,
      //                   "text_lang": "en"
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 7708,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "contentData": {
      //                 "textValue": "JAWED"
      //               }
      //             },
      //             {
      //               "elementId": "TextView_551_45_142_47_15",
      //               "elementName": "HABIB",
      //               "elementType": "Text",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     551,
      //                     45
      //                   ],
      //                   "orginCoord": [
      //                     551,
      //                     45
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 142
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 47
      //                 },
      //                 "textConfig": {
      //                   "fontFamily": "Inter",
      //                   "fontFamilyRec": "Aclonica",
      //                   "fontScoreRec": 0.936416506767273,
      //                   "fontSize": 35,
      //                   "fontStyle": "bold",
      //                   "fontStyleRec": "Regular",
      //                   "textAlign": [
      //                     "LEFT",
      //                     "CENTER"
      //                   ]
      //                 },
      //                 "textColor": {
      //                   "rgbValues": [
      //                     48,
      //                     48,
      //                     47
      //                   ]
      //                 },
      //                 "opacityLevel": 255,
      //                 "rotationAngle": 0,
      //                 "textExtraction": {
      //                   "rows_text_position": [
      //                     [
      //                       {
      //                         "binary": null,
      //                         "binary_height": 33,
      //                         "index": 92,
      //                         "lang": "en",
      //                         "ocr_box": [
      //                           [
      //                             551,
      //                             45
      //                           ],
      //                           [
      //                             693,
      //                             45
      //                           ],
      //                           [
      //                             693,
      //                             92
      //                           ],
      //                           [
      //                             551,
      //                             92
      //                           ]
      //                         ],
      //                         "parent_index": null,
      //                         "rec_score": 0.9991244077682495,
      //                         "single_box": true,
      //                         "style": null,
      //                         "text": "HABIB",
      //                         "text_font_list": [
      //                           {
      //                             "class_id": 6,
      //                             "label": "Aclonica-Regular",
      //                             "probability": 0.936416506767273
      //                           },
      //                           {
      //                             "class_id": 968,
      //                             "label": "Libre Franklin-Bold",
      //                             "probability": 0.03926490992307663
      //                           },
      //                           {
      //                             "class_id": 1900,
      //                             "label": "Young Serif-Regular",
      //                             "probability": 0.01359862182289362
      //                           },
      //                           {
      //                             "class_id": 1489,
      //                             "label": "Rosario-Bold",
      //                             "probability": 0.002194046974182129
      //                           },
      //                           {
      //                             "class_id": 153,
      //                             "label": "Asul-Bold",
      //                             "probability": 0.0017698510782793164
      //                           },
      //                           {
      //                             "class_id": 1150,
      //                             "label": "Newsreader-Bold",
      //                             "probability": 0.0007461474160663784
      //                           },
      //                           {
      //                             "class_id": 238,
      //                             "label": "Besley-Bold",
      //                             "probability": 0.0006969991372898221
      //                           },
      //                           {
      //                             "class_id": 494,
      //                             "label": "Della Respira-Regular",
      //                             "probability": 0.0004640657571144402
      //                           },
      //                           {
      //                             "class_id": 799,
      //                             "label": "Instrument Sans-Bold",
      //                             "probability": 0.0003353698120918125
      //                           },
      //                           {
      //                             "class_id": 1314,
      //                             "label": "Play-Bold",
      //                             "probability": 0.0003031559463124722
      //                           }
      //                         ],
      //                         "text_is_container": false,
      //                         "under_line": false
      //                       }
      //                     ]
      //                   ],
      //                   "single_height": 35,
      //                   "text_box_height": 35,
      //                   "text_entity_list_index": 6,
      //                   "text_font_width": 142,
      //                   "text_lang": "en"
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 6674,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "contentData": {
      //                 "textValue": "HABIB"
      //               }
      //             },
      //             {
      //               "elementId": "ImageView_537_47_15_19_16",
      //               "elementName": "Image",
      //               "elementType": "Image",
      //               "layoutConfig": {
      //                 "positionMode": "Absolute",
      //                 "absoluteAttrs": {
      //                   "align": [
      //                     "LEFT",
      //                     "TOP"
      //                   ],
      //                   "coord": [
      //                     538,
      //                     50
      //                   ],
      //                   "orginCoord": [
      //                     538,
      //                     50
      //                   ]
      //                 }
      //               },
      //               "styleConfig": {
      //                 "widthSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 14
      //                 },
      //                 "heightSpec": {
      //                   "sizing": "FIXED",
      //                   "value": 15
      //                 }
      //               },
      //               "processingMeta": {
      //                 "surfaceArea": 285,
      //                 "detectionScore": 0,
      //                 "textContainerized": false
      //               },
      //               "contentData": {
      //                 "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-01/bfce0666-deca-471f-8c73-6fff02b68625/out/20250901210910910947_0915749cc75a46f09a466fcd11d90306/20250901210916-image_bfce0666-deca-471f-8c73-6fff02b68625.png"
      //               }
      //             }
      //           ],
      //           "contentData": {
      //             "imageSource": ""
      //           }
      //         }
      //       ]
      //     }
      //   }
      // }
      setUploadProgress(100);
      return imageData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };


  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await handleFileUpload(files[0]);
    }
  }, []);

  const handleFileUpload = async (file) => {
    try {
      const data = await processImageFile(file);
      setImageData(data);

    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const handleFileInput = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      await handleFileUpload(files[0]);
    }
  };

  const handleSubmit = async () => {

    try {
      setIsProcessing(true);
      setImageCodiaJson(imageData);
      onClose();
      resetModal();

    } catch (err) {
      setError('Failed to add image to canvas', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const resetModal = () => {
    setPreviewImage(null);
    setUploadProgress(0);
    setIsProcessing(false);
    setError(null);
    setDragActive(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Upload Image</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            disabled={isProcessing}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!previewImage ? (
            /* Upload Area */
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${dragActive
                ? 'border-green-500 bg-green-50'
                : 'border-gray-300 hover:border-gray-400'
                }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Upload size={32} className="text-gray-400" />
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Drop your image here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    or click to browse files
                  </p>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                    disabled={isProcessing}
                  >
                    Choose File
                  </button>
                </div>

                <div className="text-sm text-gray-500">
                  Supported formats: JPEG, PNG, GIF, WebP (max 10MB)
                </div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
          ) : (
            /* Preview Area */
            <div className="space-y-6">
              <div className="relative bg-gray-50 rounded-lg p-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="max-w-full max-h-80 mx-auto rounded-lg shadow-sm"
                />

                <button
                  onClick={() => {
                    setPreviewImage(null);
                    setUploadProgress(0);
                  }}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full transition-colors"
                  disabled={isProcessing}
                >
                  <X size={16} />
                </button>
              </div>

              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Processing image...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <X size={12} className="text-white" />
                </div>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {previewImage && (
          <div className="flex items-center justify-end space-x-3 p-6 border-t bg-gray-50">
            <button
              onClick={handleClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isProcessing || !previewImage}
              className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Adding to Canvas...</span>
                </>
              ) : (
                <>
                  <ImageIcon size={16} />
                  <span>Add to Canvas</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploadModal;