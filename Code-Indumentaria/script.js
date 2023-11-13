const body = document.querySelector('body'),
	sidebar = body.querySelector('nav'),
	toggle = body.querySelector('.toggle'),
	modeSwitch = body.querySelector('.toggle-switch'),
	modeText = body.querySelector('.mode-text'),
	searchSection = body.querySelector('#search-section'),
	logoLight = document.getElementById('logo-light'),
	logoDark = document.getElementById('logo-dark');

// Resto de tu código

/*=============== BTN OPEN/CLOSE JS ===============*/
toggle.addEventListener('click', () => {
	sidebar.classList.toggle('close');
	adjustSearchPosition(); // Ajustar posición del searchSection después de abrir/cerrar el sidebar
});

// Ajustar posición inicial del searchSection según el ancho de la pantalla
window.addEventListener('DOMContentLoaded', () => {
	adjustSearchPosition();
});

window.addEventListener('resize', () => {
	adjustSearchPosition();
});

function adjustSearchPosition() {
	// Obtener el ancho actual de la pantalla
	const windowWidth = window.innerWidth;

	// Ajustar la posición del searchSection según el ancho de la pantalla y el estado del sidebar
	if (windowWidth >= 960) {
		// Pantallas grandes, el sidebar estará abierto
		if (sidebar.classList.contains('close')) {
			searchSection.style.left = '650px';
		} else {
			searchSection.style.left = '500px';
		}
	} else if (windowWidth >= 378) {
		// Pantallas medianas, el sidebar estará cerrado
		searchSection.style.left = '100px';
	} else {
		// Pantallas pequeñas, el sidebar estará cerrado
		searchSection.style.left = '-180px';
	}
}

/*=============== MODE DARK JS ===============*/
modeSwitch.addEventListener('click', () => {
	body.classList.toggle('dark');

	if (body.classList.contains('dark')) {
		modeText.innerText = 'Light mode';
		logoLight.style.display = 'none';
		logoDark.style.display = 'inline-block';
	} else {
		modeText.innerText = 'Dark mode';
		logoDark.style.display = 'none';
		logoLight.style.display = 'inline-block';
	}
});

/*=============== SEARCH BAR JS ===============*/
const toggleSearch = (search, button) => {
	const searchBar = document.getElementById(search),
		searchButton = document.getElementById(button);

	searchButton.addEventListener('click', () => {
		searchBar.classList.toggle('show-search');
	});
};
toggleSearch('search-bar', 'search-button');

/*===============BTN UP JS ===============*/
const backToTopBtn = document.getElementById('back-to-top-btn');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		backToTopBtn.classList.add('show');
	} else {
		backToTopBtn.classList.remove('show');
	}
});

backToTopBtn.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

document.addEventListener('DOMContentLoaded', function () {
	// Obtener la sección de contenido
	const sectionContent = document.querySelector('.section-content');

	//Agregar la clase 'show' para activar el efecto de aparición
	sectionContent.classList.add('show');
});

/*===============  SCROLL REVEAL EFECT JS ===============*/
const scroll = ScrollReveal({
	distance: '165px',
	duration: 2600,
	delay: 450,
	reset: true,
});

scroll.reveal('.section-content', { delay: 100, origin: 'top' });
scroll.reveal('.image', { delay: 200, origin: 'right' });
