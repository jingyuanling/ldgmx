//获取验证码的点击事件
$('.wine_bound_code_btn').click(function() {
	//清除定时器
	clearInterval(timeTimer);
	$('.wine_bound_code_btn').css('background-color', '#dcdcdc');
	//设置总时长
	var time = 60;
	//显示剩余时间
	$('.wine_bound_code_btn').html(time + 's后重新获取');
	$('.wine_bound_code_btn').attr("disabled","disabled");
	//创建定时器,每隔一秒减少剩余时间
	var timeTimer = setInterval(function() {
		time--;
		//重置剩余时间
		$('.wine_bound_code_btn').html(time + '秒后重新获取');
		if(time == 0) {
			//清除定时器
			clearInterval(timeTimer);
			$('.wine_bound_code_btn').css('background-color', '#e83f00');
			$('.wine_bound_code_btn').html('获取验证码');
		}
	}, 1000);
	setTimeout(function(){
		$('.wine_bound_code_btn').removeAttr("disabled");
	},60000);
});