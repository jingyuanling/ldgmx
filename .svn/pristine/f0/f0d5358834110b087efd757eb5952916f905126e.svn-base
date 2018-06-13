// JavaScript Document
var i=0;
     var m;
     var T;
     function autodo(){
               i++;
               if(i>3){
                i=1;
               }
               slider(i);       
        }
     $(document).ready(function() {
        T=setInterval('autodo()', 3000);
       $('#pre').click(function(){
         i--;
         if(i<1){
            i=3;
         }
         slider(i);
       });  
       $('#next').click(function(){
          i++;
         if(i>3){
            i=1;
         }
         slider(i);  
       });
       $('.anvli').click(function(){
            $(this).addClass('navnow');
            var i=$(this).val();
          
            slider(i);
        });
       //定时器

      $('.navbanner').hover(function(){
           $('.hbut').show();
     },function(){
           $('.hbut').hide();
           
     });

     });
  function slider(i){
        m=-760*(i-1);
        $('.anvli').removeClass('navnow');
        $('#navli'+i).addClass('navnow');
        $('.navbanner .picmain').stop(true,true).animate({
            'left':m+'px'
        },700);
     }