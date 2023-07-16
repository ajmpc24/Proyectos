// const swiper = new Swiper('.sample-slider', {
// 	pagination: {
// 		//pagination(dots)
// 		el: '.swiper-pagination',
// 	},
// 	navigation: {
// 		//navigation(arrows)
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// });

// menu burger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
}
const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
}

// // Scroll
// window.addEventListener('scroll', function () {
// 	var navbar = document.querySelector('.navbar');
// 	if (window.scrollY > 10) {
// 		// Cambia 100 por la cantidad de desplazamiento deseada
// 		navbar.classList.add('scrolled');
// 	} else {
// 		navbar.classList.remove('scrolled');
// 	}
// });

// ToolTip
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});
