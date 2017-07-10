/**
 * 符合OGC标准WFS的查询类。
 * 允许使用者通过本类拼装OGC标准的查询语句(包括属性查询和空间查询)，用于武大吉奥平台的WFS查询。
 * 主入口类是GetFeatureUtil_GeoGlobe
 * 基于Arcgis API For JavaScript 3.7
 *
 * @author Zero 2016-6-14
 * @version 0.2
 */

define(["dojo/_base/declare","dojo/_base/lang",
        "esri/geometry/Polyline","esri/SpatialReference",
        "dojo/NodeList-traverse","dojo/domReady!"], function(declare, lang, Polyline, SpatialReference){

    return declare("GetFeatureUtil_GeoGlobe", null, {
        /**
         * OGC查询器的构造函数
         * @param {JSON Object} QueryDataObject 必须参数 设定了基础的构造内容
         *    TypeName {String} 必须 要查询的图层服务名
         *    OutSpatialReference {String} 可选 输出的坐标系代号 
         *    OutputFields {Array} 可选 输出的字段 
         */
        constructor : function(QueryDataObject){
            this.typeName = QueryDataObject.TypeName;
            this.outSpatialReference = QueryDataObject.OutSpatialReference ? QueryDataObject.OutSpatialReference : "";
            this.queryXMLHead = '<?xml version="1.0"?>' + 
                                    '<wfs:GetFeature service="WFS" version="1.1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:wfs="http://www.opengis.net/wfs" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"  xsi:schemaLocation="http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd"';
            if(this.outSpatialReference)
            {
                this.queryXMLHead += ' srsName="urn:ogc:def:crs:EPSG:6.9:' + this.outSpatialReference + '"';
            }
            this.queryXMLHead += '><wfs:Query typeName="' + this.typeName + '">';
                            //'<wfs:PropertyName>' + QueryDataObject.ServiceName + ':' + QueryDataObject.LayerName + '</wfs:PropertyName>';
                            // '<wfs:PropertyName>' + queryObject.serviceName + ':' + value + '</wfs:PropertyName>' 返回的字段
                            // '<ogc:Filter>' + 
                 			// 	  '<ogc:And></ogc:And>' + 
                 			// 	  '<ogc:Or></ogc:Or>' +
                 			// 	  '<ogc:Not></ogc:Not>' +
                 			// '</ogc:Filter>' + 
            this.queryXMLFoot =         '</wfs:Query>' + 
                                    '</wfs:GetFeature>';

            //设置输出字段
            var outputFieldsXML = "";
            if(QueryDataObject.OutputFields)
            {
                for(var i = 0, length = QueryDataObject.OutputFields.length; i < length; i++)
                {
                    outputFieldsXML += '<wfs:PropertyName>' + QueryDataObject.ServiceName + ':' + outputFields[i].toString() + '</wfs:PropertyName>';
                }
                if(outputFieldsXML)
                {
                    this.queryXMLHead += outputFieldsXML;
                }
            }
        	
            this.AndFilterXML = "";
            this.OrFilterXML = ""; 
            this.NotFilterXML = "";

            this.AndSpatialFilterXML = "";
            this.OrSpatialFilterXML = ""; 
            this.NotSpatialFilterXML = "";
        },

        resetFilter: function(){
            this.AndFilterXML = "";
            this.OrFilterXML = ""; 
            this.NotFilterXML = "";

            this.AndSpatialFilterXML = "";
            this.OrSpatialFilterXML = ""; 
            this.NotSpatialFilterXML = "";
        },

        setFilterOfAndXML : function(filterData){
        	if(filterData)
        	{
        		this.AndFilterXML = this._createLogicFilterXML(filterData);
        	}
        },

        setFilterOfOrXML : function(filterData){
            if(filterData)
            {
                this.OrFilterXML = this._createLogicFilterXML(filterData);
            }
        },

        setFilterOfNotXML : function(filterData){
            if(filterData)
            {
                this.NotFilterXML = this._createLogicFilterXML(filterData);
            }
        },

        setSpatialFilterOfAndXML : function(filterData){
            if(filterData)
            {
                this.AndSpatialFilterXML = this._createSpatialFilterXML(filterData);
            }
        },

        setSpatialFilterOfOrXML : function(filterData){
            if(filterData)
            {
                this.OrSpatialFilterXML = this._createSpatialFilterXML(filterData);
            }
        },

        setSpatialFilterOfNotXML : function(filterData){
            if(filterData)
            {
                this.NotSpatialFilterXML = this._createSpatialFilterXML(filterData);
            }
        },

        excute : function(){
            var postXML = "";
            postXML += this.queryXMLHead + "<ogc:Filter>";
            if(this.AndFilterXML.length + this.AndSpatialFilterXML.length > 0)
            {
                postXML += "<ogc:And>" + this.AndFilterXML + this.AndSpatialFilterXML + "</ogc:And>";
            }
            if(this.OrFilterXML.length + this.OrSpatialFilterXML.length > 0)
            {
                postXML += "<ogc:Or>" + this.OrFilterXML + this.OrSpatialFilterXML + "</ogc:Or>";
            }
            if(this.NotFilterXML.length + this.NotSpatialFilterXML.length > 0)
            {
                postXML += "<ogc:Not>" + this.NotFilterXML + this.NotSpatialFilterXML + "</ogc:Not>";
            }
            postXML += "</ogc:Filter>" + this.queryXMLFoot;
            return postXML;
        },

        _setOutputFileds : function(outputFields){

        },

        _createLogicFilterXML : function(filterData){
            if(!filterData)return "";
            var returnXML = "";
            for(var i = 0, length = filterData.length; i < length; i++)
            {
                var filterDataObj = filterData[i];
                var filed = filterDataObj.filed;
                var type = filterDataObj.type;
                var value = filterDataObj.value;
                switch(type)
                {
                    case "=" : 
                        returnXML += '<ogc:PropertyIsEqualTo><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>' + value + '</ogc:Literal></ogc:PropertyIsEqualTo>';
                        break;
                    case "!=" : 
                        returnXML += '<ogc:PropertyIsNotEqualTo><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>' + value + '/ogc:Literal></ogc:PropertyIsNotEqualTo>';
                        break;
                    case "<" : 
                        returnXML += '<ogc:PropertyIsLessThan><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>' + value + '</ogc:Literal></ogc:PropertyIsLessThan>';
                        break;
                    case ">" : 
                        returnXML += '<ogc:PropertyIsGreaterThan><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>' + value + '</ogc:Literal></ogc:PropertyIsGreaterThan>';
                        break;
                    case "<=" : 
                        returnXML += '<ogc:PropertyIsLessThanOrEqualTo><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>' + value + '</ogc:Literal></ogc:PropertyIsLessThanOrEqualTo>';
                        break;
                    case ">=" : 
                        returnXML += '<ogc:PropertyIsGreaterThanOrEqualTo><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>' + value + '</ogc:Literal></ogc:PropertyIsGreaterThanOrEqualTo>';
                        break;
                    case "Like" : 
                        returnXML += '<ogc:PropertyIsLike wildCard="*" singleChar="?" escapeChar="\"><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>*' + value + '*</ogc:Literal></ogc:PropertyIsLike>';
                        break;
                    case "IsNull" : 
                        returnXML += '<ogc:PropertyIsNull><ogc:PropertyName>' + filed + '</ogc:PropertyName><ogc:Literal>' + value + '</ogc:Literal></ogc:PropertyIsNull>';
                        break;
                    default :
                        break;
                }
            }
            return returnXML;
        },

        _createSpatialFilterXML: function(filterData){
            if(!filterData)return "";
            var returnXML = "";
            for(var i = 0, length = filterData.length; i < length; i++)
            {
                var filterDataObj = filterData[i];
                var geometry = filterDataObj.geometry;
                var type = filterDataObj.type;
                var filterStr = "";
                var coordinatesStr = "";
                switch(geometry.type)
                {
                    case "polygon":
                        if(geometry.rings.length == 0)break;
                        var ring = geometry.rings[0];
                        for(var j in ring)
                        {
                            coordinatesStr += ring[j][1] + "," + ring[j][0] + " ";
                        }
                        if(coordinatesStr.length > 0)
                        {
                            coordinatesStr = coordinatesStr.substring(0, coordinatesStr.length - 1);
                            filterStr = '<ogc:PropertyName>the_geom</ogc:PropertyName><gml:Polygon><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates decimal=\".\" cs=\",\" ts=\" \">' + coordinatesStr + '</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></gml:Polygon>';
                        }
                        break;
                    case "extent":
                        coordinatesStr = geometry.ymin + "," + geometry.xmin + " " + geometry.ymax + "," + geometry.xmin + " " + geometry.ymax + "," + geometry.xmax + " " + geometry.ymin + "," + geometry.xmax + " " + geometry.ymin + "," + geometry.xmin;
                        filterStr = '<ogc:PropertyName>the_geom</ogc:PropertyName><gml:Polygon><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates decimal=\".\" cs=\",\" ts=\" \">' + coordinatesStr + '</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></gml:Polygon>';
                        break;
                    case "polyline":
                        if(geometry.paths.length == 0)break;
                        filterStr = '<ogc:PropertyName>the_geom</ogc:PropertyName><gml:LineString><gml:coordinates decimal=\".\" cs=\",\" ts=\" \">';
                        coordinatesStr = "";
                        for(var k in geometry.paths)
                        {
                            var path = geometry.paths[k];
                            for(var j in path)
                            {
                                coordinatesStr += path[j][1] + "," + path[j][0] + " ";
                            }
                        }
                        if(coordinatesStr.length > 0)
                        {
                            coordinatesStr = coordinatesStr.substring(0, coordinatesStr.length - 1);
                            filterStr += coordinatesStr;
                        }
                        
                        filterStr += '</gml:coordinates></gml:LineString>';
                        break;
                    case "point":
                        coordinatesStr = geometry.y + "," + geometry.x + " " + Number(Number(geometry.y) + 0.001) + "," + geometry.x + " " + Number(Number(geometry.y) + 0.001) + "," + Number(Number(geometry.x) + 0.001) + " " + geometry.y + "," + Number(Number(geometry.x) + 0.001) + " " + geometry.y + "," + geometry.x;
                        filterStr = '<ogc:PropertyName>the_geom</ogc:PropertyName><gml:Polygon><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates decimal=\".\" cs=\",\" ts=\" \">' + coordinatesStr + '</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></gml:Polygon>';
                        break; 
                }
                switch(type)
                {
                    case "Intersects":
                        filterStr = '<ogc:Intersects>' + filterStr + '</ogc:Intersects>';
                        break;
                    case "Equals":
                        filterStr = '<ogc:Equals>' + filterStr + '</ogc:Equals>';
                        break;
                    default:
                        filterStr = '<ogc:Intersects>' + filterStr + '</ogc:Intersects>';
                        break;
                }

                returnXML += filterStr;
            }

            return returnXML;
        },

        _returnHandler : function(event){
            //接收响应数据  
            //判断对象状态是否交互完成，如果为4则交互完成  
            if(event.readyState == 4)
            {  
                //判断对象状态是否交互成功,如果成功则为200  
                if(event.status == 200)
                {  
                    //接收数据,得到服务器输出的纯文本数据  
                    var response = event.responseText;  
                    var result = $.parseXML(response);
                    $(result).find('Table').each(function(){
                        
                    });
                }  
            }  
        },

        _insertString : function(originalString, targetString, targetIndex){
        	targetIndex = targetIndex ? int(targetIndex) : originalString.length;
        	var originalLength = originalString.length;
        	if(targetIndex >= 0 && targetIndex <= originalLength)
        	{
        		return originalString.substring(0, targetIndex - 1) + targetString.toString() + originalString.substring(targetIndex, originalLength);
        	}
        	else if(targetIndex < 0)
        	{
        		return targetString.toString() + originalString;
        	}
        	else
        	{
        		return originalString + targetString.toString();
        	}
        },
    });
    
});