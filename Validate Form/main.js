var nameError = document.getElementById('name_error');
var phoneError = document.getElementById('phone_error');
var emailError = document.getElementById('email_error');
var messageError = document.getElementById('message_error');
var submitError = document.getElementById('submit_error');

function validateName(){
        var name = document.getElementById('contact_name').value;

        if(name.length == 0){
            nameError.innerHTML = "Name is required";
            return false;
        }
        if(!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML = "Write full name";
            return false;
        }
        nameError.innerHTML = '<i class="bx bx-check-circle"></i>';
        return true;
}

function validatePhone(){
    var phone = document.getElementById('contact_phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only digits required";
        return false;
    }
    

    phoneError.innerHTML = '<i class="bx bx-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact_email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid";
        return false;
    }
    emailError.innerHTML = '<i class="bx bx-check-circle"></i>';
    return true;
}

function validateText(){
    var message = document.getElementById('contact_text').value;
    var required = 50;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' More Characters required ';
        return false;
    }
    messageError.innerHTML = '<i class="bx bx-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
}
