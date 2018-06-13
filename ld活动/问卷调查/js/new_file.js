//jQuery().ready(function(){
//	$('.role-sel-ul li').click(function(){
//		$(this).parent().children().children().find('.role-sel-white').removeClass('role-sel-red');
//		$(this).children().find('.role-sel-white').addClass('role-sel-red');
//	});
//	$('.hidden-box').click(function(){
//		$(this).parent().find('textarea').css({
//			"height":"1rem",
//			"width":"100%"
//		});
//	});
//	$('.role-sel-ul li').not('.hidden-box').click(function(){
//		$(this).parent().find('textarea').css({
//			"height":"0",
//			"width":"0"
//		});
//	});
//	$('.hidden-box-qt').click(function(){
//		$(this).parent().find('textarea').attr('placeholder','请填入您希望置换的类型和品牌');
//	});
//	$('.hidden-box-qt').parent().children('li').not('.hidden-box-qt').click(function(){
//		$(this).parent().find('textarea').attr('placeholder','请填入您希望置换的品牌');
//	});
//	//多选
//	$('.role-sel-ul-dx li').click(function(){
//		$(this).children().find('.role-seldx-white').toggleClass('role-sel-red');
//		if ($(this).parent().find('.hidden-boxdx').children().find('.role-seldx-white').hasClass('role-sel-red')) {
//			$(this).parent().find('textarea').css({
//				"height":"1rem",
//				"width":"100%"
//			});
//		} else{
//			$(this).parent().find('textarea').css({
//				"height":"0",
//				"width":"0"
//			});
//		}
//	});
//});



jQuery().ready(function(){
	$('.role-sel-ul li').click(function(){
		$(this).parent().children().children().find('.role-sel-white').removeClass('role-sel-red');
		$(this).children().find('.role-sel-white').addClass('role-sel-red');
	});
	$('.hidden-box').click(function(){
		$(this).parent().find('textarea').css({
			"border":"none",
			"height":"0",
			"width":"0"
		});
		$(this).next('textarea').css({
			"border": "0.01rem solid #999999",
			"height":"1rem",
			"width":"100%"
		});
	});
	$('.role-sel-ul li').not('.hidden-box').click(function(){
		$(this).parent().find('textarea').css({
			"border": "0.01rem solid #999999",
			"height":"0",
			"width":"0"
		});
	});
	//多选
	$('.role-sel-ul-dx li').click(function(){
		$(this).children().find('.role-seldx-white').toggleClass('role-sel-red');
		if ($(this).parent().find('.hidden-boxdx').children().find('.role-seldx-white').hasClass('role-sel-red')) {
			$(this).parent().find('textarea').css({
				"border": "0.01rem solid #999999",
				"height":"1rem",
				"width":"100%"
			});
		} else{
			$(this).parent().find('textarea').css({
				"border":"none",
				"height":"0",
				"width":"0"
			});
		}
	});
});