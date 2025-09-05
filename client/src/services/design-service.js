import axios from "axios";
import { fetchWithAuth } from "./base-service";
import { exportAsPng } from "./export-service";

export async function getUserDesigns() {
  return fetchWithAuth("/v1/designs");
}

export async function getUserDesignByID(designId) {

  const data = {
    "code": 0,
    "message": "ok",
    "data": {
      "configuration": {
        "baseWidth": 1587,
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
            "value": 1587
          },
          "heightSpec": {
            "sizing": "FILL",
            "value": 2245
          },
          "textColor": {
            "rgbValues": [
              238,
              116,
              116
            ]
          },
          "opacityLevel": 255,
          "overflowMode": [
            "scroll",
            "scroll"
          ]
        },
        "processingMeta": {
          "surfaceArea": 3562815,
          "detectionScore": 0,
          "textContainerized": false
        },
        "childElements": [
          {
            "elementId": "ImageView_root_1",
            "elementName": "Image",
            "elementType": "Image",
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
                "value": 1587
              },
              "heightSpec": {
                "sizing": "FILL",
                "value": 2245
              },
              "textColor": {
                "rgbValues": [
                  238,
                  116,
                  116
                ]
              },
              "opacityLevel": 255,
              "overflowMode": [
                "scroll",
                "scroll"
              ]
            },
            "processingMeta": {
              "surfaceArea": 3562815,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "imageSource": ""
            }
          },
          {
            "elementId": "ViewGroup_264_1394_1117_706_2",
            "elementName": "Groups",
            "elementType": "Layer",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  264,
                  1394
                ],
                "orginCoord": [
                  264,
                  1394
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 1117
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 706
              }
            },
            "processingMeta": {
              "surfaceArea": 788602,
              "detectionScore": 0,
              "textContainerized": false
            },
            "childElements": [
              {
                "elementId": "Background_257_1532_1125_572_3",
                "elementName": "Background",
                "elementType": "Image",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      -7,
                      138
                    ],
                    "orginCoord": [
                      257,
                      1532
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 1125
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 572
                  }
                },
                "processingMeta": {
                  "surfaceArea": 643500,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-03/e2e3a3a9-cbd1-4687-a084-76d65b8c42ab/out/20250903143942684509_d04a99dc4f1646ac9531b6428cb0eb7c/20250903143950-image_e2e3a3a9-cbd1-4687-a084-76d65b8c42ab.png"
                }
              },
              {
                "elementId": "TextView_999_1963_250_62_4",
                "elementName": "Let's GO!\"",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      746,
                      569
                    ],
                    "orginCoord": [
                      1010,
                      1963
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 239
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 62
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Inter",
                    "fontScoreRec": 0.9706120007904246,
                    "fontSize": 44,
                    "fontStyle": "bold",
                    "fontStyleRec": "Bold",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      31,
                      31,
                      30
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
                          "index": 79,
                          "lang": "en",
                          "ocr_box": [
                            [
                              999,
                              1963
                            ],
                            [
                              1249,
                              1963
                            ],
                            [
                              1249,
                              2025
                            ],
                            [
                              999,
                              2025
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9875689744949341,
                          "single_box": true,
                          "style": null,
                          "text": "Let's GO!\"",
                          "text_font_list": [
                            {
                              "class_id": 859,
                              "label": "Jost-Bold",
                              "probability": 0.8817912340164185
                            },
                            {
                              "class_id": 799,
                              "label": "Instrument Sans-Bold",
                              "probability": 0.026765933260321617
                            },
                            {
                              "class_id": 1228,
                              "label": "Outfit-Bold",
                              "probability": 0.015454134903848171
                            },
                            {
                              "class_id": 1742,
                              "label": "Teachers-Bold",
                              "probability": 0.011061231605708599
                            },
                            {
                              "class_id": 652,
                              "label": "Gabarito-Bold",
                              "probability": 0.010800918564200401
                            },
                            {
                              "class_id": 1340,
                              "label": "Poppins-Bold",
                              "probability": 0.008860777132213116
                            },
                            {
                              "class_id": 1820,
                              "label": "Unbounded-Bold",
                              "probability": 0.007885589264333248
                            },
                            {
                              "class_id": 805,
                              "label": "Inter-Black",
                              "probability": 0.004456288646906614
                            },
                            {
                              "class_id": 1448,
                              "label": "Rethink Sans-Bold",
                              "probability": 0.0024282385129481554
                            },
                            {
                              "class_id": 556,
                              "label": "Epilogue-Bold",
                              "probability": 0.0011076548835262656
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 44,
                    "text_box_height": 44,
                    "text_entity_list_index": 7,
                    "text_font_width": 250,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 15500,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "Let's GO!\""
                }
              },
              {
                "elementId": "TextView_386_1967_607_60_5",
                "elementName": "friends, events,",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      132,
                      573
                    ],
                    "orginCoord": [
                      396,
                      1967
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 597
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 60
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Inter",
                    "fontScoreRec": 0.9972957968711853,
                    "fontSize": 52,
                    "fontStyle": "semi_bold",
                    "fontStyleRec": "Regular",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      50,
                      50,
                      48
                    ]
                  },
                  "opacityLevel": 255,
                  "rotationAngle": 0,
                  "textExtraction": {
                    "rows_text_position": [
                      [
                        {
                          "binary": null,
                          "binary_height": 50,
                          "index": 75,
                          "lang": "en",
                          "ocr_box": [
                            [
                              386,
                              1967
                            ],
                            [
                              993,
                              1967
                            ],
                            [
                              993,
                              2027
                            ],
                            [
                              386,
                              2027
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9999145269393921,
                          "single_box": true,
                          "style": null,
                          "text": "friends, events, and rewards.",
                          "text_font_list": [
                            {
                              "class_id": 1745,
                              "label": "Teachers-Regular",
                              "probability": 0.9972957968711853
                            },
                            {
                              "class_id": 745,
                              "label": "Heiti SC-Medium",
                              "probability": 0.0008598911226727068
                            },
                            {
                              "class_id": 747,
                              "label": "Heiti TC-Medium",
                              "probability": 0.0007250463240779936
                            },
                            {
                              "class_id": 1834,
                              "label": "Urbanist-Regular",
                              "probability": 0.00024886796018108726
                            },
                            {
                              "class_id": 497,
                              "label": "Didact Gothic-Regular",
                              "probability": 0.000221363763557747
                            },
                            {
                              "class_id": 862,
                              "label": "Jost-Regular",
                              "probability": 0.00015341948892455548
                            },
                            {
                              "class_id": 494,
                              "label": "Della Respira-Regular",
                              "probability": 0.00013367211795412004
                            },
                            {
                              "class_id": 1744,
                              "label": "Teachers-Italic",
                              "probability": 0.00011517983512021601
                            },
                            {
                              "class_id": 158,
                              "label": "Atkinson Hyperlegible-Regular",
                              "probability": 0.0000074623185355449095
                            },
                            {
                              "class_id": 653,
                              "label": "Gabarito-Regular",
                              "probability": 0.000007065517365845153
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 52,
                    "text_box_height": 52,
                    "text_entity_list_index": 3,
                    "text_font_width": 607,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 36420,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "friends, events, and rewards."
                }
              },
              {
                "elementId": "TextView_921_1886_341_67_6",
                "elementName": "profile = Access",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      667,
                      492
                    ],
                    "orginCoord": [
                      931,
                      1886
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 331
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 67
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Inter",
                    "fontScoreRec": 0.9993736147880554,
                    "fontSize": 58,
                    "fontStyle": "semi_bold",
                    "fontStyleRec": "Regular",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      57,
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
                          "binary_height": 56,
                          "index": 76,
                          "lang": "en",
                          "ocr_box": [
                            [
                              921,
                              1886
                            ],
                            [
                              1262,
                              1886
                            ],
                            [
                              1262,
                              1953
                            ],
                            [
                              921,
                              1953
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9991940259933472,
                          "single_box": true,
                          "style": null,
                          "text": "profile = Access",
                          "text_font_list": [
                            {
                              "class_id": 1745,
                              "label": "Teachers-Regular",
                              "probability": 0.9993736147880554
                            },
                            {
                              "class_id": 745,
                              "label": "Heiti SC-Medium",
                              "probability": 0.0002497265231795609
                            },
                            {
                              "class_id": 747,
                              "label": "Heiti TC-Medium",
                              "probability": 0.0001435221784049645
                            },
                            {
                              "class_id": 1744,
                              "label": "Teachers-Italic",
                              "probability": 0.00007952805754030123
                            },
                            {
                              "class_id": 494,
                              "label": "Della Respira-Regular",
                              "probability": 0.00004706469553639181
                            },
                            {
                              "class_id": 862,
                              "label": "Jost-Regular",
                              "probability": 0.00003031621963600628
                            },
                            {
                              "class_id": 1834,
                              "label": "Urbanist-Regular",
                              "probability": 0.00002232116457889788
                            },
                            {
                              "class_id": 497,
                              "label": "Didact Gothic-Regular",
                              "probability": 0.000007228192316688364
                            },
                            {
                              "class_id": 710,
                              "label": "Goudy Bookletter 1911-Regular",
                              "probability": 0.000001938951299962355
                            },
                            {
                              "class_id": 1723,
                              "label": "Sulphur Point-Regular",
                              "probability": 0.00000139199744353391
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 58,
                    "text_box_height": 58,
                    "text_entity_list_index": 4,
                    "text_font_width": 341,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 22847,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "profile = Access"
                }
              },
              {
                "elementId": "ImageView_733_1829_168_133_7",
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
                      472,
                      442
                    ],
                    "orginCoord": [
                      736,
                      1836
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 158
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 124
                  }
                },
                "processingMeta": {
                  "surfaceArea": 22344,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-03/03c0d375-7b4e-4778-b2ee-eb27d8b44c32/out/20250903143942684509_d04a99dc4f1646ac9531b6428cb0eb7c/20250903143950-image_03c0d375-7b4e-4778-b2ee-eb27d8b44c32.png"
                }
              },
              {
                "elementId": "TextView_743_1895_82_50_8",
                "elementName": "Gen",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      485,
                      501
                    ],
                    "orginCoord": [
                      749,
                      1895
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 76
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 50
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Impact",
                    "fontScoreRec": 0.9992052912712097,
                    "fontSize": 40,
                    "fontStyle": "bold",
                    "fontStyleRec": "Regular",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      38,
                      88,
                      119
                    ]
                  },
                  "opacityLevel": 255,
                  "rotationAngle": 0,
                  "textExtraction": {
                    "rows_text_position": [
                      [
                        {
                          "binary": null,
                          "binary_height": 39,
                          "index": 81,
                          "lang": "en",
                          "ocr_box": [
                            [
                              743,
                              1895
                            ],
                            [
                              825,
                              1895
                            ],
                            [
                              825,
                              1945
                            ],
                            [
                              743,
                              1945
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9917696118354797,
                          "single_box": true,
                          "style": null,
                          "text": "Gen",
                          "text_font_list": [
                            {
                              "class_id": 780,
                              "label": "Impact-Regular",
                              "probability": 0.9992052912712097
                            },
                            {
                              "class_id": 61,
                              "label": "Alumni Sans Collegiate One-Regular",
                              "probability": 0.0007764030597172678
                            },
                            {
                              "class_id": 1226,
                              "label": "Oswald-Bold",
                              "probability": 0.000011292127055639867
                            },
                            {
                              "class_id": 1267,
                              "label": "Palette Mosaic-Regular",
                              "probability": 0.0000011743123877749895
                            },
                            {
                              "class_id": 1746,
                              "label": "Teko-Bold",
                              "probability": 9.409203585164505e-7
                            },
                            {
                              "class_id": 389,
                              "label": "Coda-ExtraBold",
                              "probability": 7.41662290693057e-7
                            },
                            {
                              "class_id": 63,
                              "label": "Alumni Sans Inline One-Regular",
                              "probability": 6.088297368478379e-7
                            },
                            {
                              "class_id": 1790,
                              "label": "Trochut-Bold",
                              "probability": 2.9855868888262194e-7
                            },
                            {
                              "class_id": 1273,
                              "label": "Passion One-Regular",
                              "probability": 2.7855094231199473e-7
                            },
                            {
                              "class_id": 1792,
                              "label": "Trochut-Regular",
                              "probability": 9.59113748422169e-8
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 40,
                    "text_box_height": 40,
                    "text_entity_list_index": 9,
                    "text_font_width": 82,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 4100,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "Gen"
                }
              },
              {
                "elementId": "TextView_823_1896_70_49_9",
                "elementName": "WE",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      560,
                      502
                    ],
                    "orginCoord": [
                      824,
                      1896
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 69
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 49
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Impact",
                    "fontScoreRec": 0.9488950433005812,
                    "fontSize": 38,
                    "fontStyle": "bold",
                    "fontStyleRec": "Bold",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      191,
                      43,
                      49
                    ]
                  },
                  "opacityLevel": 255,
                  "rotationAngle": 0,
                  "textExtraction": {
                    "rows_text_position": [
                      [
                        {
                          "binary": null,
                          "binary_height": 38,
                          "index": 82,
                          "lang": "en",
                          "ocr_box": [
                            [
                              823,
                              1896
                            ],
                            [
                              893,
                              1896
                            ],
                            [
                              893,
                              1945
                            ],
                            [
                              823,
                              1945
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9960309267044067,
                          "single_box": true,
                          "style": null,
                          "text": "WE",
                          "text_font_list": [
                            {
                              "class_id": 61,
                              "label": "Alumni Sans Collegiate One-Regular",
                              "probability": 0.6536330580711365
                            },
                            {
                              "class_id": 780,
                              "label": "Impact-Regular",
                              "probability": 0.2819077670574188
                            },
                            {
                              "class_id": 1267,
                              "label": "Palette Mosaic-Regular",
                              "probability": 0.039851002395153046
                            },
                            {
                              "class_id": 1226,
                              "label": "Oswald-Bold",
                              "probability": 0.012782523408532143
                            },
                            {
                              "class_id": 1273,
                              "label": "Passion One-Regular",
                              "probability": 0.00595479691401124
                            },
                            {
                              "class_id": 96,
                              "label": "Anton-Regular",
                              "probability": 0.0004456981841940433
                            },
                            {
                              "class_id": 1272,
                              "label": "Passion One-Bold",
                              "probability": 0.00023627853079233319
                            },
                            {
                              "class_id": 176,
                              "label": "Azeret Mono-Bold",
                              "probability": 0.00015390854969155043
                            },
                            {
                              "class_id": 63,
                              "label": "Alumni Sans Inline One-Regular",
                              "probability": 0.0001259965792996809
                            },
                            {
                              "class_id": 1696,
                              "label": "Spicy Rice-Regular",
                              "probability": 0.00010386617941549048
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 38,
                    "text_box_height": 38,
                    "text_entity_list_index": 10,
                    "text_font_width": 70,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 3430,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "WE"
                }
              },
              {
                "elementId": "TextView_388_1886_327_68_10",
                "elementName": "Complete your",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      133,
                      492
                    ],
                    "orginCoord": [
                      397,
                      1886
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 318
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 68
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Inter",
                    "fontScoreRec": 0.8487806550765526,
                    "fontSize": 57,
                    "fontStyle": "semi_bold",
                    "fontStyleRec": "Regular",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      38,
                      38,
                      36
                    ]
                  },
                  "opacityLevel": 255,
                  "rotationAngle": 0,
                  "textExtraction": {
                    "rows_text_position": [
                      [
                        {
                          "binary": null,
                          "binary_height": 56,
                          "index": 77,
                          "lang": "en",
                          "ocr_box": [
                            [
                              388,
                              1886
                            ],
                            [
                              715,
                              1886
                            ],
                            [
                              715,
                              1954
                            ],
                            [
                              388,
                              1954
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9991665482521057,
                          "single_box": true,
                          "style": null,
                          "text": "Complete your",
                          "text_font_list": [
                            {
                              "class_id": 1745,
                              "label": "Teachers-Regular",
                              "probability": 0.8243127465248108
                            },
                            {
                              "class_id": 745,
                              "label": "Heiti SC-Medium",
                              "probability": 0.12331712245941162
                            },
                            {
                              "class_id": 747,
                              "label": "Heiti TC-Medium",
                              "probability": 0.02525181695818901
                            },
                            {
                              "class_id": 1834,
                              "label": "Urbanist-Regular",
                              "probability": 0.022713925689458847
                            },
                            {
                              "class_id": 497,
                              "label": "Didact Gothic-Regular",
                              "probability": 0.001008104532957077
                            },
                            {
                              "class_id": 494,
                              "label": "Della Respira-Regular",
                              "probability": 0.000351343653164804
                            },
                            {
                              "class_id": 862,
                              "label": "Jost-Regular",
                              "probability": 0.00033658553729765117
                            },
                            {
                              "class_id": 1744,
                              "label": "Teachers-Italic",
                              "probability": 0.00020010091247968376
                            },
                            {
                              "class_id": 1382,
                              "label": "Questrial-Regular",
                              "probability": 0.00011080498370574787
                            },
                            {
                              "class_id": 1723,
                              "label": "Sulphur Point-Regular",
                              "probability": 0.00009838689584285021
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 57,
                    "text_box_height": 57,
                    "text_entity_list_index": 5,
                    "text_font_width": 327,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 22236,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "Complete your"
                }
              },
              {
                "elementId": "TextView_398_1720_883_73_11",
                "elementName": "You've got the a",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      144,
                      326
                    ],
                    "orginCoord": [
                      408,
                      1720
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 873
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 73
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Inter",
                    "fontScoreRec": 0.9008516268804669,
                    "fontSize": 57,
                    "fontStyle": "bold",
                    "fontStyleRec": "Semi Bold",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      68,
                      63,
                      66
                    ]
                  },
                  "opacityLevel": 255,
                  "rotationAngle": 0,
                  "textExtraction": {
                    "rows_text_position": [
                      [
                        {
                          "binary": null,
                          "binary_height": 55,
                          "index": 74,
                          "lang": "en",
                          "ocr_box": [
                            [
                              398,
                              1720
                            ],
                            [
                              1281,
                              1720
                            ],
                            [
                              1281,
                              1793
                            ],
                            [
                              398,
                              1793
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9946125745773315,
                          "single_box": true,
                          "style": null,
                          "text": "You've got the app. Now OwN it.",
                          "text_font_list": [
                            {
                              "class_id": 819,
                              "label": "Inter-Semi Bold",
                              "probability": 0.2934018671512604
                            },
                            {
                              "class_id": 1213,
                              "label": "Open Sans-Bold",
                              "probability": 0.20048514008522034
                            },
                            {
                              "class_id": 877,
                              "label": "Karla-Bold",
                              "probability": 0.13406270742416382
                            },
                            {
                              "class_id": 472,
                              "label": "DM Sans-Bold",
                              "probability": 0.12372775375843048
                            },
                            {
                              "class_id": 1028,
                              "label": "Manrope-Bold",
                              "probability": 0.04747162014245987
                            },
                            {
                              "class_id": 1123,
                              "label": "Mukta-Bold",
                              "probability": 0.03755804896354675
                            },
                            {
                              "class_id": 1640,
                              "label": "Sofia Sans-Bold",
                              "probability": 0.02147143892943859
                            },
                            {
                              "class_id": 1580,
                              "label": "Schibsted Grotesk-Bold",
                              "probability": 0.01761762984097004
                            },
                            {
                              "class_id": 121,
                              "label": "Arial-Bold",
                              "probability": 0.015043736435472965
                            },
                            {
                              "class_id": 2,
                              "label": "AR One Sans-Bold",
                              "probability": 0.010011684149503708
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 57,
                    "text_box_height": 57,
                    "text_entity_list_index": 0,
                    "text_font_width": 883,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 64459,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "You've got the app. Now OwN it."
                }
              },
              {
                "elementId": "ImageView_680_1402_277_270_12",
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
                      426,
                      16
                    ],
                    "orginCoord": [
                      690,
                      1410
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 259
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 259
                  },
                  "borderConfig": {
                    "borderRadius": [
                      128,
                      128,
                      128,
                      128
                    ]
                  }
                },
                "processingMeta": {
                  "surfaceArea": 74790,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-03/03a8fb36-4ee7-4dc7-85c1-e72f847e56df/out/20250903143942684509_d04a99dc4f1646ac9531b6428cb0eb7c/20250903143950-image_03a8fb36-4ee7-4dc7-85c1-e72f847e56df.png"
                }
              }
            ],
            "contentData": {
              "imageSource": ""
            }
          },
          {
            "elementId": "ViewGroup_0_19_1587_1364_13",
            "elementName": "Groups",
            "elementType": "Layer",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  0,
                  19
                ],
                "orginCoord": [
                  0,
                  19
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 1587
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 1364
              }
            },
            "processingMeta": {
              "surfaceArea": 2164668,
              "detectionScore": 0,
              "textContainerized": false
            },
            "childElements": [
              {
                "elementId": "ImageView_1_67_1387_1301_14",
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
                      1,
                      48
                    ],
                    "orginCoord": [
                      1,
                      67
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 1387
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 1301
                  }
                },
                "processingMeta": {
                  "surfaceArea": 1804487,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-03/e96ce661-74c2-40b9-909d-72da441fee60/out/20250903143942684509_d04a99dc4f1646ac9531b6428cb0eb7c/20250903143950-image_e96ce661-74c2-40b9-909d-72da441fee60.png"
                }
              },
              {
                "elementId": "Button_897_750_275_101_15",
                "elementName": "Button",
                "elementType": "Layer",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      897,
                      731
                    ],
                    "orginCoord": [
                      897,
                      750
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 275
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 101
                  }
                },
                "processingMeta": {
                  "surfaceArea": 27775,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "childElements": [
                  {
                    "elementId": "bg_Button_897_750_275_101_16",
                    "elementName": "Background",
                    "elementType": "Image",
                    "layoutConfig": {
                      "positionMode": "Absolute",
                      "absoluteAttrs": {
                        "align": [
                          "LEFT",
                          "TOP"
                        ],
                        "coord": [
                          6,
                          2
                        ],
                        "orginCoord": [
                          903,
                          752
                        ]
                      }
                    },
                    "styleConfig": {
                      "widthSpec": {
                        "sizing": "FIXED",
                        "value": 265
                      },
                      "heightSpec": {
                        "sizing": "FIXED",
                        "value": 97
                      }
                    },
                    "processingMeta": {
                      "surfaceArea": 27775,
                      "detectionScore": 0,
                      "textContainerized": false
                    },
                    "contentData": {
                      "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-03/f0fc6879-7976-45e4-8f5c-5bed71233056/out/20250903143942684509_d04a99dc4f1646ac9531b6428cb0eb7c/20250903143950-image_f0fc6879-7976-45e4-8f5c-5bed71233056.png"
                    }
                  },
                  {
                    "elementId": "TextView_922_779_212_43_17",
                    "elementName": "Comples Regietra",
                    "elementType": "Text",
                    "layoutConfig": {
                      "positionMode": "Absolute",
                      "absoluteAttrs": {
                        "align": [
                          "LEFT",
                          "TOP"
                        ],
                        "coord": [
                          32,
                          29
                        ],
                        "orginCoord": [
                          929,
                          779
                        ]
                      }
                    },
                    "styleConfig": {
                      "widthSpec": {
                        "sizing": "FIXED",
                        "value": 205
                      },
                      "heightSpec": {
                        "sizing": "FIXED",
                        "value": 43
                      },
                      "textConfig": {
                        "fontFamily": "Inter",
                        "fontFamilyRec": null,
                        "fontScoreRec": null,
                        "fontSize": 36,
                        "fontStyle": "medium",
                        "fontStyleRec": null,
                        "textAlign": [
                          "LEFT",
                          "CENTER"
                        ]
                      },
                      "textColor": {
                        "rgbValues": [
                          159,
                          213,
                          224
                        ]
                      },
                      "opacityLevel": 255,
                      "rotationAngle": 0,
                      "textExtraction": {
                        "rows_text_position": [
                          [
                            {
                              "binary": null,
                              "binary_height": 35,
                              "index": 80,
                              "lang": "en",
                              "ocr_box": [
                                [
                                  922,
                                  779
                                ],
                                [
                                  1134,
                                  779
                                ],
                                [
                                  1134,
                                  822
                                ],
                                [
                                  922,
                                  822
                                ]
                              ],
                              "parent_index": null,
                              "rec_score": 0.9378373026847839,
                              "single_box": true,
                              "style": null,
                              "text": "Comples Regietraion",
                              "text_font_list": [
                                {
                                  "class_id": 273,
                                  "label": "Black And White Picture-Regular",
                                  "probability": 0.7532831430435181
                                },
                                {
                                  "class_id": 850,
                                  "label": "Jolly Lodger-Regular",
                                  "probability": 0.08464428037405014
                                },
                                {
                                  "class_id": 1037,
                                  "label": "Margarine-Regular",
                                  "probability": 0.0444454625248909
                                },
                                {
                                  "class_id": 377,
                                  "label": "Chicle-Regular",
                                  "probability": 0.028521263971924782
                                },
                                {
                                  "class_id": 627,
                                  "label": "Flavors-Regular",
                                  "probability": 0.021900547668337822
                                },
                                {
                                  "class_id": 1418,
                                  "label": "Rancho-Regular",
                                  "probability": 0.014123250730335712
                                },
                                {
                                  "class_id": 10,
                                  "label": "Advent Pro-Bold",
                                  "probability": 0.010095549747347832
                                },
                                {
                                  "class_id": 20,
                                  "label": "Aladin-Regular",
                                  "probability": 0.00538651691749692
                                },
                                {
                                  "class_id": 314,
                                  "label": "Caesar Dressing-Regular",
                                  "probability": 0.0027715489268302917
                                },
                                {
                                  "class_id": 640,
                                  "label": "Freckle Face-Regular",
                                  "probability": 0.0026079595554620028
                                }
                              ],
                              "text_is_container": false,
                              "under_line": false
                            }
                          ]
                        ],
                        "single_height": 36,
                        "text_box_height": 36,
                        "text_entity_list_index": 8,
                        "text_font_width": 212,
                        "text_lang": "en"
                      }
                    },
                    "processingMeta": {
                      "surfaceArea": 9116,
                      "detectionScore": 0,
                      "textContainerized": false
                    },
                    "contentData": {
                      "textValue": "Comples Regietraion"
                    }
                  }
                ],
                "contentData": {
                  "imageSource": ""
                }
              },
              {
                "elementId": "TextView_880_565_333_139_18",
                "elementName": "Complete\nRegistr",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      894,
                      546
                    ],
                    "orginCoord": [
                      894,
                      565
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 319
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 139
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Inter",
                    "fontScoreRec": 0.998676824150607,
                    "fontSize": 76,
                    "fontStyle": "bold",
                    "fontStyleRec": "Bold Italic",
                    "textAlign": [
                      "CENTER",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      33,
                      33,
                      33
                    ]
                  },
                  "opacityLevel": 255,
                  "rotationAngle": 0,
                  "textExtraction": {
                    "rows_text_position": [
                      [
                        {
                          "binary": null,
                          "binary_height": 67,
                          "index": 61,
                          "lang": "en",
                          "ocr_box": [
                            [
                              917,
                              565
                            ],
                            [
                              1175,
                              565
                            ],
                            [
                              1175,
                              641
                            ],
                            [
                              917,
                              641
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.999947190284729,
                          "single_box": true,
                          "style": null,
                          "text": "Complete",
                          "text_font_list": [
                            {
                              "class_id": 201,
                              "label": "Barlow-Bold Italic",
                              "probability": 0.5291265845298767
                            },
                            {
                              "class_id": 143,
                              "label": "Asap-Bold Italic",
                              "probability": 0.34668782353401184
                            },
                            {
                              "class_id": 1368,
                              "label": "Puritan-Bold Italic",
                              "probability": 0.053062714636325836
                            },
                            {
                              "class_id": 1324,
                              "label": "Playpen Sans-Bold",
                              "probability": 0.01619843766093254
                            },
                            {
                              "class_id": 209,
                              "label": "Barlow Semi Condensed-Bold Italic",
                              "probability": 0.009961624629795551
                            },
                            {
                              "class_id": 348,
                              "label": "Carter One-Regular",
                              "probability": 0.008408416993916035
                            },
                            {
                              "class_id": 343,
                              "label": "Carlito-Bold Italic",
                              "probability": 0.005519230384379625
                            },
                            {
                              "class_id": 402,
                              "label": "Comic Sans MS-Bold",
                              "probability": 0.0037706177681684494
                            },
                            {
                              "class_id": 1373,
                              "label": "Quantico-Bold Italic",
                              "probability": 0.0024723021779209375
                            },
                            {
                              "class_id": 709,
                              "label": "Gorditas-Regular",
                              "probability": 0.0015109744854271412
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ],
                      [
                        {
                          "binary": null,
                          "binary_height": 85,
                          "index": 62,
                          "lang": "en",
                          "ocr_box": [
                            [
                              884,
                              618
                            ],
                            [
                              1208,
                              618
                            ],
                            [
                              1208,
                              704
                            ],
                            [
                              884,
                              704
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.9999712109565735,
                          "single_box": true,
                          "style": null,
                          "text": "Registration",
                          "text_font_list": [
                            {
                              "class_id": 143,
                              "label": "Asap-Bold Italic",
                              "probability": 0.7932194471359253
                            },
                            {
                              "class_id": 201,
                              "label": "Barlow-Bold Italic",
                              "probability": 0.19614282250404358
                            },
                            {
                              "class_id": 209,
                              "label": "Barlow Semi Condensed-Bold Italic",
                              "probability": 0.005995841696858406
                            },
                            {
                              "class_id": 606,
                              "label": "Finlandica-Bold Italic",
                              "probability": 0.0013404395431280136
                            },
                            {
                              "class_id": 1930,
                              "label": "Zilla Slab-Bold Italic",
                              "probability": 0.000594412675127387
                            },
                            {
                              "class_id": 906,
                              "label": "Krub-Bold Italic",
                              "probability": 0.0004368939553387463
                            },
                            {
                              "class_id": 7,
                              "label": "Acme-Regular",
                              "probability": 0.0003568906686268747
                            },
                            {
                              "class_id": 348,
                              "label": "Carter One-Regular",
                              "probability": 0.0003185040259268135
                            },
                            {
                              "class_id": 681,
                              "label": "Georama-Bold Italic",
                              "probability": 0.00014324743824545294
                            },
                            {
                              "class_id": 584,
                              "label": "Farro-Bold",
                              "probability": 0.00012832450738642365
                            }
                          ],
                          "text_is_container": false,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 76,
                    "text_box_height": 139,
                    "text_entity_list_index": 1,
                    "text_font_width": 324,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 46287,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "textValue": "Complete\nRegistration"
                }
              },
              {
                "elementId": "ImageView_TextView_820_699_447_48_19",
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
                      834,
                      684
                    ],
                    "orginCoord": [
                      827,
                      699
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 440
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 48
                  }
                },
                "processingMeta": {
                  "surfaceArea": 21456,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-03/5d3cd2a9-19fa-4ca1-8037-0a7019ce6b14/out/20250903143942684509_d04a99dc4f1646ac9531b6428cb0eb7c/20250903143950-image_5d3cd2a9-19fa-4ca1-8037-0a7019ce6b14.png"
                }
              },
              {
                "elementId": "Button_830_72_457_351_20",
                "elementName": "Button",
                "elementType": "Layer",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      830,
                      53
                    ],
                    "orginCoord": [
                      830,
                      72
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 457
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 351
                  }
                },
                "processingMeta": {
                  "surfaceArea": 160407,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "childElements": [
                  {
                    "elementId": "bg_Button_830_72_457_351_21",
                    "elementName": "Background",
                    "elementType": "Image",
                    "layoutConfig": {
                      "positionMode": "Absolute",
                      "absoluteAttrs": {
                        "align": [
                          "LEFT",
                          "TOP"
                        ],
                        "coord": [
                          5,
                          7
                        ],
                        "orginCoord": [
                          835,
                          79
                        ]
                      }
                    },
                    "styleConfig": {
                      "widthSpec": {
                        "sizing": "FIXED",
                        "value": 444
                      },
                      "heightSpec": {
                        "sizing": "FIXED",
                        "value": 335
                      }
                    },
                    "processingMeta": {
                      "surfaceArea": 160407,
                      "detectionScore": 0,
                      "textContainerized": false
                    },
                    "contentData": {
                      "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-09-03/70d2528c-9135-470b-82ff-5d228e9de3c2/out/20250903143942684509_d04a99dc4f1646ac9531b6428cb0eb7c/20250903143950-image_70d2528c-9135-470b-82ff-5d228e9de3c2.png"
                    }
                  },
                  {
                    "elementId": "TextView_905_199_302_127_22",
                    "elementName": "10 minutes\nlater",
                    "elementType": "Text",
                    "layoutConfig": {
                      "positionMode": "Absolute",
                      "absoluteAttrs": {
                        "align": [
                          "LEFT",
                          "TOP"
                        ],
                        "coord": [
                          85,
                          127
                        ],
                        "orginCoord": [
                          915,
                          199
                        ]
                      }
                    },
                    "styleConfig": {
                      "widthSpec": {
                        "sizing": "FIXED",
                        "value": 292
                      },
                      "heightSpec": {
                        "sizing": "FIXED",
                        "value": 127
                      },
                      "textConfig": {
                        "fontFamily": "Inter",
                        "fontFamilyRec": "Inter",
                        "fontScoreRec": 0.9174778289161623,
                        "fontSize": 60,
                        "fontStyle": "bold",
                        "fontStyleRec": "Bold",
                        "textAlign": [
                          "CENTER",
                          "CENTER"
                        ]
                      },
                      "textColor": {
                        "rgbValues": [
                          28,
                          28,
                          28
                        ]
                      },
                      "opacityLevel": 255,
                      "rotationAngle": 0,
                      "textExtraction": {
                        "rows_text_position": [
                          [
                            {
                              "binary": null,
                              "binary_height": 46,
                              "index": 63,
                              "lang": "en",
                              "ocr_box": [
                                [
                                  905,
                                  199
                                ],
                                [
                                  1207,
                                  199
                                ],
                                [
                                  1207,
                                  267
                                ],
                                [
                                  905,
                                  267
                                ]
                              ],
                              "parent_index": null,
                              "rec_score": 0.9996088147163391,
                              "single_box": true,
                              "style": null,
                              "text": "10 minutes",
                              "text_font_list": [
                                {
                                  "class_id": 200,
                                  "label": "Barlow-Bold",
                                  "probability": 0.7452951073646545
                                },
                                {
                                  "class_id": 613,
                                  "label": "Fira Sans-Bold",
                                  "probability": 0.03524399548768997
                                },
                                {
                                  "class_id": 1459,
                                  "label": "Roboto-Bold",
                                  "probability": 0.03242991864681244
                                },
                                {
                                  "class_id": 1394,
                                  "label": "Radio Canada Big-Bold",
                                  "probability": 0.02647567167878151
                                },
                                {
                                  "class_id": 584,
                                  "label": "Farro-Bold",
                                  "probability": 0.018050096929073334
                                },
                                {
                                  "class_id": 14,
                                  "label": "Afacad-Bold",
                                  "probability": 0.015833750367164612
                                },
                                {
                                  "class_id": 195,
                                  "label": "Balsamiq Sans-Bold",
                                  "probability": 0.014536679722368717
                                },
                                {
                                  "class_id": 1228,
                                  "label": "Outfit-Bold",
                                  "probability": 0.01405913196504116
                                },
                                {
                                  "class_id": 1456,
                                  "label": "Righteous-Regular",
                                  "probability": 0.010760647244751453
                                },
                                {
                                  "class_id": 505,
                                  "label": "Dosis-Bold",
                                  "probability": 0.007099451031535864
                                }
                              ],
                              "text_is_container": false,
                              "under_line": false
                            }
                          ],
                          [
                            {
                              "binary": null,
                              "binary_height": 59,
                              "index": 64,
                              "lang": "en",
                              "ocr_box": [
                                [
                                  958,
                                  256
                                ],
                                [
                                  1156,
                                  256
                                ],
                                [
                                  1156,
                                  326
                                ],
                                [
                                  958,
                                  326
                                ]
                              ],
                              "parent_index": null,
                              "rec_score": 0.9993308186531067,
                              "single_box": true,
                              "style": null,
                              "text": "later....",
                              "text_font_list": [
                                {
                                  "class_id": 505,
                                  "label": "Dosis-Bold",
                                  "probability": 0.4599735140800476
                                },
                                {
                                  "class_id": 1459,
                                  "label": "Roboto-Bold",
                                  "probability": 0.14585016667842865
                                },
                                {
                                  "class_id": 613,
                                  "label": "Fira Sans-Bold",
                                  "probability": 0.08453984558582306
                                },
                                {
                                  "class_id": 351,
                                  "label": "Catamaran-Bold",
                                  "probability": 0.06730341166257858
                                },
                                {
                                  "class_id": 200,
                                  "label": "Barlow-Bold",
                                  "probability": 0.06516523659229279
                                },
                                {
                                  "class_id": 807,
                                  "label": "Inter-Bold",
                                  "probability": 0.03231304883956909
                                },
                                {
                                  "class_id": 14,
                                  "label": "Afacad-Bold",
                                  "probability": 0.02491733804345131
                                },
                                {
                                  "class_id": 1439,
                                  "label": "Reddit Sans-Bold",
                                  "probability": 0.021082540974020958
                                },
                                {
                                  "class_id": 1248,
                                  "label": "PT Sans-Bold",
                                  "probability": 0.009405534714460373
                                },
                                {
                                  "class_id": 1210,
                                  "label": "Onest-Bold",
                                  "probability": 0.006927191745489836
                                }
                              ],
                              "text_is_container": false,
                              "under_line": false
                            }
                          ]
                        ],
                        "single_height": 60,
                        "text_box_height": 127,
                        "text_entity_list_index": 2,
                        "text_font_width": 302,
                        "text_lang": "en"
                      }
                    },
                    "processingMeta": {
                      "surfaceArea": 38354,
                      "detectionScore": 0,
                      "textContainerized": false
                    },
                    "contentData": {
                      "textValue": "10 minutes\nlater...."
                    }
                  }
                ],
                "contentData": {
                  "imageSource": ""
                }
              }
            ],
            "contentData": {
              "imageSource": ""
            }
          }
        ]
      }
    }
  }
  // const formated = convertCodiaToCanva(data)
  return {
    data: data
  }
  return fetchWithAuth(`/v1/designs/${designId}`);

}

// function convertCodiaToCanva(codiaJson) {
//   const canvaTemplate = {
//     width: codiaJson.data.visualElement.styleConfig.widthSpec.value,
//     height: codiaJson.data.visualElement.styleConfig.heightSpec.value,
//     version: "6.6.2",
//     canvasData: [],
//     background: "#000000"
//   };

//   // Helper function to convert RGB array to CSS color
//   function rgbToCss(rgbArray) {
//     return `rgb(${rgbArray.join(',')})`;
//   }

//   // Process child elements
//   codiaJson.data.visualElement.childElements.forEach(child => {
//     if (child.elementType === "Image") {
//       canvaTemplate.canvasData.push({
//         cropX: 0,
//         cropY: 0,
//         type: "Image",
//         version: "6.6.2",
//         originX: "left",
//         originY: "top",
//         left: child.layoutConfig.absoluteAttrs.coord[0],
//         top: child.layoutConfig.absoluteAttrs.coord[1],
//         width: child.styleConfig.widthSpec.value,
//         height: child.styleConfig.heightSpec.value,
//         fill: "rgb(0,0,0)",
//         stroke: null,
//         strokeWidth: 0,
//         strokeDashArray: null,
//         strokeLineCap: "butt",
//         strokeDashOffset: 0,
//         strokeLineJoin: "miter",
//         strokeUniform: false,
//         strokeMiterLimit: 4,
//         scaleX: 1,
//         scaleY: 1,
//         angle: child.styleConfig.rotationAngle || 0,
//         flipX: false,
//         flipY: false,
//         opacity: (child.styleConfig.opacityLevel || 255) / 255,
//         shadow: null,
//         visible: true,
//         backgroundColor: "",
//         fillRule: "nonzero",
//         paintFirst: "fill",
//         globalCompositeOperation: "source-over",
//         skewX: 0,
//         skewY: 0,
//         src: child.contentData.imageSource,
//         crossOrigin: "anonymous",
//         filters: []
//       });
//     } else if (child.elementType === "Text") {
//       const textConfig = child.styleConfig.textConfig;
//       const fontWeight = textConfig.fontStyle === "bold" ? "bold" : "normal";
//       const fontStyle = textConfig.fontStyle === "italic" ? "italic" : "normal";

//       canvaTemplate.canvasData.push({
//         fontSize: textConfig.fontSize,
//         fontWeight: fontWeight,
//         fontFamily: textConfig.fontFamily,
//         fontStyle: fontStyle,
//         lineHeight: 1.16,
//         text: child.contentData.textValue,
//         charSpacing: 0,
//         textAlign: textConfig.textAlign[0].toLowerCase(),
//         styles: [],
//         pathStartOffset: 0,
//         pathSide: "left",
//         pathAlign: "baseline",
//         underline: false,
//         overline: false,
//         linethrough: false,
//         textBackgroundColor: "",
//         direction: "ltr",
//         type: "IText",
//         version: "6.6.2",
//         originX: "left",
//         originY: "top",
//         left: child.layoutConfig.absoluteAttrs.coord[0],
//         top: child.layoutConfig.absoluteAttrs.coord[1],
//         width: child.styleConfig.widthSpec.value,
//         height: child.styleConfig.heightSpec.value,
//         fill: rgbToCss(child.styleConfig.textColor.rgbValues),
//         stroke: null,
//         strokeWidth: 1,
//         strokeDashArray: null,
//         strokeLineCap: "butt",
//         strokeDashOffset: 0,
//         strokeLineJoin: "miter",
//         strokeUniform: false,
//         strokeMiterLimit: 4,
//         scaleX: 1,
//         scaleY: 1,
//         angle: child.styleConfig.rotationAngle || 0,
//         flipX: false,
//         flipY: false,
//         opacity: (child.styleConfig.opacityLevel || 255) / 255,
//         shadow: null,
//         visible: true,
//         backgroundColor: "",
//         fillRule: "nonzero",
//         paintFirst: "fill",
//         globalCompositeOperation: "source-over",
//         skewX: 0,
//         skewY: 0
//       });
//     }
//   });

//   return canvaTemplate;
// }

// Usage:
// const canvaJson = convertCodiaToCanva(codiaJson);

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

function dataURLtoBlob(dataURL) {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

export async function saveCanvasState(
  canvas,
  token = null,
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
    // give unique name to savefile
    const dataURL = canvas.toDataURL("image/png");
    const blob = dataURLtoBlob(dataURL);
    const uniqueName = `design_${Date.now()}.png`;
    const file = new File([blob], uniqueName, { type: "image/png" });

    const formData = new FormData();
    formData.append("file", file);
    formData.append("designJson", JSON.stringify(designData));
    const response = await axios.post(`http://20.244.45.157:4001/api/v1/editor/save`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data, "response data");



    // return saveDesign(designData, designId);
  } catch (error) {
    console.error("Error saving canvas state:", error);
    throw error;
  }
}
