$('.top_hide,.flashing_hand').click(function(){
	$('.rules_wrap').animate({
		'height':'7.23em',
		'padding':'0.5em 0 0 0'
	});
});
$('.rules_bottom').click(function(){
	$('.rules_wrap').animate({
		'height':'0',
		'padding':'0'
	});
});

//礼盒动画
function animate(){
	$('.not_open_box img').addClass('animated shake');
    setTimeout(function(){
        $('.not_open_box img').removeClass('shake');
    }, 2000);
}
setInterval(function(){
	animate();
},4000);
