var oForm, number;
oForm = document.forms['myform'];

//<!-- Multipal loops -->
var i=1, s;
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5
// function printn(){
//     number = oForm.elements['number'].value;
//     for(i=1; i<=number; i++){
//       for(j=1; j<=number;j++){
//         document.write(i+" ");
//       }
//       document.write("<br>");
//     }
// };

// 2 3 4 5 6
// 3 4 5 6 7
// 4 5 6 7 8
// 5 6 7 8 9
// 6 7 8 9 10
// function printn(){
//     number = oForm.elements['number'].value;
//     for(i = 1; i <= number; i++){
//       for(j = 1; j <= number; j++){
//         s = i+j;
//         document.write(s + " ");
//       }
//       document.write("<br>");
//     }
// };

// 2  3  4  5  6
// 7  8  9  10 11
// 12 13 14 15 16
// 17 18 19 20 21
// 22 22 23 24 25
// function printn(){
//     number = oForm.elements['number'].value;
//     for(i = 1; i <= number; i++){
//       for(j = number*(i-1)+1; j <= number*(i-1)+number; j++){
//         s = i+j;
//         document.write(s+" ");
//       }
//       document.write("<br>");
//     }
// };

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6 ,,,
// function printn(){
//     number = oForm.elements['number'].value;
//     document.write("number=" + number +"<br>");
//     for(i = 1; i <= number; i++){
//       for(j = 1; j < i+1; j++){
//         document.write(j);
//         document.write("&nbsp");
//       }
//       document.write("<br>");
//     }
// };

//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5
function printn(){
    number = oForm.elements['number'].value;
    document.write("number=" + number +"<br>");
    for(i = 1; i <= number; i++){
      for(j = 1; j <= number-i; j++){
        document.write("&nbsp");
        document.write("&nbsp");
      };

      for(j = 1; j <= i; j++){
        document.write(j);
      };
      document.write("<br>");
    };
};
