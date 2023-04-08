(function(){ 
	
	"use strict";
	const emailElement = document.querySelector('#email');
	const messageElement = document.querySelector('#message');

	const submitButton = document.querySelector('#submit-button');
	submitButton.addEventListener('click', function(e) {
		
		const emailValue = emailElement.value;
		const messageValue = messageElement.value;

		if (emailValue.includes('@')) {
			alert('Thank you for your message. Please reach out on my LinkedIn page.');
		} else {
			alert('Oh no, that does not look like a valid email address. Please try again.')
		}
	})
})();

