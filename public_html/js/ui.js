var UI = {};

UI.clearLog = function () {
    //TBD
};

UI.appendLogEntry = function (transactionHash) {
    var elem = document.createElement('div');
    elem.id = 'log-entry-' + transactionHash;
    elem.className = 'transaction pending-transaction'
    var text = document.createElement('p');
    text.innerHTML = transactionHash + ' 🙀';
    elem.appendChild(text);
    document.querySelector('.log-panel').appendChild(elem);
};

UI.setLogEntryComplete = function (transactionHash) {
    document.querySelector('#log-entry-' + transactionHash).className = 'transaction complete-transaction';
    document.querySelector('#log-entry-' + transactionHash + ' p').innerHTML = transactionHash + ' 😺';
};

UI.setLogEntryError = function (transactionHash) {
    var div = document.querySelector('#log-entry-' + transactionHash);
    if(div) {
        div.className = 'transaction error-transaction';
        document.querySelector('#log-entry-' + transactionHash + ' p').innerHTML = transactionHash + ' 😿';
    }
}

UI.updateCarDetail = function (error, car) {
    document.querySelector('#car-result-vin').value = car[0];
    document.querySelector('#car-result-kilometers').value = car[1];
};

UI.navigate = function (panelId) {
    document.querySelectorAll('.panel').forEach(function (panel) {
        panel.className = 'panel hidden';
    });
    document.querySelector('#' + panelId).className = 'panel';

};
