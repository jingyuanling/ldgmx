var mySwiper = new Swiper ('.swiper-container1', {
	mousewheelControl : true,
    //设置为true 则开启loop模式。loop模式：会在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换
    loop: true,
    //默认为true，Swiper会强制加载所有图片
    preloadImages:false,
    //自动轮播时间3s
    autoplay:1000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    //
    paginationClickable :true,
    // 设置为false，点击分页器后，轮播图依然可以自动轮播
    autoplayDisableOnInteraction : false,  
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});   
var mySwiper2 = new Swiper('.swiper-container2',{
	slidesPerView : 2,
	spaceBetween : 20,
	effect : 'coverflow',
//	slidesPerView: 3,
	centeredSlides: true,
	loop: true,
	autoplay:1000,
	coverflow: {
	            rotate: 0,
	            stretch: 10,
	            depth: 60,
	            modifier: 2,
	            slideShadows : true
	        }
	//spaceBetween : '10%',按container的百分比
})