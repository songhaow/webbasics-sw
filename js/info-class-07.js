// Find number that can be divided by 3&5 but not 2&7
var oForm, number;
oForm = document.forms['myform'];

function find(){
  number = oForm.elements['number'].value;
  console.log('number: ', number);
  if(number%3 == 0 && number%5 == 0 && number%2 != 0 && number%7 != 0){
     document.getElementById("number01").innerHTML = (number);
  }
  else{
     document.getElementById("number01").innerHTML = 'dont work';
  }
}
