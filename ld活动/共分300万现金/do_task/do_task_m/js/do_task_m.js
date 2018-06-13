$(document).ready(function () {
  var mySwiper = new Swiper ('.swiper-container', {
  	 //mousewheelControl : true,
//		    direction: 'vertical',
            //设置为true 则开启loop模式。loop模式：会在wrapper前后生成若干个slides让slides看起来是衔接的，用于无限循环切换
		    loop: false,
		    //默认为true，Swiper会强制加载所有图片
		    preloadImages:false,
		    //自动轮播时间3s
		    //autoplay:3000,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    //
		    paginationClickable :true,
		    // 设置为false，点击分页器后，轮播图依然可以自动轮播
		    autoplayDisableOnInteraction : false,  
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
    		prevButton: '.swiper-button-prev',
    		 
		    
		    // 如果需要滚动条
//		    scrollbar: '.swiper-scrollbar',
		effect: 'coverflow',
		slidesPerView: 1.3,
		centeredSlides: true,
		onTouchEnd: function(swiper){
			setTimeout(function() {
				$(".do_task_btm_img[data='"+(swiper.activeIndex+1)+"']").css("border", "2px solid");
				$(".do_task_btm_img[data='"+(swiper.activeIndex+1)+"']").siblings().css("border","");
				
			}, 10);
			
   },
   onTouchStart: function(swiper,even){
   },
   onInit: function(swiper){
      //Swiper初始化了
      $(".do_task_btm_img[data='1']").css("border", "2px solid");
   },
		coverflow: {
			rotate: 0,
			stretch: 10,
			depth: 90,
			modifier: 2,
			slideShadows: false//图片上的阴影涂层
		}
	})
  
//$(".do_task_btm_img").on("click",function(){
//		var index = $(this).attr("data");
//		$(this).css("border", "2px solid");
//		$(this).siblings().css("border","");
//		var mySwiper = new Swiper('.swiper-container',{
//		onInit: function(swiper){
//		      //Swiper初始化了
//		      $(".do_task_btm_img[data='"+(swiper.activeIndex-1)+"']").css("border", "2px solid");
//		    }
//		})
//	});
  
})
  
  
  
  $(".offset_m_btn").click(function(){
		$('.do_task_m_success_alert').show();
	});
	$(".do_task_m_sure_btn").click(function(){
		$('.do_task_m_success_alert').hide();
	});
	
	
	
	
//	var swiper_slideDiv = document.getElementsByClassName('swiper-slide')[0]; 
//	var swiper_wrapperDiv = document.getElementsByClassName('swiper-wrapper')[0];
//	
//	var swiper_slideDiv_width=swiper_slideDiv.clientWidth * 10 / 13;
//	console.log(swiper_slideDiv_width);
//	
//	
//	//轮播小图片的点击事件
//	for (var i = 0; i < $('.do_task_btm_img').length; i++) {
//		
//		$('.do_task_btm_img').eq(i).click(function () {
//			swiper_wrapperDiv.style.left =  -($(this).index()) * swiper_slideDiv_width + 'px';
//		});
//	}
	
