document.addEventListener("DOMContentLoaded", function(event) { 

	// form validation
	var authForm 		= document.getElementById('authForm'),
		name 			= document.getElementById('name'),
		password 		= document.getElementById('password'),
		signInButton 	= document.querySelector('.btn-sign-in');

	var regNamePhone 	= /^\+380[0-9]{9}$/,
		regNameEmail 	= /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z\.]{2,6})$/,
		regPassword 	= /^[a-zA-Z0-9_-]{6,18}$/;

	function tooltip(elem, msg) {
		if (elem.nextElementSibling.classList.contains('input-tooltip')) {
			return;
		}
		var div = document.createElement('div');
		div.classList.add('input-tooltip');
		div.setAttribute('title', msg);
	
		elem.parentNode.insertBefore(div, elem.nextSibling);
	}

	signInButton.onclick = function() {
		if ( !regNamePhone.test(name.value) && !regNameEmail.test(name.value) ) {
			var msg = 'Будь ласка, введіть Email або телефон у форматі +380XXXXXXXXX';
			tooltip(name, msg);
			name.focus();
			name.style.borderColor = 'red';
			return;
		} else if ( !regPassword.test(password.value) ) {
			name.style.borderColor = 'green';
			name.parentNode.removeChild(document.querySelector('.input-tooltip'));

			var msg = 'Будь ласка, введіть пароль! Пароль повинен бути не менше із 6-ти симфолів і не містити спецсимволи!';
			tooltip(password, msg);
			password.focus();
			password.style.borderColor = 'red';
			return;
		}

		password.style.borderColor = 'green';
		name.parentNode.removeChild(document.querySelector('.input-tooltip'));

		authForm.submit();
	};
});