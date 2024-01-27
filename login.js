document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting via the browser

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform simple login validation (example: username "user" and password "password")
    if (username === 'user' && password === 'password') {
        // alert('Login successful! Redirecting to the main page...');
        // Redirect to the main page after successful login (replace 'index.html' with your main page URL)
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

