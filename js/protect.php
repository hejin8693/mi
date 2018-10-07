<?php
	header("content-type:text/html;charset=utf-8");
	//连接数据库
	$db = mysqli_connect("localhost","root","","shopping");
	//设置字符编码
	mysqli_query($db,"set names utf8");
	//定义查询语句 得到字符集
	$sql = "select * from protect";
	//执行sql语句
	$result = mysqli_query($db,$sql);
	while($row = mysqli_fetch_array($result)){//将结果集中的每一条转化成一个数组
		$arr[] = $row;
	}
	$json = json_encode($arr);
	echo $json;
?>