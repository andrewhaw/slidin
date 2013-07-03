<!DOCTYPE html>
<html>

<?php

	// ---------------------------------------------------------------------------------
	// DECK.JS is build by Caleb of I make web-things http://imakewebthings.com/deck.js/
	// Slidin' is a PHP/DECK.JS combo package built as an easy-to-deploy slide package
	// v0.1 - July 2013
	//
	// To set universals, please visit setup.php in the '/inc' folder
	// Please avoid editing this page unless you know what's happening
	//
	// To do list (in no particular order):
	// - navigate directly to slide
	// - adaptive design
	// - menu/slide overview
	// - built-in functions (allow for auto-build of video/photo gallery)
	// - full-size backgrounds for slides
	// 
	// ---------------------------------------------------------------------------------
	
	
	// Load up all the variables and functions that we need
	include_once ("./inc/setup.php");
	include_once ("./inc/functions.php");
	

	// Check if a series of slides has been selected
	if ($_GET['s']!="" || $_GET['s']!=NULL) {
	
		// Double-check that the slides do exist (and that a fake deck hasn't been selected)
		if ( file_exists("./content/".$_GET['s'].".".$ext ) ) {		
		
			// The deck exists, so start setting things to show the deck
			$s = $_GET['s'];
			
			// Add any slide specific stylesheets
			if (file_exists("./content/".$s."/".$s.".css")) {
				$css = '<link rel="stylesheet" href="content/'.$s.'/'.$s.'.css" media="screen">';
			} else {
				$css = "";
			}
			
			// Add any slide specific javascripts
			if (file_exists("./content/".$s."/".$s.".js")) {
				$js = '<script type="text/javascript" src="content/'.$s.'/'.$s.'.js"></script>';
			} else {
				$js = "";
			}
			
			// Set the page title
			$slideTitle = str_replace(".".$ext."", "", str_replace("_", " ", str_replace("-", " ", basename($s) )));
			$pgTitle = ($title.": ".$slideTitle);
			
		} 
		// If they have used an invalid deck title, give them an error response.
		else {	
			$s = "";		
			$pgTitle = $title;
			$error = "Sorry, but you have selected a slide deck that does not exist. Please ensure the deck exists in the list below.";		
		}
	} 
	// No series of slides has been selected
	else {
		$s = "";
	}

?>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php echo ($pgTitle); ?></title>
		<?php if ($s!="") { include_once("./inc/deck-css.php"); } ?>
		<link rel="stylesheet" href="<?php echo $dir; ?>slidin/css/normalize.css" media="screen">
		<link rel="stylesheet" href="<?php echo $dir; ?>slidin/css/screen.css" media="screen">
		<link rel="stylesheet" href="<?php echo $dir; ?>slidin/css/print.css" media="print">
		<?php if ($css!="") { echo $css; } ?>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
		<?php if ($s!="") { include_once("./inc/deck-js.php"); } ?>
		<script type="text/javascript" src="<?php echo $dir; ?>slidin/js/jquery.rot13.js"></script>
		<script type="text/javascript" src="<?php echo $dir; ?>slidin/js/ui.min.js"></script>
		<script type="text/javascript" src="<?php echo $dir; ?>slidin/js/email.min.js"></script>		
		<?php if ($js!="") { echo $js; } ?>
	</head>
	
	<body>		
		
			<?php 
				
				// Load the slides if they were properly selected
				if ($s!="") {
					include_once("./inc/deck-content.php"); 
				} 
				// If no slides were selected, load up the index of slides
				else {
					
					
					echo ("\n\t\t<section id=\"main\">");
					echo ("\n\t\t\t<h1>".$title."</h1>");
					
					// If an error has occurred, dump out the error
					if ($error!="") {
						echo ("\n\t\t\t<p class=\"error\">".$error."</p>");
					}
			
					echo ("\n\t\t\t<nav>");
					
					// Get a listing of decks and then render them out
					$decks = ListFiles("./content/", $ext);
					for ($i=0; $i<sizeof($decks); $i++) {
						$deckName = ucwords( str_replace(".".$ext, "", str_replace("_"," ", str_replace("-"," ", basename($decks[$i]) ))) );
						$deckURL = str_replace(".".$ext, "", basename($decks[$i]) );
						echo ("\n\t\t\t\t<a href=\"".$deckURL."\">".$deckName."</a>");
					}
					
					echo ("\n\t\t\t</nav>");
					echo ("\n\t\t</section>");
					
				}
		
		
			?>

	</body>
</html>