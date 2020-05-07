jQuery(document).ready(function() {
    // preloader
    if (jQuery(".preloader").length > 0) {
        setTimeout(function() {
            jQuery(".preloader").addClass("step-1");
            setTimeout(function() {
                jQuery(".preloader").addClass("step-2");
                setTimeout(function() {
                    jQuery(".preloader").hide();
                }, 1000);;
            }, 700);
        }, 200);
    }

    // brgr
    jQuery(document).on("click", ".brgr", function() {
        jQuery('aside').toggleClass('active');
        jQuery('.overlay').toggleClass('active');
    });
    jQuery(document).on("click", ".overlay", function() {
        jQuery('aside').removeClass('active');
        jQuery('.overlay').removeClass('active');
        // aside-inner
        jQuery('aside .add-inner').removeClass('active');
        jQuery('.aside-overlay').removeClass('active');
    });

    // search
    jQuery(document).on("focus", ".search input", function() {
        jQuery(this).parent().addClass("focus");
    });
    jQuery(document).on("blur", ".search input", function() {
        if (jQuery(this).val() == "") {
            jQuery(this).parent().removeClass("focus");
        }
    });

    // add-inner
    jQuery(document).on("click", "aside .add", function() {
        jQuery(this).find('.add-inner').toggleClass('active');
        jQuery('.aside-overlay').toggleClass('active');
    });
    jQuery(document).on("mouseleave", "aside .add-inner", function() {
        jQuery(this).removeClass('active');
        jQuery('.aside-overlay').removeClass('active');
    });
    jQuery(document).on("click", ".aside-overlay", function() {
        jQuery('aside .add-inner').removeClass('active');
        jQuery('.aside-overlay').removeClass('active');
	});

	$( ".green-audio-player").each(function( index ) {
		var audioPlayer = $(this);
	 	var playPause = audioPlayer.find('.play-pause-icon');
		var playpauseBtn = audioPlayer.find('.play-pause-btn');
		var totalTime = audioPlayer.find('.total-time');
		var player = audioPlayer.find('audio');

		$(player).on('timeupdate', updateProgress);
		$(playpauseBtn).on('click', togglePlay);
		$(player).on('loadedmetadata', totalTimes);
		function totalTimes(){
			totalTime[0].textContent = formatTime(player[0].duration);
		}
		function updateProgress() {
			var current = player[0].duration - player[0].currentTime;
			totalTime[0].textContent = formatTime(current)
		}
		function togglePlay() {
			if(player[0].paused) {
				$( "audio").each(function( index ) {
					$(this)[0	].pause();
				});
				$('.play-pause-btn').removeClass('active');
				$('.play-pause-icon').attr('d', 'M18 12L0 24V0');
				$('.total-time').removeClass('active');
				totalTime.addClass('active');
				playpauseBtn.addClass('active');
				playPause.attr('d', 'M0 0h6v24H0zM12 0h6v24h-6z');
				player[0].play();
			  
			} else {
			
				playpauseBtn.removeClass('active')
				totalTime.removeClass('active');

				playPause.attr('d', 'M18 12L0 24V0')
			  player[0].pause();
			}  
		  }
	  });
	  function formatTime(time) {
		var min = Math.floor(time / 60);
		var sec = Math.floor(time % 60);
		return min + ':' + ((sec<10) ? ('0' + sec) : sec);
	  }
	  
	
	  
	  
});
