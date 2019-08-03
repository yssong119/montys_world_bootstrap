$(document).ready(function() {
	"use strict";

	$("#menu-open").click(function() {
		$("#main-menu-container").toggleClass("show");
	});

	$("#menu-close").click(function() {
		$("#main-menu-container").toggleClass("show");
	});

	$("#main-nav a").click(function() {
		let aid = $(this).attr("href");
		$('html, body').animate({scrollTop: $(aid).offset().top},'slow');
		$("#main-menu-container").toggleClass("show");
	});

	$(window).scroll(function() {
		if($(this).scrollTop() < 150) {
			$(".scroll-icon-container").fadeIn();
		}
		else {
			$(".scroll-icon-container").fadeOut();
		}
	});

	$('#play-game-carousel').carousel({
		interval: 5000
	});

	let slideCount = $('#play-game-carousel .carousel-item').length;

	$('#slider-counter').html(1 + '<span class="slash">/</span>' + slideCount);

	$('#play-game-carousel').on('slid.bs.carousel', function (ev) {
		// console.log(ev);

		// slideNo is 'data-slide-no' in carousel-item class.
		const activeSlideNo = ev.relatedTarget.dataset.slideNo;
		// console.log('slide-no:' + activeSlideNo);
		// console.log($('#play-game-carousel .carousel-item').length);
		$('#slider-counter').html((parseInt(activeSlideNo) + 1) + '<span class="slash">/</span>' + slideCount);
	});

	// jQuery plugin for snap scrolling.
	// https://www.jqueryscript.net/animation/Snap-To-Section-SnapScroll.html
	// $("#main-content > *, #footer").SnapScroll();
});