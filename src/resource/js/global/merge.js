(function(){
	importJavascript = function(url){
		document.write('<script src="'+url+'"></scr'+'ipt>');
	};
	importJavascript('/js/base/bootstrap.min.js');
	importJavascript('/js/module/sidenav.js');
	importJavascript('/js/module/tools.js');
})();