//for var a,b,c three numbers
var a, b, c, numberMax, numberMid, numberMin;

//(1) to find numberMax;
document.getElementById("a").onchange = function(event) {
  a = event.target.value;
}

document.getElementById("b").onchange = function(event) {
  b = event.target.value;
}

document.getElementById("c").onchange = function(event) {
  c = event.target.value;
//Find Max
  if(a <= b){
    if (b <= c){
      numberMax = c;
    }
    else{
      numberMax = b;
    }
  }
  else{
    if (a <= c){
      numberMax = c;
    }
    else{
      numberMax = a;
    }
  }
  //Find min
  if(a <= b){
    if (a <= c){
      numberMin = a;
    }
    else{
      numberMin = c;
    }
  }
  else{
    if (b <= c){
      numberMin = a;
    }
    else{
      numberMin = c;
    }
  }
  document.getElementById("numberMax").innerHTML = (numberMax);
  document.getElementById("numberMin").innerHTML = (numberMin);
}

// document.getElementById("b").click = function(event) {
//   b = event.target.value;
// }

var n1,n2,n3,sumation,lengthOfForm;

function sum(){
  n1 = document.forms['myform'].elements['number01'].value;
  n2 = document.forms['myform'].elements['number02'].value;
  n3 = document.forms['myform'].elements['number03'].value;
  console.log('n1: ', n1);
  sumation = parseInt(n1)+parseInt(n2)+parseInt(n3);
  document.getElementById("demo01").innerHTML = (sumation);
  lengthOfForm = document.getElementById('myform').elements.length;
  document.getElementById("demo02").innerHTML = lengthOfForm;
}

//(2) to find second bigest number;
  // if(a <= b){
  //   if (b <= c){
  //     ans = b;
  //   }
  //   else{
  //     ans = b;
  //   }
  // }
  // else{
  //   if (a <= c){
  //     ans = c;
  //   }
  //   else{
  //     ans = c;
  //   }
  // }
  // document.getElementById("numberMid").innerHTML = (ans);

//(3) to find the max and min
  // numberMax = a;
  // numberMin = b;
  // if(numberMax<b){
  //   numberMax = b;
  // }
  // if(numberMin>b){
  //   numberMax = c;
  // }
  // if(numberMax<c){
  //   numberMax = c;
  // }
  // if(numberMin>c){
  //   numberMin = c;
  // }
  //   document.getElementById("numberMid").innerHTML = (ans);
  //   document.getElementById("numberMid").innerHTML = (ans);
// }
