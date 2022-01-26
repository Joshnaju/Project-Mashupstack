function validateForm(e) {
    e.preventDefault();
    // regular expressions
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regEmail = /^\S+@\S+$/;
    var regPassword = /^[A-Za-z]\w{7,10}$/;
    var regPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;
    //input from the user
    var name = document.getElementById('name').value.trim();
    var e_mail = document.getElementById('email').value.toLowerCase().trim();
    var pass_word = document.getElementById('password').value.trim();
    var confirm_pass = document.getElementById('confirm-password').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var isValid = true;
    if (!regName.test(name)) {
        document.getElementById('nameErr').innerHTML = 'Please enter a valid first and last name.';
        document.getElementById('name').focus();
        isValid = false;
    } else {
        document.getElementById('nameErr').innerHTML = '';
    }

    if (!regEmail.test(e_mail)) {
        document.getElementById('emailErr').innerHTML = 'Please enter a valid email address.';
        document.getElementById('email').focus();
        isValid = false;
    } else {
        document.getElementById('emailErr').innerHTML = '';
    }

    if (!regPassword.test(pass_word)) {
        document.getElementById('passErr').innerHTML = 'Please enter a valid Password';
        document.getElementById('password').focus();
        isValid = false;
    } else {
        document.getElementById('passErr').innerHTML = '';
    }
    if (pass_word !== confirm_pass) {
        document.getElementById('confirmPassErr').innerHTML = 'Please recheck your confirmed password';
        document.getElementById('password').focus();
        isValid = false;
    } else {
        document.getElementById('confirmpassErr').innerHTML = '';
    }

    if (!regPhone.test(phone)) {
        document.getElementById('phoneErr').innerHTML = 'Please enter minimum 10 numbers';
        document.getElementById('phone').focus();
        isValid = false;
    } else {
        document.getElementById('phoneErr').innerHTML = '';
    }
    return isValid;
}