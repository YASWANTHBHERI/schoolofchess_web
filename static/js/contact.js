/*========================================================================================================================
                                            Contact Page validations
=========================================================================================================================*/
var firstnameError = document.getElementById('firstname-error')
var lastnameError = document.getElementById('lastname-error')
var emailError = document.getElementById('email-error')
var mobileError = document.getElementById('mobile-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

/* First Name Validation */
function validateName(){
  var name = document.getElementById('contact-firstname').value;

  if(name.length == 0){
    firstnameError.innerHTML= 'Name is required';
    return false;
  }
  if(!name.match(/^[A-za-z]*$/)){
    firstnameError.innerHTML= 'name must be an alphabet';
    return false;
  }
  firstnameError.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon>';
  return true;
  
}
/* Last Name Validation */

function validatelastName(){
    var name = document.getElementById('contact-lastname').value;
  
    if(name.length == 0){
      lastnameError.innerHTML= 'Name is required';
      return false;
    }
    if(!name.match(/^[A-za-z]*$/)){
      lastnameError.innerHTML= 'name must be an alphabet';
      return false;
    }
    lastnameError.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon>';
    return true;
    
  }


  /* Email Validation */

function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
     emailError.innerHTML = 'invalid email';
     return false;
  }

  emailError.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon>';
  return true;

}

/* Phone Validation */

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        mobileError.innerHTML = 'mobile no is required';
        return false;
    }
    if(phone.length !== 10){
        mobileError.innerHTML = 'mobile no must be 10 digits';
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        mobileError.innerHTML = 'enter valid number';
        return false
    }

    mobileError.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon>';
    return true;
}

/* Message Validation */

function validateMessage(){
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if(left>0){
    messageError.innerHTML = 'minimum 30 Characters required';
    return false
  }

  messageError.innerHTML = '<ion-icon name="checkmark-circle"></ion-icon>';
  return true;
}

/* Submit Validation */

function validateSubmit(){

  var submit = document.getElementById('contact-submit').value;

  if (!validateName() || !validatelastName() || !validateEmail() || !validatePhone() || !validateMessage()) {
    submitError.innerHTML = 'Please fill in all the fields';
    return false;
  }  
}



