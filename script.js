/** @format */

function loader() {
	window.addEventListener("load", function () {
		setTimeout(() => {
			this.document.querySelector("#loader").style.display = "none";
		}, 3000);
	});
}
loader();

function revealToSpan() {
	document.querySelectorAll(".reveal").forEach(function (elem) {
		// create two spans
		var parent = document.createElement("span");
		var child = document.createElement("span");

		// parents and child both sets their respective class
		parent.classList.add("parent");
		child.classList.add("child");

		// span parent span gets child and child gets elem
		child.innerHTML = elem.innerHTML;
		parent.appendChild(child);

		// elem replaces its value with parent span
		elem.innerHTML = "";
		elem.appendChild(parent);
	});
}
revealToSpan();

function changenavcolor() {
	var nav = document.querySelector("#navbar");
	// if (nav.top >= "10px") {
	// 	nav.style.backgroundColor = "transparent";
	// }
	console.log(nav.style.top);
}
changenavcolor();
function swipe() {
	const swiper = new Swiper(".swiper", {
		// Optional parameters
		direction: "horizontal",
		loop: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
		},

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
swipe();

var tl = gsap.timeline();

tl.to("#topcnt .child span", {
	x: 100,
	delay: 0,
	stagger: 0.2,
	duration: 0.2,
	ease: Power3.easeInOut,
}).from("#topcnt .parent .child", {
	y: "-100%",
	duration: 0.2,
	ease: Circ.easeInOut,
});

function cursor() {
	var cursor = document.querySelector("#cursor");
	var cursor1 = document.querySelector("#cursor1");
	var main = document.querySelector("#main");
	var heading = document.querySelector("#headingtxt");
	main.addEventListener("mousemove", function (dets) {
		// console.log(dets.pageY);
		cursor.style.left = dets.pageX + 10 + "px";
		cursor.style.top = dets.pageY + 3 + "px";
		cursor1.style.left = dets.pageX + 10 + "px";
		cursor1.style.top = dets.pageY - 6 + "px";
	});
	document.querySelector("#overlay1").addEventListener("mousemove", function (dets) {
		console.log(dets);
		document.querySelector("#elem1 img").style.transform = "scale(1)";
		document.querySelector("#elem1 img").style.opacity = 1;
		document.querySelector("#elem1 img").style.left = dets.pageX - 210 + "px";
		document.querySelector("#elem1 img").style.top = dets.pageY + -190 + "px";
		cursor.style.opacity = 0;
		cursor1.style.opacity = 0;
	});
	document.querySelector("#overlay1").addEventListener("mouseleave", function (dets) {
		console.log(dets);
		document.querySelector("#elem1 img").style.transform = "scale(0)";
		document.querySelector("#elem1 img").style.opacity = 0;
		cursor.style.opacity = 1;
		cursor1.style.opacity = 1;
	});
	document.querySelector("#overlay2").addEventListener("mousemove", function (dets) {
		console.log(dets);
		document.querySelector("#elem2 img").style.transform = "scale(1)";
		document.querySelector("#elem2 img").style.opacity = 1;
		document.querySelector("#elem2 img").style.left = dets.pageX - 490 + "px";
		document.querySelector("#elem2 img").style.top = dets.pageY + -170 + "px";
		cursor.style.opacity = 0;
		cursor1.style.opacity = 0;
	});
	document.querySelector("#overlay2").addEventListener("mouseleave", function (dets) {
		console.log(dets);
		document.querySelector("#elem2 img").style.transform = "scale(0)";
		document.querySelector("#elem2 img").style.opacity = 0;
		cursor.style.opacity = 1;
		cursor1.style.opacity = 1;
	});
	document.querySelector("#overlay3").addEventListener("mousemove", function (dets) {
		console.log(dets);
		document.querySelector("#elem3 img").style.opacity = 1;
		document.querySelector("#elem3 img").style.transform = "scale(1)";
		document.querySelector("#elem3 img").style.left = dets.pageX - 730 + "px";
		document.querySelector("#elem3 img").style.top = dets.pageY + -190 + "px";
		cursor1.style.opacity = 0;
		cursor.style.opacity = 0;
	});
	document.querySelector("#overlay3").addEventListener("mouseleave", function (dets) {
		console.log(dets);
		document.querySelector("#elem3 img").style.opacity = 0;
		document.querySelector("#elem3 img").style.transform = "scale(0)";
		cursor.style.opacity = 1;
		cursor1.style.opacity = 1;
	});
	document.querySelector("#overlay4").addEventListener("mousemove", function (dets) {
		console.log(dets);
		document.querySelector("#elem4 img").style.transform = "scale(1)";
		document.querySelector("#elem4 img").style.left = dets.pageX - 970 + "px";
		document.querySelector("#elem4 img").style.top = dets.pageY + -180 + "px";
		document.querySelector("#elem4 img").style.opacity = 1;
		cursor.style.opacity = 0;
		cursor1.style.opacity = 0;
	});
	document.querySelector("#overlay4").addEventListener("mouseleave", function (dets) {
		console.log(dets);
		document.querySelector("#elem4 img").style.transform = "scale(0)";
		document.querySelector("#elem4 img").style.opacity = 0;
		cursor.style.opacity = 1;
		cursor1.style.opacity = 1;
	});
}
cursor();
