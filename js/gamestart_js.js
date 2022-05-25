let nextbutton=document.getElementById("game_start_button");
const href_game="./game.html";
nextbutton.addEventListener("click", Game_start);

function Game_start(){
    location.href=href_game;
}