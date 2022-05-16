  //Validate email and password fields

  function validateFields(){
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid().disable = !emailValid || !passwordValid;
    const email = document.getElementById("email").value;
    document.getElementById("login-button");
    if(!email){
      document.getElementById("email").disable = true;
    }
    else (validateEmail(email))
      document.getElementById("email").disable = false;
    
  }

  function isEmailValid(){
   const email = document.getElementById("email").value;
   if (!email){
     return false;
   }
   return validateEmail(email);
  }

  function validateEmail(email){
    return /\S+@S+\.\S+/.test(email)
  }
