function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    }

    if (phone === "") {
        phoneError.textContent = "Phone number is required";
        isValid = false;
    }else if (!/^\d{10}$/.test(phone)) {
        phoneError.textContent = "Phone number must be a 10-digit number";
        isValid = false;
    }


    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    }

    if (confirmPassword === "") {
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    return isValid;
}