// Find number 3&5 and 2&7
var oForm, number01, number02, number03, ans;
oForm = document.forms['myform'];

function plus(){
    getnumbers();
    ans = number01 + number02;
    console.log(number01, number02, number03);
    if(ans === number03){
    document.getElementById("R&W").innerHTML = "Your answer is Right";
  } else {
    document.getElementById("R&W").innerHTML = "Your answer is Wrong";
  }
}

function minus(){
    getnumbers();
    ans = number01 - number02;
    console.log(number01, number02, number03);
    if(ans === number03){
    document.getElementById("R&W").innerHTML = "Your answer is Right";
  } else {
    document.getElementById("R&W").innerHTML = "Your answer is Wrong";
  }
}

function multiply(){
    getnumbers();
    ans = number01 * number02;
    console.log(number01, number02, number03);
    if(ans === number03){
    document.getElementById("R&W").innerHTML = "Your answer is Right";
  } else {
    document.getElementById("R&W").innerHTML = "Your answer is Wrong";
  }
}

function divide(){
    getnumbers();
    ans = number01/number02;
    console.log(number01, number02, number03);
    if(ans === number03){
    document.getElementById("R&W").innerHTML = "Your answer is Right";
  } else {
    document.getElementById("R&W").innerHTML = "Your answer is Wrong";
  }
}

function getnumbers(){
  number01 = parseFloat(oForm.elements['number01'].value);
  number02 = parseFloat(oForm.elements['number02'].value);
  number03 = parseFloat(oForm.elements['answer'].value);
return (number01, number02, number03)
}
