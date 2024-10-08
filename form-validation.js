document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const autosaveKey = 'signup-form-autosave';

    function validateInput(event) {
        const input = event.target;
        const value = input.value.trim();

        if (input.id === 'email') {
            if (!validateEmail(value)) {
                showError('#email', 'Invalid email format');
            } else {
                removeError('#email');
            }
        } else if (input.id === 'password') {
            updatePasswordStrength(value);
        } else if (input.id === 'confirm-password') {
            validatePasswordMatch();
        }
    }

    function showError(selector, message) {
        const input = form.querySelector(selector);
        removeError(selector);
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        error.id = `${selector}-error`;
        input.parentElement.appendChild(error);
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', error.id);
    }

    function removeError(selector) {
        const input = form.querySelector(selector);
        const error = input.parentElement.querySelector('.error');
        if (error) {
            error.remove();
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedby');
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function updatePasswordStrength(password) {
        const strengthElement = document.getElementById('password-strength');
        const spinner = document.getElementById('password-spinner');
        
        if (spinner) {
            spinner.style.display = 'inline-block';
        }
        
        let strength = 'weak';
        if (password.length > 8) {
            strength = 'medium';
        }
        if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
            strength = 'strong';
        }

        strengthElement.textContent = `Password Strength: ${strength.charAt(0).toUpperCase() + strength.slice(1)}`;
        strengthElement.className = `password-strength ${strength}`;

        if (spinner) {
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 500);
        }
    }

    function validatePasswordMatch() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password && confirmPassword && password !== confirmPassword) {
            showError('#confirm-password', 'Passwords do not match');
        } else {
            removeError('#confirm-password');
        }
    }

    function saveFormData() {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        localStorage.setItem(autosaveKey, JSON.stringify(data));
    }

    function loadFormData() {
        const savedData = localStorage.getItem(autosaveKey);
        if (savedData) {
            const data = JSON.parse(savedData);
            for (const key in data) {
                const input = form.querySelector(`[name=${key}]`);
                if (input) {
                    input.value = data[key];
                }
            }
        }
    }

    function clearAutosaveData() {
        localStorage.removeItem(autosaveKey);
    }

    function handleFormReset() {
        clearAutosaveData();
    }

    form.addEventListener('input', validateInput);
    form.addEventListener('input', saveFormData);
    form.addEventListener('reset', handleFormReset);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Validate password match
        validatePasswordMatch();
        
        // Check for errors
        if (form.querySelectorAll('.error').length === 0) {
            const selectedLanguage = document.getElementById('language-select').value;
            const confirmationPage = `confirmation_${selectedLanguage}.html`;
            window.location.href = confirmationPage; // Redirect to the confirmation page
        }
    });

    loadFormData();
});

