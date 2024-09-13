document.addEventListener('DOMContentLoaded', function() {
    // Elements for Signup
    const signupEmail = document.querySelector('.registration input[type="text"]');
    const signupPassword = document.querySelector('.registration input[type="password"]');
    const confirmPassword = document.querySelector('.registration input[type="password"]');
    const signupButton = document.querySelector('.registration .button');
    
    // Elements for Login
    const loginEmail = document.querySelector('.login input[type="text"]');
    const loginPassword = document.querySelector('.login input[type="password"]');
    const loginButton = document.querySelector('.login .button');
    
    // Handle Signup
    signupButton.addEventListener('click', function() {
        const email = signupEmail.value.trim();
        const password = signupPassword.value;
        const confirmPass = confirmPassword.value;
        
        if (password !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        if (email && password) {
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            alert('Signup successful! You can now log in.');
            
            // Reset the form and switch to login view
            signupEmail.value = '';
            signupPassword.value = '';
            confirmPassword.value = '';
            document.getElementById('check').checked = false;
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Handle Login
    loginButton.addEventListener('click', function() {
        const email = loginEmail.value.trim();
        const password = loginPassword.value;
        
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');
        
        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'index.html';
            // Redirect to another page or perform any other actions here
        } else {
            alert('Invalid email or password.');
        }
    });
});
