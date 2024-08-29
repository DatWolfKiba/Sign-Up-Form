document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = form.querySelector('#username').value.trim();
        const email = form.querySelector('#email').value.trim();
        const password = form.querySelector('#password').value;
        const confirmPassword = form.querySelector('#confirm-password').value;

        let valid = true;

        form.querySelectorAll('.error').forEach(el => el.remove());

        if (username === '') {
            showError('#username', 'Username is required.');
            valid = false;
        }

        if (email === '') {
            showError('#email', 'Email is required.');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('#email', 'Invalid email format.');
            valid = false;
        }

        if (password === '') {
            showError('#password', 'Password is required.');
            valid = false;
        }

        if (confirmPassword === '') {
            showError('#confirm-password', 'Please confirm your password.');
            valid = false;
        } else if (password !== confirmPassword) {
            showError('#confirm-password', 'Passwords do not match.');
            valid = false;
        }

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
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', error.id);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
