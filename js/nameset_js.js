const Nextbutton=document.getElementsByClassName("nameset_button")[0];

const href_game="./game_start.html";

Nextbutton.addEventListener("click", Start);

function Start(){
    let nickname=document.getElementById("name").value;
    localStorage.setItem("이름", nickname);
    location.href=href_game;
}