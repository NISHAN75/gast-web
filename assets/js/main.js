(function ($) {
	$(document).ready(function () {
	// magnific Popup active
	$(".popup-btn").magnificPopup({
		type: "iframe",
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' + "</div>",
			patterns: {
				youtube: {
					index: "youtube.com/",
					id: "v=",
					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
			},
		},
	});




	});
})(jQuery);