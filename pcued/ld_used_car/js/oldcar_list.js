$(".buttom_border_p>span").click(function(){
	$(".buttom_border_p>span").removeClass('click_asctive_span');
	$(".buttom_border_p>span").eq($(this).index()-1).addClass('click_asctive_span');
});
$(".buttom_border_j>span").click(function(){
	$(".buttom_border_j>span").removeClass('click_asctive_span');
	$(".buttom_border_j>span").eq($(this).index()-1).addClass('click_asctive_span');
});
$(".buttom_border_c>span").click(function(){
	$(".buttom_border_c>span").removeClass('click_asctive_span');
	$(".buttom_border_c>span").eq($(this).index()-1).addClass('click_asctive_span');
});

$('.click_asctive_span').click(function(){
	$(".click_asctive_span").addClass('click_asctive_span');
});
