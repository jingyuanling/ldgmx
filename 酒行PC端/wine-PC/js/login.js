$(function(){
	//获取验证码点击事件
	$('.register_code_btn').click(function(){
		//清除定时器
		clearInterval(timeTimer);
		$(this).css({'backgroundColor':'#dddddd'});
		//设置总时长
		var time = 60;
		//显示剩余时间
		$(this).html(time + '秒后重新获取');
		$(this).attr("disabled","disabled");
		//创建定时器,每隔一秒减少剩余时间
		var timeTimer = setInterval(function() {
			time--;
			//重置剩余时间
			$('.register_code_btn').html(time + '秒后重新获取');
			if(time == 0) {
				//清除定时器
				clearInterval(timeTimer);
				$('.register_code_btn').css({'backgroundColor':'#865c30'});
				$('.register_code_btn').html('获取验证码');
			}
		},1000);
		setTimeout(function(){
			$('.register_code_btn').removeAttr("disabled");
		},60000);
	});
	//登陆页面头部点击事件
	$('.login_right_header li').click(function(){
		$('.login_right_header li span').removeClass('header_span_active');
		$(this).find('span').addClass('header_span_active');
		if ($(this).index() == 0) {
			$('.login_inp_wrap').show();
			$('.login_veri_wrap').hide();
		} else{
			$('.login_inp_wrap').hide();
			$('.login_veri_wrap').show();
		}
	});
});