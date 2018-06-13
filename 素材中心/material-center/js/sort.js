$(function(){
	$('.material-sort1 li').click(function(){
		$('.material-sort1 .btn').find('.default').html($(this).find('a').html());
		$('.material-sort1 li a').removeClass('material_sort1_a_active');
		$(this).find('a').addClass('material_sort1_a_active');
	});
	$('.material-sort .btn').click(function(){
		$('.material-sort .btn').removeClass('sort_btn_active');
		$(this).addClass('sort_btn_active');
	});
});