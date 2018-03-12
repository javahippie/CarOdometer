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

    Net.latestFilter = Net.web3.eth.filter('latest');

    Net.latestFilter.watch(function (error, blockHash) {
        Net.web3.eth.getBlock(blockHash).transactions.forEach(function(tx){
            var status = Net.web3.eth.getTransactionReceipt(tx).status;
            if(status == '0x0') {
                UI.setLogEntryError(tx);
            } else if(status == '0x1') {
                UI.setLogEntryComplete(tx);
            }
        });
    });
};