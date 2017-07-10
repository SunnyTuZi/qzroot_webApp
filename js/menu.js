/**
 * [promptMSG description]
 * @author  wenlongZhao
 * @date      2017-3-7
 * @describe  [菜单事件派发]
 */

define([
		"echo/utils/EventBus"
	],
	function(
		EventBus
	) {
		function Menu(config) {
			this.config = config;
			this.init();
		}

		Menu.prototype = {
			init: function() {
				this.eventAll();
				this.menuStatusChange();
				this.accessControll();
				console.log("menu init.");
			},
			menuStatusChange: function() {
				$('#menuUl li').on('click', function() {
					$(this).addClass('active').siblings().removeClass('active');
					var _menu = $(this).attr("controlMenu");
					$('#createAppBox dl').hide();
					$('#' + _menu).show();
					$('#' + _menu).find("dd").eq(0).click();
				});
				$(".menuDl dd").on("click", function() {
					$(".menuDl dd").removeClass('active');
					$(this).addClass("active");
				});
				$(".menuDl dt").on("click", function() {
					$(".secondMenuDl").slideUp(300);
					$(this).next().slideDown(500);
				});
			},
			eventAll: function() {
				this.eventMonitor('#xsfb', 'XSFB_STARTUP');
				this.eventMonitor('#xsjnlx', 'XSJNLX_STARTUP');
				this.eventMonitor('#xsjwlx', 'XSJWLX_STARTUP');
				this.eventMonitor('#ydyl', 'YDYL_STARTUP');
				this.eventMonitor('#xsjwHistory', 'XSJWLX_HISTORY_STARTUP');
			},
			eventMonitor: function(dom, module) {
				$(dom).on('click', (function(event) {
					this.eventStart(module);
				}).bind(this));
			},
			eventStart: function(module) {
				EventBus.emit('All_WIDGETS_CLOSE');
				EventBus.emit(module);
			},
			accessControll: function() {
				if ($("#USERGUID").val()) {
					setTimeout(function() {
						EventBus.emit('CREATEAPP_STARTUP');
					}, 300);
					$("#logoutBox").show();
					$("#logoBox").remove();
				} else {
					$("#logoutBox").remove();
					$("#logoBox").show();
				}
			}
		}

		return Menu;
	});