var oForm, number;
oForm = document.forms['myform'];

// Verify a prime number that can be only devided by itsself
var i;
var tester;
function printn(){
    number = oForm.elements['number'].value;
    for (i = 2; i < number; i++){
      if(number%i === 0){
        tester = false;
        break;
      };
    };

  if (tester == false){
      document.getElementById("answer").innerHTML=("Not a prime number");
    }
    else{
      document.getElementById("answer").innerHTML="Is a prime number";
    };

}
