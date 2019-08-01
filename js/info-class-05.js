var oForm, n1,n2,answer;
oForm = document.forms['myform'];

// if function:
// function calc(op){
//   n1 = oForm.elements['number01'].value;
//   n2 = oForm.elements['number02'].value;
//   if(op === 1){
//   answer = parseFloat(n1) + parseFloat(n2);
//   }
//   else if (op === 2) {
//     answer = parseFloat(n1) - parseFloat(n2);
//   }
//   else if (op === 3) {
//     answer = parseFloat(n1) * parseFloat(n2);
//   }
//   else{
//     answer = parseFloat(n1) / parseFloat(n2);
//   }
//   answer = parseFloat(answer.toFixed(3));
//   document.getElementById("answer").innerHTML = (answer);
// }

// Switch function:
function calc(op){
  n1 = oForm.elements['number01'].value;
  n2 = oForm.elements['number02'].value;
  console.log('n1,n2: ', n1,n2)
  switch (op) {
    case 1:{
      answer = parseFloat(n1) + parseFloat(n2);
    }
      break;
    case 2:{
      answer = parseFloat(n1) - parseFloat(n2);
    }
      break;
    case 3:{
      answer = parseFloat(n1) * parseFloat(n2);
    }
      break;
    default:{
      answer = parseFloat(n1) / parseFloat(n2);
    }
  //   answer = parseFloat(answer.toFixed(3));
  //   console.log('answer: ', answer);
  //   document.getElementById("answer").innerHTML = (answer);
  }
  answer = parseFloat(answer.toFixed(3));
  console.log('answer: ', answer);
  document.getElementById("answer").innerHTML = (answer);
}
