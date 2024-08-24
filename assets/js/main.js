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






	// gsap
	// Split text into lines
	const animateLines = gsap.utils.toArray(".animate-line");

	animateLines.forEach((element) => {
		const splitText = new SplitText(element, { 
		type: "lines", 
	});


	gsap.from(splitText.lines, {
		duration: 0.8,
		opacity: 0,
		y: 50,
		force3D: true,
		transformOrigin: "top center",
		stagger: 0.1,
		scrollTrigger: {
		trigger: element,  // Use the .animate-line element as the trigger
		start: "top bottom",
		end: "bottom top",
		scrub: false,
		toggleActions: "play none none reverse"
		}
		});
	});


	// paralax
	function applyParallaxEffect() {
		const $bannerWrapper = $(".trigger-parallax");
	
		if ($bannerWrapper.length) {
			// Apply parallax effect to the inner images
			gsap.to($bannerWrapper.find(".parallax-img"), {
			y: 100, // Adjust this value for the desired parallax effect
			ease: "none",
			scrollTrigger: {
				trigger: $bannerWrapper[0],
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			}
			});
	
			gsap.to($bannerWrapper.find(".parallax-content"), {
			y: 500, // Adjust this value for the desired parallax effect
			ease: "none",
			scrollTrigger: {
				trigger: $bannerWrapper[0],
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			}
			});
		}
		}
	
		// Automatically check if the class is present on page load
		applyParallaxEffect(); 

	const lenis = new Lenis()
	lenis.on('scroll', (e) => {
	console.log(e)
	})

	lenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time)=>{
	lenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(0)





	});
})(jQuery);