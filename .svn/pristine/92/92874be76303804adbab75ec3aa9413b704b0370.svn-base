$(function(){
	$('.search-left-class li').click(function(){
		$(this).siblings().removeClass('li_active');
		$(this).addClass('li_active');
	});
	//搜索框内删除按钮
	$('.search-delete').click(function(){
		$('.search-inp-div input').val('');
	});
	//品牌筛选弹出事件
	$('.screen-nav-btn').click(function(){
		$('.screen-alert-gray').show();
		$('.screen-alert').animate({'left':'0'});
	});
	//品牌筛选关闭按钮
	$('.screen-alert-del,.screen-alert-gray').click(function(){
		$('.screen-alert').animate({'left':'-6rem'});
		$('.screen-alert-gray').fadeOut();
	});
	$('.screen-alert-content li').click(function(){
		$(this).siblings().removeClass('screen_alert_active');
		$(this).addClass('screen_alert_active');
		$('.screen-alert').animate({'left':'-6rem'});
		$('.screen-alert-gray').fadeOut();
		$('.screen-nav-btn').css({'color':'#d10000'});
	});
//	document.getElementsByClassName("screen-alert")[0].addEventListener("click",function(event){
//      event.stopPropagation();    
//  },false);
});
