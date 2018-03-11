var Net = {};

Net.contractAddress = "0x533cB0495456fAa823467246EDD98Cda91A55014";

if (typeof web3 !== 'undefined') {
    // is web3 already provided by the Mist browser?
    Net.web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    Net.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

Net.setDefaultAccount = function() {
  Net.web3.eth.defaultAccount = Net.web3.eth.coinbase;  
};

Net.loadContract = function() {
    var OdometerContract = Net.web3.eth.contract(Contract.abi);
    return OdometerContract.at(Contract.address);
};

Net.contract = Net.loadContract();

Net.sendTransaction = function(request, callback) {
    Net.web3.eth.sendTransaction(request, function(error, response) {
        Net.web3.eth.getTransaction(response, function(error, tx) {
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