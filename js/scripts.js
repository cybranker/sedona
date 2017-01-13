function initMap() {
    var myLatLng = {lat: 34.868840, lng: -111.766270};

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 9,
        center: myLatLng,
        disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Sedona, Arizona'
    });
}

var hotelSearchBtn = document.querySelector('#hotel-search-btn'),
    popup = document.querySelector('.modal-content-hotel-search'),
    dateCheckInInput = popup.querySelector('#date-check-in');

hotelSearchBtn.addEventListener('click', function(e) {
    e.preventDefault();

    popup.classList.add('modal-content-show');
    dateCheckInInput.focus();
});