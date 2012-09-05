/**
 * 侧边浮动导航
 * @author : yu.yuy
 * @createTime : 2012-9-5
 */
(function($){
	var floatNav = $('#sidenav'),
	floatNavTop,
	floatNavCache = {},
	fixedClassName = 'affix',
	activeClassName = 'active',
	topBarHeight = 40,
	win = window,
	doc = document,
	current,
	location = function(scrollTop){
		if((scrollTop+topBarHeight+20) > floatNavTop){
			floatNav.addClass(fixedClassName);
		}
		else{
			floatNav.removeClass(fixedClassName);
		}
	},
	checkAnchor = function(anchor){
		var ret,
		index = anchor.indexOf('#');
		if(index === 0){
			ret = anchor.substring(index+1).trim() || false;
		}
		else{
			ret = false;
		}
		return ret;
	},
	init = function(){
		var hash = window.location.hash;
		floatNavTop = floatNav.offset().top;
		location($(doc).scrollTop());
		$(win).scroll(function(e){
			var currentScrollTop = $(doc).scrollTop();
			location(currentScrollTop);
		});
		$.use("ui-scrollto",function(){
			floatNav.delegate('a','click',function(e){
				e.preventDefault();
				var that = $(this),
				anchor = checkAnchor(that.attr('href'));
				if(!anchor){
					return;
				}
				
				if(current){
					current.removeClass(activeClassName);
				}
				current = that.parent();
				current.addClass(activeClassName);
				floatNavCache[anchor] = floatNavCache[anchor] || $('#'+anchor).offset().top;
				$(win).scrollTo(floatNavCache[anchor],500,{
					onAfter : function(){
						window.location.hash = anchor;
					}
				});
			});
    	});
	}();
})(jQuery);