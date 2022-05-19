const { dialog } = require('electron');
const electron = require('electron');



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

  var noVAT = 0;
  var unitRate = document.getElementById('unitRate').value;
  if(unitRate == ''){

    let errMessage = document.getElementById('errMessage');
    errMessage.innerHTML = ' Please Insert the Unit Rate';
    errMessage.style.color = 'red';
    errMessage.style.visibility = 'visible';
    return noVAT;
  
  } else {
  
    noVAT = ((unitRate * 0.20) + (60 * 0.04));
    document.getElementById('errMessage').style.visibility = 'hidden'
    return noVAT;
  }
}

function priceWithVAT() {

  const noVATPrice = priceNoVAT();
  const unitRate = document.getElementById('unitRate').value;
  const VAT = noVATPrice + (noVATPrice * (13.5 / 100));
  const result = document.getElementById('resultBox');
  result.innerHTML = VAT.toFixed(2);
  document.getElementById('countLabel').style.visibility = "visible";
  document.getElementById('euroIcon').style.visibility = "visible";
  document.getElementById("cost").innerHTML =VAT.toFixed(2);
  document.getElementById("unit").innerHTML = unitRate;
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
