import { fetchWithAuth } from "./base-service";

export async function getUserDesigns() {
  return fetchWithAuth("/v1/designs");
}

export async function getUserDesignByID(designId) {
  return {
    data: {
      "code": 0,
      "message": "ok",
      "data": {
        "configuration": {
          "baseWidth": 1024,
          "measurementUnit": "px",
          "scalingFactor": 1
        },
        "visualElement": {
          "elementId": "root_0",
          "elementName": "Root",
          "elementType": "Body",
          "layoutConfig": {
            "positionMode": "Normal",
            "flexibleMode": "Absolute",
            "absoluteAttrs": {
              "align": [
                "LEFT",
                "TOP"
              ],
              "coord": [
                0,
                0
              ],
              "orginCoord": [
                0,
                0
              ]
            }
          },
          "styleConfig": {
            "widthSpec": {
              "sizing": "FILL",
              "value": 1024
            },
            "heightSpec": {
              "sizing": "FILL",
              "value": 1024
            },
            "backgroundSpec": {
              "backgroundColor": {
                "hex": null,
                "rgb": [
                  220, 20, 60
                ]
              },
              "type": "COLOR"
            },
            "opacityLevel": 0,
            "overflowMode": [
              "scroll",
              "scroll"
            ]
          },
          "processingMeta": {
            "surfaceArea": 1048576,
            "detectionScore": 0,
            "textContainerized": false
          },
          "childElements": [
            {
              "elementId": "ImageView_0_0_1024_1024_1",
              "elementName": "Image",
              "elementType": "Image",
              "layoutConfig": {
                "positionMode": "Absolute",
                "absoluteAttrs": {
                  "align": [
                    "LEFT",
                    "TOP"
                  ],
                  "coord": [
                    0,
                    0
                  ],
                  "orginCoord": [
                    0,
                    0
                  ]
                }
              },
              "styleConfig": {
                "widthSpec": {
                  "sizing": "FIXED",
                  "value": 1024
                },
                "heightSpec": {
                  "sizing": "FIXED",
                  "value": 1024
                }
              },
              "processingMeta": {
                "surfaceArea": 1048576,
                "detectionScore": 0,
                "textContainerized": false
              },
              "contentData": {
                "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-08-21/c907ac33-8817-4959-a47a-23ef272473a7/out/20250821223906470260_07b4ee8aa7a44576b4c966873b5afff8/20250821223911-image_c907ac33-8817-4959-a47a-23ef272473a7.png"
              }
            },
            {
              "elementId": "TextView_424_960_173_30_2",
              "elementName": "NAIL D.A.T.E",
              "elementType": "Text",
              "layoutConfig": {
                "positionMode": "Absolute",
                "absoluteAttrs": {
                  "align": [
                    "LEFT",
                    "TOP"
                  ],
                  "coord": [
                    430,
                    960
                  ],
                  "orginCoord": [
                    430,
                    960
                  ]
                }
              },
              "styleConfig": {
                "widthSpec": {
                  "sizing": "FIXED",
                  "value": 167
                },
                "heightSpec": {
                  "sizing": "FIXED",
                  "value": 30
                },
                "textConfig": {
                  "fontFamily": "Inter",
                  "fontFamilyRec": "Inter",
                  "fontScoreRec": 0.9887403007596731,
                  "fontSize": 20,
                  "fontStyle": "regular",
                  "fontStyleRec": "Regular",
                  "textAlign": [
                    "LEFT",
                    "CENTER"
                  ]
                },
                "textColor": {
                  "rgbValues": [
                    75,
                    58,
                    55
                  ]
                },
                "opacityLevel": 255,
                "rotationAngle": 0,
                "textExtraction": {
                  "rows_text_position": [
                    [
                      {
                        "binary": null,
                        "binary_height": 19,
                        "index": 40,
                        "lang": "en",
                        "ocr_box": [
                          [
                            424,
                            960
                          ],
                          [
                            597,
                            960
                          ],
                          [
                            597,
                            990
                          ],
                          [
                            424,
                            990
                          ]
                        ],
                        "parent_index": null,
                        "rec_score": 0.9692502021789551,
                        "single_box": true,
                        "style": null,
                        "text": "NAIL D.A.T.E",
                        "text_font_list": [
                          {
                            "class_id": 1110,
                            "label": "Montserrat-Regular",
                            "probability": 0.9078772664070129
                          },
                          {
                            "class_id": 626,
                            "label": "Flamenco-Regular",
                            "probability": 0.03808344900608063
                          },
                          {
                            "class_id": 232,
                            "label": "Bellota Text-Regular",
                            "probability": 0.023795131593942642
                          },
                          {
                            "class_id": 1729,
                            "label": "Syncopate-Regular",
                            "probability": 0.008102010004222393
                          },
                          {
                            "class_id": 1410,
                            "label": "Raleway-Regular",
                            "probability": 0.008014517836272717
                          },
                          {
                            "class_id": 1106,
                            "label": "Montserrat Alternates-Regular",
                            "probability": 0.00522506283596158
                          },
                          {
                            "class_id": 754,
                            "label": "Hubballi-Regular",
                            "probability": 0.002442055381834507
                          },
                          {
                            "class_id": 545,
                            "label": "Encode Sans Expanded-Regular",
                            "probability": 0.0019794197287410498
                          },
                          {
                            "class_id": 1882,
                            "label": "Wix Madefor Display-Regular",
                            "probability": 0.0007464523077942431
                          },
                          {
                            "class_id": 1384,
                            "label": "Quicksand-Regular",
                            "probability": 0.0005769456620328128
                          }
                        ],
                        "text_is_container": false,
                        "under_line": false
                      }
                    ]
                  ],
                  "single_height": 20,
                  "text_box_height": 20,
                  "text_entity_list_index": 3,
                  "text_font_width": 173,
                  "text_lang": "en"
                }
              },
              "processingMeta": {
                "surfaceArea": 5190,
                "detectionScore": 0,
                "textContainerized": false
              },
              "contentData": {
                "textValue": "NAIL D.A.T.E"
              }
            },
            {
              "elementId": "TextView_387_894_242_54_3",
              "elementName": "SquadSanctuary",
              "elementType": "Text",
              "layoutConfig": {
                "positionMode": "Absolute",
                "absoluteAttrs": {
                  "align": [
                    "LEFT",
                    "TOP"
                  ],
                  "coord": [
                    393,
                    894
                  ],
                  "orginCoord": [
                    393,
                    894
                  ]
                }
              },
              "styleConfig": {
                "widthSpec": {
                  "sizing": "FIXED",
                  "value": 236
                },
                "heightSpec": {
                  "sizing": "FIXED",
                  "value": 54
                },
                "textConfig": {
                  "fontFamily": "Inter",
                  "fontFamilyRec": null,
                  "fontScoreRec": null,
                  "fontSize": 44,
                  "fontStyle": "regular",
                  "fontStyleRec": null,
                  "textAlign": [
                    "LEFT",
                    "CENTER"
                  ]
                },
                "textColor": {
                  "rgbValues": [
                    65,
                    49,
                    46
                  ]
                },
                "opacityLevel": 255,
                "rotationAngle": 0,
                "textExtraction": {
                  "rows_text_position": [
                    [
                      {
                        "binary": null,
                        "binary_height": 43,
                        "index": 39,
                        "lang": "en",
                        "ocr_box": [
                          [
                            387,
                            894
                          ],
                          [
                            629,
                            894
                          ],
                          [
                            629,
                            948
                          ],
                          [
                            387,
                            948
                          ]
                        ],
                        "parent_index": null,
                        "rec_score": 0.9488087296485901,
                        "single_box": true,
                        "style": null,
                        "text": "SquadSanctuary",
                        "text_font_list": [
                          {
                            "class_id": 359,
                            "label": "Caveat-Regular",
                            "probability": 0.6286715865135193
                          },
                          {
                            "class_id": 1707,
                            "label": "Square Peg-Regular",
                            "probability": 0.05602692812681198
                          },
                          {
                            "class_id": 903,
                            "label": "Kristi-Regular",
                            "probability": 0.02969512529671192
                          },
                          {
                            "class_id": 752,
                            "label": "Homemade Apple-Regular",
                            "probability": 0.023659907281398773
                          },
                          {
                            "class_id": 1750,
                            "label": "Telex-Regular",
                            "probability": 0.017290538176894188
                          },
                          {
                            "class_id": 1165,
                            "label": "Nothing You Could Do-Regular",
                            "probability": 0.01328069157898426
                          },
                          {
                            "class_id": 397,
                            "label": "Comforter-Regular",
                            "probability": 0.011728162877261639
                          },
                          {
                            "class_id": 1388,
                            "label": "Qwitcher Grypen-Regular",
                            "probability": 0.009732089005410671
                          },
                          {
                            "class_id": 1386,
                            "label": "Qwigley-Regular",
                            "probability": 0.009698563255369663
                          },
                          {
                            "class_id": 1848,
                            "label": "Vibes-Regular",
                            "probability": 0.008206130936741829
                          }
                        ],
                        "text_is_container": false,
                        "under_line": false
                      }
                    ]
                  ],
                  "single_height": 44,
                  "text_box_height": 44,
                  "text_entity_list_index": 2,
                  "text_font_width": 242,
                  "text_lang": "en"
                }
              },
              "processingMeta": {
                "surfaceArea": 13068,
                "detectionScore": 0,
                "textContainerized": false
              },
              "contentData": {
                "textValue": "SquadSanctuary"
              }
            },
            {
              "elementId": "ImageView_798_175_64_62_4",
              "elementName": "Image",
              "elementType": "Image",
              "layoutConfig": {
                "positionMode": "Absolute",
                "absoluteAttrs": {
                  "align": [
                    "LEFT",
                    "TOP"
                  ],
                  "coord": [
                    803,
                    181
                  ],
                  "orginCoord": [
                    803,
                    181
                  ]
                }
              },
              "styleConfig": {
                "widthSpec": {
                  "sizing": "FIXED",
                  "value": 54
                },
                "heightSpec": {
                  "sizing": "FIXED",
                  "value": 52
                }
              },
              "processingMeta": {
                "surfaceArea": 3968,
                "detectionScore": 0,
                "textContainerized": false
              },
              "contentData": {
                "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-08-21/35d58d28-8797-40e7-a63c-0b45e773b78a/out/20250821223906470260_07b4ee8aa7a44576b4c966873b5afff8/20250821223911-image_35d58d28-8797-40e7-a63c-0b45e773b78a.png"
              }
            },
            {
              "elementId": "TextView_176_173_616_68_5",
              "elementName": "masterpiece mome",
              "elementType": "Text",
              "layoutConfig": {
                "positionMode": "Absolute",
                "absoluteAttrs": {
                  "align": [
                    "LEFT",
                    "TOP"
                  ],
                  "coord": [
                    184,
                    173
                  ],
                  "orginCoord": [
                    184,
                    173
                  ]
                }
              },
              "styleConfig": {
                "widthSpec": {
                  "sizing": "FIXED",
                  "value": 608
                },
                "heightSpec": {
                  "sizing": "FIXED",
                  "value": 68
                },
                "textConfig": {
                  "fontFamily": "Inter",
                  "fontFamilyRec": "Times New Roman",
                  "fontScoreRec": 0.9993483432735957,
                  "fontSize": 62,
                  "fontStyle": "bold",
                  "fontStyleRec": "Bold",
                  "textAlign": [
                    "LEFT",
                    "CENTER"
                  ]
                },
                "textColor": {
                  "rgbValues": [
                    239,
                    235,
                    228
                  ]
                },
                "opacityLevel": 255,
                "rotationAngle": 0,
                "textExtraction": {
                  "rows_text_position": [
                    [
                      {
                        "binary": null,
                        "binary_height": 68,
                        "index": 38,
                        "lang": "en",
                        "ocr_box": [
                          [
                            176,
                            173
                          ],
                          [
                            792,
                            173
                          ],
                          [
                            792,
                            241
                          ],
                          [
                            176,
                            241
                          ]
                        ],
                        "parent_index": null,
                        "rec_score": 0.9987005591392517,
                        "single_box": true,
                        "style": null,
                        "text": "masterpiece moment",
                        "text_font_list": [
                          {
                            "class_id": 772,
                            "label": "Ibarra Real Nova-Bold",
                            "probability": 0.7296379208564758
                          },
                          {
                            "class_id": 479,
                            "label": "DM Serif Text-Regular",
                            "probability": 0.2690364420413971
                          },
                          {
                            "class_id": 421,
                            "label": "Cormorant Garamond-Bold",
                            "probability": 0.00031031720573082566
                          },
                          {
                            "class_id": 1765,
                            "label": "Times New Roman-Bold",
                            "probability": 0.0001218573670485057
                          },
                          {
                            "class_id": 1180,
                            "label": "Noto Serif SC-Bold",
                            "probability": 0.00008104996231850237
                          },
                          {
                            "class_id": 1157,
                            "label": "Nobile-Bold Italic",
                            "probability": 0.00007583321712445468
                          },
                          {
                            "class_id": 425,
                            "label": "Cormorant Infant-Bold",
                            "probability": 0.00006656486220890656
                          },
                          {
                            "class_id": 1318,
                            "label": "Playfair Display-Bold",
                            "probability": 0.000050051527068717405
                          },
                          {
                            "class_id": 540,
                            "label": "Emilys Candy-Regular",
                            "probability": 0.00004774770786752924
                          },
                          {
                            "class_id": 775,
                            "label": "Ibarra Real Nova-Regular",
                            "probability": 0.00004413945134729147
                          }
                        ],
                        "text_is_container": false,
                        "under_line": false
                      }
                    ]
                  ],
                  "single_height": 62,
                  "text_box_height": 62,
                  "text_entity_list_index": 1,
                  "text_font_width": 616,
                  "text_lang": "en"
                }
              },
              "processingMeta": {
                "surfaceArea": 41888,
                "detectionScore": 0,
                "textContainerized": false
              },
              "contentData": {
                "textValue": "masterpiece moment"
              }
            },
            {
              "elementId": "TextView_192_97_625_71_6",
              "elementName": "Your squad deser",
              "elementType": "Text",
              "layoutConfig": {
                "positionMode": "Absolute",
                "absoluteAttrs": {
                  "align": [
                    "LEFT",
                    "TOP"
                  ],
                  "coord": [
                    199,
                    97
                  ],
                  "orginCoord": [
                    199,
                    97
                  ]
                }
              },
              "styleConfig": {
                "widthSpec": {
                  "sizing": "FIXED",
                  "value": 618
                },
                "heightSpec": {
                  "sizing": "FIXED",
                  "value": 71
                },
                "textConfig": {
                  "fontFamily": "Inter",
                  "fontFamilyRec": "Times New Roman",
                  "fontScoreRec": 0.9986693928658497,
                  "fontSize": 63,
                  "fontStyle": "bold",
                  "fontStyleRec": "Bold",
                  "textAlign": [
                    "LEFT",
                    "CENTER"
                  ]
                },
                "textColor": {
                  "rgbValues": [
                    237,
                    233,
                    226
                  ]
                },
                "opacityLevel": 255,
                "rotationAngle": 0,
                "textExtraction": {
                  "rows_text_position": [
                    [
                      {
                        "binary": null,
                        "binary_height": 71,
                        "index": 37,
                        "lang": "en",
                        "ocr_box": [
                          [
                            192,
                            97
                          ],
                          [
                            817,
                            97
                          ],
                          [
                            817,
                            168
                          ],
                          [
                            192,
                            168
                          ]
                        ],
                        "parent_index": null,
                        "rec_score": 0.9994734525680542,
                        "single_box": true,
                        "style": null,
                        "text": "Your squad deserves a",
                        "text_font_list": [
                          {
                            "class_id": 479,
                            "label": "DM Serif Text-Regular",
                            "probability": 0.921538770198822
                          },
                          {
                            "class_id": 1150,
                            "label": "Newsreader-Bold",
                            "probability": 0.040923092514276505
                          },
                          {
                            "class_id": 1877,
                            "label": "Wittgenstein-Bold",
                            "probability": 0.016313748434185982
                          },
                          {
                            "class_id": 772,
                            "label": "Ibarra Real Nova-Bold",
                            "probability": 0.01588413305580616
                          },
                          {
                            "class_id": 965,
                            "label": "Libre Caslon Text-Bold",
                            "probability": 0.0023856833577156067
                          },
                          {
                            "class_id": 512,
                            "label": "EB Garamond-Bold",
                            "probability": 0.00069915980566293
                          },
                          {
                            "class_id": 1543,
                            "label": "STIX Two Text-Bold",
                            "probability": 0.0002631164388731122
                          },
                          {
                            "class_id": 636,
                            "label": "Fraunces-Bold",
                            "probability": 0.00023344864894170314
                          },
                          {
                            "class_id": 696,
                            "label": "Gloock-Regular",
                            "probability": 0.0002146617480320856
                          },
                          {
                            "class_id": 477,
                            "label": "DM Serif Display-Regular",
                            "probability": 0.00021357866353355348
                          }
                        ],
                        "text_is_container": false,
                        "under_line": false
                      }
                    ]
                  ],
                  "single_height": 63,
                  "text_box_height": 63,
                  "text_entity_list_index": 0,
                  "text_font_width": 625,
                  "text_lang": "en"
                }
              },
              "processingMeta": {
                "surfaceArea": 44375,
                "detectionScore": 0,
                "textContainerized": false
              },
              "contentData": {
                "textValue": "Your squad deserves a"
              }
            }
          ]
        }
      }
    }
  }
  return fetchWithAuth(`/v1/designs/${designId}`);

}

export async function saveDesign(designData, designId = null) {
  return fetchWithAuth(`/v1/designs`, {
    method: "POST",
    body: {
      ...designData,
      designId,
    },
  });
}

export async function deleteDesign(designId) {
  return fetchWithAuth(`/v1/designs/${designId}`, {
    method: "DELETE",
  });
}

export async function saveCanvasState(
  canvas,
  designId = null,
  title = "Untitled Design"
) {
  if (!canvas) return false;

  try {
    const canvasData = canvas.toJSON(["id", "filters"]);
    console.log(canvasData, "gfdgdg");

    const designData = {
      name: title,
      canvasData: JSON.stringify(canvasData),
      width: canvas.width,
      height: canvas.height,
    };

    return saveDesign(designData, designId);
  } catch (error) {
    console.error("Error saving canvas state:", error);
    throw error;
  }
}
