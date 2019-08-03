$(document).ready(function() {
	"use strict";

	$.fn.extend(
	{
		updateCount: function(currentSlide, slideCount)
		{
			$('#slider-counter').html((currentSlide + 1) + '<span class="slash">/</span>' + slideCount);
		}
	});
	//Activatte and customise the bxSlider shlideshow
	var slider = $('.bxslider').bxSlider({
		mode: 'horizontal', //horizontal, vertical, fade
		captions: true,
		pager: false,
		// pagertype: 'full',
		auto: true,
		pause: 3000, //how long each slide stays visible for = 3s
		speed: 500, //transition speed
		autoHover: true, //pause slideshow on mouse hover
		onSliderLoad: function (currentSlide) {
			// When the callback is called the slide object is NOT set.
			// The total slide count is acquired by accessing the node directly.
			if(slider !== undefined) {
				$(this).updateCount(slider.getCurrentSlide(),slider.getSlideCount());
			}
			else {
				$(this).updateCount(0, $('.bxslider li:not(.bx-clone)').length);
			}
		},				
		onSlideNext: function () {
			if(slider !== undefined) {
				$(this).updateCount(slider.getCurrentSlide(),slider.getSlideCount());
			}
		},
		onSlidePrev: function () {
			if(slider !== undefined) {
				$(this).updateCount(slider.getCurrentSlide(),slider.getSlideCount());
			}
		}
	});
});