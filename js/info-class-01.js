var number = 876;

document.getElementById("inputnum").onchange = function(event) {
  number = event.target.value;
  console.log('i have been clicked', number);

  var number1 = Math.floor(number/100);
  var number2 = (Math.floor(number/10))%10;
  var number3 = number % 10;

  console.log(number,number1,number2,number3);

  document.getElementById('num').innerHTML = number;
  document.getElementById('ans1').innerHTML = number1;
  document.getElementById('ans2').innerHTML = number2;
  document.getElementById('ans3').innerHTML = number3;

  var number4 = number1+number2+number3;
  document.getElementById('ans4').innerHTML = number4;
}