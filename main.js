var name_of_students = [];
function submit(){
       
        var name =document.getElementById("name_of_the_student_1").value;
     name_of_students.push(name);
     document.getElementById("display_name_with_commas").innerHTML=name_of_students;
     return submit_button=0
    
    // console.log(name_of_students);
    
}
function sorting(){
    var h4_student_name_1=[];
    var sorted_array =name_of_students.sort();
    var array_length1 =sorted_array.length;
    for (let index = 0; index < array_length1; index++) {
        h4_student_name_1.push("<h4>NAME- "+sorted_array[index]+"</h4>");
    }
    var remove_comma_1 =h4_student_name_1.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma_1;
}
function showlist(){
    var br_student_name =[];
    var array_length =name_of_students.length;
    for (let index = 0; index < array_length; index++) {
        br_student_name.push("<h4>NAME- "+name_of_students[index]+"</h4>");
    }
    
    var remove_comma =br_student_name.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline";
}