/**
 * [promptMSG description]
 * @author  wenlongZhao
 * @date      2017-3-7
 * @describe  [姓氏分布]
 */
define([
    "echo/utils/EventBus",
  ],
  function(
    EventBus
  ) {
    function CreateApp(config) {
      this.config = config;
      this.eventHandlers = [];
      this.init();
    }
    CreateApp.prototype = {
      init: function() {
        EventBus.on('XSFB_STARTUP', this.startup, this);
        EventBus.on('All_WIDGETS_CLOSE', this.close, this);
        console.log("xsfb init.");

        var self = this;
        $("#xsfbMenuDl dd").on("click", (function(event) {
          this.xsType = $(event.currentTarget).text();
          this.colorType = $(event.currentTarget).attr("colorType");
          this.getData();
        }).bind(this));

        $("#barChartBox .close").on("click", function() {
          $("#barChartBox").hide();
        });
      },
      startup: function() {
        $("#xsfbMenuDl").find('dd').eq(0).click();
      },
      getData: function() {
        $("#tableTitle").text("泉州市" + this.xsType);
        this.postServer(this.config.queryUrl, {}, this.mapDataHander.bind(this));
      },
      bindEvent: function() {},
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
        var result;
        for (var x = 0, y = data.results.length; x < y; x++) {
          if (data.results[x].name == this.xsType) {
            result = data.results[x].data;
            break;
          }
        }
        var dataArr = [];
        for (var i = 0, j = result.length; i < j; i++) {
          dataArr.push({
            name: result[i].area,
            value: result[i].count
          });
        }
        this.mapRenderer(dataArr);
        this.tableRenderer(dataArr);
      },
      //地图渲染
      mapRenderer: function(dataArr) {
        //geojosn获取
        var self = this;
        echarts.util.mapData.params.params["泉州"] = {
          getGeoJson: function(callback) {
            $.getJSON(self.config.geoJson, callback);
          }
        };
        //图表属性设置
        var option = {
          backgroundColor: '#FAFAFA',
          title: {
            text: "泉州市" + this.xsType,
            x: 50,
            y: 30,
            textStyle: {
              color: "#358DE6"
            }

          },
          tooltip: {
            trigger: 'item',
            formatter: function(res) {
              return res.data.name + ":" + res.data.value;
            }
          },
          dataRange: {
            show: false,
            min: 0,
            max: 200,
            x: 20,
            text: ['人', ''],
            color: [this.colorType, '#EEEEEE'],
            calculable: true,
            textStyle: {
              fontSize: 16
            }
          },
          mapLocation: {
            x: 'center',
            y: 'center'
          },
          series: [{
            type: 'map',
            mapType: '泉州',
            roam: true,
            geoCoord: {
              "泉州区": [118.558929, 24.907645],
              "丰泽区": [118.645147, 24.906041],
              "洛江区": [118.620312, 25.071153],
              "晋江市": [118.557338, 24.707322],
              "石狮市": [118.708402, 24.731978],
              "南安市": [118.387031, 24.959494],
              "惠安县": [118.798954, 24.988718],
              "安溪县": [118.000014, 25.116824],
              "永春县": [118.20503, 25.340721],
              "德化县": [118.242986, 25.6704],
              "泉港区": [118.852285, 25.156859],
              "金门县": [118.323221, 24.436417],
              "鲤城区": [118.5700929, 24.905645]
            },
            itemStyle: {
              normal: {
                color: '#FFFFFF',
                orderWidth: 1,
                borderColor: '#224ea7',
                label: {
                  show: true,
                  textStyle: {
                    // color: "#333333",
                    fontSize: 8
                  }
                }
              },
              emphasis: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 2,
                borderColor: '#FFFFFF',
                label: {
                  show: true,
                  textStyle: {
                    color: "#FFFFFF"
                  }
                }
              }
            },
            data: dataArr
          }]
        }
        if (this.myChart) {
          try {
            this.myChart.dispose();
          } catch (e) {}

        }
        this.myChart = echarts.init(document.getElementById("mapView"));
        this.myChart.setOption(option);
        this.myChart.on("click", this.createBarChart.bind(this));
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
      createBarChart: function(parma) {
        if (parma.name.indexOf("鲤城") == -1 || this.xsType.indexOf("陈") == -1) {
          return;
        }
        var arr = [{
          name: '开元街道',
          value: 0
        }, {
          name: '鲤中街道',
          value: 0
        }, {
          name: '海滨街道',
          value: 0
        }, {
          name: '临江街道',
          value: 1
        }, {
          name: '浮桥街道',
          value: 2
        }, {
          name: '江南街道',
          value: 11
        }, {
          name: '金龙街道',
          value: 0
        }, {
          name: '常泰街道',
          value: 0
        }];
        var dataArr = [],
          titleArr = [];
        for (var i = 0; i < arr.length; i++) {
          titleArr.push(arr[i].name);
          dataArr.push(arr[i].value);
        }
        $("#barChartBox").show();
        $("#xsfbChartTitle").text(parma.name + "下属街道/镇各区、乡镇" + this.xsType + "图");
        this.barHander(parma.name, titleArr, dataArr);
      },
      barHander: function(title, titleArr, dataArr) {
        var option = {
          tooltip: {
            trigger: 'axis'
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            data: titleArr
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
            name: '乡镇数',
            type: 'bar',
            data: dataArr
          }]
        };
        var myChart = echarts.init(document.getElementById("barChart"));
        myChart.setOption(option);
      },
      selfAppPost: function() {
        var userUid = $("#USERGUID").val();
        var obj = {
          userGuid: userUid
        }
        this.postServer(this.config.queryUrl, obj, this.appDataHander.bind(this), "");
      },
      hidden: function() {
        this.cleanMapMarks();
        this.cleanEvent();
        this.cleanOthers();
      },
      cleanEvent: function() {
        for (var i = 0, handler; handler = this.eventHandlers[i++];) {
          handler.remove();
        }
      },
      cleanMapMarks: function() {
        try {
          this.myChart.dispose();
        } catch (e) {

        }
      },
      cleanOthers: function() {
        $("#mapView").css({
          left: '12rem',
          right: '0'
        });
      },
      close: function() {
        this.hidden();
      }
    }

    return CreateApp;
  }
);