$('.magpie_rules_btn img').click(function(){
	$('.rules_wrap').animate({
		'height':'22em',
		'padding':'1.2em 0 0 0'
	});
});
$('.rules_bottom').click(function(){
	$('.rules_wrap').animate({
		'height':'0',
		'padding':'0'
	});
});
