document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    
    // Function to load saved form data
    function loadFormData() {
        const formData = JSON.parse(localStorage.getItem('formData'));
        if (formData) {
            Object.keys(formData).forEach(key => {
                const input = form.querySelector(`#${key}`);
                if (input) {
                    input.value = formData[key];
                }
            });
        }
    }

    // Function to save form data to local storage
    function saveFormData() {
        const formData = {};
        form.querySelectorAll('input').forEach(input => {
            formData[input.id] = input.value;
        });
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    // Load form data on page load
    loadFormData();

    // Save form data on input change
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', saveFormData);
    });

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Perform form validation and other logic here
        
        // If validation is successful
        localStorage.removeItem('formData'); // Clear saved data
        window.location.href = 'confirmation.html'; // Redirect to confirmation page
    }

    form.addEventListener('submit', handleSubmit);

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
            updatePasswordStrength(value); // Call function for password strength
        }
    }

    function showError(selector, message) {
        const input = form.querySelector(selector);
        // Remove any existing error first
        removeError(selector);
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        error.id = `${selector}-error`; // Unique ID for error
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
        
        // Show spinner while calculating strength
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

        // Set text and class for strength indicator
        strengthElement.textContent = `Password Strength: ${strength.charAt(0).toUpperCase() + strength.slice(1)}`;
        strengthElement.className = `password-strength ${strength}`;

        // Hide spinner after calculating strength
        if (spinner) {
            setTimeout(() => {
                spinner.style.display = 'none';
            }, 500); // Adjust time as needed
        }
    }

    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', validateInput);
    });
});
