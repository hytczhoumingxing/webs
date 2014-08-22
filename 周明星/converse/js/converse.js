$(function(){
	$(".maina").click(function(){

		$(this).parent().animate(
		{
			"top":"-845px",
		}
			,1000);
		$(this).parent().next().animate(
		{
			"top":"-845px",
		}
			,1000);
		$(this).parent().next().find(".same").animate({

               "width":"105%",
               "hight":"105%",
               "margin-left":"-15px",
    	        "margin-top":"5px",
		},2000);
	});
	$(".up").click(function(){

		$(this).parent().animate(
		{
			"top":"0px",
		}
			,1000);
		$(this).parent().prev().animate(
		{
			"top":"0px",
		}
			,1000);
	});
});