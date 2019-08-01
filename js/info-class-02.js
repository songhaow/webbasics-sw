var total;

document.getElementById("amount").onchange = function(event) {
   var quantity = event.target.value;
   console.log('I am console');
   
   if (quantity <= 10){
     total = quantity*100;
     document.getElementById("total").innerHTML=(total+" NTD");
     }
   else if(quantity <= 50){
     total = quantity*95;
     document.getElementById("total").innerHTML=(total+" NTD");
     }
   else if(quantity <= 100){
     total = quantity*90;
     document.getElementById("total").innerHTML=(total+" NTD");
     }
   else if(quantity <= 1000){
       total = quantity*85;
       document.getElementById("total").innerHTML=(total+" NTD");
       }
   else {
     total = quantity*80;
     document.getElementById("total").innerHTML=(total+" NTD");
     }
}
