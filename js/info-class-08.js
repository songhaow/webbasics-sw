var oForm, number;
oForm = document.forms['myform'];

//Sumation of a number field 1+1/2+1/3+1/4+1/5+,,, until number
var i = 0;
var s = 0;
function printn(){
    number = oForm.elements['number'].value;
    while(i < number){
      i = i + 1;
      s = s + 1/i;
      document.getElementById("number01").innerHTML = (i);
    }
    document.getElementById("sumation").innerHTML = (s);
}
