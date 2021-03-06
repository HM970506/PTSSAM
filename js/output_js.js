const Title=document.getElementsByClassName("output_title")[0];
const Subboxs=document.getElementsByClassName("output_subboxs")[0];
const Setarea=document.getElementsByClassName("output_down_areasetting")[0];
const href_area="./area.html";
const href_setting="./keyword_setting.html";
const Setkeyword=document.getElementsByClassName("output_down_keywordsetting")[0];
const Image_root="./css/images/PT강사/";
const Main=document.getElementById("output_main");
const Movie_root="./css/images/강사 설명/";
const Nickname=document.getElementsByClassName("output_up_name")[0];

Setarea.addEventListener("click", function(e){location.href=href_area});
Setkeyword.addEventListener("click", function(e){location.href=href_setting});


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

class Review{
    constructor(reviewer, score, date,text){
        this.reviewer=reviewer;
        this.score=score;
        this.date=date;
        this.text=text;
    }
}

class Information{
    constructor(tel, cost){
        this.tel=tel;
        this.cost=cost;
    }
}

class Data{
    constructor(name, score, count, address, image, subtext, tags, favorite, trainer, review, information){ 
        this.name=name;
        this.score=score;
        this.count=count;
        this.address=address;
        this.image=image;
        this.subtext=subtext;
        this.tags=tags;
        this.trainer=trainer;
        this.favorite=favorite;
        this.review=review;
        this.information=information;
    }
}

let Mytags=[];
let Datas=[];


const href_output="./output.html";
Init();   
Loading();
   
Subboxs_make();

function Loading(){
    
    let Data_map=JSON.parse(JSON.stringify(json_data));
    let Data_sorting=[];
    for(let y=0; y<Data_map.length; y++){
        let now=Data_map[y];
        let trainer=new Trainer(now.trainer.birth, now.trainer.belong, now.trainer.movie, now.trainer.qualification, now.trainer.career, now.trainer.gender, now.trainer.short_career);
        let review=new Review(now.review.reviewer, now.review.score, now.review.date, now.review.text);
        let information=new Information(now.information.tel, now.information.cost);
        let data=new Data(now.name, now.score, now.count, now.address, now.image, now.subtext, now.tags, now.favorite, trainer, review, information);
        Data_sorting.push([Cnt(data.tags), data]);
   
    }
   
    Data_sorting.sort(function(a, b){ if(a[0]>b[0]) return -1;else return 1});

    for(let y=0; y<Data_sorting.length; y++){
        Datas.push(Data_sorting[y][1]);
    }
}

function Cnt(tags){
    let Mytag_set=new Set(Mytags);
    let cnt=(tags.filter(x=> Mytag_set.has(x))).length;
    return cnt;
}

function Init(){
    for(let y=1; y<5; y++){
        Mytags.push(localStorage.getItem(y));
    }

    Mytags=Mytags.concat(localStorage.getItem(5).split(","));
    Mytags=Mytags.concat(localStorage.getItem("area").split(","));
    
    Nickname.innerText=localStorage.getItem("이름");
}

function newDiv(){
    return document.createElement("div");
}

function Subbox_select(data){
    let modal=Modal(data);
    Main.appendChild(modal);
}

function Subboxs_make(){
    for(let y=0; y<Datas.length; y++){
        let subbox=newDiv();
        subbox.className="output_subbox";
        subbox.appendChild(Subbox_make(Datas[y]));
        subbox.addEventListener("click", function(e){Subbox_select(Datas[y]);});
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

    if(data.favorite){
        subbox_up_logo.innerText="★";
        subbox_up_logo.classList.add("favorite");
    }
    else subbox_up_logo.innerText="☆";
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
    text_star_logo.innerText="★";
    text_star_logo.classList.add("favorite");
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
    subtext.innerHTML=data.subtext;



    let tags=newDiv();
    tags.className="tags";

    for(let y=0; y<data.tags.length; y++){
        let tag=newDiv();
        tag.className="tag";
        if(new Set(Mytags).has(data.tags[y])) tag.classList.add("select_tag");

        tag.innerText=data.tags[y];
        tags.appendChild(tag);
    }

    text.appendChild(text_up);
    text.appendChild(subtext);
    text.appendChild(tags);
    return text;
}

function Trainer_in(data){
    let main=newDiv();
    main.className="trainer_in";
    let menu_text=Trainer_in_menu_text(data);

    main.appendChild(menu_text);

    return main;
}


function Trainer_in_menu_text_movie(data){
        
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

function Trainer_in_menu_text_qualification(data){
    let qualification=newDiv();
    qualification.className="trainer_others_qualification";
    let qualification_title=newDiv();
    qualification_title.className="trainer_title";
    qualification_title.id="trainer_others_qualification_title";
    qualification_title.innerText="자격";
    let qualification_subtext=newDiv();
    qualification_subtext.className="trainer_subtext";
    qualification_subtext.id="trainer_others_qualification_subtext";
    qualification_subtext.innerHTML=data.trainer.qualification;

    qualification.appendChild(qualification_title);
    qualification.appendChild(qualification_subtext);

    return qualification;
}

function Trainer_in_menu_text_career(data){
    
    let career=newDiv();
    career.className="trainer_others_career";
    let career_title=newDiv();
    career_title.id="trainer_other_career_title";
    career_title.className="trainer_title";
    career_title.innerText="경력";
    let career_subtext=newDiv();
    career_subtext.className="trainer_subtext";
    career_subtext.id="trainer_other_career_subtext";
    career_subtext.innerHTML=data.trainer.career;

    career.appendChild(career_title);
    career.appendChild(career_subtext);

    return career;
}

function Trainer_in_menu_text(data){
    let main=newDiv();
    main.className="trainer_in_menu_text";

    let review=Trainer_in_review(data);
    let movie=Trainer_in_menu_text_movie(data);

    let others=newDiv();
    others.className="trainer_others";
    let qualification=Trainer_in_menu_text_qualification(data);
    let career=Trainer_in_menu_text_career(data);

    others.appendChild(qualification);
    others.appendChild(career);

    let infor=Trainer_in_infor(data);

    main.appendChild(review);
    main.appendChild(infor);
    main.appendChild(movie);
    main.appendChild(others);


    return main;
}

function Trainer_in_infor(data){
    let main=newDiv();
    main.className="trainer_profile_text";

    let title=newDiv();
    title.className="trainer_title";
    title.innerText="정보";

    let tel=newDiv();
    tel.className="trainer_profile_text";
    tel.innerText="연락처: "+data.information.tel;

    let cost=newDiv();
    cost.className="trainer_profile_text";
    cost.innerText="가격: "+data.information.cost;

    main.appendChild(title);
    main.appendChild(tel);
    main.appendChild(cost);

    return main;
}

function Trainer_in_review(data){
    let title=newDiv();
    title.className="trainer_title";
    title.innerText="리뷰";

    let main=newDiv();
    main.className="trainer_profile_text";

    let upbar=newDiv();
    let upbar_left=newDiv();
    upbar.className="review_upbar";
    let upbar_right=newDiv();
    let name=document.createElement("span");
    name.innerText=data.review.reviewer;
    let star=document.createElement("span");
    star.innerText="★";
    star.className="favorite";
    let score=document.createElement("span");
    score.innerText=data.review.score;
    let date=document.createElement("span");
    date.innerText=data.review.date;

    upbar_left.appendChild(name);
    upbar_left.appendChild(star);
    upbar_left.appendChild(score);
    upbar_left.appendChild(date);
    upbar_right.innerText="신고/차단";

    upbar.appendChild(upbar_left);
    upbar.appendChild(upbar_right);


    let text=newDiv();
    text.className="trainer_profile_text";
    text.innerText=data.review.text;

    main.append(title);
    main.append(upbar);
    main.append(text);

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

    console.log(data);
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
    tags.className="tags";

    for(let y=0; y<data.tags.length; y++){
        let tag=newDiv();
        tag.className="tag";
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