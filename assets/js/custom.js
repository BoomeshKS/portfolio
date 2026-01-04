
/*------------------------ [Pre-Loader] ------------------------*/

jQuery(window).on("load", function() {
	jQuery(".overlay").css({'display':'none'});
});

jQuery(document).ready(function() {

	"use strict";


	/*------------------------ [Weekend Mode Button] ------------------------*/

	jQuery(".boomesh-switch-btn input:checkbox").on('click', function() {
		jQuery(this).parents(".boomesh-weekend-mode").toggleClass("checked");
		if($('.boomesh-switch-btn input:checkbox:checked').length){
			jQuery('.boomesh-project-detail, .boomesh-portfolio-content, .boomesh-image-page, .boomesh-soundcloud-page, .boomesh-vimeo-content, .boomesh-youtube-video-page, .boomesh-home-main-content, .weekend-mode-hide, .boomesh-slider-page').addClass("hidepage");
			jQuery('.boomesh-project-detail, .boomesh-portfolio-content, .boomesh-image-page, .boomesh-soundcloud-page, .boomesh-vimeo-content, .boomesh-youtube-video-page, .boomesh-home-main-content, .weekend-mode-hide, .boomesh-single-news-content, .boomesh-slider-page').removeClass("showpage");
		} else {
			jQuery('.boomesh-project-detail, .boomesh-single-news-content').removeClass('showpage');
			jQuery('.boomesh-portfolio-content, .boomesh-home-main-content, .weekend-mode-hide').removeClass('hidepage');
		}
		jQuery(".boomesh-weekend-mode, .boomesh-home-image").toggleClass("showpage");
		jQuery(".boomesh-weekend-image").toggleClass("visible-img");
	});

	jQuery(".salv-burger").on('click', function() {
		jQuery('.boomesh-about-wrap, .boomesh-home-wrap').toggleClass("border-none");
	});

	jQuery(".salv-burger").on('click', function() {
		jQuery('.salv-burger').toggleClass("click");
	});



	/*------------------------ [Portfolio Tab] ------------------------*/

	var links = document.querySelectorAll('.salv-tab-filters ul li a');
	var content = document.querySelectorAll('div.content');
	var lis = document.querySelectorAll('.salv-tab-filters ul li');

	for (let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(e){
			e.preventDefault();
			var activLinks = document.querySelector('.salv-tab-filters ul li a.activ');
			var activContent = document.querySelector('.salv-tab-content-box>div.activ');

			activLinks.classList.remove('activ');
			activContent.classList.remove('activ');

			this.classList.add('activ');
			var attr = this.getAttribute('href');

			var activ = document.querySelector(attr);

			activ.classList.add('activ');

			var lisLength = lis.length;
			var lisWidth = 100 / lisLength;
			var position = i*lisWidth;

		});
	}


	/*------------------------ [Tab on click] ------------------------*/

	jQuery(".all-content-wrap.detail-page").click(function() {
		jQuery('.boomesh-project-detail').toggleClass("showpage");
		jQuery('.boomesh-portfolio-content').toggleClass("hidepage");
	});
	jQuery(".close").click(function() {
		jQuery('.boomesh-portfolio-content').removeClass("hidepage");
		jQuery('.boomesh-project-detail').removeClass("showpage");
	});

	jQuery(".all-content-wrap.image-page").click(function() {
		jQuery('.boomesh-image-page').toggleClass("showpage");
		jQuery('.boomesh-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.boomesh-portfolio-content').removeClass("hidepage");
		jQuery('.boomesh-image-page').removeClass("showpage");
	});
	
	jQuery(".all-content-wrap.slider-page").click(function() {
		jQuery('.boomesh-slider-page').toggleClass("showpage");
		jQuery('.boomesh-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.boomesh-portfolio-content').removeClass("hidepage");
		jQuery('.boomesh-slider-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.soundcloud-page").click(function() {
		jQuery('.boomesh-soundcloud-page').toggleClass("showpage");
		jQuery('.boomesh-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.boomesh-portfolio-content').removeClass("hidepage");
		jQuery('.boomesh-soundcloud-page').removeClass("showpage");
	});

	jQuery(".all-content-wrap.vimeo-video-page").click(function() {
		jQuery('.boomesh-vimeo-content').toggleClass("showpage");
		jQuery('.boomesh-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.boomesh-portfolio-content').removeClass("hidepage");
		jQuery('.boomesh-vimeo-content').removeClass("showpage");
	});

	jQuery(".all-content-wrap.youtube-video-page").click(function() {
		jQuery('.boomesh-youtube-video-page').toggleClass("showpage");
		jQuery('.boomesh-portfolio-content').toggleClass("hidepage");
	})
	jQuery(".image-close").click(function() {
		jQuery('.boomesh-portfolio-content').removeClass("hidepage");
		jQuery('.boomesh-youtube-video-page').removeClass("showpage");
	});

	jQuery(".salv-blog-wrap").click(function() {
		jQuery('.boomesh-single-news-content').toggleClass("showpage");
		jQuery('.boomesh-news-content').toggleClass("hidepage");
	});
	jQuery(".blog-back-btn").click(function() {
		jQuery('.boomesh-news-content').removeClass("hidepage");
		jQuery('.boomesh-single-news-content').removeClass("showpage");
	});


	/*------------------------ [Read More] ------------------------*/

	var limit = 3;
	$(".slv-blog-list .salv-blog-card").slice(0, limit).show();
	$(document).on('click','#load_more',function(e){
		limit += 3;
		e.preventDefault();
		$(".slv-blog-list .salv-blog-card").slice(0, limit).show();
	});	
	
});


/*------------------------ [Cursor Script] ------------------------*/

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

	// Listeners
	document.body.addEventListener('mousemove', onMouseMove);
	for (let i = 0; i < $hoverables.length; i++) {
		$hoverables[i].addEventListener('mouseenter', onMouseHover);
		$hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
	}

	// Move the cursor
	function onMouseMove(e) {
		TweenMax.to($bigBall, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15
		})
		TweenMax.to($smallBall, .1, {
			x: e.pageX - 5,
			y: e.pageY - 7
		})
	}

	// Hover an element
	function onMouseHover() {
		TweenMax.to($bigBall, .3, {
			scale: 4
		})
	}
	function onMouseHoverOut() {
		TweenMax.to($bigBall, .3, {
			scale: 1
		})
	}

/*------------------------ [Menu hide during weekend mode] ------------------------*/
$(".boomesh-switch-btn input").click(function(){
  $("body").toggleClass("menu-hide-wrap");
});