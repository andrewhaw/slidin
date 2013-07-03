

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
	
	
	// Code partially taken from http://www.hawkee.com/snippet/9844/ to convert <code> into Codemirror
	// Override code fragments with codemirror editable sections
	$('code').each(function() {	

		//var currentNode = $(this).
		var lang = $(this).attr('lang');
		var template = '<div class="code"><textarea>'+$(this).html()+'</textarea></div>';

      	// Take the code and put it into the textarea.
		$(this).html(template);
      
      	var cm = CodeMirror.fromTextArea($(this).find('textarea')[0], {
				lineNumbers: true,
				matchBrackets: true,
				onKeyEvent: function(e, s){
                if (s.type == "keyup")
                {
                    $("samp").filter(":visible").html(cm.getValue()); 
                }
            }


		});
		
      	setMode(cm, lang);
	});
	
	// On input of CodeMirror code, do stuff
	/*
	$(".code textarea").keyup(function() { 
		$("h1").html("typing");
		var html = $(this).val();
		$("samp").html(html);
		$(this).parent("code").next("samp").html(html);
	});
*/

		
});
	
$.extend(true, $.deck.defaults, {
   selectors: {
      statusCurrent: '.slide-current',
      statusTotal: '.slide-total',
      hashLink: '.slide'
   },
   keys: {
      //  page down, right arrow, down arrow
      next: [34, 39, 40],
      // page up, left arrow, up arrow
      previous: [33, 37, 38]
   },
   countNested: false
});


// Code partially taken from http://www.hawkee.com/snippet/9844/ to convert <code> into Codemirror
function setMode(cm, mode) {
	if(mode !== undefined) {
		var script = 'js/mode/'+mode+'/'+mode+'.js';
		if (mode == "htmlmixed") {
			$.getScript('js/mode/xml/xml.js', function() {});
			$.getScript('js/mode/css/css.js', function() {})
		}

		$.getScript(script, function(data, success) {
			if(success) cm.setOption('mode', mode);
			else cm.setOption('mode', 'clike');
		});
	}
	else cm.setOption('mode', 'clike');
}