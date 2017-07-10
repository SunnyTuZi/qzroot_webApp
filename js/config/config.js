//配置文件
define(function() {
	var config = {};
	var ywip = "http://172.16.50.100:8080/lbs_locatedb/";
	// var ywip = "http://172.16.50.251:8080/sgwsmanager/"
	// var ywip = "http://172.16.50.251:8080/sgwsmanager/"
	var proxy = "/proxy/proxy.jsp?";
	// var proxy = "";
	config.xsfb = {
		geoJson: "data/quanzhou.json",
		queryUrl: "data/xsfb.json"
	}
	config.ydyl = {
		queryUrl: "data/ydyl.json"
	}
	config.xsjnlx = {
		queryUrl: "data/fblx.json"
	}
	config.xsjwlx = {
		geoJson: "data/dongnanya.json",
		queryUrl: "data/fblx.json"
	}
	config.xsjwHistory = {
		geoJson: "data/dongnanya.json",
		queryUrl: "data/xsjw_history.json"
	}
	config.full = {
		bqLineQueryUrl: "data/bqline.json",
		bqPieQueryUrl: "data/lctop10.json",
		xsTbaleQueryUrl: 'data/xsfb.json',
		xsBarQueryUrl: 'data/xsbar.json'
	}
	return config;　　
});