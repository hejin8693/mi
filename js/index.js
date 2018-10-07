$(window).ready(function(){
	//轮播图自动播放
	var timerSlid = null;
	timerSlid = setInterval(autoplay,2000);
	var index = 0;
	var circle = 0;
	function autoplay(){
		if(index == 5){
			$(".side ul.img").css("left",0);
			index=1;
		}else{
			index++;
		}
		$(".side ul.img").animate({left:-index*1226},1000);
		//设置小圆点
		circle++;
		if(circle==$(".side .ol").children("li").length){
			circle = 0;
		}
		$(".side .ol li").eq(circle).addClass("current").siblings().removeClass("current");
	}
	
	//鼠标移入时 停止定时器
	$(".side").on("mouseover",function(){
		clearInterval(timerSlid);
	});
	//鼠标移除时时 继续播放
	$(".side").on("mouseout",function(){
		clearInterval(timerSlid);
		timerSlid = setInterval(autoplay,2000);
	});
	
	//设置左箭头
	$(".arr-left").on("click",function(){
		index--;
		circle--;
		if(index<0){
			index = 4;
			$(".side ul.img").css("left",-5*1226);
		}
		$(".side ul.img").stop().animate({left:-index*1226},200);
		if(circle<0){
			circle=4;
		}
		$(".side .ol li").eq(circle).addClass("current").siblings().removeClass("current");
	});
	
	//设置右箭头
	$(".arr-right").on("click",function(){
		index++;
		circle++;
		if(index>5){
			index = 1;
			$(".side ul.img").css("left",0);
		}
		$(".side ul.img").stop().animate({left:-index*1226},200);
		if(circle>4){
			circle=0;
		}
		$(".side .ol li").eq(circle).addClass("current").siblings().removeClass("current");
	});
	//设置当鼠标放在ol上面时，能跳转到相应的位置
	$(".side .ol li").on("mouseover",function(){
		index = $(this).index();
		circle = $(this).index();
		$(".side ul.img").css("left",-index*1226);
		$(".side .ol li").eq(circle).addClass("current").siblings().removeClass("current");
		//console.log(index);
	});
	
	//闪购wrapper信息开始
	$(".flashover .wrapper ul li").each(function(num,item){//设置li的边框颜色
		var wrapperColor = yanSe();
		$(item).css("border-top",`1px solid ${wrapperColor}`);
	});
	var wrapperIndex = 0;
	$(".flashover .more a").eq(0).on("click",function(){//设置点击的时候li位置改变
		if(wrapperIndex<=0){
			$(".flashover .wrapper ul").css("left",0);
			$(this).addClass("end");
		}else{
			wrapperIndex--;
			$(".flashover .wrapper ul").css("left",-wrapperIndex*248);
			$(this).next().removeClass("end");
		}
	});
	$(".flashover .more a").eq(1).on("click",function(){
		if(wrapperIndex>=5){
			$(".flashover .wrapper ul").css("left",-5*248);
			$(this).addClass("end");
		}else{
			wrapperIndex++;
			$(".flashover .wrapper ul").css("left",-wrapperIndex*248);
			$(this).prev().removeClass("end");
			
		}
	});
	
	//倒计时
//	console.log($(".timeNum").html());
	var timeNum = $(".timeNum").html().split(" ")[0].split(":");
	var timeNumM = timeNum[0]*3600+timeNum[1]*60;
	var now = new Date();
	var nowH = now.getHours();
	var nowM = now.getMinutes();
	var nowS = now.getSeconds();
	var dif = timeNumM-nowH*3600-nowM*60-nowS;
	var nowHdif = 0;
	var nowMdif = 0;
	var nowSdif = 0;
	timerDif();
	var timeTimer = setInterval(timerDif,1000);
	function timerDif(){
		dif--;
		if(dif<=0){
			dif=0;
			clearInterval(timeTimer);
//			var dateH = (new Date()).getHours()+4;
//			$(".timeNum").html(`${dateH} 场`);
		}
		nowHdif = parseInt(dif/3600);
		
		nowMdif = parseInt((dif/3600-nowHdif)*60);
		
		nowSdif = parseInt(((dif/3600-nowHdif)*60-nowMdif)*60);
		if(nowHdif<10){//设置小时的显示
			$(".timeDetail span").eq(0).html(`0${nowHdif}`);
		}else{
			$(".timeDetail span").eq(0).html(`${nowHdif}`);
		}
		if(nowMdif<10){//设置分钟的显示
			$(".timeDetail span").eq(1).html(`0${nowMdif}`);
		}else{
			$(".timeDetail span").eq(1).html(`${nowMdif}`);
		}
		if(nowSdif<10){//设置秒钟的显示
			$(".timeDetail span").eq(2).html(`0${nowSdif}`);
		}else{
			$(".timeDetail span").eq(2).html(`${nowSdif}`);
		}
	}
	
	//设置家电头部选项卡项目
	$(".home .phone-hd a").on("mouseover",function(){
		var indexEle = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".home .phone-bd .right ul").eq(indexEle).addClass("selected").siblings().removeClass("selected");
	})
	$(".home .phone-bd .right ul li").hover(function(){
		$(this).children(".review-wrapper").stop().animate({"height":80,"opacity":1},200);
		console.log($(this).children().eq)
	},function(){
		$(this).children(".review-wrapper").stop().animate({"height":0,"opacity":0},200);
	});
	
	//发送ajax请求自动加载flashover闪购信息内容
	$.ajax({
		type:"get",
		url:"js/flashover.php",
		success: function(res){
			//console.log(res);
			//把得到的数据转化成json格式的数组
			var goodsArr = JSON.parse(res);
			//遍历这个数组console.log(goodsArr);
			var goodsStr = "";
			for (var i = 0; i < goodsArr.length; i++) {
				goodsStr += `<li>
								<a href="">
									<img src="images/flashover/${goodsArr[i].src}" alt="" width="160px"/>
									<p>${goodsArr[i].pName}</p>
									<p>${goodsArr[i].pDetail}</p>
									<p><span class="price">${goodsArr[i].nowPrice}</span>&nbsp;<span class="yuan">元</span>&nbsp;&nbsp;<del>${goodsArr[i].origPrice}元</del></p>
								</a>
							</li>`;
			}
			$("#wrapper ul").html(goodsStr);
			//闪购wrapper边框颜色设置
			$(".flashover .wrapper ul li").each(function(num,item){//设置li的边框颜色
				var wrapperColor = yanSe();
				$(item).css("border-top",`1px solid ${wrapperColor}`);
			});
		}
	});
	
	
	//发送ajax请求自动加载手机信息内容
	$.ajax({
		type:"get",
		url:"js/phone.php",
		success: function(res){
			//console.log(res);
			var phoneArr = JSON.parse(res);
			var phoneStr = "";
			for (var i = 0; i < phoneArr.length; i++) {
				phoneStr += `<li>
								<div class="figure-img">
									<a href=""><img src="images/phone/${phoneArr[i].src}" alt="" width="160"/></a>
								</div>
								<p><a href="">${phoneArr[i].phName}</a></p>
								<p>${phoneArr[i].phDetail}</p>
								<p><span>${phoneArr[i].nowPrice}</span>元<del>${phoneArr[i].origPrice}</del></p>
								<div class="flag-new">${phoneArr[i].phAD}</div>
							</li>`;
			}
			$("#miPhone .phone-bd ul").html(phoneStr);
			//设置新品相关样式
			$("#miPhone .phone-bd ul .flag-new").each(function(index,item){
				if($(item).html()==""){
					$(item).remove();
				}
				if($(item).html()!="新品"){
					$(item).css("background","red");
				}
			});
		}
	});
	//发送ajax请求显示家电里 配件热门信息
	$.ajax({
		type:"get",
		url:"js/hot.php",
		success: function(res){
			var hotArr = JSON.parse(res);
			var hotStr = "";
			for (var i = 0; i < hotArr.length; i++) {
				hotStr += `<li>
								<div class="figure-img">
									<a href=""><img src="images/hot/${hotArr[i].src}" alt="" width="160"/></a>
								</div>
								<p><a href="">${hotArr[i].hotName}</a></p>
								<p>${hotArr[i].hotDetail}</p>
								<p><span>${hotArr[i].nowPrice}</span>元<del>${hotArr[i].origPrice}</del></p>
								<div class="flag-new">${hotArr[i].hotAD}</div>
								<div class="review-wrapper">
									<a href="">
										<span class="review">厚重的机身，舒适按键，一直钟爱米家</span>
										<span class="author"> 来自于 charry 的评价 </span>
									</a>
								</div>
							</li>`;
			}
			hotStr += `<li>
							<div class="figure">
								<a href=""><img src="images/hot/hot8.jpg" alt="" width="80" height="80"/></a>
							</div>
							<h3><a href="">小米净水器</a></h3>
							<p class="price">
								<span class="num">1799</span>元
							</p>
						</li>
						<li>
							<div class="figure">
								<a href="">→</a>
							</div>
							<h3><a href="">浏览更多</a></h3>
							<p class="price">
								热门
							</p>
						</li>`;
			$(".home .phone-bd .right ul").eq(0).html(hotStr);
			//设置家电头部选项卡项目
			$(".home .phone-hd a").on("mouseover",function(){
				var indexEle = $(this).index();
				$(this).addClass("current").siblings().removeClass("current");
				$(".home .phone-bd .right ul").eq(indexEle).addClass("selected").siblings().removeClass("selected");
			})
			$(".home .phone-bd .right ul li").hover(function(){
				$(this).children(".review-wrapper").stop().animate({"height":80,"opacity":1},200);
				console.log($(this).children().eq)
			},function(){
				$(this).children(".review-wrapper").stop().animate({"height":0,"opacity":0},200);
			});	
			//设置热门优惠样式
			$(".home .phone-bd .right ul .flag-new").each(function(index,item){
				if($(this).html()==""){
					$(this).remove();
				}
				if($(this).html()!="新品"){
					$(this).css("background","red");
				}
			});
		}
	});
	
	//发送ajax请求显示家电里 保护套信息
	$.ajax({
		type:"get",
		url:"js/protect.php",
		success: function(res){
			var protectArr = JSON.parse(res);
			var protectStr = "";
			for (var i = 0; i < protectArr.length; i++) {
				protectStr += `<li>
								<div class="figure-img">
									<a href=""><img src="images/protect/${protectArr[i].src}" alt="" width="160"/></a>
								</div>
								<p><a href="">${protectArr[i].ptName}</a></p>
								<p>${protectArr[i].ptDetail}</p>
								<p><span>${protectArr[i].nowPrice}</span>元<del>${protectArr[i].origPrice}</del></p>
								<div class="flag-new">${protectArr[i].ptAD}</div>
								<div class="review-wrapper">
									<a href="">
										<span class="review">厚重的机身，舒适按键，一直钟爱米家</span>
										<span class="author"> 来自于 charry 的评价 </span>
									</a>
								</div>
							</li>`;
			}
			protectStr += `<li>
							<div class="figure">
								<a href=""><img src="images/protect/protect8.jpg" alt="" width="80" height="80"/></a>
							</div>
							<h3><a href="">小米盒子3s</a></h3>
							<p class="price">
								<span class="num">299</span>元
							</p>
						</li>
						<li>
							<div class="figure">
								<a href="">→</a>
							</div>
							<h3><a href="">浏览更多</a></h3>
							<p class="price">
								电视影音
							</p>
						</li>`;
			$(".home .phone-bd .right ul").eq(1).html(protectStr);
			//设置家电头部选项卡项目
			$(".home .phone-hd a").on("mouseover",function(){
				var indexEle = $(this).index();
				$(this).addClass("current").siblings().removeClass("current");
				$(".home .phone-bd .right ul").eq(indexEle).addClass("selected").siblings().removeClass("selected");
			})
			$(".home .phone-bd .right ul li").hover(function(){
				$(this).children(".review-wrapper").stop().animate({"height":80,"opacity":1},200);
				console.log($(this).children().eq)
			},function(){
				$(this).children(".review-wrapper").stop().animate({"height":0,"opacity":0},200);
			});	
			//设置热门优惠样式
			$(".home .phone-bd .right ul .flag-new").each(function(index,item){
				if($(this).html()==""){
					$(this).remove();
				}
				if($(this).html()!="新品"){
					$(this).css("background","red");
				}
			});
		}
	});
	
	//发送ajax请求显示家电里 电脑信息
	$.ajax({
		type:"get",
		url:"js/computer.php",
		success: function(res){
			var computerArr = JSON.parse(res);
			var computerStr = "";
			for (var i = 0; i < computerArr.length; i++) {
				computerStr += `<li>
								<div class="figure-img">
									<a href=""><img src="images/computer/${computerArr[i].src}" alt="" width="160"/></a>
								</div>
								<p><a href="">${computerArr[i].comName}</a></p>
								<p>${computerArr[i].comDetail}</p>
								<p><span>${computerArr[i].nowPrice}</span>元<del>${computerArr[i].origPrice}</del></p>
								<div class="flag-new">${computerArr[i].comAD}</div>
								<div class="review-wrapper">
									<a href="">
										<span class="review">厚重的机身，舒适按键，一直钟爱米家</span>
										<span class="author"> 来自于 charry 的评价 </span>
									</a>
								</div>
							</li>`;
			}
			computerStr += `<li>
							<div class="figure">
								<a href=""><img src="images/computer/conputer8.jpg" alt="" width="80" height="80"/></a>
							</div>
							<h3><a href="">多功能转接器</a></h3>
							<p class="price">
								<span class="num">129</span>元
							</p>
						</li>
						<li>
							<div class="figure">
								<a href="">→</a>
							</div>
							<h3><a href="">浏览更多</a></h3>
							<p class="price">
								电脑
							</p>
						</li>`;
			$(".home .phone-bd .right ul").eq(2).html(computerStr);
			//设置家电头部选项卡项目
			$(".home .phone-hd a").on("mouseover",function(){
				var indexEle = $(this).index();
				$(this).addClass("current").siblings().removeClass("current");
				$(".home .phone-bd .right ul").eq(indexEle).addClass("selected").siblings().removeClass("selected");
			})
			$(".home .phone-bd .right ul li").hover(function(){
				$(this).children(".review-wrapper").stop().animate({"height":80,"opacity":1},200);
				console.log($(this).children().eq)
			},function(){
				$(this).children(".review-wrapper").stop().animate({"height":0,"opacity":0},200);
			});	
			//设置热门优惠样式
			$(".home .phone-bd .right ul .flag-new").each(function(index,item){
				if($(this).html()==""){
					$(this).remove();
				}
				if($(this).html()!="新品"){
					$(this).css("background","red");
				}
			});
		}
	});
	
	//发送ajax请求显示家电里 家居信息
	$.ajax({
		type:"get",
		url:"js/house.php",
		success: function(res){
			var houseArr = JSON.parse(res);
			var houseStr = "";
			for (var i = 0; i < houseArr.length; i++) {
				houseStr += `<li>
								<div class="figure-img">
									<a href=""><img src="images/house/${houseArr[i].src}" alt="" width="160"/></a>
								</div>
								<p><a href="">${houseArr[i].hsName}</a></p>
								<p>${houseArr[i].hsDetail}</p>
								<p><span>${houseArr[i].nowPrice}</span>元<del>${houseArr[i].origPrice}</del></p>
								<div class="flag-new">${houseArr[i].hsAD}</div>
								<div class="review-wrapper">
									<a href="">
										<span class="review">厚重的机身，舒适按键，一直钟爱米家</span>
										<span class="author"> 来自于 charry 的评价 </span>
									</a>
								</div>
							</li>`;
			}
			houseStr += `<li>
							<div class="figure">
								<a href=""><img src="images/house/house8.png" alt="" width="80" height="80"/></a>
							</div>
							<h3><a href="">Yeelight LED 吸顶灯</a></h3>
							<p class="price">
								<span class="num">379</span>元
							</p>
						</li>
						<li>
							<div class="figure">
								<a href="">→</a>
							</div>
							<h3><a href="">浏览更多</a></h3>
							<p class="price">
								家居
							</p>
						</li>`;
			$(".home .phone-bd .right ul").eq(3).html(houseStr);
			//设置家电头部选项卡项目
			$(".home .phone-hd a").on("mouseover",function(){
				var indexEle = $(this).index();
				$(this).addClass("current").siblings().removeClass("current");
				$(".home .phone-bd .right ul").eq(indexEle).addClass("selected").siblings().removeClass("selected");
			})
			$(".home .phone-bd .right ul li").hover(function(){
				$(this).children(".review-wrapper").stop().animate({"height":80,"opacity":1},200);
				console.log($(this).children().eq)
			},function(){
				$(this).children(".review-wrapper").stop().animate({"height":0,"opacity":0},200);
			});	
			//设置热门优惠样式
			$(".home .phone-bd .right ul .flag-new").each(function(index,item){
				if($(this).html()==""){
					$(this).remove();
				}
				if($(this).html()!="新品"){
					$(this).css("background","red");
				}
			});
		}
	});
	
	//根据查询串信息获取用户名
	var uname = location.search.split("=")[1];
	if(uname){
		$("#login").html(uname);
		$("#register").html("订单信息");
	}
	console.log(uname);
	
})