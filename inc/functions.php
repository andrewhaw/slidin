<?php
	
	// ListFiles(DIRECTORY, EXTENSION); list all files of a given type into an array
	function ListFiles($dir, $ext) {
		$filesArray = array();
		$dirOpen =  opendir($dir);
		if (!$dirOpen) {
			die($dir.' cannot be accessed');
		}
		while ($filename = readdir($dirOpen)) {
			if ($filename == '.' || $filename == '..') continue;
			 if ( end(explode('.', $filename)) != $ext ) continue;
	  	  $filesArray[] = $dir.$filename;
	  }
	  sort($filesArray);	
		return $filesArray;
	}
	
?>