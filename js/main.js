require([
	// 'config/map',
	'config/config',
	'menu',
	'modules/private/xsfb',
	'modules/private/xsjnlx',
	'modules/private/xsjwlx',
	'modules/private/ydyl',
	'modules/private/xsjwHistory',
	"echo/utils/EventBus"
], function(
	Config,
	Menu,
	Xsfb,
	Xsjnlx,
	Xsjwlx,
	Ydyl,
	XsjwHistory,
	EventBus
) {
	var menu = new Menu(Config);
	var xsfb = new Xsfb(Config.xsfb);
	var xsjnlx = new Xsjnlx(Config.xsjnlx);
	var xsjwlx = new Xsjwlx(Config.xsjwlx);
	var ydyl = new Ydyl(Config.ydyl);
	var xsjwHistory = new XsjwHistory(Config.xsjwHistory);


	//默认打开模块
	setTimeout(function() {
		EventBus.emit("XSJNLX_STARTUP");
	}, 500)

	// var stationSpread = new StationSpread(Config.stationSpread);
	//var wifiSpread = new WifiSpread(Config.wifiSpread);
});