let adminUser="admin";
let adminPass="1234";

let queue=JSON.parse(localStorage.getItem("queue"))||[];


document.getElementById("adminPanel").style.display="none";


function login(){

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;


if(user===adminUser &&pass===adminPass){

document.getElementById("loginPage").style.display="none";

document.getElementById("adminPanel").style.display="block";

displayQueue();

}
else{

alert(
"Wrong Username or Password"
);

}
}
function resetQueue(){

localStorage.clear();

alert("Queue Reset Successfully");

window.location.reload();

}