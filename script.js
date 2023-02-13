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

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}
swipe();

var tl = gsap.timeline();

tl.to(".swiper .child span", {
	x: 100,
	delay: 1,
	stagger: 0.2,
	duration: 1,
	ease: Power3.easeInOut,
}).from(".swiper .parent .child", {
	y: "-100%",
	duration: 1,
	ease: Circ.easeInOut,
});
