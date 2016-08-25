/*
 * 浏览器的一些属性、方法和事件
 * 属性，document.hidden：页面是否为用户当前观看的页面(true or false)；
 * 属性，document.visibilityState: (visible、hidden or prerender) 当前活动窗口、非活动窗口、页面正在重新生成对用户不可见；
 * 事件，visibilitychange: 可见性时间；
 */
var win = {
	// document支持的属性
	getHiddenProp: function (){
		// browser prefix
		var prefixes = ['webkit','moz','ms','o'];

		if('hidden' in document) {
			return 'hidden';
		}
		// add prefix
		for( var i in prefixes) {
			var att = prefixes[i] + 'Hidden';
			if(att in document) {
				return att;
			}
		}
		// not supported
		return null;
	},
	// 窗口可见性事件: visibilitychange
	visibilityChange: function(callback) {
		var hiddenProp = this.getHiddenProp();
		if(hiddenProp) {
			var prefix = hiddenProp.replace(/[H|h]idden/, '');
			// var state =  prefix + 'VisibilityState';
			var listen = prefix + 'visibilitychange';
			document.addEventListener(listen, function(e) {
				 callback(e, document[hiddenProp]);
			});
		}
	}
}
