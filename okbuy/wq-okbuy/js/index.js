//回到顶部
;(function(){
	$(window).on('scroll',function(){
		var $scrolltop=$(window).scrollTop();//获取滚动条的距离
		var $footertop=$('#footer').offset().top;
		var $windowH=$(window).height();
		if($scrolltop>=100){
			$('.gotoTop').show();
		}else{
			$('.gotoTop').hide();
		}
		
		//当footer出来时 gototop为block属性
		if($footertop<$scrolltop+$windowH){
			$('.gotoTop').css({
			    'bottom': $scrolltop+$windowH-$footertop+20
			});
		}
	});
	
	$('.gotoTop .gotop').on('click',function(){
		$('html,body').animate({
			scrollTop:0
		});
	});
})();
//轮播图数据
;(function($){
	$.ajax({
		type:"post",
		url:'php/banner.php',
		success:function(d){
			var arr=JSON.parse(d);
//			console.log(arr);
			var $cell=$('.mainSlide .cell');
			$.each(arr, function(index,value){
//				console.log(arr[index].src);
				$cell.eq(index).find('.prom').css("background-image","url("+arr[index].src+")");
			});
		}
	});
})(jQuery);
//轮播图
;(function(){
	var $banner=$('.mainSlide');
	var $imgs=$('.mainSlide .cell');
	var $btns=$('.pglength .picnum i');
	var $prev=$('.leftar');
	var $next=$('.rightar');
	var $index=0;//当前移动的图片的索引
	var $pindex=0;//前一张移动的图片的索引
	var timer=null;
	
	//给第一张添加类
	$imgs.eq($index).addClass('cur').css({
		'display': 'block',
		'opacity': '1',
	});
	//1.给$btns添加点击事件
	$btns.on('click',function(ev){
		$index=$(this).index('i')-5;//获取当前点击按钮的索引。
		console.log($index);
		console.log($btns);
		tabswitch();
		$pindex=$index;//将当前的索引给前一个索引。
	});
	
	//左右按钮
	$next.on('click',function(ev){
		$index++;
		if($index>6){
			$pindex=6;
			$index=0;
		}
		tabswitch();
		$pindex=$index;
	});
	
	$prev.on('click',function(ev){
		$index--;
		if($index<0){
			$pindex=0;
			$index=6;
		}
		tabswitch(ev);
		$pindex=$index;
	});
	
	//自动轮播
	timer=setInterval(function(){
		$next.click();
	},2000);
	
	$banner.hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			$next.click();
		},2000);
	});
	
	function tabswitch(){
		$btns.eq($index).addClass('cur').siblings('i').removeClass('cur');
		$imgs.eq($index).fadeIn(1000).siblings('.cell').fadeOut(1000);
		$imgs.eq($pindex).removeClass('cur');
		$imgs.eq($index).addClass('cur');
	}
})();

//下拉菜单
;(function(){
	var $hasub=$('.nav .navwrap .hasub');
	var $navsub=$('.nav .navsub');
	var $navarr=$('.nav .navsub .navarr');
	var left=264;
	$.each($hasub, function(i) {
		$hasub.eq(i).on('mouseover',function(){
			$navsub.css('display','block');
			$navarr.css('left',left+(100*i)+'px');
		});
		$hasub.eq(i).on('mouseout',function(){
			$navsub.css('display','none');
		});
	});
	$navsub.hover(function(){
		$navsub.css('display','block');
	},function(){
		$navsub.css('display','none');
	})
	
})();

//大抢购数据
;(function($){
	var $bigshop=$('#listUl li');
	$.ajax({
		type:"post",
		url:'php/bigshop.php',
		success:function(d){
			var arr=JSON.parse(d);
			$.each(arr, function(index,value){
				$bigshop.eq(index).find('img').attr('src',arr[index].src);
				$bigshop.eq(index).find('.title1').html(arr[index].title1);
				$bigshop.eq(index).find('.title2').html(arr[index].title2);
				$bigshop.eq(index).find('.title3').html(arr[index].title3);
			});
		}
	});
})(jQuery);

//小抢购数据
;(function($){
	var $smallshop=$('#list2Ul li');
	$.ajax({
		type:"post",
		url:'php/smallshop.php',
		success:function(d){
			var arr=JSON.parse(d);
			$.each(arr, function(index,value){
				$smallshop.eq(index).find('img').attr('src',arr[index].src);
				$smallshop.eq(index).find('p').html(arr[index].title+'<span>'+arr[index].span+'</span>')
			});
		}
	});
})(jQuery);

//抢购倒计时
;(function($){
	//大抢购倒计时
	var timer1=null;
	timer1=setInterval(function(){
		var obj1=djs();
		$('#listUl li a .timer').find('.day i').html(obj1.day);
		$('#listUl li a .timer').find('.hour i').html(obj1.hour);
		$('#listUl li a .timer').find('.minute i').html(obj1.minu);
		$('#listUl li a .timer').find('.second i').html(obj1.sec);
		$('#listUl li a .timer').find('.fsecond i').html(obj1.fsec);
		$('#listUl li a .timer').find('i').css('color','#d70057');	
	},10);
	
	//小抢购倒计时
	var timer2=null;
	timer2=setInterval(function(){
		var obj2=djs('2018-4-17 00:00:00');
		$('#list2Ul li a .timer2').find('.day i').html(obj2.day);
		$('#list2Ul li a .timer2').find('.hour i').html(obj2.hour);
		$('#list2Ul li a .timer2').find('.minute i').html(obj2.minu);
		$('#list2Ul li a .timer2').find('.second i').html(obj2.sec);
		$('#list2Ul li a .timer2').find('.fsecond i').html(obj2.fsec);
		$('#list2Ul li a .timer2').find('i').css('color','#d70057');
	},10);
	
	//倒计时函数
	function djs(djs){
		djs= djs || '2018-4-19 00:00:00';
		var now=new Date();
		var future= new Date(djs);
		var time=(future-now)/1000;			
		var day=parseInt(time/86400);
		var hour=parseInt(time%86400/3600);
		var minu=parseInt(time%3600/60);
		var sec=parseInt(time%60);
		var fsec=parseInt(time*10%10);
		var obj={
			day:0,
			hour:0,
			minu:0,
			sec:0,
			fsec:0,
		};
		if (minu <= 9){
			minu = '0' + minu;
		} 
	    if (sec <= 9){
	    	sec = '0' + sec;
	    }
	    obj.day=day;
	    obj.hour=hour;
	    obj.minu=minu;
	    obj.sec=sec;
	    obj.fsec=fsec;
	    
	    return obj;
	}
})(jQuery);
//登录注销
;(function($){
	var user=null;
	if(getCookie('username')){
		user=getCookie('username');
		$('.tinfo .unlogin a').eq(0).html(user).attr('id','user');
		$('.tinfo .unlogin a').eq(1).hide();
		$('#zx').show();
	};
	$('#zx').on('click',function(){
		console.log(user);
		delCookie('username',user);
		$('.tinfo .unlogin a').eq(0).html('登录').removeattr('id');
		$('.tinfo .unlogin a').eq(1).show();
		$('#zx').hide();
	})
})(jQuery);
