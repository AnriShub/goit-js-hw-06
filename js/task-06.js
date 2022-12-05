const textInput = document.querySelector('#validation-input');
console.log(textInput.getAttribute('data-length'));
textInput.addEventListener('blur', event => {
	textInput.classList.remove('valid', 'invalid');
	if (event.target.value.length === Number(textInput.getAttribute('data-length'))) {
		textInput.classList.add('valid');
	} 
		textInput.classList.add('invalid');
})
