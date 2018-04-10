<?php
	//连接数据库的公用文件
	
	//第一步：数据库连接(整个数据库)
	//参1：本地主机     参2：用户    参3：密码，没有为空。
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect('localhost','root','');  
	if(!$conn){
		die('数据库连接错误，请检测用户名和密码:'.mysql_error());//自定义的报错信息
	}
	//第二步：选择数据库,设置字符集
	mysql_select_db('haolemai');
	mysql_query('SET NAMES UTF8');
	
?>