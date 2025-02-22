
function formDataSend(){
    let id = document.getElementById("id").value;
let userName = document.getElementById("name").value;
let email = document.getElementById("email").value;
let gender = document.querySelector("input[name='gender']:checked");
let hobby = document.querySelectorAll("input[name='hobby']:checked");
let subject = document.getElementById("subject").value;


let hobbyArray= []

for(let i=0; i<hobby.length; i++){
    hobbyArray.push(hobby[i].value);


}
let output = "Id: "+ id+"\n"+ "Name: "+ userName+ "\n"+ "Email: "
+ email+ "\n"+ "Gender: "+gender.value+"\n"+ "Hobby: "+ hobbyArray+"\n"+ "Subject: "+subject;


let newWindow =window.open("","_blank");
newWindow.document.write("<pre>"+ output+ "</pre>");
}
