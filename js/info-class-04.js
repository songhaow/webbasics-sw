var oForm, n1,n2,answer;

oForm = document.forms['myform'];

function sum(){
  n1 = oForm.elements['number01'].value;
  n2 = oForm.elements['number02'].value;
  answer = parseFloat(n1) + parseFloat(n2);
  answer = parseFloat(answer.toFixed(3));
  document.getElementById("answer").innerHTML = (answer);
}

function sub(){
  n1 = oForm.elements['number01'].value;
  n2 = oForm.elements['number02'].value;
  answer = parseFloat(n1) - parseFloat(n2);
  answer = parseFloat(answer.toFixed(3));
  document.getElementById("answer").innerHTML = (answer);
}

function mul(){
  n1 = oForm.elements['number01'].value;
  n2 = oForm.elements['number02'].value;
  answer = parseFloat(n1) * parseFloat(n2);
  answer = parseFloat(answer.toFixed(3));
  document.getElementById("answer").innerHTML = (answer);
}

function div(){
  n1 = oForm.elements['number01'].value;
  n2 = oForm.elements['number02'].value;
  answer = parseFloat(n1) / parseFloat(n2);
  answer = parseFloat(answer.toFixed(3));
  document.getElementById("answer").innerHTML = (answer);
}
