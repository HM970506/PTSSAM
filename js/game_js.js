
class Game1{
    constructor(){
    this.game1=document.getElementById("game1");
    this.day=document.getElementById("game1_text1");
    this.night=document.getElementById("game1_text2");
    this.background=document.getElementsByClassName("game1_ani_background")[0];
    this.object=document.getElementsByClassName("game1_ani_object")[0];

    localStorage.setItem(1, "오전")
    }
}

class Game2{
    constructor(){
        this.after=document.getElementById("game2_text_after");
        this.before=document.getElementById("game2_text_before");
        this.text=document.getElementsByClassName("game2_text")[0];
        this.object_body=document.getElementsByClassName("game2_ani_object")[1];
        this.object_leg1=document.getElementsByClassName("game2_ani_object")[2];
        this.object_leg2=document.getElementsByClassName("game2_ani_object")[3];

        localStorage.setItem(2, "초급자");
    }
}

class Game3{
    constructor(){
        this.options=document.getElementsByClassName("game3_option");
        localStorage.setItem(3, "다이어트");
    }
}
class Game4{
    constructor(){
        this.switch=document.getElementById("switch");
        this.text=document.getElementsByClassName("game4_text")[0];
        localStorage.setItem(4,"여성");
    }
}
class Game5{
    constructor(){
        this.selects=new Set;
        this.options=document.getElementsByClassName("game5_option");
        localStorage.setItem(5, "");
    }
}

function Game1_rotate(target, Game_1){ //default는 오전 클릭
    let clicking=Game_1.day;
    let clicked=Game_1.night;
    let clicked_background="to-night-background";
    let clicking_background="to-day-background";
    let clicked_object="to-night";
    let clicking_object="to-day";

    if(target.id=="game1_text2"){
        clicking=Game_1.night;
        clicked=Game_1.day;
        clicked_background="to-day-background";
        clicking_background="to-night-background";
        clicked_object="to-day";
        clicking_object="to-night";
    }


    if(!clicking.classList.contains("game1_text_select")){
        
        !clicking.classList.add("game1_text_select");
        clicked.classList.remove("game1_text_select");

        
        if(Game_1.background.classList.contains(clicked_background))
        Game_1.background.classList.remove(clicked_background);
        Game_1.background.classList.add(clicking_background);

        if(Game_1.object.classList.contains(clicked_object))
        Game_1.object.classList.remove(clicked_object);
        Game_1.object.classList.add(clicking_object);
    }

    if(clicking_object.split("-")[1]=="night") localStorage.setItem(1, "오후");
    else localStorage.setItem(1, "오전");

}

const Level=["초급자", "중급자", "숙련자"];
const Purpose=["다이어트", "건강관리", "근력강화"]
const Important=new Map([[ "kindness","친절함"], ["punctuality","시간엄수"],["communication","소통"],
                        ["management","식단관리"], ["strength","고강도"], ["responsibility","책임감"],
                        [ "feedback","의견반영"]]);
const Stage=document.getElementsByClassName("game_stage")[0];
const Question=document.getElementsByClassName("game_question")[0];
const Questions=["","나에게 맞는 운동 시간대는?","나의 운동 숙련도는?", "나의 운동 목적은?", "선호하는 강사 성별은?", "가장 중요시하는 3가지는?"]

const href_area="./area.html";
const href_start="./game_start.html";

function Game2_next(target, Game_2){
    let now=target.id;
    now=now.split("_")[2];
    let next=Game_2.text.id;
    next=parseInt(next.split("_")[1]);
    
    if(now=="after"){
        next=(next+1)%Level.length;
    }
    else{
        next=(next-1);
        if(next<0) next+=Level.length;
    }

    Game_2.text.innerText=Level[next];
    Game_2.text.id="level_"+next;
    Game_2.object_body.id="body_"+next;
    Game_2.object_leg1.id="leg1_"+next;
    Game_2.object_leg2.id="leg2_"+next;

    localStorage.setItem(2, Level[next]);
}



class Next{
    constructor(){
        this.button=document.getElementsByClassName("next_button")[0];
    }
}

class Before{
    constructor(){
        this.button=document.getElementsByClassName("game_upbar_side back_button")[0];
    }
}

function Stage_move(target, Nextbutton, Beforebutton){
    let click_button=target.id.split("_")[0];
    let now_stage=parseInt(target.id.substr(-1));
    if(click_button=="next"){
        if(now_stage!=5){
            Invisible(now_stage, "left");
            Visible(now_stage+1, "left");
            Nextbutton.button.id="next_stage"+(now_stage+1);
            Beforebutton.button.id="before_stage"+(now_stage+1);
            Stage.innerText=String(now_stage+1)+"/5";
            Question.innerText=Questions[now_stage+1];
        }
        else location.href=href_area;
    }
    else{
        if(now_stage!=1){
            Invisible(now_stage, "right");
            Visible(now_stage-1, "right");
            Nextbutton.button.id="next_stage"+(now_stage-1);
            Beforebutton.button.id="before_stage"+(now_stage-1);
            Stage.innerText=String(now_stage-1)+"/5";
            Question.innerText=Questions[now_stage-1];
        }
        else location.href=href_start;
    }

}

function Invisible(now_stage, direction){
    let before=document.getElementById("game"+now_stage);
    before.className="";
    before.classList.add(direction+"-invisible");
}

function Visible(now_stage, direction){
    let before=document.getElementById("game"+now_stage);
    before.className="";
    before.classList.add(direction+"-visible");
}

function Game3_select(index, Game_3){
    for(let y=0; y<Game_3.options.length; y++){
        if(y!=index && Game_3.options[y].classList.contains("select_option")){
            Game_3.options[y].classList.remove("select_option");
            Game_3.options[index].classList.add("select_option");
            localStorage.setItem(3, Purpose[index]);
            break;
        }
    }
}

function Game4_switch(Game_4){
    if(Game_4.switch.checked){
        Game_4.text.innerText="남성";
        Game_4.text.id="male";
        localStorage.setItem(4, "남성");
    }
    else{
        Game_4.text.innerText="여성";
        Game_4.text.id="female";
        localStorage.setItem(4, "여성");
    }
}

function Game5_select(target, Game_5){
    if(target.classList.contains("select_options")){
        target.classList.remove("select_options");
        Game_5.selects.delete(target.id);
    }
    else{
        target.classList.add("select_options");
        Game_5.selects.add(target.id);
    }

    let save=[];
    let select_array=Array.from(Game_5.selects);

    for(let y=0; y<select_array.length; y++){
        save.push(Important.get(select_array[y]));
    }
    localStorage.setItem(5, save);
}

const Nextbutton=new Next;
const Beforebutton=new Before;
Nextbutton.button.addEventListener("click", function(e){Stage_move(e.target, Nextbutton, Beforebutton);});
Beforebutton.button.addEventListener("click", function(e){Stage_move(e.target, Nextbutton, Beforebutton);});

const Game_1=new Game1;
Game_1.day.addEventListener("click", function(e){Game1_rotate(e.target, Game_1);});
Game_1.night.addEventListener("click", function(e){Game1_rotate(e.target, Game_1);});
const Game_2=new Game2;
Game_2.after.addEventListener("click", function(e){Game2_next(e.target, Game_2);});
Game_2.before.addEventListener("click", function(e){Game2_next(e.target, Game_2);});
const Game_3=new Game3;

for(let y=0; y<Game_3.options.length; y++){
    Game_3.options[y].addEventListener("click", function(e){Game3_select(y, Game_3);});
}

const Game_4=new Game4;
Game_4.switch.addEventListener("click", function(e){Game4_switch(Game_4);});

const Game_5=new Game5;
for(let y=0; y<Game_5.options.length; y++){
    Game_5.options[y].addEventListener("click", function(e){Game5_select(e.target, Game_5);});
}