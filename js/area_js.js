let input= document.getElementById("search");
let Nextbutton=document.getElementsByClassName("next_button")[0];
const href_next="./game_start.html";

let autoComplete = new google.maps.places.Autocomplete(input, {
    types: ['geocode']
    });
 autoComplete.addListener('place_changed', fillInAddress);

Nextbutton.addEventListener("click", Next);

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
    location.href=href_next;
}