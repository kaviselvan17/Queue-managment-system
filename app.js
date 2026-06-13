let count = parseInt(localStorage.getItem("tokenCount")) || 1;

function generateToken() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name === "" || phone === ""){

alert("Please fill all details");
return;

}

let token = "Q" + String(count).padStart(3,"0");

document.getElementById("token").innerText = token;

document.getElementById("message").innerText ="Successfully joined queue";

document.getElementById("ahead").innerText =count - 1;

document.getElementById("time").innerText =((count-1) * 5) + " mins";


let progress = (count * 10);

if(progress > 100){
progress = 100;
}

document.getElementById("bar").style.width =progress + "%";


count++;

localStorage.setItem("tokenCount",count);


document.getElementById("name").value="";
document.getElementById("phone").value="";


}
