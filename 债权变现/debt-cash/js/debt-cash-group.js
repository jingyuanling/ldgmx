$(function() {
	//轮播
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		loop : true,
		autoplayDisableOnInteraction : false,
		pagination : '.swiper-pagination'
	});
	//top监听
	var suspend_height = $('.open-group-btn').height();
	$(window).scroll(function() {
		var suspend_top = $('.open-group-btn').offset().top - $(window).scrollTop();
		if (suspend_top<=(-suspend_height)) {
			$('.open-group-btn-suspend').fadeIn();
		}else{
			$('.open-group-btn-suspend').fadeOut();
		}
	});
	//点击参与和继续购买的弹框
	$('.open-group-btn,.continue-buy').click(function() {
		$('.players-group-gray').fadeIn();
	});
	$('.players-alert-close').click(function() {
		$('.players-group-gray').fadeOut();
	});
	//查看更多队员的点击事件
	$('.more-btn').click(function() {
		$('.cash-invite-photo').css('height','auto');
		$(this).remove();
	});
})