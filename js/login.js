$(window).ready(function(){
	$(".nav-tabs a").eq(0).on("click",function(){
		$(".tabs-con").show();
		$(this).addClass("current").next().next().removeClass("current");
		$(".login-code").hide();
	});
	$(".nav-tabs a").eq(1).on("click",function(){
		$(this).addClass("current").prev().prev().removeClass("current");
		$(".tabs-con").hide();
		$(".login-code").show();
	});

})

