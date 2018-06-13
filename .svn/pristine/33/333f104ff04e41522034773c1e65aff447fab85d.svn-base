$('.look_car').click(function(){
	$('.appointment_window_wrap').show();
});
$('.appointment_window_top img').click(function(){
	$('.appointment_window_wrap').hide();
});
//获取验证码的点击事件
$('.get_code').click(function() {
	//清除定时器
	clearInterval(timeTimer);
	$('.get_code').css('background-color', '#dcdcdc');
	//设置总时长
	var time = 60;
	//显示剩余时间
	$('.get_code').html(time + '秒后重新获取');
	$('.get_code').attr("disabled","disabled");
	//创建定时器,每隔一秒减少剩余时间
	var timeTimer = setInterval(function() {
		time--;
		//重置剩余时间
		$('.get_code').html(time + '秒后重新获取');
		if(time == 0) {
			//清除定时器
			clearInterval(timeTimer);
			$('.get_code').css('background-color', '#e83f00');
			$('.get_code').html('获取验证码');
		}
	}, 1000);
	setTimeout(function(){
		$('.get_code').removeAttr("disabled");
	},60000);
});
