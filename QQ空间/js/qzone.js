$(function(){
   
    $(".topzy").hover(function(){
      
           $(this).find(".toptbs").show();
    },function(){
          $(this).find(".toptbs").hide();

    });
    $(".texta").click(function(){
    	  $(this).next().show();
    	  return false;
    });
    $(document).click(function(){
    	  $(".texta").next().hide();
    });
});