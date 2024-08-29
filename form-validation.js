document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get form values
        const username = form.querySelector('#username').value.trim();
        const email = form.querySelector('#email').value.trim();
        const password = form.querySelector('#password').value;
        const confirmPassword = form.querySelector('#confirm-password').value;

        // Validation flags
        let valid = true;

        // Clear previous error messages
        form.querySelectorAll('.error').forEach(el => el.remove());

        // Username validation
        if (username === '') {
            showError('#username', 'Username is required');
            valid = false;
        }

        // Email validation
        if (email === '') {
            showError('#email', 'Email is required');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('#email', 'Invalid email format');
            valid = false;
        }

        // Password validation
        if (password === '') {
            showError('#password', 'Password is required');
            valid = false;
        }

        // Confirm password validation
        if (confirmPassword === '') {
            showError('#confirm-password', 'Please confirm your password');
            valid = false;
        } else if (password !== confirmPassword) {
            showError('#confirm-password', 'Passwords do not match');
            valid = false;
        }

        // If valid, submit the form
        if (valid) {
            form.submit();
        }
    });

    function showError(selector, message) {
        const input = form.querySelector(selector);
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        input.parentElement.appendChild(error);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

