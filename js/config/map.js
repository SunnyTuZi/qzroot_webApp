/**
 * [description]
 * @AuthorHTL zwl
 * @DateTime  2017-03-06T15:36:44+0800
 * @param    {resizeEnable} [是否支持地图的动画]
 * @param    {zoom} [地图范围等级]
 * @param    {center} [地图中心点]
 */

define(function() {
	var map = new AMap.Map('mapView', {
		resizeEnable: true,
		zoom: 14,
		center: [116.397428, 39.90923]
	});
	return map;　　
});