//header
const robot = document.querySelector('.robot');
const li = document.querySelectorAll('.header__li');
const menuBar = document.querySelector('.menu');
const nav = document.querySelector('.header__list');

menuBar.addEventListener('click', function () {
	menuBar.classList.toggle('close');
	nav.classList.toggle('show');
});

document.addEventListener('scroll', function () {
	if (window.scrollY > 0 && window.innerWidth > 768) {
		robot.style.width = '50px';
		li.forEach((el) => (el.style.padding = '.6em'));
	} else if (window.scrollY < 30 && window.innerWidth > 768) {
		robot.style.width = '75px';
		li.forEach((el) => (el.style.padding = '.75em'));
	}
});

window.addEventListener('resize', function () {
	if (window.innerWidth < 768) {
		robot.style.width = '50px';
		li.forEach((el) => (el.style.padding = '.3em'));
	} else if (window.innerWidth > 768) {
		robot.style.width = '75px';
		li.forEach((el) => (el.style.padding = '.75em'));
	}
});
