// menu burger
const hamburger = document.querySelector('.hamburger-lines');
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

// ToolTip
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

// Obtén una referencia al formulario y al mensaje de confirmación
const contactForm = document.getElementById('contact-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Agrega un evento de envío al formulario
contactForm.addEventListener('submit', function (event) {
	event.preventDefault(); // Evitar que el formulario se envíe

	showMessage();
	// Función para mostrar el mensaje
	function showMessage() {
		confirmationMessage.style.display = 'block'; // Muestra el mensaje
	}
	// Limpia el formulario si lo deseas (opcional)
	contactForm.reset();
});

// CORREO
// document.addEventListener('DOMContentLoaded', function () {
// 	const contactForm = document.getElementById('contact-form');
// 	const confirmationMessage = document.getElementById('confirmation-message');

// 	contactForm.addEventListener('submit', function (e) {
// 		e.preventDefault();

// 		fetch(contactForm.action, {
// 			method: contactForm.method,
// 			body: new FormData(contactForm),
// 		})
// 			.then((response) => response.text())
// 			.then((data) => {
// 				if (data === 'success') {
// 					confirmationMessage.innerHTML = '¡Mensaje enviado con éxito!';
// 					confirmationMessage.style.display = 'block';
// 					contactForm.reset();
// 				} else {
// 					confirmationMessage.innerHTML =
// 						'Error al enviar el mensaje. Por favor, intenta nuevamente.';
// 					confirmationMessage.style.display = 'block';
// 				}
// 			})
// 			.catch((error) => {
// 				console.error('Error al enviar el formulario:', error);
// 				confirmationMessage.innerHTML =
// 					'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente más tarde.';
// 				confirmationMessage.style.display = 'block';
// 			});
// 	});
// });
