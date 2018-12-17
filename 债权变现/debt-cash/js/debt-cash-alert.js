$(function() {
	$('.cash-strategy-btn').click(function() {
		$('.cash-alert-gray,.strategy-alert').fadeIn();
	});
	$('.cash-alert-gray,.strategy-alert-delete,.add-address-close').click(function() {
		$('.cash-alert-gray,.strategy-alert,.add-address-alert').fadeOut();
	});
	document.getElementsByClassName("cash-alert")[0].addEventListener("click",function(event){
        event.stopPropagation();    
    },false)
	//添加地址弹框的js
	$('.myAddrs').click(function() {
		
	});
})