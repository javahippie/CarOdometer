var Net = {};

Net.contract = null; // Initialized in init.

Net.init = function () {
    if (typeof web3 !== 'undefined') {
        // is web3 already provided by the Mist browser?
        Net.web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        Net.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    Net.web3.eth.defaultAccount = Net.web3.eth.coinbase;
    Net.contract = Net.web3.eth.contract(Contract.abi).at(Contract.address);
};

Net.sendTransaction = function (request, callback) {
    Net.web3.eth.sendTransaction(request, function (error, response) {
        Net.web3.eth.getTransaction(response, function (error, tx) {
            callback(error, tx);
        });
    });
};

Net.queryAccounts = function (err, callback) {
    Net.web3.eth.getAccounts(function (error, accounts) {
        if (!error) {
            accounts.forEach(callback);
        } else {
            err();
        }
    });
};