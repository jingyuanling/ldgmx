$(function(){
	//弹出框显示隐藏动画
	//点击选择规格弹出
	$('.details-size-btn').click(function(){
		$('.choose-size-gray').show();
		$('.choose-size-wrap').animate({'bottom':'0'});
	});
	//两个弹框的点击弹框消失动画
	$('.choose-size-close,.choose-size-gray,.choose-coupons-close,.choose-coupons-gray').click(function(){
		$('.choose-size-wrap,.choose-coupons-wrap').animate({'bottom':'-100%'});
		$('.choose-size-gray,.choose-coupons-gray').fadeOut();
	});
	document.getElementsByClassName("choose-size-wrap")[0].addEventListener("click",function(event){
        event.stopPropagation();    
    },false)
	document.getElementsByClassName("choose-coupons-wrap")[0].addEventListener("click",function(event){
        event.stopPropagation();    
    },false)
	//选中规格
	$('.choosed-size-content .size-ul .have').click(function(){
		$(this).siblings().removeClass('have_active');
		$(this).addClass('have_active');
	});
	//点击优惠券显示框弹出领取优惠券弹框
	$('.details-coupons-btn').click(function(){
		$('.choose-coupons-gray').show();
		$('.choose-coupons-wrap').animate({'bottom':'0'});
	});
	//领取优惠券
	$('.not-get .right-get-btn').click(function(){
		$(this).parent().css({'background': '#d2d2d2'});
	});
	//一键领取
	$('.coupons-getall').click(function(){
		$('.choose-coupons-ul .not-get').css({'background': '#d2d2d2'});
	});
});