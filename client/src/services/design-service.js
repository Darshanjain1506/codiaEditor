import { fetchWithAuth } from "./base-service";

export async function getUserDesigns() {
  return fetchWithAuth("/v1/designs");
}

export async function getUserDesignByID(designId) {

  const data = {
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
                0,
                0,
                0
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
            "elementId": "Background_0_0_1024_1024_1",
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
              "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-08-25/c2fe9371-775a-45bb-abdf-031632e7b2e6/out/20250825140950021273_9c7d3c5e688e429499bc40f463baabe5/20250825140955-image_c2fe9371-775a-45bb-abdf-031632e7b2e6.png"
            }
          },
          {
            "elementId": "ImageView_29_306_981_716_2",
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
                  29,
                  306
                ],
                "orginCoord": [
                  29,
                  306
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 981
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 716
              }
            },
            "processingMeta": {
              "surfaceArea": 702396,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-08-25/8cd2e0e3-315c-45e0-9d54-778e92232e35/out/20250825140950021273_9c7d3c5e688e429499bc40f463baabe5/20250825140955-image_8cd2e0e3-315c-45e0-9d54-778e92232e35.png"
            }
          },
          {
            "elementId": "ImageView_50_45_943_955_3",
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
                  50,
                  45
                ],
                "orginCoord": [
                  50,
                  45
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 943
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 955
              }
            },
            "processingMeta": {
              "surfaceArea": 900565,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-08-25/bd998754-9066-464c-90b3-8f7433d621c6/out/20250825140950021273_9c7d3c5e688e429499bc40f463baabe5/20250825140955-image_bd998754-9066-464c-90b3-8f7433d621c6.png"
            }
          },
          {
            "elementId": "ImageView_74_311_799_704_4",
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
                  74,
                  311
                ],
                "orginCoord": [
                  74,
                  311
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 799
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 704
              }
            },
            "processingMeta": {
              "surfaceArea": 562496,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "imageSource": "https://codia-f2c.s3.us-west-1.amazonaws.com/any2design/image/server/2025-08-25/3aa24f24-3012-4205-98b6-0facb1d3763b/out/20250825140950021273_9c7d3c5e688e429499bc40f463baabe5/20250825140955-image_3aa24f24-3012-4205-98b6-0facb1d3763b.png"
            }
          },
          {
            "elementId": "Button_670_860_302_117_5",
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
                  670,
                  860
                ],
                "orginCoord": [
                  670,
                  860
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 302
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 117
              }
            },
            "processingMeta": {
              "surfaceArea": 35334,
              "detectionScore": 0,
              "textContainerized": false
            },
            "childElements": [
              {
                "elementId": "bg_Button_670_860_302_117_6",
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
                      3
                    ],
                    "orginCoord": [
                      675,
                      863
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 294
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 110
                  },
                  "borderConfig": {
                    "borderColor": {
                      "rgbValues": [
                        189,
                        151,
                        112
                      ]
                    },
                    "borderRadius": [
                      48,
                      48,
                      48,
                      48
                    ],
                    "borderWidth": 1
                  },
                  "textColor": {
                    "rgbValues": [
                      235,
                      227,
                      177
                    ]
                  },
                  "opacityLevel": 255
                },
                "processingMeta": {
                  "surfaceArea": 35334,
                  "detectionScore": 0,
                  "textContainerized": false
                },
                "contentData": {
                  "imageSource": ""
                }
              },
              {
                "elementId": "TextView_729_885_188_66_7",
                "elementName": "₹999",
                "elementType": "Text",
                "layoutConfig": {
                  "positionMode": "Absolute",
                  "absoluteAttrs": {
                    "align": [
                      "LEFT",
                      "TOP"
                    ],
                    "coord": [
                      66,
                      25
                    ],
                    "orginCoord": [
                      736,
                      885
                    ]
                  }
                },
                "styleConfig": {
                  "widthSpec": {
                    "sizing": "FIXED",
                    "value": 181
                  },
                  "heightSpec": {
                    "sizing": "FIXED",
                    "value": 66
                  },
                  "textConfig": {
                    "fontFamily": "Inter",
                    "fontFamilyRec": "Inter",
                    "fontScoreRec": 0.9908781864796765,
                    "fontSize": 54,
                    "fontStyle": "bold",
                    "fontStyleRec": "Bold",
                    "textAlign": [
                      "LEFT",
                      "CENTER"
                    ]
                  },
                  "textColor": {
                    "rgbValues": [
                      139,
                      80,
                      47
                    ]
                  },
                  "opacityLevel": 255,
                  "rotationAngle": 0,
                  "textExtraction": {
                    "rows_text_position": [
                      [
                        {
                          "binary": null,
                          "binary_height": 54,
                          "index": 111,
                          "lang": "en",
                          "ocr_box": [
                            [
                              729,
                              885
                            ],
                            [
                              917,
                              885
                            ],
                            [
                              917,
                              951
                            ],
                            [
                              729,
                              951
                            ]
                          ],
                          "parent_index": null,
                          "rec_score": 0.997097373008728,
                          "single_box": true,
                          "style": null,
                          "text": "₹999",
                          "text_font_list": [
                            {
                              "class_id": 1423,
                              "label": "Red Hat Display-Bold",
                              "probability": 0.9185557961463928
                            },
                            {
                              "class_id": 88,
                              "label": "Anonymous Pro-Bold",
                              "probability": 0.0627831444144249
                            },
                            {
                              "class_id": 1406,
                              "label": "Raleway-Bold",
                              "probability": 0.002757549751549959
                            },
                            {
                              "class_id": 1481,
                              "label": "RocknRoll One-Regular",
                              "probability": 0.0016643003327772021
                            },
                            {
                              "class_id": 653,
                              "label": "Gabarito-Regular",
                              "probability": 0.0013145845150575042
                            },
                            {
                              "class_id": 1028,
                              "label": "Manrope-Bold",
                              "probability": 0.0011915391078218818
                            },
                            {
                              "class_id": 1125,
                              "label": "Mulish-Bold",
                              "probability": 0.0011554103111848235
                            },
                            {
                              "class_id": 904,
                              "label": "Krona One-Regular",
                              "probability": 0.0005503930733539164
                            },
                            {
                              "class_id": 42,
                              "label": "Alexandria-Regular",
                              "probability": 0.0004721861914731562
                            },
                            {
                              "class_id": 1424,
                              "label": "Red Hat Display-Bold Italic",
                              "probability": 0.00043328263564035296
                            }
                          ],
                          "text_is_container": true,
                          "under_line": false
                        }
                      ]
                    ],
                    "single_height": 54,
                    "text_box_height": 54,
                    "text_entity_list_index": 4,
                    "text_font_width": 188,
                    "text_lang": "en"
                  }
                },
                "processingMeta": {
                  "surfaceArea": 12408,
                  "detectionScore": 0,
                  "textContainerized": true
                },
                "contentData": {
                  "textValue": "₹999"
                }
              }
            ],
            "contentData": {
              "imageSource": ""
            }
          },
          {
            "elementId": "TextView_99_915_419_75_8",
            "elementName": "Available at Bet",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  106,
                  915
                ],
                "orginCoord": [
                  106,
                  915
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 412
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 75
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": "Inter",
                "fontScoreRec": 0.9978400236868765,
                "fontSize": 24,
                "fontStyle": "medium",
                "fontStyleRec": "Regular",
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  228,
                  208,
                  194
                ]
              },
              "opacityLevel": 255,
              "rotationAngle": 0,
              "textExtraction": {
                "rows_text_position": [
                  [
                    {
                      "binary": null,
                      "binary_height": 24,
                      "index": 99,
                      "lang": "en",
                      "ocr_box": [
                        [
                          103,
                          915
                        ],
                        [
                          515,
                          915
                        ],
                        [
                          515,
                          952
                        ],
                        [
                          103,
                          952
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9915362596511841,
                      "single_box": true,
                      "style": null,
                      "text": "Available at Beth Bluen Urban",
                      "text_font_list": [
                        {
                          "class_id": 1457,
                          "label": "Risque-Regular",
                          "probability": 0.18371443450450897
                        },
                        {
                          "class_id": 129,
                          "label": "Arimo-Italic",
                          "probability": 0.09612476080656052
                        },
                        {
                          "class_id": 1583,
                          "label": "Schibsted Grotesk-Regular",
                          "probability": 0.08625422418117523
                        },
                        {
                          "class_id": 1352,
                          "label": "Prociono-Regular",
                          "probability": 0.07825096696615219
                        },
                        {
                          "class_id": 682,
                          "label": "Georama-Italic",
                          "probability": 0.0617154985666275
                        },
                        {
                          "class_id": 523,
                          "label": "Eczar-Regular",
                          "probability": 0.058553531765937805
                        },
                        {
                          "class_id": 1474,
                          "label": "Roboto Serif-Italic",
                          "probability": 0.03952864557504654
                        },
                        {
                          "class_id": 1402,
                          "label": "Radley-Italic",
                          "probability": 0.03332946449518204
                        },
                        {
                          "class_id": 1559,
                          "label": "Sanchez-Italic",
                          "probability": 0.02786511927843094
                        },
                        {
                          "class_id": 1582,
                          "label": "Schibsted Grotesk-Italic",
                          "probability": 0.023018285632133484
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ],
                  [
                    {
                      "binary": null,
                      "binary_height": 22,
                      "index": 100,
                      "lang": "en",
                      "ocr_box": [
                        [
                          101,
                          953
                        ],
                        [
                          302,
                          953
                        ],
                        [
                          302,
                          987
                        ],
                        [
                          101,
                          987
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.997675359249115,
                      "single_box": true,
                      "style": null,
                      "text": "Pet Locationts",
                      "text_font_list": [
                        {
                          "class_id": 818,
                          "label": "Inter-Regular",
                          "probability": 0.9711721539497375
                        },
                        {
                          "class_id": 1471,
                          "label": "Roboto-Regular",
                          "probability": 0.022275786846876144
                        },
                        {
                          "class_id": 1465,
                          "label": "Roboto Flex-Regular",
                          "probability": 0.0014136246172711253
                        },
                        {
                          "class_id": 816,
                          "label": "Inter-Medium",
                          "probability": 0.0012301276437938213
                        },
                        {
                          "class_id": 740,
                          "label": "Hanken Grotesk-Regular",
                          "probability": 0.0007639296818524599
                        },
                        {
                          "class_id": 141,
                          "label": "Arvo-Regular",
                          "probability": 0.0006853459635749459
                        },
                        {
                          "class_id": 1542,
                          "label": "SF NS Rounded-Regular",
                          "probability": 0.0003369537298567593
                        },
                        {
                          "class_id": 1397,
                          "label": "Radio Canada Big-Regular",
                          "probability": 0.0002738730108831078
                        },
                        {
                          "class_id": 1365,
                          "label": "Public Sans-Regular",
                          "probability": 0.0002056392841041088
                        },
                        {
                          "class_id": 662,
                          "label": "Geist-Regular",
                          "probability": 0.00016793492250144482
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 24,
                "text_box_height": 72,
                "text_entity_list_index": 1,
                "text_font_width": 412,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 31425,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "Available at Beth Bluen Urban\nPet Locationts"
            }
          },
          {
            "elementId": "TextView_99_814_310_96_9",
            "elementName": "Preventive Care\n",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  106,
                  814
                ],
                "orginCoord": [
                  106,
                  814
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 303
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 96
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": "Inter",
                "fontScoreRec": 0.9975286460976349,
                "fontSize": 38,
                "fontStyle": "semi_bold",
                "fontStyleRec": "Medium",
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  229,
                  215,
                  199
                ]
              },
              "opacityLevel": 255,
              "rotationAngle": 0,
              "textExtraction": {
                "rows_text_position": [
                  [
                    {
                      "binary": null,
                      "binary_height": 29,
                      "index": 101,
                      "lang": "en",
                      "ocr_box": [
                        [
                          102,
                          817
                        ],
                        [
                          381,
                          817
                        ],
                        [
                          381,
                          856
                        ],
                        [
                          102,
                          856
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9962054491043091,
                      "single_box": true,
                      "style": null,
                      "text": "Preventive Care",
                      "text_font_list": [
                        {
                          "class_id": 816,
                          "label": "Inter-Medium",
                          "probability": 0.5315864682197571
                        },
                        {
                          "class_id": 819,
                          "label": "Inter-Semi Bold",
                          "probability": 0.26792579889297485
                        },
                        {
                          "class_id": 1028,
                          "label": "Manrope-Bold",
                          "probability": 0.10158876329660416
                        },
                        {
                          "class_id": 1397,
                          "label": "Radio Canada Big-Regular",
                          "probability": 0.0931042954325676
                        },
                        {
                          "class_id": 653,
                          "label": "Gabarito-Regular",
                          "probability": 0.0025500350166112185
                        },
                        {
                          "class_id": 1302,
                          "label": "PingFang SC-Semibold",
                          "probability": 0.0016192197799682617
                        },
                        {
                          "class_id": 818,
                          "label": "Inter-Regular",
                          "probability": 0.00039962248411029577
                        },
                        {
                          "class_id": 877,
                          "label": "Karla-Bold",
                          "probability": 0.00017077506345231086
                        },
                        {
                          "class_id": 1054,
                          "label": "McLaren-Regular",
                          "probability": 0.0001298410352319479
                        },
                        {
                          "class_id": 312,
                          "label": "Cabin Sketch-Regular",
                          "probability": 0.00007304665632545948
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ],
                  [
                    {
                      "binary": null,
                      "binary_height": 36,
                      "index": 102,
                      "lang": "en",
                      "ocr_box": [
                        [
                          101,
                          861
                        ],
                        [
                          407,
                          861
                        ],
                        [
                          407,
                          910
                        ],
                        [
                          101,
                          910
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9978137612342834,
                      "single_box": true,
                      "style": null,
                      "text": "Cheirt Enguyeney",
                      "text_font_list": [
                        {
                          "class_id": 1397,
                          "label": "Radio Canada Big-Regular",
                          "probability": 0.5038989782333374
                        },
                        {
                          "class_id": 816,
                          "label": "Inter-Medium",
                          "probability": 0.4519144594669342
                        },
                        {
                          "class_id": 126,
                          "label": "Arial-Regular",
                          "probability": 0.01838698424398899
                        },
                        {
                          "class_id": 1077,
                          "label": "Microsoft Sans Serif-Regular",
                          "probability": 0.00987169798463583
                        },
                        {
                          "class_id": 1054,
                          "label": "McLaren-Regular",
                          "probability": 0.004247104749083519
                        },
                        {
                          "class_id": 198,
                          "label": "Balsamiq Sans-Regular",
                          "probability": 0.0038036503829061985
                        },
                        {
                          "class_id": 653,
                          "label": "Gabarito-Regular",
                          "probability": 0.001543535036034882
                        },
                        {
                          "class_id": 468,
                          "label": "DIN Alternate-Bold",
                          "probability": 0.0014007388381287456
                        },
                        {
                          "class_id": 819,
                          "label": "Inter-Semi Bold",
                          "probability": 0.001353552215732634
                        },
                        {
                          "class_id": 92,
                          "label": "Anta-Regular",
                          "probability": 0.0007736227125860751
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 38,
                "text_box_height": 93,
                "text_entity_list_index": 2,
                "text_font_width": 306,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 29760,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "Preventive Care\nCheirt Enguyeney"
            }
          },
          {
            "elementId": "TextView_441_636_93_48_10",
            "elementName": "Wellness\nPackage",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  447,
                  636
                ],
                "orginCoord": [
                  447,
                  636
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 87
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 48
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": "Inter",
                "fontScoreRec": 0.8103348477743566,
                "fontSize": 26,
                "fontStyle": "regular",
                "fontStyleRec": "Regular",
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  58,
                  126,
                  175
                ]
              },
              "opacityLevel": 255,
              "rotationAngle": 0,
              "textExtraction": {
                "rows_text_position": [
                  [
                    {
                      "binary": null,
                      "binary_height": 23,
                      "index": 106,
                      "lang": "en",
                      "ocr_box": [
                        [
                          444,
                          636
                        ],
                        [
                          529,
                          636
                        ],
                        [
                          529,
                          662
                        ],
                        [
                          444,
                          662
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9796997308731079,
                      "single_box": true,
                      "style": null,
                      "text": "Wellness",
                      "text_font_list": [
                        {
                          "class_id": 198,
                          "label": "Balsamiq Sans-Regular",
                          "probability": 0.7408759593963623
                        },
                        {
                          "class_id": 164,
                          "label": "Autour One-Regular",
                          "probability": 0.045018259435892105
                        },
                        {
                          "class_id": 312,
                          "label": "Cabin Sketch-Regular",
                          "probability": 0.038575995713472366
                        },
                        {
                          "class_id": 1339,
                          "label": "Poor Story-Regular",
                          "probability": 0.024767564609646797
                        },
                        {
                          "class_id": 1190,
                          "label": "Nunito-Bold",
                          "probability": 0.01835089549422264
                        },
                        {
                          "class_id": 1691,
                          "label": "Special Elite-Regular",
                          "probability": 0.01119706965982914
                        },
                        {
                          "class_id": 1927,
                          "label": "Zeyada-Regular",
                          "probability": 0.008220446296036243
                        },
                        {
                          "class_id": 1091,
                          "label": "Monaco-Regular",
                          "probability": 0.007148057222366333
                        },
                        {
                          "class_id": 1761,
                          "label": "Tilt Neon-Regular",
                          "probability": 0.005383939947932959
                        },
                        {
                          "class_id": 434,
                          "label": "Courier New-Bold",
                          "probability": 0.004594297613948584
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ],
                  [
                    {
                      "binary": null,
                      "binary_height": 27,
                      "index": 107,
                      "lang": "en",
                      "ocr_box": [
                        [
                          444,
                          653
                        ],
                        [
                          532,
                          653
                        ],
                        [
                          532,
                          684
                        ],
                        [
                          444,
                          684
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9591816663742065,
                      "single_box": true,
                      "style": null,
                      "text": "Packager",
                      "text_font_list": [
                        {
                          "class_id": 369,
                          "label": "Chelsea Market-Regular",
                          "probability": 0.8646562695503235
                        },
                        {
                          "class_id": 716,
                          "label": "Grandstander-Regular",
                          "probability": 0.03386915847659111
                        },
                        {
                          "class_id": 840,
                          "label": "Jersey 15-Regular",
                          "probability": 0.010729831643402576
                        },
                        {
                          "class_id": 1457,
                          "label": "Risque-Regular",
                          "probability": 0.009983002208173275
                        },
                        {
                          "class_id": 312,
                          "label": "Cabin Sketch-Regular",
                          "probability": 0.009900718927383423
                        },
                        {
                          "class_id": 715,
                          "label": "Grandstander-Italic",
                          "probability": 0.00988828670233488
                        },
                        {
                          "class_id": 273,
                          "label": "Black And White Picture-Regular",
                          "probability": 0.0034287716262042522
                        },
                        {
                          "class_id": 1004,
                          "label": "Love Ya Like A Sister-Regular",
                          "probability": 0.0032058937940746546
                        },
                        {
                          "class_id": 218,
                          "label": "Beiruti-Bold",
                          "probability": 0.002838420681655407
                        },
                        {
                          "class_id": 1435,
                          "label": "Red Rose-Bold",
                          "probability": 0.002323199063539505
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 26,
                "text_box_height": 48,
                "text_entity_list_index": 6,
                "text_font_width": 88,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 4464,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "Wellness\nPackager"
            }
          },
          {
            "elementId": "TextView_442_609_162_21_11",
            "elementName": "Prevethn Nult.Sp",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  446,
                  609
                ],
                "orginCoord": [
                  446,
                  609
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
                "value": 21
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": null,
                "fontScoreRec": null,
                "fontSize": 16,
                "fontStyle": "regular",
                "fontStyleRec": null,
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  81,
                  90,
                  99
                ]
              },
              "opacityLevel": 255,
              "rotationAngle": 0,
              "textExtraction": {
                "rows_text_position": [
                  [
                    {
                      "binary": null,
                      "binary_height": 16,
                      "index": 113,
                      "lang": "en",
                      "ocr_box": [
                        [
                          442,
                          609
                        ],
                        [
                          604,
                          609
                        ],
                        [
                          604,
                          630
                        ],
                        [
                          442,
                          630
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9759500622749329,
                      "single_box": true,
                      "style": null,
                      "text": "Prevethn Nult.Specially",
                      "text_font_list": [
                        {
                          "class_id": 1057,
                          "label": "MedievalSharp-Regular",
                          "probability": 0.34573793411254883
                        },
                        {
                          "class_id": 171,
                          "label": "Averia Libre-Regular",
                          "probability": 0.22819304466247559
                        },
                        {
                          "class_id": 312,
                          "label": "Cabin Sketch-Regular",
                          "probability": 0.1561548113822937
                        },
                        {
                          "class_id": 1481,
                          "label": "RocknRoll One-Regular",
                          "probability": 0.024650147184729576
                        },
                        {
                          "class_id": 632,
                          "label": "Forum-Regular",
                          "probability": 0.021593984216451645
                        },
                        {
                          "class_id": 716,
                          "label": "Grandstander-Regular",
                          "probability": 0.015937112271785736
                        },
                        {
                          "class_id": 1004,
                          "label": "Love Ya Like A Sister-Regular",
                          "probability": 0.011866570450365543
                        },
                        {
                          "class_id": 1224,
                          "label": "Orienta-Regular",
                          "probability": 0.009301564656198025
                        },
                        {
                          "class_id": 1367,
                          "label": "Puritan-Bold",
                          "probability": 0.008105107583105564
                        },
                        {
                          "class_id": 1083,
                          "label": "Modern Antiqua-Regular",
                          "probability": 0.0071536218747496605
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 16,
                "text_box_height": 16,
                "text_entity_list_index": 7,
                "text_font_width": 162,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 3402,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "Prevethn Nult.Specially"
            }
          },
          {
            "elementId": "TextView_483_575_101_28_12",
            "elementName": "vet72",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  487,
                  575
                ],
                "orginCoord": [
                  487,
                  575
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 97
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 28
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": null,
                "fontScoreRec": null,
                "fontSize": 24,
                "fontStyle": "bold",
                "fontStyleRec": null,
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  48,
                  114,
                  156
                ]
              },
              "opacityLevel": 255,
              "rotationAngle": 0,
              "textExtraction": {
                "rows_text_position": [
                  [
                    {
                      "binary": null,
                      "binary_height": 22,
                      "index": 114,
                      "lang": "en",
                      "ocr_box": [
                        [
                          483,
                          575
                        ],
                        [
                          584,
                          575
                        ],
                        [
                          584,
                          603
                        ],
                        [
                          483,
                          603
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9986885786056519,
                      "single_box": true,
                      "style": null,
                      "text": "vet72",
                      "text_font_list": [
                        {
                          "class_id": 351,
                          "label": "Catamaran-Bold",
                          "probability": 0.46421483159065247
                        },
                        {
                          "class_id": 36,
                          "label": "Aleo-Bold",
                          "probability": 0.145326629281044
                        },
                        {
                          "class_id": 1439,
                          "label": "Reddit Sans-Bold",
                          "probability": 0.06160733848810196
                        },
                        {
                          "class_id": 342,
                          "label": "Carlito-Bold",
                          "probability": 0.03375014290213585
                        },
                        {
                          "class_id": 1780,
                          "label": "Trebuchet MS-Bold",
                          "probability": 0.03187039494514465
                        },
                        {
                          "class_id": 369,
                          "label": "Chelsea Market-Regular",
                          "probability": 0.025705009698867798
                        },
                        {
                          "class_id": 1004,
                          "label": "Love Ya Like A Sister-Regular",
                          "probability": 0.015816790983080864
                        },
                        {
                          "class_id": 50,
                          "label": "Allerta Stencil-Regular",
                          "probability": 0.014835244044661522
                        },
                        {
                          "class_id": 1623,
                          "label": "Skranji-Regular",
                          "probability": 0.013894724659621716
                        },
                        {
                          "class_id": 352,
                          "label": "Catamaran-Regular",
                          "probability": 0.012154977768659592
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 24,
                "text_box_height": 24,
                "text_entity_list_index": 8,
                "text_font_width": 101,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 2828,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "vet72"
            }
          },
          {
            "elementId": "TextView_436_533_153_40_13",
            "elementName": "sm-blue",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  442,
                  533
                ],
                "orginCoord": [
                  442,
                  533
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 147
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 40
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": null,
                "fontScoreRec": null,
                "fontSize": 38,
                "fontStyle": "regular",
                "fontStyleRec": null,
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  36,
                  54,
                  68
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
                      "index": 112,
                      "lang": "en",
                      "ocr_box": [
                        [
                          436,
                          533
                        ],
                        [
                          589,
                          533
                        ],
                        [
                          589,
                          573
                        ],
                        [
                          436,
                          573
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9993759989738464,
                      "single_box": true,
                      "style": null,
                      "text": "sm-blue",
                      "text_font_list": [
                        {
                          "class_id": 1481,
                          "label": "RocknRoll One-Regular",
                          "probability": 0.2933040261268616
                        },
                        {
                          "class_id": 342,
                          "label": "Carlito-Bold",
                          "probability": 0.1799796223640442
                        },
                        {
                          "class_id": 369,
                          "label": "Chelsea Market-Regular",
                          "probability": 0.10685040801763535
                        },
                        {
                          "class_id": 312,
                          "label": "Cabin Sketch-Regular",
                          "probability": 0.05715712904930115
                        },
                        {
                          "class_id": 36,
                          "label": "Aleo-Bold",
                          "probability": 0.04225539788603783
                        },
                        {
                          "class_id": 1457,
                          "label": "Risque-Regular",
                          "probability": 0.032343678176403046
                        },
                        {
                          "class_id": 20,
                          "label": "Aladin-Regular",
                          "probability": 0.02923082560300827
                        },
                        {
                          "class_id": 353,
                          "label": "Caudex-Bold",
                          "probability": 0.013526234775781631
                        },
                        {
                          "class_id": 307,
                          "label": "Cabin Condensed-Bold",
                          "probability": 0.012759028002619743
                        },
                        {
                          "class_id": 1489,
                          "label": "Rosario-Bold",
                          "probability": 0.009874558076262474
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 38,
                "text_box_height": 38,
                "text_entity_list_index": 5,
                "text_font_width": 153,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 6120,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "sm-blue"
            }
          },
          {
            "elementId": "TextView_224_243_587_45_14",
            "elementName": "Preventive Care ",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  233,
                  243
                ],
                "orginCoord": [
                  233,
                  243
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 578
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 45
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": "Inter",
                "fontScoreRec": 0.9984240531921387,
                "fontSize": 35,
                "fontStyle": "semi_bold",
                "fontStyleRec": "Medium",
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  218,
                  212,
                  209
                ]
              },
              "opacityLevel": 255,
              "rotationAngle": 0,
              "textExtraction": {
                "rows_text_position": [
                  [
                    {
                      "binary": null,
                      "binary_height": 33,
                      "index": 110,
                      "lang": "en",
                      "ocr_box": [
                        [
                          224,
                          243
                        ],
                        [
                          811,
                          243
                        ],
                        [
                          811,
                          288
                        ],
                        [
                          224,
                          288
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9893447756767273,
                      "single_box": true,
                      "style": null,
                      "text": "Preventive Care That Works.",
                      "text_font_list": [
                        {
                          "class_id": 816,
                          "label": "Inter-Medium",
                          "probability": 0.9984240531921387
                        },
                        {
                          "class_id": 818,
                          "label": "Inter-Regular",
                          "probability": 0.001006956910714507
                        },
                        {
                          "class_id": 819,
                          "label": "Inter-Semi Bold",
                          "probability": 0.00020562272402457893
                        },
                        {
                          "class_id": 662,
                          "label": "Geist-Regular",
                          "probability": 0.00008071361662587151
                        },
                        {
                          "class_id": 1054,
                          "label": "McLaren-Regular",
                          "probability": 0.00005568562482949346
                        },
                        {
                          "class_id": 817,
                          "label": "Inter-Medium Italic",
                          "probability": 0.000051394508773228154
                        },
                        {
                          "class_id": 1397,
                          "label": "Radio Canada Big-Regular",
                          "probability": 0.00002564084206824191
                        },
                        {
                          "class_id": 141,
                          "label": "Arvo-Regular",
                          "probability": 0.00002492496423656121
                        },
                        {
                          "class_id": 742,
                          "label": "Hedvig Letters Sans-Regular",
                          "probability": 0.000013847176887793466
                        },
                        {
                          "class_id": 1343,
                          "label": "Poppins-Regular",
                          "probability": 0.000013551882148021832
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 35,
                "text_box_height": 35,
                "text_entity_list_index": 3,
                "text_font_width": 587,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 26415,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "Preventive Care That Works."
            }
          },
          {
            "elementId": "TextView_174_51_684_187_15",
            "elementName": "KeepThem This\nHa",
            "elementType": "Text",
            "layoutConfig": {
              "positionMode": "Absolute",
              "absoluteAttrs": {
                "align": [
                  "LEFT",
                  "TOP"
                ],
                "coord": [
                  183,
                  51
                ],
                "orginCoord": [
                  183,
                  51
                ]
              }
            },
            "styleConfig": {
              "widthSpec": {
                "sizing": "FIXED",
                "value": 675
              },
              "heightSpec": {
                "sizing": "FIXED",
                "value": 187
              },
              "textConfig": {
                "fontFamily": "Inter",
                "fontFamilyRec": "Times New Roman",
                "fontScoreRec": 0.9972761273384094,
                "fontSize": 96,
                "fontStyle": "bold",
                "fontStyleRec": "Bold",
                "textAlign": [
                  "LEFT",
                  "CENTER"
                ]
              },
              "textColor": {
                "rgbValues": [
                  218,
                  207,
                  166
                ]
              },
              "opacityLevel": 255,
              "rotationAngle": 0,
              "textExtraction": {
                "rows_text_position": [
                  [
                    {
                      "binary": null,
                      "binary_height": 99,
                      "index": 97,
                      "lang": "en",
                      "ocr_box": [
                        [
                          174,
                          51
                        ],
                        [
                          858,
                          51
                        ],
                        [
                          858,
                          161
                        ],
                        [
                          174,
                          161
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.969572901725769,
                      "single_box": true,
                      "style": null,
                      "text": "KeepThem This",
                      "text_font_list": [
                        {
                          "class_id": 479,
                          "label": "DM Serif Text-Regular",
                          "probability": 0.9972761273384094
                        },
                        {
                          "class_id": 772,
                          "label": "Ibarra Real Nova-Bold",
                          "probability": 0.0026019816286861897
                        },
                        {
                          "class_id": 478,
                          "label": "DM Serif Text-Italic",
                          "probability": 0.000060694077546941116
                        },
                        {
                          "class_id": 512,
                          "label": "EB Garamond-Bold",
                          "probability": 0.000008683852684043813
                        },
                        {
                          "class_id": 696,
                          "label": "Gloock-Regular",
                          "probability": 0.000004622298092726851
                        },
                        {
                          "class_id": 1151,
                          "label": "Newsreader-Bold Italic",
                          "probability": 0.000002735082262006472
                        },
                        {
                          "class_id": 1295,
                          "label": "Piazzolla-Bold",
                          "probability": 0.000002456495394653757
                        },
                        {
                          "class_id": 1180,
                          "label": "Noto Serif SC-Bold",
                          "probability": 0.000001984585878744838
                        },
                        {
                          "class_id": 1664,
                          "label": "Songti TC-Bold",
                          "probability": 0.0000015588963151458302
                        },
                        {
                          "class_id": 245,
                          "label": "Big Caslon-Medium",
                          "probability": 0.0000015457650306416326
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ],
                  [
                    {
                      "binary": null,
                      "binary_height": 103,
                      "index": 98,
                      "lang": "en",
                      "ocr_box": [
                        [
                          218,
                          132
                        ],
                        [
                          827,
                          132
                        ],
                        [
                          827,
                          238
                        ],
                        [
                          218,
                          238
                        ]
                      ],
                      "parent_index": null,
                      "rec_score": 0.9901964664459229,
                      "single_box": true,
                      "style": null,
                      "text": "Happy Always",
                      "text_font_list": [
                        {
                          "class_id": 479,
                          "label": "DM Serif Text-Regular",
                          "probability": 0.9959298968315125
                        },
                        {
                          "class_id": 772,
                          "label": "Ibarra Real Nova-Bold",
                          "probability": 0.004028193652629852
                        },
                        {
                          "class_id": 478,
                          "label": "DM Serif Text-Italic",
                          "probability": 0.000017800997738959268
                        },
                        {
                          "class_id": 863,
                          "label": "Judson-Bold",
                          "probability": 0.000002062248995571281
                        },
                        {
                          "class_id": 1764,
                          "label": "Times LT-Regular",
                          "probability": 0.0000019939795947720995
                        },
                        {
                          "class_id": 1295,
                          "label": "Piazzolla-Bold",
                          "probability": 0.0000019704671103681903
                        },
                        {
                          "class_id": 512,
                          "label": "EB Garamond-Bold",
                          "probability": 0.0000016643489288981073
                        },
                        {
                          "class_id": 1180,
                          "label": "Noto Serif SC-Bold",
                          "probability": 0.0000015463969020856894
                        },
                        {
                          "class_id": 1900,
                          "label": "Young Serif-Regular",
                          "probability": 9.023512461681094e-7
                        },
                        {
                          "class_id": 339,
                          "label": "Cardo-Bold",
                          "probability": 8.708857990313845e-7
                        }
                      ],
                      "text_is_container": false,
                      "under_line": false
                    }
                  ]
                ],
                "single_height": 96,
                "text_box_height": 187,
                "text_entity_list_index": 0,
                "text_font_width": 684,
                "text_lang": "en"
              }
            },
            "processingMeta": {
              "surfaceArea": 127908,
              "detectionScore": 0,
              "textContainerized": false
            },
            "contentData": {
              "textValue": "KeepThem This\nHappy Always"
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
