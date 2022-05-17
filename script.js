//Validate email and password fields

function validateFields() {
  const emailValid = isEmailValid();
  const passwordValid = isPasswordValid().disable = !emailValid || !passwordValid;
  const email = document.getElementById("email").value;
  document.getElementById("login-button");
  if (!email) {
    document.getElementById("email").disable = true;
  }
  else (validateEmail(email))
  document.getElementById("email").disable = false;

}

function priceNoVAT() {

  const unitRate = document.getElementById('unitRate').value;
  const noVAT = ((unitRate * 0.20) + (60 * 0.04));
  return noVAT;
}

function priceWithVAT(){

    const unitRate = document.getElementById('unitRate').value;
    const VAT = priceNoVAT() + (priceNoVAT() * (13.5/100));
    const result = document.getElementById('resultBox');
    result.innerHTML = VAT.toFixed(2);
    document.getElementById('countLabel').style.visibility = "visible";
    document.getElementById('euroIcon').style.visibility = "visible";
}

  // function isEmailValid(){
  //  const email = document.getElementById("email").value;
  //  if (!email){
  //    return false;
  //  }
  //  return validateEmail(email);
  // }

  // function validateEmail(email){
  //   return /\S+@S+\.\S+/.test(email)
  // }
