$(function(){
	$('.confirm-bounced-gray,.confirm-single-gray').fadeIn();
	//确认、取消按钮
	$('.give-up,.think-again').click(function(){
		$('.confirm-bounced-gray').fadeOut();
	});
	//只有一个确认按钮
	$('.confirm-single-alert .single-btn').click(function(){
		$('.confirm-single-gray').fadeOut();
	});
});
