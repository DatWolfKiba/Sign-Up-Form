## Sign-Up Form Features

### **Language Selection**
- Allows the user to select the form language from **English**, **Spanish**, **French**, and **Arabic**.
- The selected language is saved in `localStorage` and is retained upon page reload.
- The form adapts the text direction to **RTL (Right-to-Left)** when Arabic is selected.

### **Password Visibility Toggle**
- Users can toggle the visibility of the password and confirm password fields using eye icons.
- Eye icons change state between **visible** (eye-open) and **hidden** (eye-slash) when toggled.

### **Real-time Form Validation**
- Includes real-time validation for:
  - **Email format**: Ensures the email address is valid.
  - **Password strength**: Indicates password strength as **Weak**, **Medium**, or **Strong**.
  - **Password match**: Confirms that the password and confirm password fields match.

### **Password Strength Indicator**
- Displays the strength of the user's password as they type.
- Uses visual cues (color changes) to indicate strength: **Red** for weak, **Orange** for medium, and **Green** for strong.

### **Error Messages**
- Provides dynamic error messages for:
  - Invalid email formats.
  - Weak passwords.
  - Mismatched passwords.
- Error messages are cleared once the user corrects the issue.

### **Auto-save Form Data**
- Automatically saves form data in `localStorage`.
- Reloads saved data if the page is refreshed or revisited, preventing data loss.

### **Form Reset**
- A reset button is provided to clear the form and the auto-saved data.
- Resets all fields and removes any error messages.

### **Responsive Design**
- The form is designed to be user-friendly and responsive across different devices.
- Ensures accessibility and usability on both desktop and mobile platforms.

### **Modern UI/UX Design**
- Features a clean, modern design with **rounded edges** and a **light color scheme** to match the beige background.
- Utilizes the **Norse Bold** font for the heading and modern iconography for enhanced user experience.

