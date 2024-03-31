document.addEventListener('DOMContentLoaded', function () {
	const words = [
		'backend developer',
		'student',
		'frontend developer',
		'Swisscom employee',
		'full-stack developer',
	];
	let count = 0;
	let index = 0;
	let currentWord = '';
	let letter = '';
	let isDeleting = false;

	(function type() {
		if (count === words.length) {
			count = 0;
		}
		currentWord = words[count];

		if (isDeleting) {
			// Decrement index to "delete" characters
			letter = currentWord.slice(0, index--);
		} else {
			// Increment index to type out characters
			letter = currentWord.slice(0, ++index);
		}

		document.querySelector('.i-am-text').textContent = 'I am a ' + letter;

		// Check if full word has been typed out
		if (!isDeleting && letter.length === currentWord.length) {
			// After a delay, start deleting
			setTimeout(() => {
				isDeleting = true;
			}, 2000);
		} else if (isDeleting && letter === '') {
			// Once deletion completes, prepare to type the next word
			isDeleting = false;
			count++;
			index = 0;
			// Add a slight delay before starting to type the next word
			setTimeout(type, 500);
			return; // Return here to prevent immediate execution of the next line
		}

		// Set a timeout for the next execution of type, with shorter delay for deletion
		setTimeout(type, isDeleting ? 120 : 60);
	})();
});


window.addEventListener('scroll', function() {
	var downArrow = document.getElementById('downArrow');
	if (window.pageYOffset > window.innerHeight / 2) {
			downArrow.style.animationPlayState = 'paused';
			downArrow.style.opacity = '0';
	} else {
			downArrow.style.animationPlayState = 'running';
			downArrow.style.opacity = '1';
	}
});