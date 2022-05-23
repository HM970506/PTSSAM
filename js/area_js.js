let input= document.getElementById("search");

let autoComplete = new google.maps.places.Autocomplete(input, {
    types: ['geocode']
    });
 autoComplete.addListener('place_changed', fillInAddress);

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