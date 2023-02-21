/** @format */

// function loader() {
// 	window.addEventListener("load", function () {
// 		setTimeout(() => {
// 			this.document.querySelector("#loader").style.display = "none";
// 		}, 3000);
// 	});
// }
function loader() {
	window.addEventListener("load", function () {
		this.document.querySelector("#loader").style.display = "none";
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
	const swiper = new Swiper("#topcnt .swiper", {
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
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

tl.to("#section5 .child span", {
	x: 100,
	delay: 0,
	stagger: 0.2,
	scrollTrigger: {
		trigger: ".child span",
		scroller: "body",
		// markers: true,
		scrub: 2,
		start: "top -770%",
		end: "top 10%",
	},
	duration: 0.2,
	ease: Power3.easeInOut,
}).from(" .parent .child", {
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
		cursor.style.left = dets.pageX + "px";
		cursor.style.top = dets.pageY + "px";
		cursor1.style.left = dets.pageX + "px";
		cursor1.style.top = dets.pageY + "px";
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

function swipe2() {
	const swiper = new Swiper("#foodright .swiper", {
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		640: {
			direction: "horizontal",
		},
		// Optional parameters
		direction: "vertical",
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 2,
			slideShadows: true,
		},
		spaceBetween: 60,
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
swipe2();

function list() {
	var mangocard = document.querySelector(".mangocard");
	document.querySelector("#mango h1").addEventListener("mouseenter", function (dets) {
		mangocard.style.opacity = 1;
		mangocard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		mangocard.style.left = `40%`;
	});
	document.querySelector("#mango").addEventListener("mousemove", function (dets) {
		mangocard.style.left = `${dets.x}px`;
	});
	document.querySelector("#mango").addEventListener("mouseleave", function (dets) {
		mangocard.style.opacity = 0;
		mangocard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		mangocard.style.left = `20%`;
	});

	var bananacard = document.querySelector(".bananacard");
	document.querySelector("#Banana h1").addEventListener("mouseenter", function (dets) {
		bananacard.style.opacity = 1;
		bananacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		bananacard.style.left = `40%`;
	});
	document.querySelector("#Banana").addEventListener("mousemove", function (dets) {
		bananacard.style.left = `${dets.x}px`;
	});
	document.querySelector("#Banana").addEventListener("mouseleave", function (dets) {
		bananacard.style.opacity = 0;
		bananacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		bananacard.style.left = `20%`;
	});

	var pinecard = document.querySelector(".pinecard");
	document.querySelector("#PineApple h1").addEventListener("mouseenter", function (dets) {
		pinecard.style.opacity = 1;
		pinecard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		pinecard.style.left = `40%`;
	});
	document.querySelector("#PineApple").addEventListener("mousemove", function (dets) {
		pinecard.style.left = `${dets.x}px`;
	});
	document.querySelector("#PineApple").addEventListener("mouseleave", function (dets) {
		pinecard.style.opacity = 0;
		pinecard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		pinecard.style.left = `20%`;
	});

	var pithayacard = document.querySelector(".pithayacard");
	document.querySelector("#Pithaya h1").addEventListener("mouseenter", function (dets) {
		pithayacard.style.opacity = 1;
		pithayacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		pithayacard.style.left = `40%`;
	});
	document.querySelector("#Pithaya").addEventListener("mousemove", function (dets) {
		pithayacard.style.left = `${dets.x}px`;
	});
	document.querySelector("#Pithaya").addEventListener("mouseleave", function (dets) {
		pithayacard.style.opacity = 0;
		pithayacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		pithayacard.style.left = `20%`;
	});
}

list();
function handleopen() {
	var handle = document.querySelector("#handle");
	var theme = document.querySelector("#theme");
	var themeicon = document.querySelector("#theme #light");
	var minimalicon = document.querySelector("#theme #minimal");
	var darkicon = document.querySelector("#theme #dark");
	var flag1 = false;
	handle.addEventListener("click", function () {
		if (flag1 == true) {
			theme.style.width = "0%";
			themeicon.style.opacity = 0;
			minimalicon.style.opacity = 0;
			darkicon.style.opacity = 0;
			handle.style.right = "0%";
			flag1 = false;
		} else {
			themeicon.style.opacity = 1;
			minimalicon.style.opacity = 1;
			darkicon.style.opacity = 1;
			handle.style.right = "5%";
			theme.style.width = "5%";
			flag1 = true;
		}
	});
}
handleopen();

function themechange() {
	var rootvar = document.querySelector(":root");
	var lighttheme = document.querySelector("#theme #light");
	var minimaltheme = document.querySelector("#theme #minimal");
	var darktheme = document.querySelector("#theme #dark");
	var headcolor = document.querySelector("#section4 h1");

	// function myFunction_get() {
	// 	// Get the styles (properties and values) for the root
	// 	var rs = getComputedStyle(rootvar);
	//   }

	lighttheme.addEventListener("click", function () {
		main.style.backgroundColor = "rgb(213, 167, 180)";
		document.querySelector("#navbar").style.backgroundColor = "rgb(213,167,180)";
	});
	minimaltheme.addEventListener("click", function () {
		main.style.backgroundColor = "rgb(233,132,104)";
		document.querySelector("#navbar").style.backgroundColor = "rgb(233,132,104)";
	});
	darktheme.addEventListener("click", function () {
		main.style.backgroundColor = "#2d2420";
		document.querySelector("#navbar").style.backgroundColor = "#2d2420";
	});
}
themechange();
