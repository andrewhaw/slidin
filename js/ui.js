

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
    
    
	
	// Things to do when the slide changes	
	$(document).bind('deck.change', function(event, from, to) {
	
		// Only load iFrames when specified to
		$(".slide:eq("+to+")").find("iframe").prop("src", function(){
			return $(this).attr("data-src");
	    });
	
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