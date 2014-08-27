$(function(){
       $(".fgu").click(function(){ 
             var c=$(this).attr("c");
            if(c=="true")
              { 
               $(this).css("background",'url("css/images/mail.png") no-repeat -48px -160px');
               $(this).attr("c","false");
              }
            else
             {
               $(this).css("background","");
               $(this).attr("c","true"); 
             }
     });
});
 
