<?php
	require "conn.php";
	
	if(isset($_POST['tel'])){	
		$tel=@$_POST['tel'];
		//查询是否存在
		$query="select * from login where tel='$tel'";
		//返回查找的内容
		$result=mysql_query($query);
		
		//mysql_fetch_array($result)获取result中的内容
		if(mysql_fetch_array($result)){//用户名存在
			echo true;//1
		}else{//用户名不存在
			echo false;//空
		}
		//注册	
		if(isset($_POST['submit'])){
			$tel=@$_POST['tel'];//获取前端name属性传来的用户名
			$password=md5($_POST['password']);
			mysql_query("insert login values(null,'$tel','$password')");
			echo true;
		}
	}
?>