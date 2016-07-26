document.addEventListener("DOMContentLoaded", function(event) { 

	// form validation
	var authForm 		= document.getElementById('authForm'),
		name 			= document.getElementById('name'),
		password 		= document.getElementById('password'),
		signInButton 	= document.querySelector('.btn-sign-in');

	var regName 		= /^[a-z0-9_-]{3,16}$/,
		regPassword 	= /^[a-zA-Z0-9_-]{6,18}$/;


	signInButton.onclick = function() {
		if ( !regName.test(name.value) ) {
			alert('Будь ласка, введіть ім`я!');
			name.focus();
			name.style.borderColor = 'red';
			return;
		} else if ( !regPassword.test(password.value) ) {
			alert('Будь ласка, введіть пароль!');
			password.focus();
			password.style.borderColor = 'red';
			return;
		}

		name.style.borderColor = '';
		password.style.borderColor = '';
		authForm.submit();
	};
});