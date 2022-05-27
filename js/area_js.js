const Input= document.getElementById("search");
const Nextbutton=document.getElementsByClassName("next_button")[0];
const Areabutton=document.getElementById("area_add");
const Tags=document.getElementsByClassName("searching_list")[0];
const href_output="./output.html";
let firsttext=document.getElementById("firsttext");
let area_set=new Set;

Nextbutton.addEventListener("click", Next);
Areabutton.addEventListener("click", Area_add);


function Next(){
    localStorage.setItem("area", Array.from(area_set));
    location.href=href_output;
}

function Area_add(){
    let text=Input.value;
    if(text!="" && !area_set.has(text)){
        if(firsttext!=undefined) firsttext.remove();
    let area=document.createElement("div");
    area.className="area";

    let area_text=document.createElement("span");
    area_text.innerText=text;
    let xbutton=document.createElement("span");
    xbutton.innerText='X';
    xbutton.className="xbutton";
    xbutton.addEventListener("click", function(e){Remove_self(e.target);});

    area.appendChild(area_text);
    area.appendChild(xbutton);

    area_set.add(text);
    
    Tags.appendChild(area);
    }
}

function Remove_self(target){
    target.parentNode.remove();
}

