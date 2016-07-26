document.addEventListener("DOMContentLoaded", function(event) { 

	// form validation
	var authForm 		= document.getElementById('authForm'),
		name 			= document.getElementById('name'),
		password 		= document.getElementById('password'),
		signInButton 	= document.querySelector('.btn-sign-in');

	var regNamePhone 	= /^\+380[0-9]{9}$/,
		regNameEmail 	= /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z\.]{2,6})$/,
		regPassword 	= /^[a-zA-Z0-9_-]{6,18}$/;

	function tooltip(item, msg) {
		
	}

	signInButton.onclick = function() {
		if ( !regNamePhone.test(name.value) && !regNameEmail.test(name.value) ) {
			alert('Будь ласка, введіть ім`я!\nІм`я повинно складатися не менше ніж із 3-х символів і не містити спецсимволи!');
			name.focus();
			name.style.borderColor = 'red';
			return;
		} else if ( !regPassword.test(password.value) ) {
			name.style.borderColor = 'green';
			alert('Будь ласка, введіть пароль!\nПароль повинен бути не менше із 6-ти симфолів і не містити спецсимволи!');
			password.focus();
			password.style.borderColor = 'red';
			return;
		}

		password.style.borderColor = 'green';

		authForm.submit();
	};
});