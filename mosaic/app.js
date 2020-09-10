let shape = document.querySelectorAll('.square');

for (var i = 0; i < shape.length; i++) {
	shape[i].addEventListener('click', function () {
		this.classList.toggle('color');
	});
}
