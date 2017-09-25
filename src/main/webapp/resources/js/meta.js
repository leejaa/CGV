/**
 * 
 */

/**
 * 
 */
var meta=meta || {};
meta.common=(function(){
	var init=function(x){
		alert("sessionStorage 저장 전 : "+x);
		meta.path.init(x);
		alert("sessionStorage 저장 후 : "+sessionStorage.getItem('ctx'));
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
		setContentView();
	};
	var setContentView=function(){};
	var $$=function(){
		return meta.session.getPath('ctx');
	};
	var $$s=function(){
		return meta.session.getPath('js');
	};
	var $$c=function(){
		return meta.session.getPath('css');
	};
	var $$i=function(){
		return meta.session.getPath('img');
	};
	return {
		init : init,
		$$ : $$,
		$$s : $$s,
		$$c : $$c,
		$$i : $$i
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

meta.main=(function(){
	var init=function(){
		onCreate();
	};
	
	var onCreate=function(){
		setContentView();
	};
	
	var setContentView=function(){
		
		$("#ul").attr("class","nav navbar-nav");
		$("#ul1").attr("class","dropdown-menu");
		$("#ul2").attr("class","dropdown-menu");
		$("#ul3").attr("class","dropdown-menu");
		$("#home").attr("class","navbar-brand");
		
		$("#member_join").on('click',function(){
			app.controller.moveTo('member','move','join');
		});
		
		$("#home").on('click',function(){
			app.controller.moveTo('common','move','home');
		});
		$("#login").on('click',function(){
			app.controller.moveTo('member','move','login');
		});
		$("#logout").on("click",function(){
			alert("logout !");
			app.controller.logout();
		});

		$("#ul1").children().eq(0).on('click',function(){
			app.controller.list('1');
		});
		
		$("#ul1").children().eq(1).on('click',function(){
			app.controller.moveTo('member','move','update');
		});
			
			$("#ul1").children().eq(2).on('click',function(){
				app.controller.moveTo('member','move','delete');
		});
			
			$("#ul2").children().eq(0).on('click',function(){
				app.controller.moveTo('grade','move','write');
		});
			$("#ul2").children().eq(1).on('click',function(){
				app.controller.moveTo('grade','move','list');
		});
			
			$("#ul2").children().eq(2).on('click',function(){
				app.controller.moveTo('grade','move','update');
			});
			
			$("#ul3").children().eq(0).on('click',function(){
				app.controller.moveTo('board','move','write');
			});
			$("#ul3").children().eq(1).on('click',function(){
				app.controller.moveTo('board','move','list');
			});
			$("#ul3").children().eq(2).on('click',function(){
				app.controller.moveTo('board','move','update');
			});
	};
	return {
		init : init
	};
})();

