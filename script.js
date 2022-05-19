// electron connection 

const { dialog } = require('electron');
const electron = require('electron');

// const input = document.getElementById('myNumber');

// input.setAttribute('required', '');

// calc without VAT
function priceNoVAT() {

  var noVAT = 0;
  var unitRate = document.getElementById('unitRate').value;
  if (unitRate == '') {

    // error message for empty submit 

    let errMessage = document.getElementById('errMessage');
    errMessage.innerHTML = ' Please Insert the Unit Rate';
    errMessage.style.color = 'red';
    errMessage.style.visibility = 'visible';
    return noVAT;

  } else {

    // if not empty, perform the calc
    noVAT = ((unitRate * 0.20) + (60 * 0.04));
    document.getElementById('errMessage').style.visibility = 'hidden'
    return noVAT;
  }

}
// function for calc with VAT 

function priceWithVAT() {

  const noVATPrice = priceNoVAT();
  const unitRate = document.getElementById('unitRate').value;
  // adding up VAT 
  const VAT = noVATPrice + (noVATPrice * (13.5 / 100));
  const result = document.getElementById('resultBox');
  // rounding value up to 2 decimal places
  result.innerHTML = VAT.toFixed(2);
  // editing table display 
  document.getElementById('countLabel').style.visibility = "visible";
  document.getElementById('euroIcon').style.visibility = "visible";
  document.getElementById("cost").innerHTML = VAT.toFixed(2);
  document.getElementById("unit").innerHTML = unitRate;



  // document.getElementById("myNumber").required;

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
