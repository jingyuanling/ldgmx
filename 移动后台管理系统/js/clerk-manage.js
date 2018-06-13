jQuery().ready(function(){
	$('.role-sel-ul li').click(function(){
		$(this).children().find('.role-sel-white').toggleClass('role-sel-red');
	});
	$('.more-role').click(function(){
		$('.role-class-gray').show();
	});
	$('.role-class-gray').click(function(){
		$(this).hide();
	});
	document.getElementsByClassName("role-class-wrap")[0].addEventListener("click",function(event){
        event.stopPropagation();    
    },false);
});