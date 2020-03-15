$(document).ready(function() {
	$("select").niceSelect();
});

var mobileMenu = document.getElementById("mobile-nav");
var backgroundBlur = document.getElementById("mobile-blur");
var mobileNav = document.getElementById("mobile-wrap");
var burger_line1 = document.getElementById("burger-line1");
var burger_line2 = document.getElementById("burger-line2");
var burger_line3 = document.getElementById("burger-line3");
var burger_line4 = document.getElementById("burger-line4");
var leftArrows = document.getElementById("left-arrows");
var rightArrows = document.getElementById("right-arrows");
var btnPrev = document.getElementById("button-prev");
var btnNext = document.getElementById("button-next");

var tender = document.getElementById("tender");
var tender_form = document.getElementById("popup-window");

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {
	37: 1,
	38: 1,
	39: 1,
	40: 1
};

function openMenu() {
	disableScrolling();
	if (mobileMenu.classList.contains("responsive")) {
		mobileMenu.classList.remove("responsive");
		burger_line1.classList.remove("disp-none");
		burger_line2.classList.remove("rot-45");
		burger_line3.classList.remove("rot--45");
		burger_line4.classList.remove("disp-none");
		enableScrolling();
	} else {
		mobileMenu.classList.add("responsive");
		burger_line1.classList.add("disp-none");
		burger_line2.classList.add("rot-45");
		burger_line3.classList.add("rot--45");
		burger_line4.classList.add("disp-none");
	}
	if (backgroundBlur.classList.contains("opac-show")) {
		backgroundBlur.classList.remove("opac-show");
	} else {
		backgroundBlur.classList.add("opac-show");
	}
	if (mobileNav.classList.contains("opac-show")) {
		mobileNav.classList.remove("opac-show");
	} else {
		mobileNav.classList.add("opac-show");
	}
}

function disableScrolling() {
	var x = window.scrollX;
	var y = window.scrollY;
	window.onscroll = function() {
		window.scrollTo(x, y);
	};
}

function enableScrolling() {
	window.onscroll = function() {};
}

function closeMenu(e) {
	if (e.target.classList.contains("navbar")) {
		return;
	}
	enableScrolling();
	mobileMenu.classList.remove("responsive");
	burger_line1.classList.remove("disp-none");
	burger_line2.classList.remove("rot-45");
	burger_line3.classList.remove("rot--45");
	burger_line4.classList.remove("disp-none");
	backgroundBlur.classList.remove("opac-show");
	mobileNav.classList.remove("opac-show");
}

function openTender(e) {
	disableScrolling();
	//document.body.classList.add("overflow");
	tender.classList.add("tender-active");
}

function closeTender(e) {
	if (e.target.className === "close" || e.target.className === "popup__blur") {
		enableScrolling();
		tender.classList.remove("tender-active");
	} else {
		return;
	}
}

function openRequest(e) {
	disableScrolling();
	request.classList.add("tender-active");
}

function closeRequest(e) {
	if (e.target.className === "close" || e.target.className === "popup__blur") {
		enableScrolling();
		request.classList.remove("tender-active");
	} else {
		return;
	}
}
function currentSlide() {
	if (btnPrev.classList.contains("swiper-button-disabled")) {
		document.getElementById("left-arrows").classList.add("disabled");
		document.getElementById("right-arrows").classList.remove("disabled");
	} else if (btnNext.classList.contains("swiper-button-disabled")) {
		document.getElementById("right-arrows").classList.add("disabled");
		document.getElementById("left-arrows").classList.remove("disabled");
	} else {
		document.getElementById("left-arrows").classList.remove("disabled");
		document.getElementById("right-arrows").classList.remove("disabled");
	}
}
var scrollToElement = document.getElementById("swiper");

function scrollToSwiper() {
	scrollToElement.scrollIntoView({ block: "start", behavior: "smooth" });
}
