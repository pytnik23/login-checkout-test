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
			alert('Будь ласка, введіть ім`я!\nІм`я повинно складатися не менше ніж із 3-х символів і не містити спецсимволи!');
			name.focus();
			name.style.borderColor = 'red';
			console.dir(name);
			return;
		} else if ( !regPassword.test(password.value) ) {
			alert('Будь ласка, введіть пароль!\nПароль повинен бути не менше із 6-ти симфолів і не містити спецсимволи!');
			password.focus();
			password.style.borderColor = 'red';
			return;
		}

		name.style.borderColor = '';
		password.style.borderColor = '';
		authForm.submit();
	};
});