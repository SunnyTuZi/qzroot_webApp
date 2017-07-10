/*消息总线，单例模式，作为事件驱动的框架核心*/
define([], function() {
  var count = 0;
  return {
    handlers: [], //有待修改，不应该在return里面，应采取闭包形式
    on: function(eventType, handler, target) { //事件订阅
      var self = this;
      if (!(eventType in self.handlers)) {
        self.handlers[eventType] = [];
      }
      self.handlers[eventType].push({
        'handler': handler,
        'target': target
      });
      return this;
    },
    emit: function(eventType) { //事件发布
      console.info(eventType);
      var self = this;
      var handlerArgs = Array.prototype.slice.call(arguments, 1);
      if (!self.handlers[eventType]) {
        console.info('还未订阅:' + eventType);
        return;
      }
      for (var i = 0; i < self.handlers[eventType].length; i++) {
        self.handlers[eventType][i]['handler'].apply(self.handlers[eventType][i]['target'], handlerArgs);
      }
      return self;
    }
  };
});