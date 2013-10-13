$(document).ready(function() { 

	
	$(window).resize(function() {
		
		var w = $(window).width();
		var h = $(window).height();
		
		if (w>640) {
			
			// On resize, change the text
			$(".s1-resize").html("<< Keep going!");
			$(".s1-resize").stop(true,true);
			$(".s1-resize").css({ "backgroundColor": "rgb(200, 200, 200)" });

		}
		
		if (w<=640) {
			
			$(".s1-resize").html("Did you see the menu-bar move?");
			$(".s1-resize").stop(true,true);
			$(".s1-resize").animate({ "backgroundColor": "rgb(100, 225, 100)" }, 500);
			
		}
		
	});
	
});