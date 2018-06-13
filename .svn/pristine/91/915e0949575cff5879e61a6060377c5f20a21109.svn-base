
$(".chakanxiangqing").click(function () {
	$(".message-content,.evaluation-content,.order-content").hide();
	$(".chakan-content,.reply-content").show();
});

$(".delectimg").click(function () {
	$(this).parent().siblings().hide();
});

for (var j = 0; j < $('.liuyan_title li').length; j++) {
	$('.liuyan_title li').eq(0).addClass('active');
	$('.liuyan_title li').eq(j).click(function () {
		for (var i = 0; i < $('.liuyan_title li').length; i++) {
			$('.liuyan_title li').eq(i).removeClass("active");
		}
		$('.liuyan_title li').eq($(this).index()).addClass("active");
		$('.lyglspan').html($(this).html());
	});
}
$('.liuyan_title li').eq(0).click(function(){
	$('.message-content').show();
	$(".evaluation-content").hide();
	$(".order-content").hide();
});
$('.liuyan_title li').eq(1).click(function(){
	$('.message-content').hide();
	$(".evaluation-content").show();
	$(".order-content").hide();
});
$('.liuyan_title li').eq(2).click(function(){
	$('.message-content').hide();
	$(".evaluation-content").hide();
	$(".order-content").show();
});
