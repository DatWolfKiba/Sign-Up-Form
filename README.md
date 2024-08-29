# Sign-Up-Form Functionality and Features
- Multi-Language Support
Languages Supported: English, Spanish, French, and Arabic.
Automatic Language Detection: The form automatically loads in the language previously selected by the user, stored in localStorage.
Language Selector: Users can switch languages using a dropdown menu. All labels and text content update instantly based on the selected language.
Right-to-Left (RTL) Support: The form adjusts to RTL layout when Arabic is selected, ensuring proper text alignment and input field positioning.
- Form Fields and Validation
Username Field: Required field where users input their desired username.
Email Field: Required field with real-time validation for correct email format.
Password Field: Required field with real-time strength detection and validation.
Confirm Password Field: Ensures the password and confirmation match before form submission.
- Password Functionality
Password Strength Indicator: Displays the strength of the password (Weak, Medium, Strong) as users type.
Password Visibility Toggle: Users can toggle the visibility of the password and confirmation password fields using eye icons. The icons switch between visible (fa-eye) and hidden (fa-eye-slash) states.
- Form Submission
Client-Side Validation: Ensures all fields meet the required criteria before submission. The form is not submitted if any field has an error.
Redirection on Success: On successful validation, users are redirected to a language-specific confirmation page (e.g., confirmation_en.html, confirmation_fr.html).
- Auto-Save Functionality
Auto-Save on Input: The form data is automatically saved in localStorage whenever the user inputs data. This ensures that no data is lost if the user accidentally navigates away from the form.
Auto-Fill on Load: When the form is reloaded, saved data is automatically filled into the corresponding fields, allowing users to continue from where they left off.
Clear Data on Reset: If the form is reset, the saved data in localStorage is cleared, ensuring a fresh start.
- Customizable Design
Responsive Design: The form is designed to be mobile-friendly, with flexible layouts that adjust based on screen size.
Custom Fonts: Utilizes the 'Norse Bold' font for the header, giving the form a distinctive look.
Themed Colors: A beige background is used to create a warm, inviting interface, with contrasting button colors that provide a clear call to action.
- Accessibility Features
ARIA Attributes: The form includes ARIA attributes to improve accessibility, such as aria-invalid and aria-describedby for error handling.
Error Messages: User-friendly error messages are displayed directly below the corresponding fields, guiding users to correct their input.**/
