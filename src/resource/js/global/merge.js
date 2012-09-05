(function(){
	importJavascript = function(url){
		document.write('<script src="'+url+'"></scr'+'ipt>');
	};
	importJavascript('/js/base/jquery-1.7.2.min.js');
	importJavascript('/js/base/bootstrap.min.js');
	importJavascript('/js/base/highcharts.js');
	importJavascript('/js/base/jquery.jstree.js');
})();