$(function(){

	

	$(".friendA").click(function(){
		var friendID = $(this).attr("friendID");
		var chatDivID = "chat" + friendID;
		if ($(this).attr("isOpen") == "true") {
			//将已经打开的窗口置顶
			$(".qqChat").css("z-index","15");
			$("#" + chatDivID).css("z-index","16");
			return;
		}
		$(this).attr("isOpen","true");
		
		var friendName = $(this).attr("friendName");
		var html ="";
		html += '		<div id="' + chatDivID + '" class="qqChat">';
		html += '			<div class="chatTitle">';
		html += '				<div class="chatMenu"></div>';
		html += '				<div class="chatFriendName">' + friendName +'</div>';
		html += '				<div friendAID = "friendA'+friendID+'" chatDivID="' + chatDivID + '" class="chatClose">关闭</div>';
		html += '			</div>';
		html += '			<div class="chatHistory"></div>';
		html += '			<div class="chatControl"></div>';
		html += '		</div>';

		$("body").append(html);

		//置顶
		$(".qqChat").click(function(){
			$(".qqChat").css("z-index","15");
			$(this).css("z-index","16");
		});
		$(".chatClose").click(function(){
			var curCloseDivID = $(this).attr("chatDivID");
			$("#" + curCloseDivID).remove();


			var friendAid = $(this).attr("friendAID");
			$("#" + friendAid).attr("isOpen","false");

			
		});

		var divTop = Math.random()*100+10;
		var divLeft = Math.random()*240+320;

		$("#" + chatDivID).css({
			"top": divTop + "px",
			"left": divLeft + "px"
		});
	});
     $(".clo").click(function(){
           $(this).parent().parent().parent().css("background-color","#ff1");
        });   
     $(".clo1").click(function(){
           $(this).parent().parent().parent().css("background-color","#f00");
        }); 
      $(".clo2").click(function(){
           $(this).parent().parent().parent().css("background-color","#ddd");
        }); 
       $(".clo3").click(function(){
           $(this).parent().parent().parent().css("background-color","#fff");
        }); 
        $(".myli").click(function(){
           $(this).next().show();
        }); 
        $(".myli1").click(function(){
           $(this).next().show();
        });            
        $(".myli2").click(function(){
           $(this).next().show();
        });
         $(".qun").click(function(){
           $(this).parent().parent().next().next().show();
        });                        
});