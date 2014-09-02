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
       $(".buta1").click(function(){

             $(this).parent().parent().next().next().next().find(".tabelistta").hide();
       });
        
});
      checkit=true;
      function SelectAll()
      {
        aa=document.getElementsByName("radiotex");     
        if(checkit)     
        {     
         for(i=0;i<aa.length;i++)     
         aa.item(i).checked=true;     
         checkit=false;     
        }     
       else     
        {     
           for(i=0;i<aa.length;i++)     
           aa.item(i).checked=false;     
           checkit=true;     
        }     
       } 
