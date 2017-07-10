/**
 * [promptMSG description]
 * @author  wenlongZhao
 * @date      2017-3-7
 * @describe  [姓氏境外播迁]
 */
define([
    "echo/utils/EventBus",
  ],
  function(
    EventBus
  ) {
    function CountAnalysis(config) {
      this.config = config;
      this.init();
    }
    CountAnalysis.prototype = {
      init: function() {
        EventBus.on('XSJWLX_STARTUP', this.startup, this);
        EventBus.on('All_WIDGETS_CLOSE', this.close, this);
        console.log("xsjwlx init.");
      },
      startup: function() {
        $("#tableTitle").text("南洋华裔播迁图");
        this.postServer(this.config.queryUrl, {}, this.mapDataHander.bind(this));
      },
      bindEvent: function() {

      },
      postServer: function(url, obj, func) {
        $.ajax({
          url: url,
          type: 'GET',
          dataType: 'json',
          data: obj,
          success: function(result) {
            func(result);
          },
          error: function(result) {
            alert("请求失败，请联系后台管理员！")
          }
        });
      },
      mapDataHander: function(data) {
        var result = data.results.jwdata;
        var dataArr = [];
        var markArr = [];
        var tableDataArr = [];
        for (var i = 0, j = result.length; i < j; i++) {
          var arr = [];
          arr.push({
            name: '泉州'
          });
          arr.push({
            name: result[i].area,
            value: result[i].count
          });
          dataArr.push(arr);
          markArr.push({
            name: result[i].area,
            value: result[i].count
          });
          tableDataArr.push({
            name: "泉州>" + result[i].area,
            value: result[i].count
          });
        }
        this.tableRenderer(tableDataArr);
        this.mapRenderer(dataArr, markArr);
      },
      mapRenderer: function(dataArr, markArr) {
        var self = this;
        echarts.util.mapData.params.params["东南亚"] = {
          getGeoJson: function(callback) {
            $.getJSON(self.config.geoJson, callback);
          }
        };
        var option = {
          backgroundColor: '#FAFAFA',
          color: ['gold', 'aqua', 'lime'],
          title: {
            text: '南洋华裔播迁图',
            x: 'center',
            y: 30,
            textStyle: {
              color: "#358DE6"
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}'
          },
          dataRange: {
            min: 0,
            max: 3000,
            calculable: true,
            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            x: 20,
            textStyle: {
              color: '#358DE6'
            },
            formatter: function(data) {
              return parseInt(data);
            }
          },
          series: [{
            name: '南洋华裔播迁图',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: '东南亚',
            mapLocation: {
              x: 'center',
              y: '-200'
            },
            nameMap: {
              'China': '中国',
              'Malaysia': '马来西亚',
              'Vietnam': '越南',
              'Cambodia': '柬埔寨',
              'Thailand': '泰国',
              'Myanmar': '缅甸',
              'Singapore': '新加坡',
              'Brunei': '文莱',
              'Philippines': '菲律宾',
              'Laos': '老挝',
              'Indonesia': '印尼',
              'East Timor': '东帝汶'
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(100,149,237,1)',
                borderWidth: 0.5,
                areaStyle: {
                  color: '#90b6dc'
                },
                label: {
                  show: true
                }
              },
              emphasis: {
                color: '#358DE6',
                areaStyle: {
                  color: "#358DE6",
                  type: 'default'
                },
                label: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF"
                  }
                }
              }
            },
            data: [],
            markLine: {
              smooth: true,
              effect: {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle: {
                normal: {
                  borderWidth: 1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data: dataArr
            },
            markPoint: {
              symbol: 'emptyCircle',
              symbolSize: function(v) {
                return 10 + v / 1000
              },
              effect: {
                show: true,
                shadowBlur: 0
              },
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  }
                },
                emphasis: {
                  label: {
                    position: 'top'
                  }
                }
              },
              data: markArr
            },
            geoCoord: {
              "越南": [106.6881, 20.84478],
              "老挝": [101.44355468750001, 21.230810546874977],
              "柬埔寨": [104.920811, 11.56211],
              "泰国": [100.4762, 13.72342],
              "缅甸": [96.15097, 16.78219],
              "马来西亚": [101.69223, 23.135717],
              "新加坡": [103.9697265625, 1.331445312499994],
              "印度尼西亚": [104.60156249999997, -5.90458984374996],
              "文莱": [114.84023437500005, 4.393212890625009],
              "菲律宾": [121.41103515625005, 5.939843749999966]
            }
          }]
        };
        this.myChart = echarts.init(document.getElementById("mapView"));
        this.myChart.setOption(option);
        window.onresize = this.myChart.resize();
      },
      tableRenderer: function(arr) {
        var tableHtml = "",
          trHtml = "<tr><td>城市</td><td>人数(人)</td></tr>";
        for (var i = 0, j = arr.length; i < j; i++) {
          trHtml += "<tr><td>" + arr[i].name + "</td><td>" + arr[i].value + "</td><tr>"
        }
        tableHtml = "<table class='sx-table'>" + trHtml + "</table>";
        $("#tableBox").html("");
        $("#tableBox").append(tableHtml);
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
        try {
          this.myChart.dispose();
        } catch (e) {

        }
        $("#mapView").css({
          left: '12rem',
          right: '0'
        });
      },

      close: function() {
        this.hidden();
      }
    }

    return CountAnalysis;
  }
);