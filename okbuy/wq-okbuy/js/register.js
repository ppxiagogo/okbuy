;(function($){
	var bstop=false;
	$('#tel').focus(function(){
		$('.tel').css('border','1px solid #4791ff');
	});
	$('#password').focus(function(){
		$('.pas').css('border','1px solid #4791ff');
	});
	$('#yzminput').focus(function(){
		$('.mcback').css('border','1px solid #4791ff');
	});
	$('.look').on('click',function(){
		console.log(1);
		$('#password').prop('type','text');
	});
	//账号验证
	$('#tel').blur(function(){
		var reg1=/^1[3|4|5|7|8][0-9]{9}$/;
		var value=$('#tel').val();
		if(value==''){
			$('.tel').css('border','1px solid #d70057');//边框变红
			$('.waring').find('i').css('display','inline-block');//出现警告
			$('.waring').find('span').css('display','inline').html('请输入手机号');
			bstop=false;
		}
		else if(reg1.test(value)){
			$.ajax({
				type:"post",
				url:'php/register.php',
				data:{
					tel:value
				},
				success:function(d){
					if(d){
						$('.tel').css('border','1px solid #d70057')
						$('.waring').find('i').css('display','inline-block');//出现警告
						$('.waring').find('span').css('display','inline').html('账号已注册');
					}else{
						bstop=true;
						$('.tel').css('border','1px solid #e0e0e0');
						$('.register .tel .ok').css('display','block');
						$('.waring').find('i').css('display','none');//警告消失
						$('.waring').find('span').css('display','none');
					}
				}
			});
		}
		else{
			$('.tel').css('border','1px solid #d70057');
			$('.waring').find('i').css('display','inline-block');
			$('.waring').find('span').css('display','inline').html('手机号错误');
			$('.register .tel .ok').css('display','none');
			bstop=false;
		}
//		console.log(bstop);
	});
	//密码验证
	$('#password').on('input',function(){
		bstop=false;
		var password=$('#password').val();
		var reg1=/\d+/g;
		var reg2=/[a-zA-Z]+/g;
		var reg3=/[^a-zA-Z0-9]+/g;
		var num=0;
		if(reg1.test(password)){
			num++;
		}if(reg2.test(password)){
			num++;
		}if(reg3.test(password)){
			num++;
		}
		if(password!='' && password.length>=6 && num>1){
			bstop=true;
			$('.register .safeline span').css('display','none');
			$('.register .safeline span').eq(num-1).css('display','inline-block');
			$('.pas').find('.ok2').css('display','inline-block');
			$('.pas').css('border','1px solid #e0e0e0');
		}
		else{
			bstop=false;
			$('.register .safeline span').eq(0).css('display','inline-block');
			$('.pas').find('.ok2').css('display','none');
			$('.pas').css('border','1px solid #d70057');
		}
	});
	
	//获取验证码
	$('.yzm').on('click',function(){
		var str=yzm();
		$(this).css({
			'background':'#fff',
			'color':'#333',
			'border':'1px solid #e0e0e0'
		}).html(str);
		
	});
	$('#yzminput').blur(function(){
		bstop=false;
		if($(this).val()==$('.yzm').html() && $(this).val()!='点击获取验证码'){
			$('.mcback').css('border','1px solid #e0e0e0');
			$('.yzmwar').find('i').css('display','none');
			$('.yzmwar').find('span').css('display','none');
			bstop=true;
		}else{
			bstop=false;
			$('.mcback').css('border','1px solid #d70057');
			$('.yzmwar').find('i').css('display','inline-block');
			$('.yzmwar').find('span').css('display','inline-block');
		}
	});
	
	//注册
	$('#registerbtn').on('click',function(){
		var value=$('#tel').val();
		var password=$('#password').val();
		var yzm=$('#yzminput').val();
		console.log(bstop);
		if(bstop && value!='' && password !='' && yzm!=''){
			$.ajax({
				type:"post",
				url:'php/register.php',
				data:{
					submit:true,
					tel:value,
					password:password
				},
				success:function(d){
					if(d){
						addCookie('username',value,7);
						location.href='http://127.0.0.1/lllll/haolemai/haolemai.html';
					}
				}	
			});
		}
	});
	
	//验证码
	function yzm(){
		var arr=[];
		for(var i=48;i<=57;i++){
			arr.push(String.fromCharCode(i))
		}
		for(var i=97;i<=122;i++){
				arr.push(String.fromCharCode(i));
			}
		var str='';
		for (var i=0;i<4;i++) {
			var ranum=parseInt(Math.random()*arr.length)
			if(ranum>10){
				var bool=Math.random()>0.5?true:false
				if(bool){
					str+=arr[ranum].toUpperCase();
				}else{str+=arr[ranum]}
			}
			else{str+=arr[ranum]}
		}
       	return str;
	};
})(jQuery);

