//tab切换
;(function($){
	$('.borderleft').on('click',function(){
		$(this).addClass('active');
		$('.sm').css('display','block');
		$('.userlogin').css('display','none');
		$('.account').removeClass('active');
	});
	$('.account').on('click',function(){
		$(this).addClass('active');
		$('.sm').css('display','none');
		$('.userlogin').css('display','block');
		$('.borderleft').removeClass('active');
	});
})(jQuery);
//账号登录
;(function($){
	//input样式
	$('#username').focus(function(){
		$('.tel').css('border','1px solid #4791ff');
		$('.waring').find('i').css('display','none');
		$('.waring').find('span').css('display','none').html('请填写邮箱/已验证手机/用户名');
	});
	$('#username').blur(function(){
		$('.tel').css('border','1px solid #e0e0e0');
	});
	$('#password').focus(function(){
		$('.pas').css('border','1px solid #4791ff');
		$('.waring2').find('i').css('display','none');
		$('.waring2').find('span').css('display','none').html('请填写密码');
	});
	$('#password').blur(function(){
		$('.pas').css('border','1px solid #e0e0e0');
	});
	//验证
	$('#loginbtn').on('click',function(){
		var tel=$('#username').val();
		var password=$('#password').val();
		if(tel==''){
			$('.waring').find('i').css('display','inline-block');
			$('.waring').find('span').css('display','inline-block');
			$('.tel').css('border','1px solid #d70057');
		}
		if(password==''){
			$('.waring2').find('i').css('display','inline-block');
			$('.waring2').find('span').css('display','inline-block');
			$('.pas').css('border','1px solid #d70057');
		}
		if(tel!='' && password!=''){
			$.ajax({
				type:"post",
				url:'php/login.php',
				data:{
					tel:tel,
					password:password
				},
				success:function(d){
					//对了跳转
					if(d==1){
						addCookie('username',tel,7)
						location.href='http://127.0.0.1/lllll/haolemai/haolemai.html';
					}
					//密码错误
					else if(d==2){
						$('.pas').css('border','1px solid #d70057');
						$('.waring2').find('i').css('display','inline-block');
						$('.waring2').find('span').css('display','inline-block').html('密码错误');
					}
					//用户不存在
					else{
						$('.tel').css('border','1px solid #d70057');
						$('.waring').find('i').css('display','inline-block');
						$('.waring').find('span').css('display','inline-block').html('用户名不存在');
					}
				}	
			});
		}
	});
	
})(jQuery);
