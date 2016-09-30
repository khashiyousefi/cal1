function expandtable() {
  $("tr:last").after('<tr>' +
                      '<td><div class="info"> Activity '+RowNUM+' </div></td>' +
                      '<td><div class="info"> A'+RowNUM+'</div> </td>' +
                      '<td><div class="info"><input id = "A'+RowNUM+'weight"class="field" type = "number" name = "A'+RowNUM+'weight" value = " "> </div></td>' +
                      '<td> <input id="A'+RowNUM+'grade" class="field" type = "number" name = "A'+RowNUM+'grade" value = " " oninput="myFunction2()"> / <input id = "A'+RowNUM+'grade2" class="field" type = "number" name = "A'+RowNUM+'grade" value = " " oninput="myFunction()"> </td>' +

                    '<td><div class="info"><p id="demo'+RowNUM+'"></p></div></td>'+
                    '<td><div class="info"><p id="letter'+RowNUM+'"></p></div></td>'+

                      '</tr>');
  RowNUM++;
}

function lettergrade(answer){
    var grade;
    if ((answer*100) >= 95){
        grade = "A+";
    }
    else if ((answer*100) >= 90 && (answer*100) <= 94){
        grade = "A";
    }
    else if ((answer*100) >= 85 && (answer*100) <= 89){
        grade= "A-";
    }
    else if ((answer*100) >= 80 && (answer*100) <= 84){
        grade = "B+";
    }
    else if ((answer*100) >= 75 && (answer*100) <= 79){
        grade = "B";
    }
    else if ((answer*100) >= 70 && (answer*100) <= 74){
        grade= "B-";
    }
     else if ((answer*100) >= 65 && (answer*100) <= 69){
        grade= "C+";
    }
    else if ((answer*100) >= 60 && (answer*100) <= 64){
        grade = "C";
    }
    else if ((answer*100) >= 55 && (answer*100) <= 59){
        grade= "C-";
    }
    else if ((answer*100) >= 50 && (answer*100) <= 54){
        grade= "D";
    }
    else if ((answer*100) < 49){
         grade= "F";
    }
return grade;

}
var RowNUM = 5;
function myFunction(){
    for (i = 1; i < RowNUM; i++){
        var x = document.getElementById("A"+i+"grade").value;
        var y = document.getElementById("A"+i+"grade2").value;
        var ans = x/y;
        if (isNaN(ans)){
        ans = ""    }
        else if (isEmpty(document.getElementById("A"+i+"grade").value)==0 || isEmpty(document.getElementById("A"+i+"grade2").value)==0){
            document.getElementById("letter"+i).innerHTML = "";
            document.getElementById("demo"+i).innerHTML = "";
        }
        else{
            document.getElementById("demo"+i).innerHTML = ((ans*100).toFixed(2))+ "%";
            document.getElementById("letter"+i).innerHTML = lettergrade(ans);}
    }
	return ans;}


function Mean() {
    var ans = 0;
    var den =0;
    var tagh;
    for (i=1; i<RowNUM; i++){
        if (isEmpty(document.getElementById("A"+i+"grade").value)==0 || isEmpty(document.getElementById("A"+i+"grade2").value)==0){
            tagh = 0;
        }
        else{
            var x = document.getElementById("A"+i+"grade").value;
            var y = document.getElementById("A"+i+"grade2").value;
            tagh = x/y
            den = den +1;
        }
        ans = ans + tagh;
    }
    document.getElementById("demo").innerHTML =  (((ans/den)*100).toFixed(2)) + "/100";
}

function Weighted(){
    var ans = 0;
    var den =0;
    var tagh;
     for (i=1; i<RowNUM; i++){
        if (isEmpty(document.getElementById("A"+i+"grade").value)==0 || isEmpty(document.getElementById("A"+i+"grade2").value)==0){
            tagh = 0;
        }
        else{
            var x = document.getElementById("A"+i+"grade").value;
            var y = document.getElementById("A"+i+"grade2").value;
            var z = parseInt(document.getElementById("A"+i+"weight").value);
            tagh = (x/y)*z
            den = den +z;
        }
        ans = ans + tagh;
    }
    document.getElementById("demo").innerHTML = (((ans/den)*100).toFixed(2)) + "/100";


}


function isEmpty(str) {
    if (!str || 0 === str.length){
    	return 0;
    }
    else{
    	return 1;
    }
}


$( "#red2" ).click(function() {
    $( "#hide_box" ).toggle( "slow", function() {

  });

});
