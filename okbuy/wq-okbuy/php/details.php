<?php
	//1.引入连接数据库的文件；   include /  require
	//2.输入数据库操作的指令，增删改查
	//3.执行这个命令,返回记录集
	//4.循环取数据，二维数据循环取数据  将一个数组放到另外一个数组中 循环遍历
	require "conn.php";
	$query='select * from details';
	$result=mysql_query($query);
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);//将一个数组放到另外一个数组中
	}
	echo json_encode($arr);
?>