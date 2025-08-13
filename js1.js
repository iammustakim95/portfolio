







const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    // Helper function to check if input is empty
    function isEmpty(field, message) {
        if (field.value.trim() === '') {
            alert(message);
            field.focus();
            return true;
        }
        return false;
    }

    // Helper function to check if input is numeric
    function isNumeric(field, message) {
        const regex = /^[0-9]+$/;
        if (!regex.test(field.value.trim())) {
            alert(message);
            field.focus();
            return false;
        }
        return true;
    }

    // Validate inputs
    if (isEmpty(name, 'Please fill in your Name.')) return;
    if (isEmpty(email, 'Please fill in your Email.')) return;

    // Validate phone number field (not empty and numeric)
    if (isEmpty(phone, 'Please fill in your Phone Number.')) return;
    if (!isNumeric(phone, 'Phone Number must contain only numbers.')) return;

    if (isEmpty(message, 'Please fill in your Message.')) return;

    // If all validations pass
    alert('Form submitted successfully!');
    form.submit();
});