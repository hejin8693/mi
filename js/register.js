$(window).ready(function(){
	$("#sub").on("click",function(){
		//当提交按钮被点击时 需要去验证用户信息
		$.ajax({
			type:"get",
			url:"js/register.php",
			data: {
				uname: $("#uname").val(),
				upwd: $("#pwd").val()
			},
			success: function(res){
				//console.log(res);
				if(res==1){
					//表示用户名已存在，请重新注册用户名
					alert("用户名已存在，请重新注册用户名");
				}else if(res==0){
					alert("注册失败，请重新祖册");
				}else{
					alert("注册成功，且成功的用户名是："+res);
					//页面跳转至主页面
					location.href = `index.html?uname=${res}`;
				}
			}
		});
	});
	
	
	
	
})
