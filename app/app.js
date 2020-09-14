//cats

let para1 = document.querySelector('.cat-frame__para1');
let para2 = document.querySelector('.cat-frame__para2');
let catBtn = document.querySelector('.cat-frame__btn');
let img = document.querySelector('.cat-frame__img');

catBtn.addEventListener('click', function () {
	let XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function () {
		if (XHR.readyState == 4 && XHR.status == 200) {
			let data = JSON.parse(XHR.responseText);
			let random = Math.floor(Math.random() * data.all.length);
			let random2 = Math.floor(Math.random() * data.all.length);
			console.log(data.all[random].text);
			para1.innerText = `Fun Fact! Did you know that ${data.all[random].text}`;
			para2.innerText = `Or that ${data.all[random2].text}`;
		} else {
			console.log(`status: ${XHR.status}`);
		}
	};

	XHR.open('GET', 'https://cat-fact.herokuapp.com/facts');
	XHR.send();

	let CATIMG = new XMLHttpRequest();
	CATIMG.onreadystatechange = function () {
		if (CATIMG.readyState == 4 && CATIMG.status == 200) {
			let data = JSON.parse(CATIMG.responseText)[0].url;

			img.src = data;
		} else {
			console.log(`status: ${CATIMG.status}`);
		}
	};

	CATIMG.open('GET', 'https://api.thecatapi.com/v1/images/search?size=full');
	CATIMG.send();
});

//dice

const num = document.getElementById('num');
const btn = document.querySelector('.dice-button');
const die1 = document.querySelector('.die1');
const die2 = document.querySelector('.die2');

btn.addEventListener('click', function () {
	roll();
	num.classList.add('bounce-animation');
	die2.classList.add('spin-animation');
	die1.classList.add('counter-spin-animation');
	setTimeout(function () {
		num.classList.remove('bounce-animation');
		die2.classList.remove('spin-animation');
		die1.classList.remove('counter-spin-animation');
	}, 500);
});

function roll() {
	let result = Math.floor(Math.random() * 12 + 1);
	num.innerHTML = `${result}`;
}

//tipcalc

let billAmount = document.querySelector('.tip__bill');
let tipPercent = document.querySelector('.tip__percent');
let tipBtn = document.querySelector('.tip__btn');
let para = document.querySelector('.tip__total');

tipBtn.addEventListener('click', () => {
	let tipAmount = Number(billAmount.value) * Number(tipPercent.value / 100);
	let billTotal = (
		Number(tipAmount.toFixed(2)) + Number(billAmount.value)
	).toFixed(2);
	para.innerText = `Tip Amount: $${tipAmount.toFixed(
		2
	)} - Total Bill: $${billTotal}`;
});
