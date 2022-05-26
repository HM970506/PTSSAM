const Title=document.getElementsByClassName("output_title")[0];
const Subboxs=document.getElementsByClassName("output_subboxs")[0];
const Image_root="./css/images/PT강사/";
const Menu_id=["menu_intro", "menu_review", "menu_tel"];
const Menu_text=["강사 소개", "리뷰", "연락처"];
const Main=document.getElementById("output_main");
const Movie_root="./css/images/강사 설명/";


class Trainer{
    constructor(birth, belong, movie, qualification, career, gender, short_career){
        this.birth=birth;
        this.belong=belong;
        this.movie=movie;
        this.qualification=qualification;
        this.career=career;
        this.gender=gender;
        this.short_career=short_career;
    }
}

class Data{
    constructor(name, score, count, address, image, subtext, tags, trainer){ 
        this.name=name;
        this.score=score;
        this.count=count;
        this.address=address;
        this.image=image;
        this.subtext=subtext;
        this.tags=tags;
        this.trainer=trainer;
    }
}

const Datas=[new Data("김빛남", 4.2, 10, "대전 유성구 궁동", "김빛남.png", "초보 전문! 친절하게 처음부터 알려드립니다. <br>저와 함께 합시다!", 
                ["오후","초급자","근력강화","남성","책임감"],
                new Trainer("1981.06.21 경력15년", "00 피트니스 센터", "소개 영상.png",
                "생활 스포츠 지도사 2급(보디빌딩) <br>스포츠 마사지 1급 <br>스포츠 테이핑 1급  <br>CPR-응급처치 License <br>체형관리사 2급 <br>생활체육지도사 2급 <br>운동처방 2급 트레이너",
                "2007 - 2010 <br>XX 피트니스 PT 트레이너 <br><br>2010 - 2019<br> OO 피트니스 PT트레이너<br> OO 피트니스 PT팀장<br><br> 2019 - 현재 <br>TT 피트니스 PT 트레이너", "남성","경력 5년"))];
let Mytags=new Set;

const href_output="./output.html";
Loading();
Init();      
Subboxs_make();

function Loading(){
    //여기서 정렬 진행

}

function Init(){
    for(let y=1; y<=5; y++){
        Mytags.add(localStorage.getItem(y));
    }
}

function newDiv(){
    return document.createElement("div");
}

function Subbox_select(data){
    let modal=Modal(data);
    Main.appendChild(modal);
}

function Subboxs_make(){
    console.log(Datas[0]);
    for(let y=0; y<5; y++){
        let subbox=newDiv();
        subbox.className="output_subbox";
        subbox.appendChild(Subbox_make(Datas[0]));
        subbox.addEventListener("click", function(e){Subbox_select(Datas[0]);});
        Subboxs.appendChild(subbox);
    }
}

function Subbox_make(data){
    let subbox_in=newDiv();
    subbox_in.className="output_subbox_in";
    let subbox_up=Subbox_up(data);
    let subbox_main=Subbox_main(data);
    subbox_in.appendChild(subbox_up);
    subbox_in.appendChild(subbox_main);
    return subbox_in;
}

function Modal(data){
    let trainer_main_out=newDiv();
    trainer_main_out.className="main";
    trainer_main_out.id=("main_trainer_out");
    let trainer_main_in=newDiv();
    trainer_main_in.className="main";
    trainer_main_in.id="main_trainer_in"

    let trainer_up=Trainer_up(data);
    let trainer_profile=Trainer_profile(data);
    let trainer_in=Trainer_in(data);
    let trainer_backbutton=newDiv();
    trainer_backbutton.className="trainer_backbutton";
    trainer_backbutton.innerText="X";
    trainer_backbutton.addEventListener("click", function(e){e.target.parentNode.parentNode.remove();});

    trainer_main_in.appendChild(trainer_up);
    trainer_main_in.appendChild(trainer_profile);
    trainer_main_in.appendChild(trainer_in);
    trainer_main_in.appendChild(trainer_backbutton);
    trainer_main_out.appendChild(trainer_main_in);

    return trainer_main_out;
}

function Subbox_up(data){

    let subbox_up=newDiv();
    subbox_up.className="output_subbox_up";
    let subbox_up_logo=newDiv();
    subbox_up_logo.className="output_subbox_up_logo";
    let subbox_up_address=newDiv();
    subbox_up_address.className="output_subbox_up_address";
    subbox_up_address.innerText=data.address;
    
    subbox_up.appendChild(subbox_up_logo);
    subbox_up.appendChild(subbox_up_address);
    return subbox_up;
}


function Subbox_main(data){
    let main=newDiv();
    main.className="output_subbox_main";

    let image=document.createElement("img");
    image.setAttribute("src", Image_root+data.image);
    image.className="output_subbox_main_image";

    let text=Subbox_main_text(data);


    main.appendChild(image);
    main.appendChild(text);

    return main;

}

function Subbox_main_text(data){
    
    let text=newDiv();
    text.id="output_subbox_main_text";
    text.className="output_subbox_main_text";
    let text_up=newDiv();
    text_up.classList.add("output_subbox_main_text");
    text_up.classList.add("nameandstar");
    let text_name=newDiv();
    text_name.classList.add("output_subbox_main_text");
    text_name.classList.add("nameandstar_name");
    text_name.innerText=data.name;

    let text_star=newDiv();
    text_star.classList.add("output_subbox_main_text");
    text_star.classList.add("nameandstar_star");
    let text_star_logo=newDiv();
    text_star_logo.classList.add("output_subbox_main_text");
    text_star_logo.classList.add("nameandstar_star_logo");
    let text_star_score=newDiv();
    text_star_score.classList.add("output_subbox_main_text");
    text_star_score.classList.add("nameandstar_star_score");
    text_star_score.innerText=data.score;
    let text_star_count=newDiv();
    text_star_count.classList.add("output_subbox_main_text");
    text_star_count.classList.add("nameandstar_star_count");
    text_star_count.innerText="("+data.count+")";

    text_star.appendChild(text_star_logo);
    text_star.appendChild(text_star_score);
    text_star.appendChild(text_star_count);
    text_up.appendChild(text_name);
    text_up.appendChild(text_star);

    let subtext=newDiv();
    subtext.classList.add("output_subbox_main_text");
    subtext.classList.add("subtext");
    subtext.innerText=data.subtext;

    let tags=newDiv();
    tags.className="tags";

    for(let y=0; y<data.tags.length; y++){
        let tag=newDiv();
        tag.className="tag";
        //해당되는 태그인지 아닌지 여부에 따라 class다르게 해야 함.차후 수정
        tag.innerText=data.tags[y];
        tags.appendChild(tag);
    }

    text.appendChild(text_up);
    text.appendChild(tags);
    return text;
}

function Trainer_in(data){
    let main=newDiv();
    main.className="trainer_in";
    let menus=Trainer_in_menu();
    let detail=Trainer_in_detail(data);

    main.appendChild(menus);
    main.appendChild(detail);

    return main;
}


function Trainer_in_menu(){
    let menus=newDiv();
    menus.className="trainer_in_menus";

    for(let y=0; y<Menu_id.length; y++){
        let menu=Menu();
        menu.id=Menu_id[y];
        menu.innerText=Menu_text[y];
        menus.appendChild(menu);
    }

    return menus;
}

function Menu(){
    let menu=newDiv();
    menu.className="trainer_in_menu";
    return menu;
}

function Trainer_in_detail_intro(data){
    let intro=newDiv();
    intro.className="trainer_intro";
    let intro_title=newDiv();
    intro_title.className="trainer_title";
    intro_title.id="trainer_intro_title";
    intro_title.innerText="프로필";
    let intro_subtext=newDiv();
    intro_subtext.className="trainer_subtext";
    intro_subtext.id="trainer_intro_subtext";
    intro_subtext.innerText=data.trainer.birth;

    intro.appendChild(intro_title);
    intro.appendChild(intro_subtext);

    return intro;
}

function Trainer_in_detail_belong(data){


    let belong=newDiv();
    belong.className="trainer_belong";
    let belong_title=newDiv();
    belong_title.className="trainer_title";
    belong_title.id="trainer_belong_title";
    belong_title.innerText="소속";
    let belong_subtext=newDiv();
    belong_subtext.className="trainer_subtext";
    belong_subtext.id="trainer_belong_subtext";
    belong_subtext.innerText=data.trainer.belong;

    belong.appendChild(belong_title);
    belong.appendChild(belong_subtext);


    return belong;
}


function Trainer_in_detail_movie(data){
        
    let movie=newDiv();
    movie.className="trainer_movie";
    let movie_title=newDiv();
    movie_title.className="trainer_title";
    movie_title.id="trainer_movie_title";
    movie_title.innerText="소개 영상";
    let movie_movie=document.createElement("img");
    movie_movie.className="trainer_movie_movie";
    movie_movie.setAttribute("src", Movie_root+data.trainer.movie);
    movie.appendChild(movie_title);
    movie.appendChild(movie_movie);

    return movie;
}

function Trainer_in_detail_qualification(data){
    let qualification=newDiv();
    qualification.className="trainer_others_qualification";
    let qualification_title=newDiv();
    qualification_title.className="trainer_title";
    qualification_title.id="trainer_others_qualification_title";
    qualification_title.innerText="자격";
    let qualification_subtext=newDiv();
    qualification_subtext.className="trainer_subtext";
    qualification_subtext.id="trainer_others_qualification_subtext";
    qualification_subtext.innerText=data.trainer.qualification;

    qualification.appendChild(qualification_title);
    qualification.appendChild(qualification_subtext);

    return qualification;
}

function Trainer_in_detail_career(data){
    
    let career=newDiv();
    career.className="trainer_others_career";
    let career_title=newDiv();
    career_title.id="trainer_other_career_title";
    career_title.className="trainer_title";
    career_title.innerText="경력";
    let career_subtext=newDiv();
    career_subtext.className="trainer_subtext";
    career_subtext.id="trainer_other_career_subtext";
    career_subtext.innerText=data.trainer.career;

    career.appendChild(career_title);
    career.appendChild(career_subtext);

    return career;
}

function Trainer_in_detail(data){
    let main=newDiv();
    main.className="trainer_in_detail";

    let intro=Trainer_in_detail_intro(data);
    let belong=Trainer_in_detail_belong(data);
    let movie=Trainer_in_detail_movie(data);

    let others=newDiv();
    others.className="trainer_others";
    let qualification=Trainer_in_detail_qualification(data);
    let career=Trainer_in_detail_career(data);

    others.appendChild(qualification);
    others.appendChild(career);


    main.appendChild(intro);
    main.appendChild(belong);
    main.appendChild(movie);
    main.appendChild(others);

    return main;
}

function Trainer_profile(data){
    let profile=newDiv();
    profile.className="trainer_profile";

    let img=document.createElement("img");
    img.className="trainer_profile_image";
    img.setAttribute("src", Image_root+data.image);

    profile.appendChild(img);

    let text=newDiv();
    text.className="trainer_profile_text";
    let text_up=newDiv();
    text_up.className="trainer_profile_text";
    text_up.classList.add("profile_text_up");
    let text_up_name=newDiv();
    text_up_name.className="trainer_profile_text";
    text_up_name.classList.add("up_name");
    text_up_name.innerText=data.name;
    let button=document.createElement("button");
    button.className="trainer_profile_text";
    button.classList.add("up_button");
    button.innerText="PT 문의";

    text_up.appendChild(text_up_name);
    text_up.appendChild(button);
    text.appendChild(text_up);

    let birth=newDiv();
    birth.className="trainer_profile_text";
    birth.classList.add("birth");
    birth.innerText=data.trainer.birth;
    let gender=newDiv();
    gender.className="trainer_profile_text";
    gender.classList.add("gender");
    gender.innerText=data.trainer.gender;
    let career=newDiv();
    career.className="trainer_profile_text";
    career.classList.add("career");
    career.innerText=data.trainer.short_career;

    text.appendChild(birth);
    text.appendChild(gender);
    text.appendChild(career);

    let tags=newDiv();
    tags.className="trainer_profile_text";
    tags.classList.add("tags");

    for(let y=0; y<data.tags; y++){
        let tag=newDiv();
        tag.className="trainer_profile_text_tag";
        tag.classList.add("tag");
        tag.innerText=data.tags[y];
        tags.appendChild(tag);
    }
    text.appendChild(tags);

    profile.appendChild(text);

    return profile;
}

function Trainer_up(data){
    let up=newDiv();
    up.className="trainer_up";
    let up_logo=newDiv();
    up_logo.className="trainer_up_logo";
    let up_address=newDiv();
    up_address.className="trainer_up_address";
    up_address.innerText=data.address;

    up.appendChild(up_logo);
    up.appendChild(up_address);

    return up;
}