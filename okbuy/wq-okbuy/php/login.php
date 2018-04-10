<?php
	require 'conn.php';
	$tel=$_POST['tel'];
	$password=$_POST['password'];
	//查询语句
	$query1="select * from login where tel='$tel'";
	$query2="select * from login where tel='$tel' and password='$password'";
	//执行语句并获取结果
	$result1=mysql_query($query1);
	$result2=mysql_query($query2);
	//判断
	if(mysql_fetch_array($result1)){
		if(mysql_fetch_array($result2)){
			echo 1;
		}else{
			echo 2;
		}
	}else{
		echo 3;
	}
?>