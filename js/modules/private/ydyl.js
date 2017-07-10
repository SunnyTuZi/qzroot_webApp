/**
 * [promptMSG description]
 * @author  wenlongZhao
 * @date      2017-3-7
 * @describe  [一带一路]
 */
define([
    "echo/utils/EventBus",
  ],
  function(
    EventBus
  ) {
    function Ydyl(config) {
      this.config = config;
      this.init();
    }
    Ydyl.prototype = {
      init: function() {
        EventBus.on('YDYL_STARTUP', this.startup, this);
        EventBus.on('All_WIDGETS_CLOSE', this.close, this);

        $("#typeSelector").find("[myType='typeItem']").on("click", this.changeRandomData.bind(this));
        $("#formCloseBtn").on("click", function(){
            $("#formDiv").css("display", "none");
        });

        var placeList_1 = [{
          name: '老挝',
          geoCoord: [101.636357, 19.342378]
        }, {
          name: '越南',
          geoCoord: [105.279022, 15.742415]
        }, {
          name: '泰国',
          geoCoord: [99.925408, 14.383719]
        }, {
          name: '缅甸',
          geoCoord: [95.767619, 20.247926]
        }, {
          name: '孟加拉国',
          geoCoord: [90.616376, 23.848982]
        }, {
          name: '不丹',
          geoCoord: [90.340417, 27.220143]
        }, {
          name: '印度',
          geoCoord: [80.589849, 18.69492]
        }, {
          name: '尼泊尔',
          geoCoord: [83.680595, 28.446775]
        }, {
          name: '巴基斯坦',
          geoCoord: [68.300455, 29.353416]
        }, {
          name: '阿富汗',
          geoCoord: [65.430477, 33.885482]
        }, {
          name: '塔吉克斯坦',
          geoCoord: [72.127093, 37.662373]
        }, {
          name: '吉尔吉斯坦',
          geoCoord: [72.34786, 41.642575]
        }, {
          name: '乌兹别克斯坦',
          geoCoord: [63.167609, 39.851748]
        }, {
          name: '哈萨克斯坦',
          geoCoord: [67.472577, 48.31679]
        }, {
          name: '土库曼斯坦',
          geoCoord: [56.875734, 39.539065]
        }, {
          name: '伊朗',
          geoCoord: [53.932166, 32.493287]
        }, {
          name: '哈塞拜疆',
          geoCoord: [44.659928, 40.669238]
        }, {
          name: '伊拉克',
          geoCoord: [43.335323, 32.990847]
        }, {
          name: '科威特',
          geoCoord: [60.224042, 31.205591]
        }, {
          name: '沙特阿拉伯',
          geoCoord: [44.218393, 24.574561]
        }, {
          name: '阿联酋',
          geoCoord: [54.300112, 23.56098]
        }, {
          name: '阿曼',
          geoCoord: [56.470993, 20.992742]
        }, {
          name: '也门',
          geoCoord: [47.272345, 15.6533]
        }, {
          name: '约旦',
          geoCoord: [36.675502, 29.417868]
        }, {
          name: '埃及',
          geoCoord: [30.052475, 25.846594]
        }, {
          name: '叙利亚',
          geoCoord: [38.552026, 35.345616]
        }, {
          name: '土耳其',
          geoCoord: [35.46128, 39.624483]
        }, {
          name: '格鲁吉儿',
          geoCoord: [44.071215, 42.219576]
        }, {
          name: '保加利亚',
          geoCoord: [27.366469, 41.587348]
        }, {
          name: '罗马尼亚',
          geoCoord: [24.202134, 46.213198]
        }, {
          name: '希腊',
          geoCoord: [22.80394, 37.998001]
        }, {
          name: '阿尔巴尼亚',
          geoCoord: [19.970756, 41.794203]
        }, {
          name: '黑山',
          geoCoord: [19.234864, 43.344355]
        }, {
          name: '克罗地亚',
          geoCoord: [18.112629, 46.149301]
        }, {
          name: '意大利',
          geoCoord: [11.140054, 44.263729]
        }, {
          name: '匈牙利',
          geoCoord: [19.271659, 47.125042]
        }, {
          name: '捷克共和国',
          geoCoord: [15.150664, 49.815659]
        }, {
          name: '德国',
          geoCoord: [9.410708, 51.499494]
        }, {
          name: '荷兰',
          geoCoord: [4.701, 51.888236]
        }, {
          name: '波兰',
          geoCoord: [19.492426, 52.408849]
        }, {
          name: '白俄罗斯',
          geoCoord: [28.17595, 53.650972]
        }, {
          name: '立陶宛',
          geoCoord: [23.466242, 55.572647]
        }, {
          name: '拉脱维亚',
          geoCoord: [25.232383, 57.185189]
        }, {
          name: '爱沙尼亚',
          geoCoord: [26.281029, 58.615045]
        }, {
          name: '肯尼亚',
          geoCoord: [36.860715, 0.408238]
        }, {
          name: '斯里兰卡',
          geoCoord: [80.553055, 8.28624]
        }, {
          name: '马来西亚',
          geoCoord: [109.583989, 3.238708]
        }, {
          name: '文莱',
          geoCoord: [117.016497, 5.823443]
        }, {
          name: '印度尼西亚',
          geoCoord: [115.802275, -2.223164]
        }, {
          name: '东帝汶',
          geoCoord: [125.424062, -8.672904]
        }, {
          name: '菲律宾',
          geoCoord: [125.424062, -8.672904]
        }, {
          name: '乌鲁木齐',
          geoCoord: [-1 + 87.68, 2 + 43.77]
        }, {
          name: '阿拉木图',
          geoCoord: [76.965582, 43.317494]
        }, {
          name: '莫斯科',
          geoCoord: [37.595366, 55.759825]
        }, {
          name: '基辅',
          geoCoord: [30.475613, 50.489439]
        }, {
          name: '柏林',
          geoCoord: [13.329332, 52.577293]
        }, {
          name: '开罗',
          geoCoord: [31.064326, 30.076119]
        }, {
          name: '吉隆坡',
          geoCoord: [101.68235, 3.136993]
        }, {
          name: '雅加达',
          geoCoord: [106.858889, -6.216857]
        }, {
          name: '河内',
          geoCoord: [105.704459, 20.964662]
        }];

        var placeList_2 = [{
          name: '西安',
          geoCoord: [-1 + 108.95, 2 + 34.27]
        }, {
          name: '兰州',
          geoCoord: [-1 + 103.73, 2 + 36.03]
        }, {
          name: '北海',
          geoCoord: [-1 + 109.12, 2 + 21.49]
        }, {
          name: '湛江',
          geoCoord: [-1 + 110.359377, 2 + 21.270708]
        }, {
          name: '海口',
          geoCoord: [-1 + 110.35, 2 + 20.02]
        }, {
          name: '广州',
          geoCoord: [-1 + 113.23, 2 + 23.16]
        }, {
          name: '泉州',
          geoCoord: [-1 + 118.58, 2 + 24.93]
        }, {
          name: '福州',
          geoCoord: [-1 + 119.3, 2 + 26.08]
        }];
        
        this._randomData = [];
        for(var i = 0; i < 3; i++)
        {
            var randomAC = [];
            var len, geoCoord, thisList;
            if(i < 2)
            {
                thisList = placeList_1;
                len = 500;
            }
            else
            {
                thisList = placeList_2;
                len = 300;
            }
            while (len--) 
            {
                geoCoord = thisList[len % thisList.length].geoCoord;
                randomAC.push({
                    name: thisList[len % thisList.length].name + len,
                    value: 50,
                    geoCoord: [
                        geoCoord[0] + Math.random() * 5 - 2.5,
                        geoCoord[1] + Math.random() * 3 - 1.5
                    ]
                })
            }

            var serie = {
                name: '中',
                type: 'map',
                mapType: 'world',
                data: [],
                markPoint: {
                    symbolSize: 2,
                    large: true,
                    effect: {
                        show: true
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffeb3b'
                        }
                    },
                    data: randomAC
                }
            };
            this._randomData.push(serie);
        }

        
      },
      startup: function() {
        $("#tableTitle").html("数据列表");
        $("#leftBox").hide();
        // $("#rightBox").hide();
        $("#mapView").css({
          left: '0px',
          right: '15rem'
        });
        // $("#rightBox").css("cssText", "display: block !important;");
         $("#rightBox").css("display", "block");
        var self = this;
        setTimeout(function() {
          self.mapRenderer();
          $.ajax({
            url: self.config.queryUrl,
            type: 'GET',
            data: {},
            dataType: 'JSON',
            success: function(res) {
              var index = 0;
              var list = $("#rightBox").find("[myType='typeItem']").find("input");
              for(var i = 0; i < list.length; i++)
              {
                  if($(list[i]).prop("checked") == true)
                  {
                      index = $(list[i]).parent().attr("myIndex");
                      break;
                  }
              }
              if(index != 1)
              {
                  self.tableRenderer(res.result_1, "姓名", "从政/经商");
              }
              else
              {
                  self.tableRenderer(res.result_2, "社团", "类型");
              }
            },
            error: function(res) {
              alert("请求错误！");
            }
          });
        }, 20);
      },
      bindEvent: function() {

      },

      changeRandomData: function(event){
          var index = $(event.currentTarget).attr("myIndex");
          var items = $("#typeSelector").find("[myType='typeItem']");
          for(var i = 0, len = items.length; i < len; i++)
          {
              if($(items[i]).attr("myIndex") == index)
              {
                  $(items[i]).find("input").prop("checked", true);
              }
              else
              {
                  $(items[i]).find("input").prop("checked", false);
              }
          }
          this.mapRenderer(index);

          var self = this;
          $.ajax({
            url: self.config.queryUrl,
            type: 'GET',
            data: {},
            dataType: 'JSON',
            success: function(res) {
              var index = 0;
              var list = $("#rightBox").find("[myType='typeItem']").find("input");
              for(var i = 0; i < list.length; i++)
              {
                  if($(list[i]).prop("checked") == true)
                  {
                      index = $(list[i]).parent().attr("myIndex");
                      break;
                  }
              }
              if(index != 1)
              {
                  self.tableRenderer(res.result_1, "姓名", "从政/经商");
              }
              else
              {
                  self.tableRenderer(res.result_2, "社团", "类型");
              }
            },
            error: function(res) {
              alert("请求错误！");
            }
          });
      },

      mapRenderer: function(randomIndex) {
        randomIndex = randomIndex ? ~~randomIndex : 0;
        var option = {
          backgroundColor: '#FAFAFA',
          title: {
            text: '一带一路与泉州华裔商贾政要分布图',
            x: 'center',
            y: 20,
            textStyle: {
              fontSzie: 16,
              color: '#358DE6'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          series: [this._randomData[randomIndex],{
            name: '陆上丝绸之路',
            type: 'map',
            mapType: 'world',
            hoverable: false,
            roam: false,
            // selectedMode: 'single',
            // itemStyle: {
            //   normal: {
            //     color: '#e5e5e5',
            //     borderColor: '#e5e5e5',
            //     borderWidth: 1.5,
            //     areaStyle: {
            //       color: "#358DE6",
            //       type: 'default'
            //     },
            //     label: {
            //       show: false,
            //       textStyle: {
            //         color: "#358DE6",
            //       }
            //     }
            //   },
            //   emphasis: {
            //     show: false,
            //     color: '#358DE6',
            //     areaStyle: {
            //       color: "#358DE6",
            //       type: 'default'
            //     },
            //     label: {
            //       show: false,
            //       textStyle: {
            //         color: "#FFFFFF"
            //       }
            //     }
            //   }
            // },

            textFixed: {
              'China': [10, 30],
              'Russia': [100, 300]
            },
            mapLocation: {
              // x: '-800',
              // y: '-100',
              // height: '800',
              // width: '1366',
              width: "200%",
              height: "200%",
              x: '-80%',
              y: '-27%'
            },

            data: [{
                name: '中国',
                value: 0,
                itemStyle: {
                  normal: {
                    color: '#358DE6',
                    label: {
                      show: true,
                      textStyle: {
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#FFFFFF'
                      }
                    }
                  }
                }
              }, {
                name: '蒙古',
                value: 9510,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '吉尔吉斯斯坦',
                value: 8976,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '俄罗斯',
                value: 8912,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '哈萨克斯坦',
                value: 8944,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '泰国',
                value: 9184,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '乌兹别克斯坦',
                value: 9224,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '塔吉克斯坦',
                value: 9176,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '土库曼斯坦',
                value: 9200,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '伊朗',
                value: 9288,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '新加坡',
                value: 9240,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '土耳其',
                value: 9192,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '乌克兰',
                value: 9216,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '白俄罗斯',
                value: 8848,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '波兰',
                value: 8880,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '菲律宾',
                value: 8928,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '德国',
                value: 8896,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '荷兰',
                value: 8960,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '缅甸',
                value: 9096,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '老挝',
                value: 9040,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '文莱',
                value: 9208,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '东帝汶',
                value: 8904,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '格鲁吉亚',
                value: 8936,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '阿塞拜疆',
                value: 8800,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '巴基斯坦',
                value: 8824,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '以色列',
                value: 9296,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              }, {
                name: '柬埔寨',
                value: 8984,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              },


              {
                name: '卡塔尔',
                value: 9000,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              }, {
                name: '黎巴嫩',
                value: 9048,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              }, {
                name: '亚美尼亚',
                value: 9264,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              }, {
                name: '马其顿',
                value: 9088,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              }, {
                name: '斯洛文尼亚',
                value: 9168,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              }, {
                name: '斯洛伐克',
                value: 9160,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              }, {
                name: '摩尔多瓦',
                value: 9104,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: false
                    }
                  }
                }
              },


              {
                name: '孟加拉国',
                value: 0,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '阿富汗',
                value: 8742,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '尼泊尔',
                value: 9112,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '马尔代夫',
                value: 9072,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '不丹',
                value: 8888,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '沙特阿拉伯',
                value: 9144,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '阿联酋',
                value: 8784,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '阿曼',
                value: 8792,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '科威特',
                value: 9008,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '伊拉克',
                value: 9280,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '约旦',
                value: 9328,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '巴林',
                value: 8840,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '也门',
                value: 9272,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '叙利亚',
                value: 9256,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '巴勒斯坦',
                value: 8832,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '罗马尼亚',
                value: 9064,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '捷克共和国',
                value: 8992,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '保加利亚',
                value: 8856,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '匈牙利',
                value: 9248,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '拉脱维亚',
                value: 9032,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '立陶宛',
                value: 9056,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '爱沙尼亚',
                value: 8816,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '克罗地亚',
                value: 9016,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '阿尔巴尼亚',
                value: 8733,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '塞尔维亚',
                value: 9136,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              },

              {
                name: '波黑',
                value: 8872,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '黑山',
                value: 8968,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '日本',
                value: 9128,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '韩国',
                value: 8952,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }


            ],

            markPoint: {
              symbolSize: 10, // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
              itemStyle: {
                normal: {
                  borderColor: '#714d34', //地点标注边框色
                  borderWidth: 1, // 标注边线线宽，单位px，默认为1
                  label: {
                    show: false
                  }
                },
                emphasis: {
                  borderColor: '#e34f14',
                  borderWidth: 3,
                  label: {
                    show: false
                  }
                }
              },
              data: [{
                name: "西安",
                value: 9
              }, {
                name: "兰州",
                value: 12
              }, {
                name: "乌鲁木齐",
                value: 12
              }, {
                name: "霍尔果斯",
                value: 12
              }, {
                name: "阿拉木图",
                value: 14
              }, {
                name: "比什凯克",
                value: 14
              }, {
                name: "塔什干",
                value: 14
              }, {
                name: "杜尚别",
                value: 14
              }, {
                name: "阿什哈巴德",
                value: 14
              }, {
                name: "德黑兰",
                value: 14
              }, {
                name: "伊斯坦布尔",
                value: 14
              }, {
                name: "基辅",
                value: 14
              }, {
                name: "莫斯科",
                value: 14
              }, {
                name: "明斯克",
                value: 14
              }, {
                name: "华沙",
                value: 14
              }, {
                name: "柏林",
                value: 14
              }, {
                name: "鹿特丹",
                value: 14
              }]
            },
            markLine: {
              symbol: ['circle', 'circle'],
              symbolSize: 1,
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#301704' //线路高亮色                        
              },
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              data: [
                [{
                  name: '西安'
                }, {
                  name: '兰州'
                }],
                [{
                  name: '兰州'
                }, {
                  name: '乌鲁木齐'
                }],
                [{
                  name: '乌鲁木齐'
                }, {
                  name: '霍尔果斯'
                }],
                [{
                  name: '霍尔果斯'
                }, {
                  name: '阿拉木图'
                }],
                [{
                  name: '阿拉木图'
                }, {
                  name: '比什凯克'
                }],
                [{
                  name: '比什凯克'
                }, {
                  name: '塔什干'
                }],
                [{
                  name: '塔什干'
                }, {
                  name: '杜尚别'
                }],
                [{
                  name: '杜尚别'
                }, {
                  name: '阿什哈巴德'
                }],
                [{
                  name: '阿什哈巴德'
                }, {
                  name: '德黑兰'
                }],
                [{
                  name: '德黑兰'
                }, {
                  name: '伊斯坦布尔'
                }],
                [{
                  name: '伊斯坦布尔'
                }, {
                  name: '基辅'
                }],
                [{
                  name: '基辅'
                }, {
                  name: '莫斯科'
                }],
                [{
                  name: '莫斯科'
                }, {
                  name: '明斯克'
                }],
                [{
                  name: '明斯克'
                }, {
                  name: '华沙'
                }],
                [{
                  name: '华沙'
                }, {
                  name: '柏林'
                }],
                [{
                  name: '柏林'
                }, {
                  name: '鹿特丹'
                }]
              ]
            },
            geoCoord: {
              "兰州": [103.73333, 36.03333],
              "西安": [108.95000, 34.26667],
              "乌鲁木齐": [87.68333, 43.76667],
              "霍尔果斯": [80.25, 44.12],
              "阿拉木图": [76.876144, 43.251204],
              "比什凯克": [74.612231, 42.874934],
              "塔什干": [69.224854, 41.277548],
              "杜尚别": [68.779178, 38.536219],
              "阿什哈巴德": [58.309679, 37.965102],
              "德黑兰": [51.25, 35.40],
              "伊斯坦布尔": [28.58, 41.02],
              "基辅": [30.523764, 50.458461],
              "莫斯科": [37.3704, 55.4521],
              "明斯克": [27.555492, 53.913625],
              "华沙": [21.024459, 52.236512],
              "柏林": [13.422190, 52.482099],
              "鹿特丹": [4.29, 51.55]
            },
            // 自定义名称
            nameMap: {
              'Afghanistan': '阿富汗',
              'Angola': '安哥拉',
              'Albania': '阿尔巴尼亚',
              'United Arab Emirates': '阿联酋',
              'Argentina': '阿根廷',
              'Armenia': '亚美尼亚',
              'French Southern and Antarctic Lands': '法属南半球和南极领地',
              'Australia': '澳大利亚',
              'Austria': '奥地利',
              'Azerbaijan': '阿塞拜疆',
              'Burundi': '布隆迪',
              'Belgium': '比利时',
              'Benin': '贝宁',
              'Burkina Faso': '布基纳法索',
              'Bangladesh': '孟加拉国',
              'Bulgaria': '保加利亚',
              'The Bahamas': '巴哈马',
              'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
              'Belarus': '白俄罗斯',
              'Belize': '伯利兹',
              'Bermuda': '百慕大',
              'Bolivia': '玻利维亚',
              'Brazil': '巴西',
              'Brunei': '文莱',
              'Bhutan': '不丹',
              'Botswana': '博茨瓦纳',
              'Central African Republic': '中非共和国',
              'Canada': '加拿大',
              'Switzerland': '瑞士',
              'Chile': '智利',
              'China': '中国',
              'Ivory Coast': '科特迪瓦',
              'Cameroon': '喀麦隆',
              'Democratic Republic of the Congo': '刚果民主共和国',
              'Republic of the Congo': '刚果共和国',
              'Colombia': '哥伦比亚',
              'Costa Rica': '哥斯达黎加',
              'Cuba': '古巴',
              'Northern Cyprus': '北塞浦路斯',
              'Cyprus': '塞浦路斯',
              'Czech Republic': '捷克共和国',
              'Germany': '德国',
              'Djibouti': '吉布提',
              'Denmark': '丹麦',
              'Dominican Republic': '多明尼加共和国',
              'Algeria': '阿尔及利亚',
              'Ecuador': '厄瓜多尔',
              'Egypt': '埃及',
              'Eritrea': '厄立特里亚',
              'Spain': '西班牙',
              'Estonia': '爱沙尼亚',
              'Ethiopia': '埃塞俄比亚',
              'Finland': '芬兰',
              'Fiji': '斐',
              'Falkland Islands': '福克兰群岛',
              'France': '法国',
              'Gabon': '加蓬',
              'United Kingdom': '英国',
              'Georgia': '格鲁吉亚',
              'Ghana': '加纳',
              'Guinea': '几内亚',
              'Gambia': '冈比亚',
              'Guinea Bissau': '几内亚比绍',
              'Equatorial Guinea': '赤道几内亚',
              'Greece': '希腊',
              'Greenland': '格陵兰',
              'Guatemala': '危地马拉',
              'French Guiana': '法属圭亚那',
              'Guyana': '圭亚那',
              'Honduras': '洪都拉斯',
              'Croatia': '克罗地亚',
              'Haiti': '海地',
              'Hungary': '匈牙利',
              'Indonesia': '印度尼西亚',
              'India': '印度',
              'Ireland': '爱尔兰',
              'Iran': '伊朗',
              'Iraq': '伊拉克',
              'Iceland': '冰岛',
              'Israel': '以色列',
              'Italy': '意大利',
              'Jamaica': '牙买加',
              'Jordan': '约旦',
              'Japan': '日本',
              'Kazakhstan': '哈萨克斯坦',
              'Kenya': '肯尼亚',
              'Kyrgyzstan': '吉尔吉斯斯坦',
              'Cambodia': '柬埔寨',
              'South Korea': '韩国',
              'Kosovo': '科索沃',
              'Kuwait': '科威特',
              'Laos': '老挝',
              'Lebanon': '黎巴嫩',
              'Liberia': '利比里亚',
              'Libya': '利比亚',
              'Sri Lanka': '斯里兰卡',
              'Lesotho': '莱索托',
              'Lithuania': '立陶宛',
              'Luxembourg': '卢森堡',
              'Latvia': '拉脱维亚',
              'Morocco': '摩洛哥',
              'Moldova': '摩尔多瓦',
              'Madagascar': '马达加斯加',
              'Mexico': '墨西哥',
              'Macedonia': '马其顿',
              'Mali': '马里',
              'Myanmar': '缅甸',
              'Montenegro': '黑山',
              'Mongolia': '蒙古',
              'Mozambique': '莫桑比克',
              'Mauritania': '毛里塔尼亚',
              'Malawi': '马拉维',
              'Malaysia': '马来西亚',
              'Namibia': '纳米比亚',
              'New Caledonia': '新喀里多尼亚',
              'Niger': '尼日尔',
              'Nigeria': '尼日利亚',
              'Nicaragua': '尼加拉瓜',
              'Netherlands': '荷兰',
              'Norway': '挪威',
              'Nepal': '尼泊尔',
              'New Zealand': '新西兰',
              'Oman': '阿曼',
              'Pakistan': '巴基斯坦',
              'Panama': '巴拿马',
              'Peru': '秘鲁',
              'Philippines': '菲律宾',
              'Papua New Guinea': '巴布亚新几内亚',
              'Poland': '波兰',
              'Puerto Rico': '波多黎各',
              'North Korea': '北朝鲜',
              'Portugal': '葡萄牙',
              'Paraguay': '巴拉圭',
              'Qatar': '卡塔尔',
              'Romania': '罗马尼亚',
              'Russia': '俄罗斯',
              'Rwanda': '卢旺达',
              'Western Sahara': '西撒哈拉',
              'Saudi Arabia': '沙特阿拉伯',
              'Sudan': '苏丹',
              'South Sudan': '南苏丹',
              'Senegal': '塞内加尔',
              'Solomon Islands': '所罗门群岛',
              'Sierra Leone': '塞拉利昂',
              'El Salvador': '萨尔瓦多',
              'Somaliland': '索马里兰',
              'Somalia': '索马里',
              'Republic of Serbia': '塞尔维亚共和国',
              'Suriname': '苏里南',
              'Slovakia': '斯洛伐克',
              'Slovenia': '斯洛文尼亚',
              'Sweden': '瑞典',
              'Swaziland': '斯威士兰',
              'Syria': '叙利亚',
              'Chad': '乍得',
              'Togo': '多哥',
              'Thailand': '泰国',
              'Tajikistan': '塔吉克斯坦',
              'Turkmenistan': '土库曼斯坦',
              'East Timor': '东帝汶',
              'Trinidad and Tobago': '特里尼达和多巴哥',
              'Tunisia': '突尼斯',
              'Turkey': '土耳其',
              'United Republic of Tanzania': '坦桑尼亚联合共和国',
              'Uganda': '乌干达',
              'Ukraine': '乌克兰',
              'Uruguay': '乌拉圭',
              'United States of America': '美国',
              'Uzbekistan': '乌兹别克斯坦',
              'Venezuela': '委内瑞拉',
              'Vietnam': '越南',
              'Vanuatu': '瓦努阿图',
              'West Bank': '西岸',
              'Yemen': '也门',
              'South Africa': '南非',
              'Zambia': '赞比亚',
              'Zimbabwe': '津巴布韦'
            }
          }, {
            name: '海上丝绸之路',
            type: 'map',
            mapType: 'world',
            roam: true,
            hoverable: false,
            // itemStyle: {
            //   normal: {
            //     color: '#e5e5e5',
            //     areaStyle: {
            //       color: "#358DE6",
            //       type: 'default'
            //     },
            //     label: {
            //       show: false
            //     }
            //   },
            //   emphasis: {
            //     color: '#358DE6',
            //     label: {
            //       show: false,
            //       textStyle: {
            //         color: "#FFFFFF"
            //       }
            //     },
            //     areaStyle: {
            //       color: "#358DE6"
            //     }
            //   }
            // },
            data: [{
                name: '意大利',
                value: 9304,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '希腊',
                value: 9232,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '埃及',
                value: 8808,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '肯尼亚',
                value: 9024,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '斯里兰卡',
                value: 9152,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '印度',
                value: 9312,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '马来西亚',
                value: 9080,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '印度尼西亚',
                value: 9320,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }, {
                name: '越南',
                value: 8758,
                itemStyle: {
                  normal: {
                    color: '#90b6dc',
                    label: {
                      show: true
                    }
                  }
                }
              }

            ],
            markPoint: {
              symbolSize: 10, // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
              itemStyle: {
                normal: {
                  color: '#083184',
                  borderColor: '#9da9cb', //地点标注边框色
                  borderWidth: 1, // 标注边线线宽，单位px，默认为1
                  areaStyle: {
                    color: '#083184'
                  },
                  label: {
                    show: false
                  }
                },
                emphasis: {
                  borderColor: '#6495ED',
                  borderWidth: 5,
                  label: {
                    show: false
                  }
                }
              },
              data: [{
                  name: "福州",
                  value: 14
                }, {
                  name: "泉州",
                  value: 14
                }, {
                  name: "广州",
                  value: 14
                }, {
                  name: "湛江",
                  value: 14
                }, {
                  name: "海口",
                  value: 14
                }, {
                  name: "北海",
                  value: 14
                }, {
                  name: "河内",
                  value: 14
                }, {
                  name: "雅加达",
                  value: 14
                }, {
                  name: "吉隆坡",
                  value: 14
                },

                {
                  name: "加尔各答",
                  value: 14
                }, {
                  name: "科伦坡",
                  value: 14
                }, {
                  name: "内罗毕",
                  value: 14
                }, {
                  name: "开罗",
                  value: 14
                }, {
                  name: "雅典",
                  value: 14
                }, {
                  name: "威尼斯",
                  value: 14
                }

              ]
            },
            markLine: {
              symbol: ['circle', 'circle'],
              symbolSize: 1,
              smooth: true,
              smoothness: 0.1,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#326ed2' //线路高亮色
              },
              itemStyle: {
                normal: {
                  borderColor: '#326ed2',
                  borderWidth: 1.5,
                  label: {
                    show: false
                  }
                }
              },
              data: [
                [{
                  name: '福州'
                }, {
                  name: '泉州'
                }],
                [{
                  name: '泉州'
                }, {
                  name: '广州'
                }],
                [{
                  name: '广州'
                }, {
                  name: '湛江'
                }],
                [{
                  name: '湛江'
                }, {
                  name: '海口'
                }],
                [{
                  name: '海口'
                }, {
                  name: '北海'
                }],
                [{
                  name: '北海'
                }, {
                  name: '河内'
                }],
                [{
                  name: '河内'
                }, {
                  geoCoord: [110, 14.58]
                }],
                [{
                  geoCoord: [110.03, 14.58]
                }, {
                  geoCoord: [107.03, 4.85]
                }],
                [{
                  geoCoord: [107.03, 4.85]
                }, {
                  name: '雅加达'
                }],
                [{
                  name: '雅加达'
                }, {
                  name: '吉隆坡'
                }],
                [{
                  name: '吉隆坡'
                }, {
                  name: '科伦坡'
                }],
                [{
                  name: '加尔各答'
                }, {
                  name: '科伦坡'
                }],
                [{
                  name: '加尔各答'
                }, {
                  geoCoord: [82.728, 2]
                }],
                [{
                  geoCoord: [82.728, 2]
                }, {
                  name: '内罗毕'
                }],
                [{
                  name: '内罗毕'
                }, {
                  geoCoord: [44.608, 0.93]
                }],
                [{
                  geoCoord: [44.608, 0.93]
                }, {
                  geoCoord: [53, 13.4]
                }],
                [{
                  geoCoord: [53, 13.4]
                }, {
                  geoCoord: [44.7, 11.7]
                }],
                [{
                  geoCoord: [44.7, 11.7]
                }, {
                  name: '开罗'
                }],
                [{
                  name: '开罗'
                }, {
                  name: '雅典'
                }],
                [{
                  name: '雅典'
                }, {
                  name: '威尼斯'
                }]
              ]
            },
            geoCoord: {
              "福州": [119.28, 26.08],
              "泉州": [118.664017, 24.877107],
              "广州": [113.274536, 23.128755],
              "湛江": [110.320587, 21.242861],
              "海口": [110.211067, 20.027752],
              "北海": [109.316711, 21.657244],
              "河内": [105.84, 21.034],
              "雅加达": [106.49, -6.10],
              "吉隆坡": [101.42, 3.08],
              "加尔各答": [88.20, 22.33],
              "科伦坡": [79.84278, 6.93444],
              "内罗毕": [36.49, -1.17],
              "开罗": [31.234518, 30.067288],
              "雅典": [23.43, 37.58],
              "威尼斯": [12.311018, 45.441137]
            }
          }]
        };
        this.myChart = echarts.init(document.getElementById("mapView"));
        this.myChart.setOption(option, true);
        window.onresize = this.myChart.resize();
        var self = this;
        this.myChart.on("click", function(event) {
          $("#tableTitle").text(event.name + "--数据列表");
          $.ajax({
            url: self.config.queryUrl,
            type: 'GET',
            data: {},
            dataType: 'JSON',
            success: function(res) {
              var index = 0;
              var list = $("#rightBox").find("[myType='typeItem']").find("input");
              for(var i = 0; i < list.length; i++)
              {
                  if($(list[i]).prop("checked") == true)
                  {
                      index = $(list[i]).parent().attr("myIndex");
                      break;
                  }
              }
              if(index != 1)
              {
                  self.tableRenderer(res.result_1, "姓名", "从政/经商");
              }
              else
              {
                  self.tableRenderer(res.result_2, "社团", "类型");
              }
            },
            error: function(res) {
              alert("请求错误！");
            }
          });
        });
      },
      tableRenderer: function(arr, title, type) {
        // $("#rightBox").show();
        var tableHtml = "",
          trHtml = "<tr><td>" + title + "</td><td>" + type + "</td></tr>";
        for (var i = 0, j = arr.length; i < j; i++) {
          trHtml += "<tr><td>" + arr[i].name + "</td><td>" + arr[i].word + "</td><tr>"
        }
        tableHtml = "<table class='sx-table'>" + trHtml + "</table>";
        $("#tableBox").html("");
        $("#tableBox").append(tableHtml);
        $("#tableBox").children().on("click", function(){
            var list = $("#rightBox").find("[myType='typeItem']").find("input");
            var index = 0;
            for(var i = 0; i < list.length; i++)
            {
                if($(list[i]).prop("checked") == true)
                {
                    index = $(list[i]).parent().attr("myIndex");
                    break;
                }
            }
            var showItems = $("#formDiv").find("[myType='showItem']");
            for(var i = 0; i < showItems.length; i++)
            {
                if($(showItems[i]).attr("myIndex") == index)
                {
                    $(showItems[i]).css("display", "block");
                }
                else
                {
                    $(showItems[i]).css("display", "none");
                }
            }
            $("#formDiv").css("display", "block");
        });
      },
      hidden: function() {
        this.cleanMapMarks();
        this.cleanEvent();
        this.cleanOthers();
      },

      cleanEvent: function() {
        // for (var i = 0, handler; handler = this.eventHandlers[i++];) {
        //   handler.remove();
        // }
      },
      cleanMapMarks: function() {

      },
      cleanOthers: function() {
        $("#leftBox").show();
        // $("#rightBox").hide();
        $("#mapView").css({
          left: '12rem',
          right: '0'
          // right: '15rem'
        });
        // $("#rightBox").css("cssText", "display: none !important;");
        $("#rightBox").css("display", "none");
        try {
          this.myChart.dispose();
        } catch (e) {

        }
      },

      close: function() {
        this.hidden();
      }
    }

    return Ydyl;
  }
);