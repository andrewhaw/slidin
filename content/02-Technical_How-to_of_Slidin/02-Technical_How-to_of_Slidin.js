var nothing = Array("@","&");
var period = Array("<","*","!");
var plus = Array(">", ".", "}");
var equal = Array("$", "[", "{");
var question = Array("]","=","#");
var underscore = Array("%","?","|");
var colon = Array("(","_",")");
var dash = Array(":", "^", "+" );
var at = Array("-", ";", "," );

$(document).ready( function() { 

	$(".rot13").keypress( function() { 

		var rot13 = $.rot13( $(this).val() );
		rot13 = rot13.replace(".", period[Math.floor(Math.random()*period.length)]);
		rot13 = rot13.replace(".", period[Math.floor(Math.random()*period.length)]);
		rot13 = rot13.replace(/[\.]/g, period[Math.floor(Math.random()*period.length)]);
		
		rot13 = rot13.replace("+", plus[Math.floor(Math.random()*plus.length)]);
		rot13 = rot13.replace("+", plus[Math.floor(Math.random()*plus.length)]);
		rot13 = rot13.replace(/[\+]/g, plus[Math.floor(Math.random()*plus.length)]);
		
		rot13 = rot13.replace("=", equal[Math.floor(Math.random()*equal.length)]);
		rot13 = rot13.replace("=", equal[Math.floor(Math.random()*equal.length)]);
		rot13 = rot13.replace(/[\=]/g, equal[Math.floor(Math.random()*equal.length)]);
		
		rot13 = rot13.replace("?", question[Math.floor(Math.random()*question.length)]);
		rot13 = rot13.replace("?", question[Math.floor(Math.random()*question.length)]);
		rot13 = rot13.replace(/[\?]/g, question[Math.floor(Math.random()*question.length)]);
		
		rot13 = rot13.replace("_", underscore[Math.floor(Math.random()*underscore.length)]);
		rot13 = rot13.replace("_", underscore[Math.floor(Math.random()*underscore.length)]);
		rot13 = rot13.replace(/[\_]/g, underscore[Math.floor(Math.random()*underscore.length)]);
		
		rot13 = rot13.replace(":", colon[Math.floor(Math.random()*colon.length)]);
		rot13 = rot13.replace(":", colon[Math.floor(Math.random()*colon.length)]);
		rot13 = rot13.replace(/[\:]/g, colon[Math.floor(Math.random()*colon.length)]);
		
		rot13 = rot13.replace("-", dash[Math.floor(Math.random()*dash.length)]);
		rot13 = rot13.replace("-", dash[Math.floor(Math.random()*dash.length)]);
		rot13 = rot13.replace(/[\-]/g, dash[Math.floor(Math.random()*dash.length)]);
		
		rot13 = rot13.replace(/[\@]/g, at[Math.floor(Math.random()*at.length)]);


		pos1 = Math.floor(Math.random()*rot13.length);
		rot13 = [rot13.slice(0, pos1), nothing[Math.floor(Math.random()*nothing.length)], rot13.slice(pos1)].join('');
		
		pos2 = Math.floor(Math.random()*rot13.length);
		rot13 = [rot13.slice(0, pos2), nothing[Math.floor(Math.random()*nothing.length)], rot13.slice(pos2)].join('');
		
		pos3 = Math.floor(Math.random()*rot13.length);
		rot13 = [rot13.slice(0, pos3), nothing[Math.floor(Math.random()*nothing.length)], rot13.slice(pos3)].join('');
		
		pos4 = Math.floor(Math.random()*rot13.length);
		rot13 = [rot13.slice(0, pos4), nothing[Math.floor(Math.random()*nothing.length)], rot13.slice(pos4)].join('');
		
		pos5 = Math.floor(Math.random()*rot13.length);
		rot13 = [rot13.slice(0, pos5), nothing[Math.floor(Math.random()*nothing.length)], rot13.slice(pos5)].join('');
		
		$(".encoded").html( rot13 );
	});


});
