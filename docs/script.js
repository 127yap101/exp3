document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    // Select input fields
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', (e) => {
        let isValid = true;

        // Check Username (Must not be empty)
        if (username.value.trim() === '') {
            setError(username, 'Username is required');
            isValid = false;
        } else {
            setSuccess(username);
        }

        // Check Email (Must match standard email pattern)
        if (!isValidEmail(email.value)) {
            setError(email, 'Please provide a valid email address');
            isValid = false;
        } else {
            setSuccess(email);
        }

        // Check Password (Must be at least 6 characters)
        if (password.value.length < 6) {
            setError(password, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            setSuccess(password);
        }

        // If validation fails, stop form submission
        if (!isValid) {
            e.preventDefault();
        }
    });

    // Helper function: Set error styles and message
    function setError(input, message) {
        const parent = input.parentElement;
        const errorDisplay = parent.querySelector('.error-message');

        errorDisplay.innerText = message;
        errorDisplay.style.display = 'block';
        input.classList.add('error');
        input.classList.remove('success');
    }

    // Helper function: Set success styles
    function setSuccess(input) {
        const parent = input.parentElement;
        const errorDisplay = parent.querySelector('.error-message');

        errorDisplay.innerText = '';
        errorDisplay.style.display = 'none';
        input.classList.add('success');
        input.classList.remove('error');
    }

    // Helper function: Validate email using Regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
