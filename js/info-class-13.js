var oForm, number;
oForm = document.forms['myform'];

// <Automatically calculate the collums -->
function disply(){
  var fno = parseInt(document.getElementById('fnotext').value);
  console.log('fno:', fno);
  if(fno < 0){fno = 2};
     document.getElementById('fno').innerHTML= "Number of Collums: " + fno;

  var html = " ";

  for (var i=1; i<100; i++){
    if(i%fno == 1){
      html = html + "<tr>";
    }
    html = html + "<td>" + i + "</td>";
    if (i%fno == 0){
      html = html + "</tr>";
    }
  }
  document.getElementById("table").innerHTML=(html);
}
