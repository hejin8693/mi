$(window).ready(function(){
	//购物车
	$(".car").hover(function(){
		$(this).children().eq(1).stop().slideDown(200);
	},function(){
		$(this).children().eq(1).stop().slideUp(200);
	});
	
	//当nav 里面的li鼠标放上去时显示下面的盒子
	$(".top-nav li").hover(function(){
		$(".navMenu").stop().slideDown(1000);
		$(this).children().css("color","#ff6700");
	},function(){
		$(this).children().css("color","#333");
	});
	$(".nav").on("mouseleave",function(){
		$(".navMenu").stop().slideUp(1000);
	});
	
	//固定顶部导航栏
	$(window).on("scroll",function(){
		if($(window).scrollTop()>=40){
			$(".nav").css("position","fixed").css("top",0).next().css("margin-top",100);
		
		}else{
			$(".nav").css("position","relative").css("top",0).next().css("margin-top",0);
		}
	});
	
})