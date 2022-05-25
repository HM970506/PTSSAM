const Nextbutton=document.getElementsByClassName("nameset_button")[0];
let middle=document.getElementsByClassName("nameset_middle")[0];
let nickname;

Nextbutton.addEventListener("click", Start);

function Start(){
    nickname=document.getElementById("name").value;
    middle.className="output_start_middleclose";
    location.href="./output.html";
}