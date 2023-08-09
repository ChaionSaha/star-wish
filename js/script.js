'use strict';

const navBtn = document.querySelector('.nav-btn');
const dropMenu = document.querySelector('#dropdown-menu');
navBtn.addEventListener('click', (e) => {
	console.log('clicked');
	if (dropMenu.classList.contains('hidden'))
		dropMenu.classList.remove('hidden');
	else dropMenu.classList.add('hidden');
});
navBtn.addEventListener('click', (e) => {
	console.log(e);
});
