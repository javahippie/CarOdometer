document.body.onload = function () {

    Net.setDefaultAccount();

    document.querySelector('#create-car-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        var vin = form.elements.vin.value;
        Net.contract.createCar(vin);
    });

    document.querySelector('#update-car-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        var vin = form.elements.vin.value;
        var km = form.elements.km.value;
        Net.contract.updateKilometers(vin, km);
    });

    document.querySelector('#fetch-car-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        var vin = form.elements.vin.value;
        var car = Net.contract.getCar(vin);

        document.querySelector('#car-result-vin').innerHTML = car[0];
        document.querySelector('#car-result-kilometers').innerHTML = car[1];
    });
};