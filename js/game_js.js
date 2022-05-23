let game1=document.getElementById("game1");
let game1_day=document.getElementById("game1_text1");
let game1_night=document.getElementById("game1_text2");
let game1_background=document.getElementsByClassName("game1_ani_background")[0];
let game1_object=document.getElementsByClassName("game1_ani_object")[0];

game1.classList.
game1_day.addEventListener("click", toDay);
game1_night.addEventListener("click", toNight);

function toDay(){
    if(!game1_day.classList.contains("game1_text_select")){
        
        game1_day.classList.add("game1_text_select");
        game1_night.classList.remove("game1_text_select");

        
        if(game1_background.classList.contains("to-night-background"))
             game1_background.classList.remove("to-night-background");
        game1_background.classList.contains("to-day-background");

        if(game1_object.classList.contains("to-night"))
        game1_object.classList.remove("to-night");
        game1_object.classList.contains("to-day");
    }

}

