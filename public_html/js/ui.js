var UI = {};

UI.updateCarDetail = function (error, car) {
    document.querySelector('#car-result-vin').innerHTML = car[0];
    document.querySelector('#car-result-kilometers').innerHTML = car[1];
};
