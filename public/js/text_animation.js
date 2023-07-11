

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan	= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: ["AI", "Tech", "Branding"],
				loop: true,
				startDelay: .7e3,
				backDelay: 2.4e3
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
		})(jQuery);
	});