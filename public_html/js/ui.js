var UI = {};

UI.updateCarDetail = function (error, car) {
    document.querySelector('#car-result-vin').value = car[0];
    document.querySelector('#car-result-kilometers').value = car[1];
};

UI.navigate = function (panelId) {
    document.querySelectorAll('form.panel').forEach(function (panel) {
        panel.className = 'panel hidden';
    });
    document.querySelector('#' + panelId).className = 'panel';

};
