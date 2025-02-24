function formDataSend(){

  


let userName = document.getElementById("name").value;
let contact = document.getElementById("contact").value;
let remarks = document.getElementById("remarks").value;
let gender = document.querySelector("input[name='gender']:checked");
let course = document.querySelectorAll("input[name='course']:checked");
let location = document.getElementById("location").value;


let courseArray = [];
for (let i = 0; i < course.length; i++){
  courseArray.push(course[i].value);
}


let output = userName+"\n"+contact+"\n"+remarks+"\n"+gender.value+"\n"+courseArray+"\n"+location;

let istiaq= window.open('','_blank');
istiaq.document.write("<pre>"+output+"</pre>");
}