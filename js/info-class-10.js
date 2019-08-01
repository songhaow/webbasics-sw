var oForm, number;
oForm = document.forms['myform'];

//<!-- How many digits of a number? -->
function printn(){
  number = oForm.elements['number'].value;
  var c = 0;
  while(number >= 1){
    number = number / 10.;
    c = c + 1;
  }
  document.getElementById("answer").innerHTML=(c);
};
