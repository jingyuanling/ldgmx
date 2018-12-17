$(function() {
	//选择支付方式
	$('.wine-submit-down li').click(function(){
		$('.wine-submit-down li').find('.pay-right-sel').removeClass('pay_sel_active');
		$(this).find('.pay-right-sel').addClass('pay_sel_active');
	});
});