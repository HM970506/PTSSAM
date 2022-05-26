const Input= document.getElementById("search");
const Nextbutton=document.getElementsByClassName("next_button")[0];
const Areabutton=document.getElementById("area_add");
const Tags=document.getElementsByClassName("searching_list")[0];
const href_next="./game_start.html";
let firsttext=document.getElementById("firsttext");
let area_set=new Set;

Nextbutton.addEventListener("click", Next);
Areabutton.addEventListener("click", Area_add);

function fillInAddress() {
        let place = autoComplete.getPlace();
       conesole.log(place.geometry.location.lat());
       conesole.log(place.geometry.location.lng());
        
        map.setCenter(place.geometry.location);
        searchMarker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });
    }

function Next(){
    localStorage.setItem("area", Array.from(area_set));
    location.href=href_next;
}

function Area_add(){
    console.log("click");
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

let autoComplete = new google.maps.places.Autocomplete(input, {
    types: ['geocode']
    });
 autoComplete.addListener('place_changed', fillInAddress);
