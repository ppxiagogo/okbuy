//放大镜数据
;(function($){
	var $li=$('.spiclist ul li');
//	var obj=[];
	$.ajax({
		type:"post",
		url:'php/details.php',
		success:function(d){
			var arr=JSON.parse(d);
			var $li=$('.spiclist ul li');
			$.each(arr, function(index,value){
				$li.eq(index).find('img').attr('src',arr[index].src);
				$li.on('mouseover',function(){
					var i=$li.index($(this));
					$('.spic').find('img').attr('src',arr[i].src2);
					$('#bpic').attr('src',arr[i].src3);
				});
			});
			
		}
	});	
})(jQuery);

//放大镜效果
;(function($){
	var $li=$('.spiclist ul li');
	$li.eq(0).find('.imgbor').css('display','block');
	
	$li.on('mouseover',function(){
		$li.find('.imgbor').css('display','none')
		$(this).find('.imgbor').css('display','block');
	});
	$('.spic').on('mouseover',function(){
		$('.piczoom').css('visibility','visible');
		$('#bf').css('visibility','visible');
	});
	$('.spic').on('mouseout',function(){
		$('.piczoom').css('visibility','hidden');
		$('#bf').css('visibility','hidden');
	});
	
	$('.spic').mousemove(function(e){
		e = e || widow.enent;
		var $scale=2.667;
		var l=e.pageX-$('.spic').offset().left - $('.piczoom').width()/2;
		var t=e.pageY-$('.spic').offset().top - $('.piczoom').height()/2;
		$('.piczoom').css({
			'width':$('.spic').width()*$('#bf').width()/$('#bpic').width(),
			'height':$('.spic').height()*$('#bf').height()/$('#bpic').height(),
		});
		if(l<0){
			l=0;
		}else if(l>=$('.spic').width()-$('.piczoom').width()){
			l=$('.spic').width()-$('.piczoom').width();
		}
		
		if(t<0){
			t=0;
		}else if(t>=$('.spic').height()-$('.piczoom').height()){
			t=$('.spic').height()-$('.piczoom').height();
		}
		$('.piczoom').css({
			'top':t+'px',
			'left':l+'px',
		});
		$('#bpic').css({
			'top':-t*$scale+'px',
			'left':-l*$scale+'px',
		});
	});
})(jQuery);

//抢购倒计时
;(function($){
	//大抢购倒计时
	var timer1=null;
	timer1=setInterval(function(){
		var obj1=djs();
		$('.letstime .pictimer').find('.day i').html(obj1.day);
		$('.letstime .pictimer').find('.hour i').html(obj1.hour);
		$('.letstime .pictimer').find('.minute i').html(obj1.minu);
		$('.letstime .pictimer').find('.second i').html(obj1.sec);
		$('.letstime .pictimer').find('.fsecond i').html(obj1.fsec);
		$('.letstime .pictimer').find('i').css('color','#fff');	
	},10);	
	//倒计时函数
	function djs(djs){
		djs= djs || '2018-4-11 00:00:00';
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

//添加尺码数量
;(function($){
	var $p=$('.prdoSize .size li p');
	var $add=$('#add');
	var $reduce=$('#reduce');
	//尺码
	$.each($p,function(i,v){
		$p.on('click',function(){
			$p.find('.ms').css('border','1px solid #ccc');
			$(this).find('.ms').css('border','1px solid #d70057');
		})
	});
	//数量
	$add.on('click',function(){
		var $num=$('.detaright ul.count .input .inputnum').val();
		if($num<9){
			$num++;
			$('.detaright ul.count .input .inputnum').val($num);
		}
	});
	$reduce.on('click',function(){
		var $num=$('.detaright ul.count .input .inputnum').val();
		if($num>1){
			$num--;
			$('.detaright ul.count .input .inputnum').val($num);
		}
	})
})(jQuery);

//加入购物车动画
;(function($){
	var $btn=$('.cartwrap .cartbtn .proBtn');
	$btn.hover(function(){
		$btn.css('background-color','#bd004d');
	},function(){
		$btn.css('background-color','#d70057')
	});
	$btn.on('click',function(){
		var $newbtn=$btn.clone();
		$newbtn.appendTo('.cartwrap').css({
			'height': '50',
		    'width': '250',
		    'border': '0',
		    'color': '#fff',
		    'padding-left': '32',
		   	'text-align': 'center',
		    'line-height': '50px',
		    'font-size': '20',
		    'position':'absolute',
		    'left':0,
		    'top':0,
		    'z-index':'999',
		    'background': 'yellowgreen'
		}).val('添加成功');
		//top 590 left 330
		var a=0.001;
		var speedx=0;
		//b=(target.y-a*target.x*target.x)/target.x;
		var b=-2.118;
		var timer=setInterval(function(){
			speedx+=10;
			if(speedx>=330){
				clearInterval(timer);
				$newbtn.remove();
			}
			$newbtn.css({
				'left':speedx,
				'top':a*speedx*speedx+b*speedx
			}).fadeOut(500);
		},10)
	});
})(jQuery);

//加入购物车
;(function($){
	var $btn=$('.cartwrap .cartbtn .proBtn');
	//2.先获取cookie值。
	var $sidarr=[];//存放sid的值
	var $numarr=[];//存放数量的值。
	
	function getcookievlaue(){
		if(getCookie('cartsid')){
			$sidarr=getCookie('cartsid').split(',');
		}
		
		if(getCookie('cartnum')){
			$numarr=getCookie('cartnum').split(',');
		}
	}
	$btn.on('click',function(){
		var sid=$('.spic').find('img').attr('sid');
		var newnum=$('.detaright .count .inputnum').val();//现在添加的数量
		if($.inArray(sid,$sidarr)!=-1){//存在
			//获取原来的值加现在的num
			var num=parseInt($numarr[$.inArray(sid,$sidarr)])+parseInt(newnum);
			$numarr[$.inArray(sid,$sidarr)]=num;//通过sid的位置，找num的位置
			addCookie('cartnum', $numarr.toString(), 7);
		}else{//不存在
			$sidarr.push(sid);//将当前sid添加到数组里面。
			addCookie('cartsid',$sidarr.toString(),7);
			$numarr.push(newnum);
			addCookie('cartnum',$numarr.toString(),7);
		}
	});
})(jQuery);
