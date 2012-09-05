(function(){
	importJavascript = function(url){
		document.write('<script src="'+url+'"></scr'+'ipt>');
	};
	importJavascript('/js/base/sh_main.min.js');
	importJavascript('/js/base/sh_css.min.js');
	importJavascript('/js/base/sh_html.min.js');
	importJavascript('/js/base/sh_javascript.min.js');
	importJavascript('/js/base/sh_javascript_dom.min.js');
})();