$(function(){
    $('.layout_jdBar').click(function(){
        if($(this).parent().next().css("display")=="none"){
            $(this).parent().next().show();
        }else{
             $(this).parent().next().hide();
        }
});
    
});

