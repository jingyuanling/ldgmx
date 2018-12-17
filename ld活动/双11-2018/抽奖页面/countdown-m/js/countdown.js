$(function() {
	//设置总时长
	var time = 10;
	//创建定时器,每隔一秒减少剩余时间
	var timeTimer = setInterval(function() {
		time--;
		//重置剩余时间
		if(time == 0) {
			//清除定时器
			clearInterval(timeTimer);
		}
		$('.countdown-num').text(time)
	},1000);
})