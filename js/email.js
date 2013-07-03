$(document).ready( function() { 

	// EMAIL PROTECTION
	$(".e").click(function(e) {
		e.preventDefault();
		var email = $(this).attr("data-e");
		if ( $(this).attr("data-subject") != "" ) {
			var subject = $(this).attr("data-subject");
		}
		var href = "mailto:"+decrypt(email)+"?subject="+subject;
		setTimeout(function() {window.location = href}, 250);
	});
	
	$(".e").hover(function() {
		var email = $(this).attr("data-e");
		if ( $(this).attr("data-subject") != "" ) {
			var subject = $(this).attr("data-subject");
		}
		$(this).attr("href", "mailto:"+decrypt(email)+"?subject="+subject );
	}, function() {
		$(this).attr("href", "");
	});
	
	
});


// ROT13 Protection
String.prototype.encrypt = function(){
    return this.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
};

function decrypt (s) {
	s = s.encrypt();
	s = s.replace(/[\@\&]/g, "");
	s = s.replace(/[\-\;\,]/g, "@");
	s = s.replace(/[\(\^\+]/g, "-");
	s = s.replace(/[\(\_\)]/g, ":");
	s = s.replace(/[\%\?\|]/g, "_");
	s = s.replace(/[\]\=\#]/g, "?");
	s = s.replace(/[\$\[\{]/g, "=");
	s = s.replace(/[\>\.\}]/g, "+");
	s = s.replace(/[\<\*\!]/g, "."); 
	return s;
	
	var nothing = Array("@","&");
	var period = Array("<","*","!");
	var plus = Array(">", ".", "}");
	var equal = Array("$", "[", "{");
	var question = Array("]","=","#");
	var underscore = Array("%","?","|");
	var colon = Array("(","_",")");
	var dash = Array(":", "^", "+" );
	var at = Array("-", ";", "," );

}