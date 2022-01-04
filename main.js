var StudentNames =[];
function submit(){
    var DisplayStudent =[];
    for (var j=1; j < 5; j++){
        var Names = document.getElementById("name_of_the_student_" + j).value;
        console.log(Names);
        StudentNames.push(Names);
        
    }

    console.log(StudentNames);
var length =StudentNames.length;
console.log(length);
for (var k=0; k < length; k++){
    DisplayStudent.push("<h4> name- " + StudentNames[k] +"</h4>");
    console.log(DisplayStudent);
}
document.getElementById("display_name_with_commas").innerHTML =DisplayStudent;
console.log(DisplayStudent);
var removecommas =DisplayStudent.join(" ");
document.getElementById("display_name_without_commas").innerHTML= removecommas;
console.log(removecommas);
document.getElementById("submit_button").style.display="none";

document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){

    StudentNames.sort();
    console.log(StudentNames);
var displaySort=[];
var length = StudentNames.length;
for (var k=0; k < length; k++){
    displaySort.push("<h4> name- " + StudentNames[k] +"</h4>");
    console.log(displaySort);

}
var removecommas =displaySort.join(" ");
document.getElementById("display_name_without_commas").innerHTML= removecommas;
console.log(removecommas);
}
function NewUpdate(){
    document.getElementById("display_name_without_commas").innerHTML= "<h1>" + StudentNames + "</h1>";
}