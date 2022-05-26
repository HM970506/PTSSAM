const Nextbutton=document.getElementById("game_start_button");
const Downbutton=document.getElementsByClassName("down_button")[0];
const href_game="./game.html";
const href_skip="./game_end.html";
Nextbutton.addEventListener("click", Game_start);
Downbutton.addEventListener("click", Game_skip);

function Game_start(){
    location.href=href_game;
}

function Game_skip(){
    location.href=href_skip;
}