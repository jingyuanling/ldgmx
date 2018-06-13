$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
//	  	mousewheelControl : true,
////		    direction: 'vertical',
//      //设置为true 则开启loop模式。loop模式：会在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换
//	    loop: true,
//	    //默认为true，Swiper会强制加载所有图片
//	    preloadImages:false,
//	    //自动轮播时间3s
//	    autoplay:3000,
//	    
//	    // 如果需要分页器
//	    pagination: '.swiper-pagination',
//	    //
//	    paginationClickable :true,
//	    // 设置为false，点击分页器后，轮播图依然可以自动轮播
//	    autoplayDisableOnInteraction : false,  
//	    
//	    // 如果需要前进后退按钮
//	    nextButton: '.swiper-button-next',
//		prevButton: '.swiper-button-prev',
//		 
//	    
//	    // 如果需要滚动条
////		    scrollbar: '.swiper-scrollbar',
	   





		effect: 'coverflow',
		slidesPerView: 1.6,
		centeredSlides: true,
		coverflow: {
			rotate: 30,
			stretch: 10,
			depth: 60,
			modifier: 1,
			slideShadows: true//图片上的阴影涂层
		}
	}) 
	
	
	
	$(".offset_m_btn").click(function(){
		$('.do_task_m_success_alert').show();
	});
	$(".do_task_m_sure_btn").click(function(){
		$('.do_task_m_success_alert').hide();
	});
})
  
