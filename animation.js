/** @format */

// var tl = gsap.timeline();

gsap.to("#page2 h1", {
	rotateX: 0,
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: "#page2 h1",
		scroller: "body",
		// markers: true,
		scrub: 2,
		start: "top 65%",
		end: "top 75%",
	},
});
gsap.to("#part2 #line", {
	width: "100%",
	duration: 2,
	scrollTrigger: {
		trigger: "#line",
		scroller: "body",
		// markers: true,
		scrub: 2,
		start: "top 70%",
		end: "top 10%",
	},
});
