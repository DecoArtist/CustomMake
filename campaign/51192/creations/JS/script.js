function btn_not_worked() {
	document.querySelector(".historyback").style = "display: none;"
	document.querySelector(".originalreturn").style = "display: block;"
}


function Ione() {
	document.querySelector(".creationGallery__swiper-image").style = "background: var(--art1);background-size: cover;";

	document.querySelector(".ItemDaGaleria1").style = "border: 2px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria2").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria3").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria4").style = "border: 0px solid #6d6aff;";
}

function Itwo() {
	document.querySelector(".creationGallery__swiper-image").style = "background: var(--art2);background-size: cover;"

	document.querySelector(".ItemDaGaleria1").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria2").style = "border: 2px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria3").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria4").style = "border: 0px solid #6d6aff;";
}

function Ithree() {
	document.querySelector(".creationGallery__swiper-image").style = "background: var(--art3);background-size: cover;"

	document.querySelector(".ItemDaGaleria1").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria2").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria3").style = "border: 2px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria4").style = "border: 0px solid #6d6aff;";
}

function Ifour() {
	document.querySelector(".creationGallery__swiper-image").style = "background: var(--art4);background-size: cover;"

	document.querySelector(".ItemDaGaleria1").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria2").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria3").style = "border: 0px solid #6d6aff;";
	document.querySelector(".ItemDaGaleria4").style = "border: 2px solid #6d6aff;";
}

var dudes = document.querySelectorAll('.btn');
dudes = Array.prototype.slice.call( dudes );

dudes.forEach(function (dude) {

	updateDude( dude );

	// on click, increase score
	dude.addEventListener('click', function () {

		increaseScore(dude);

	});

});

// first -> scoreFirst
function getKeyFrom( dude ) {
	return 'score' + _.capitalize( dude.getAttribute('rel') );
}

// get scoreFirst from localStorage
function getScore( dude ) {
	return +localStorage.getItem( getKeyFrom(dude) ) || 0;
}

// set scoreFirst in localStorage
function setScore( dude, score ) {
	localStorage.setItem( getKeyFrom(dude), score );
}

// update scoreFirst in localStorage
function updateDude( dude ) {
	var score   = getScore(dude),
	    element = document.querySelector('#' + dude.getAttribute('rel'));
	element.textContent = score;
}

// increase scoreFirst in localStorage
function increaseScore(dude) {
	var score = getScore(dude);
	score++;

	setScore(dude, score);

	updateDude(dude);
}