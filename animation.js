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
// food scroller
gsap.to("#foodscroller .fooddiv", {
	x: "-1500%",
	ease: Expo.linear,
	duration: 9,
	scrollTrigger: {
		scroller: "body",
		trigger: "#foodscroller .fooddiv",
		// markers: true,
		scrub: 2,
		start: "top 70%",
		end: "top -40%",
		// pin: true,
	},
});
gsap.to("#orderbtn", {
	scale: 94,
	ease: Expo.power1,
	// delay: -5,
	scrollTrigger: {
		scroller: "body",
		trigger: "#orderbtn",
		scrub: 2,
		// markers: true,
		start: "top 115%",
		end: "top 80%",
		// pin: true,
	},
	onUpdate: function () {
		document.querySelector("#orderbtn p").style.display = "none";
		document.querySelector("#orderbtn #overlay2").style.display = "none";
	},
	onComplete: function () {
		document.querySelector("#orderbtn #overlay2").style.display = "block";
	},
});
