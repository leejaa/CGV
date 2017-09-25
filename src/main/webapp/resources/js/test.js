/**
 * 
 */
var meta=meta || {};
meta.common=(function(){
	var init=function(x){
		alert(x);
		meta.path.init(x);
		alert(sessionStorage.getItem(x));
		onCreate();
	};
	var onCreate=function(){
		setContentView();
	};
	var setContentView=function(){
		
	};
	return {
		init : init
	};
})();
meta.path=(function(){
	var init=function(x){
		meta.session.init(x);
		onCreate();
	};
	var onCreate=function(){
		setContetView();
	};
	var setContentView=function(){};
	var ctx=function(){
		return meta.session.getPath('ctx');
	};
	var js=function(){
		return meta.session.getPath('js');
	};
	var css=function(){
		return meta.session.getPath('css');
	};
	return {
		init : init,
		ctx : ctx,
		js : js,
		css : css
	};
})();
meta.session=(function(){
	var init=function(x){
		onCreate(x);
	};
	var onCreate=function(x){
		setContentView(x);
	};
	var setContentView=function(x){
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('js',x+"/resources/js");
		sessionStorage.setItem('css',x+"/resources/css");
	};
	var getPath=function(x){
		return sessionStorage.getItem(x);
	};
	return {
		init : init,
		getPath : getPath
	};
})();