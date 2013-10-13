
		<div id="wrap">	
			<header>
				<h1><?php echo ($slideTitle); ?></h1>

				<nav>
					<a href="#wrap" class="prev" title="(Left arrow key)">&lt; Previous</a><div class="status"><span class="slide-current">0</span>/<span class="slide-total">1</span></div><a href="#wrap" class="next" title="(Right arrow key)">Next &gt;</a>
				</nav>
			
			</header>

			<?php 
				echo ("\n<!-- '".$slideTitle."' starts // -->\n");
				include_once("./content/".$s.".".$ext); 
				echo ("\n<!-- // end '".$slideTitle."' -->\n");
			?>


		</div>