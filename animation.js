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
		end: "top 0%",
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
		start: "top 125%",
		end: "top 90%",
		// pin: true,
	},
	onUpdate: function () {
		document.querySelector("#orderbtn p").style.display = "none";
	},

	// onComplete: function () {
	// document.querySelector("#orderbtn #overlay3").style.display = "block";
	// alert("okk");
	// document.querySelector("#orderbtn").style.height = "100vh";
	// document.querySelector("#orderbtn").style.width = "100%";
	// document.querySelector("#orderbtn").style.borderRadius = "0";
	// document.querySelector("#orderbtn").style.transform = `scale(${1})`;
	// },
});
// gsap.to("#overlay6", {
// 	display: "block",
// 	scrollTrigger: {
// 		scrub: 3,
// 		scroller: "body",
// 		trigger: "#overlay6",
// 		// markers: true,
// 		start: "top 70%",
// 		end: "top 10%",
// 	},
// 	ease: Expo.easeInOut,
// });
