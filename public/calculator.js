var RowNumber = 5;
function percentage(){
  for (i = 1; i < RowNumber; i++){
    var x = document.getElementById('input'+i+'.1grade').value;
    var y = document.getElementById('input'+i+'.2grade').value;
    var solution = Math.round((x/y) * 100);
    if (isNaN(solution)){
      solution = "";
      continue;
    }
    else if (isFinite (solution)==false) {
      solution = "";
      continue;
    }
    else if (solution < 0){
      solution = "";
      continue;
    }
    else {
      document.getElementById("percent"+i).innerHTML = solution + "%";
    }


}
}




// function percentage (){
//   var x = document.getElementById('input1.1grade').value;
//   var y = document.getElementById('input1.2grade').value;
//   var solution = (x/y) * 100;
//
//   if (isNaN(solution) || (isFinite (solution)==false) || solution < 0){
//     solution = "";
//   }
//
//
//   solution = Math.round (solution);
//   document.getElementById("percent1").innerHTML = solution + "%";
//   return solution;
//
// }
//
// function percentage2(){
//   var x = document.getElementById('input2.1grade').value;
//   var y = document.getElementById('input2.2grade').value;
//   var solution = (x/y) * 100;
//
//   if (isNaN(solution) || (isFinite (solution)==false) || solution < 0){
//     solution = "";
//   }
//
//
//   solution = Math.round (solution);
//
//   document.getElementById("percent2").innerHTML = solution + "%";
//   return solution;
// }
//
// function percentage3(){
//   var x = document.getElementById('input3.1grade').value;
//   var y = document.getElementById('input3.2grade').value;
//   var solution = (x/y) * 100;
//
//
//
//   if (isNaN(solution) || (isFinite (solution)==false) || solution < 0){
//     solution = "";
//   }
//
//   solution = Math.round (solution);
//
//   document.getElementById("percent3").innerHTML = solution + "%";
//   return solution;
// }
//
// function percentage4(){
//   var x = document.getElementById('input4.1grade').value;
//   var y = document.getElementById('input4.2grade').value;
//   var solution = (x/y) * 100;
//
//   if (isNaN(solution) || (isFinite (solution)==false) || solution < 0){
//     solution = "";
//   }
//
//   solution = Math.round (solution);
//
//   document.getElementById("percent4").innerHTML = solution + "%";
//   return solution;
// }

function mean(){
  var count = 0;
  var total = 0;
  for(i=1; i < RowNumber; i++){
   var x = document.getElementById("input"+i+".1grade").value;
   var y = document.getElementById("input"+i+".2grade").value;
   var solution = x/y;
   if( isFinite(solution) == false || solution < 0 || isNaN(solution)) {
     document.getElementById("percent"+i).innerHTML = "";
     continue;
   }
   var total = total + solution;
   count ++;
 }
 total = total / count;
 total = total*100;
 total = Math.round(total);
 document.getElementById("total_").innerHTML = "Total MEAN is: "+total+"%";
}

function weight(){
  var total = 0;
  var weightTotal = 0;
  for(i=1; i < RowNumber; i++){
    var x = document.getElementById("input"+i+".1grade").value;
    var y = document.getElementById("input"+i+".2grade").value;
    var z = document.getElementById("input"+i+"weight").value;

    var weight = (x/y)*z
    var weightTotal = weightTotal + parseFloat(z);
    var total = total + weight;

    if(isNaN(weight) || isFinite(weight) == false || weight < 0) {
      continue;

  }
  var final = total / weightTotal;
  final = final * 100;
  document.getElementById("weight_").innerHTML = "Total WEIGHT is: " + final + "/100";
  if (isNaN(final)){
  document.getElementById("weight_").innerHTML = "Need Weight Input";
  }
  }
}

function remove(){
  if ( RowNumber == 1) {
    alert("MUST HAVE 1 ASSIGNENT");
    return;
  }
  var table = document.getElementById("mytable");
  table.deleteRow(RowNumber-1);
  RowNumber--;
}

function newRow(){
  $("tr:last").after('<tr><td>Activity '+RowNumber+'</td><td>A'+RowNumber+'</td><td> <input id="input'+RowNumber+'weight" type="number"> </td><td> <input id="input'+RowNumber+'.1grade" type="number" oninput="percentage()" > / <input id="input'+RowNumber+'.2grade" type="number" oninput="percentage()" > </td><td> <p id="percent'+RowNumber+'"> </p> </td></tr>');
  RowNumber++;
}
