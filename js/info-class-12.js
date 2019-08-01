var oForm, number;
oForm = document.forms['myform'];

//<!-- Multipal loops -->
var i=1, s;

function table(){
  var html="";
  for (var i=1; i<=25; i++){
    if(i%5 ==1){
      html = html + "<tr>";
    }
    html = html + "<td>" + i + "</td>";
    if (i%5 ==0){
      html = html + "</tr>";
    }
  }
document.getElementById("mytable").innerHTML=(html);
}
