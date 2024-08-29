document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        en: {
            title: "Sign Up Form",
            "signup-heading": "Sign Up",
            "username-label": "Username",
            "email-label": "Email",
            "password-label": "Password",
            "confirm-password-label": "Confirm Password",
            "submit-button": "Create Account",
            "reset-button": "Reset Form",
            "language-label": "Language:"
        },
        es: {
            title: "Formulario de Registro",
            "signup-heading": "Regístrate",
            "username-label": "Nombre de Usuario",
            "email-label": "Correo Electrónico",
            "password-label": "Contraseña",
            "confirm-password-label": "Confirmar Contraseña",
            "submit-button": "Crear Cuenta",
            "reset-button": "Restablecer Formulario",
            "language-label": "Idioma:"
        },
        fr: {
            title: "Formulaire d'inscription",
            "signup-heading": "S'inscrire",
            "username-label": "Nom d'utilisateur",
            "email-label": "Email",
            "password-label": "Mot de passe",
            "confirm-password-label": "Confirmer le mot de passe",
            "submit-button": "Créer un compte",
            "reset-button": "Réinitialiser le formulaire",
            "language-label": "Langue:"
        },
        ar: {
            title: "نموذج التسجيل",
            "signup-heading": "التسجيل",
            "username-label": "اسم المستخدم",
            "email-label": "البريد الإلكتروني",
            "password-label": "كلمة المرور",
            "confirm-password-label": "تأكيد كلمة المرور",
            "submit-button": "إنشاء حساب",
            "reset-button": "إعادة تعيين النموذج",
            "language-label": "اللغة:"
        }
    };

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = translations[lang][key];
            if (translation) {
                if (element.tagName === 'TITLE') {
                    document.title = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Set language direction
        if (lang === 'ar') {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }
        
        document.body.setAttribute('lang', lang);

        // Save the selected language to localStorage
        localStorage.setItem('selectedLanguage', lang);
    }

    // Set initial language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to 'en' if no language saved
    setLanguage(savedLanguage);

    // Language selector event listener
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = savedLanguage; // Set the select element to the saved language
        languageSelect.addEventListener('change', function(event) {
            const selectedLanguage = event.target.value;
            setLanguage(selectedLanguage);
        });
    }
});

