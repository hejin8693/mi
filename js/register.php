<?php
	$uname = $_GET["uname"];
	$upwd = $_GET["upwd"];
	//连接数据库
	$db = mysqli_connect("localhost","root","","shopping");
	//设置字符编码
	mysqli_query($db,"set names utf8");
	//定义查询语句 得到字符集
	$sql = "select * from user where uname='$uname'";
	//执行sql语句
	$result = mysqli_query($db,$sql);
	//将查询到的结果集转化成数组
	$row = mysqli_fetch_array($result);
	$json = json_encode($row); 
	//echo $json;
	if($row){
		//说明该用户名已存在，需要重新注册
		echo "1";
	}else{
		//说明用户名不存在，则直接做插入用户操作
		$sql2 = "insert into user (uname,upwd) values ('$uname','$upwd')";
		$result2 = mysqli_query($db,$sql2);
		if($result2){
			echo $uname;
		}else{
			echo "0";
		}
	}
?>