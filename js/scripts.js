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
    form = popup.querySelector('form'),
    dateCheckIn = form.querySelector('#date-check-in'),
    dateLeaving = form.querySelector('#date-leaving'),
    increaseBtn = form.querySelectorAll('.increase-btn'),
    reduceBtn = form.querySelectorAll('.reduce-btn');

var currentDate = new Date(); // Сегоднешняя дата

hotelSearchBtn.addEventListener('click', function(e) {
    e.preventDefault();

    popup.classList.remove('modal-error');
    popup.classList.toggle('modal-content-show');

    dateCheckIn.value = currentDate.getFullYear() + '-' + ( (currentDate.getMonth() + 1 < 10) ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() ) + '-' + currentDate.getDate();
    dateLeaving.focus();
});

form.addEventListener('submit', function(e) {
    if ( !dateCheckIn.value || !dateLeaving.value ) {
        e.preventDefault();

        popup.classList.remove('modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
        console.log('Нужно ввести дату заезда и дата выезда');
    }
});

// Закрытие модального окна по нажатию на Esc
window.addEventListener('keydown', function(e) {
    if ( e.keyCode === 27 && popup.classList.contains('modal-content-show') ) {
        popup.classList.remove('modal-content-show');
        popup.classList.remove('modal-error');
    }
});

Array.prototype.forEach.call(increaseBtn, function(increaseBtn) {
    increaseBtn.addEventListener('click', function(e) {
        var input = this.nextElementSibling;

        if ( input.value >= 0 ) input.value++;
    });
});

Array.prototype.forEach.call(reduceBtn, function(reduceBtn) {
    reduceBtn.addEventListener('click', function(e) {
        var input = this.previousElementSibling;

        if ( input.value > 0 ) input.value--;
    });
});