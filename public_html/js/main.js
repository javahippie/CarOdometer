document.body.onload = function () {

    Net.init();

    document.querySelector('#create-car-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        var vin = form.elements.vin.value;
        Net.contract.createCar(vin, function (error, result) {
            alert(result);
        });
    });

    document.querySelector('#update-car-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        var vin = form.elements.vin.value;
        var km = form.elements.km.value;
        Net.contract.updateKilometers(vin, km, function (error, result) {
            alert(result);
        });
    });

    document.querySelector('#transfer-car-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        var vin = form.elements.vin.value;
        
        var owner = form.elements.owner.value;
        var km = form.elements.km.value;
        Net.contract.transferOwnership(vin, owner, km, function (error, result) {
            alert(result);
        });
    });

    document.querySelector('#fetch-car-form').addEventListener('submit', function (event) {
        event.preventDefault();
        var form = event.target;
        var vin = form.elements.vin.value;

        Net.contract.getCar(vin, UI.updateCarDetail);


    });
};