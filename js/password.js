		// JavaScript to handle password input
		document.getElementById('passwordButton').addEventListener('click', function() {
			var password = document.getElementById('passwordInput').value;
			var errorMessage = document.getElementById('errorMessage');
			if (password === 'rapart') {
				document.getElementById('passwordOverlay').style.display = 'none';
			} else {
				errorMessage.textContent = 'Incorrect password. Try again.';
			}
		});
