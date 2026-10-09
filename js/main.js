/**
 * Motus landing page - interactive behavior.
 * Handles the mobile navigation menu and the validation of the contact form.
 * Requires i18n.js to be loaded first (it provides the translate() function).
 */

/* Validation patterns for the contact form. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s-]{7,20}$/;
const MIN_PHONE_DIGITS = 7;
const MAX_PHONE_DIGITS = 15;

/* Opens and closes the navigation menu on small screens. */
function setUpMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelectorAll('.nav-links a');

    const setOpen = (isOpen) => {
        navbar.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    };

    toggle.addEventListener('click', () => setOpen(!navbar.classList.contains('open')));

    /* The menu closes after the visitor picks a section. */
    links.forEach((link) => link.addEventListener('click', () => setOpen(false)));
}

/* Returns the i18n key of the error for a field, or null when the value is valid. */
function getFieldErrorKey(field) {
    const value = field.value.trim();

    if (field.name === 'name') {
        return value ? null : 'form.error.nameRequired';
    }
    if (field.name === 'email') {
        if (!value) return 'form.error.emailRequired';
        return EMAIL_PATTERN.test(value) ? null : 'form.error.emailInvalid';
    }
    if (field.name === 'phone') {
        if (!value) return 'form.error.phoneRequired';
        const digits = value.replace(/\D/g, '').length;
        const isValid = PHONE_PATTERN.test(value) && digits >= MIN_PHONE_DIGITS && digits <= MAX_PHONE_DIGITS;
        return isValid ? null : 'form.error.phoneInvalid';
    }
    return null;
}

/* Shows or clears the error message of a field and returns whether it is valid. */
function validateField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    const errorKey = getFieldErrorKey(field);

    field.classList.toggle('invalid', errorKey !== null);
    field.setAttribute('aria-invalid', String(errorKey !== null));

    if (errorKey) {
        /* The data-i18n attribute lets the message follow the language switch. */
        errorElement.dataset.i18n = errorKey;
        errorElement.textContent = translate(errorKey);
    } else {
        delete errorElement.dataset.i18n;
        errorElement.textContent = '';
    }
    return errorKey === null;
}

/* Validates the contact form and shows a confirmation when every field is valid. */
function setUpContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    const fields = [...form.querySelectorAll('input')];

    /* Each field is checked again when the visitor leaves it. */
    fields.forEach((field) => field.addEventListener('blur', () => validateField(field)));

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const invalidFields = fields.filter((field) => !validateField(field));
        if (invalidFields.length > 0) {
            success.hidden = true;
            invalidFields[0].focus();
            return;
        }

        form.reset();
        success.hidden = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setUpMobileMenu();
    setUpContactForm();
});
