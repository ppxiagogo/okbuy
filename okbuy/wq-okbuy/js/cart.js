//登录注销
;(function($){
	var user=null;
	var $price=$('.cardmain td span.pr').find('i');//小计
	//账号
	if(getCookie('username')){
		user=getCookie('username');
		$('.tinfo .unlogin a').eq(0).html(user).attr('id','user');
		$('.tinfo .unlogin a').eq(1).hide();
		$('#zx').show();
		$('.card .cardlogin').hide();
	};
	$('#zx').on('click',function(){
		$('.card .cardlogin').show();
		delCookie('username',user);
		$('.tinfo .unlogin a').eq(0).html('登录').removeattr('id');
		$('.tinfo .unlogin a').eq(1).show();
		$('#zx').hide();
	});
	
	//查看cookie sid存在就获取数据
	if(getCookie('username') && getCookie('cartsid')){
		$('.kong').hide();
		$('.cardlist').show();
		$('.cardbtm').show();
		var $sidarr=[];
		var $numarr=[];
		getcookievlaue();
		$.each($sidarr,function(i,v){
			$.ajax({
				type:"post",
				url:'php/cart.php',
				async:false,
				data:{
					sid:v
				},
				dataType:'json',
				success:function(d){
					$('.cardmain td img').attr('src',d[0].url);
					$('.cardmain td a strong').html(d[0].title);
					$('.bodytr .unit').html(d[0].price);
				}
			});
			$('.cardmain td ul li .num').val($numarr[i]);
			$('.card_num').html($numarr[i]);
			$price.html(499*$numarr[i]);
			$('.card_price').html($numarr[i]*379);
			
			if($numarr[i]<2){
				$('.reduce').addClass('noreduce');
			}else{
				$('.reduce').removeClass('noreduce');
				if($numarr[i]>8){
					$('.add').addClass('noreduce')
				}
			}		
			
		});
	}else{
		$('kong').show();
		$('.cardlist').hide();
		$('.carddbtm').hide();
	}	
	function getcookievlaue(){
		if(getCookie('cartsid')){
			$sidarr=getCookie('cartsid').split(',');
			$numarr=getCookie('cartnum').split(',');
		}
	}
	//删除商品
	$('.cardmain td span.delete').on('click',function(){
		var r=confirm('你确定要删除么？');
		if(r==true){
			delCookie('cartsid','');
			delCookie('cartnum','');
			location.reload();
		}
	});
})(jQuery);

//添加数量
;(function($){
	var $add=$('#add');
	var $reduce=$('#reduce');
	var $p=$('.cardmain td ul li .num');
	var $oldprice=$('.cardlist .cardmain .unit').html();
	//数量
	$add.on('click',function(){
		var $num=$p.val();
		if($num<=8){
			$num++;
			$p.val($num);
			change($oldprice);
			$reduce.removeClass('noreduce');
		}else{
			$add.addClass('noreduce');
		}
	});
	$reduce.on('click',function(){
		var $num=$p.val();
		if($num>=2){
			$num--;
			$p.val($num);
			change($oldprice);
			$add.removeClass('noreduce');
		}else{
			$reduce.addClass('noreduce');
		}
	});
	$p.change(function(){
		change($oldprice);
	});
	//改变价格
	function change($oldprice){
		var $num=$p.val();
		var $price=$('.cardmain td span.pr').find('i');
		var $newprice=$oldprice*$num;
		$price.html($newprice);
		$('.card_num').html($num);
		$('.card_price').html($newprice-$('.sum_all').html()*$num);
	
		if($num>=2&&$num<8){
			$('#add').removeClass('noreduce');
			$('#reduce').removeClass('noreduce');
		}
		else if($num<2){
			$('#add').removeClass('noreduce');
			$('#reduce').addClass('noreduce');
		}
		else if($num>8){
			$('#reduce').removeClass('noreduce');
			$('#add').addClass('noreduce');
		}
	}
	
	//全选按钮
	var bstop=true;
	$('.checkall').on('click',function(){
		if(bstop){
			bstop=!bstop;
			$('.checkall').css({
				'background-position': '0 0',
			});	
			$('.checkbok').css({
				'background-position': '0 0',
			})
		}else{
			bstop=!bstop;
			$('.checkall').css({
				'background-position': '-20px 0',
			})	
			$('.checkbok').css({
				'background-position': '-20px 0',
			});	
		}
	});
	$('.cardmain td .checkbok').on('click',function(){
		if(bstop){
			bstop=!bstop;
			$('.checkall').css({
				'background-position': '0 0',
			});	
			$(this).css({
				'background-position': '0 0',
			})
		}else{
			bstop=!bstop;
			$('.checkall').css({
				'background-position': '-20px 0',
			});	
			$(this).css({
				'background-position': '-20px 0',
			})
		}
	});
	
})(jQuery);
