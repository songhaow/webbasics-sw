// Electricity bill calculation
// <30 $10
// <=70 $13
// <=120 &15
// <=200 $20
// >= 200 $30

var oForm, hours, bill;
oForm = document.forms['myform'];

// Switch function:
function totalbill(){
  hours = oForm.elements['hours'].value;
  console.log('hours: ', hours);
  if (hours<=30){
    bill = hours * 10;
  }
  else if (hours<=70) {
    bill = 300 + 420 + (hours - 30) *13;
  }
  else if (hours<=120) {
    bill = 300 + 420 + 750 + (hours - 70) *15;
  }
  else if (hours<=200) {
    bill = 300 + 420 + 750 + 1600 + (hours - 120) *20;
  }
  else {
    bill = 300 + 420 + 750 +1600 + (hours - 200) *30;
  }
  bill = parseFloat(bill.toFixed(3));
  document.getElementById("total").innerHTML = ' ' + (bill) + ' NTD';
}
