$(function(){
	//获取验证码点击事件
	$('.get-code-btn').click(function(){
		//清除定时器
		clearInterval(timeTimer);
		$(this).css({'color':'#d2d2d2','borderColor':'#d2d2d2'});
		//设置总时长
		var time = 60;
		//显示剩余时间
		$(this).val(time + '秒后重新获取');
		$(this).attr("disabled","disabled");
		//创建定时器,每隔一秒减少剩余时间
		var timeTimer = setInterval(function() {
			time--;
			//重置剩余时间
			$('.get-code-btn').val(time + '秒后重新获取');
			if(time == 0) {
				//清除定时器
				clearInterval(timeTimer);
				$('.get-code-btn').css({'color':'#d10000','borderColor':'#d10000'});
				$('.get-code-btn').val('获取验证码');
			}
		},1000);
		setTimeout(function(){
			$('.get-code-btn').removeAttr("disabled");
		},60000);
	});
	//新增银行卡确认按钮
	$('.identity-sure').click(function(){
		$('.identity-alert').fadeIn(1500);
		$('.identity-alert').fadeOut(1500);
	});
	//解绑微信弹框
	$('.unbund-WeChat').click(function(){
		$('.confirm-bounced-gray').fadeIn();
	});
	//确认、取消按钮
	$('.give-up,.think-again').click(function(){
		$('.confirm-bounced-gray').fadeOut();
	})
});