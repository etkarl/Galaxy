
/**
 * 路由器
 * @author : yu.yuy
 * @createTime : 2012-07-21
 */
(function(){
    var homepage = require("./app/controllers/homepage.js");
    module.exports = function(app){
    	//首页
    	app.get('/', function(req, res){
            homepage.init(req, res);
        });
    };
})();