
// mobile-menu
const btn= document.getElementById('menu-btn');
const nav= document.getElementById('menu');

function navToggle() {
	btn.classList.toggle('open');
	nav.classList.toggle('hidden');
	document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);


// footer 
const arrows = document.getElementsByClassName('arrow');
const elements = document.getElementsByClassName('element');

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener('click', function() {
    console.log(1);
    elements[i].classList.toggle('option');
  });
}





