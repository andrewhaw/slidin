

// Busting out some JQuery
$(document).ready(function(){


	// Tags with .slide are considered separate elements
	$.deck(".slide");

	$(".next").click(function(e) {
		e.preventDefault();
		$.deck("next");
	});

	$(".prev").click(function(e) {
		e.preventDefault();
		$.deck("prev");
	});
		
		
		
	// Responsive Textareas	
    var txt = $('.responses'),  
    hiddenDiv = $(document.createElement('div')),  
    content = null;  
  
    //txt.addClass('txtstuff');  
    hiddenDiv.addClass('resizer');  
  
    $('form').append(hiddenDiv);  
  
    txt.on('keyup', function () {  
  
        content = $(this).val();  
  
        content = content.replace(/\n/g, '<br>');  
        hiddenDiv.html(content + '<br class="lbr">');  
  
        $(this).css('height', hiddenDiv.height());  
  
    });​ 
    
    

	// Week 01 interactions
	$(".ah").hover( function() { 
		$(this).stop(true,true);
		$(this).fadeOut(100);
		temp = $(this).html();
		$(this).html("ryshkewich");
		$(this).fadeIn(100);
	}, function() { 
		$(this).stop(true,true);
		$(this).fadeOut(100);
		$(this).html(temp);
		$(this).fadeIn(100);
	});





			
});
	
$.extend(true, $.deck.defaults, {
   selectors: {
      statusCurrent: '.slide-current',
      statusTotal: '.slide-total',
      hashLink: '.slide'
   },

   countNested: false
});