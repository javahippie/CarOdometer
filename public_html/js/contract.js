var Contract = {};

Contract.address = "0x533cB0495456fAa823467246EDD98Cda91A55014";

Contract.abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "vin",
                "type": "string"
            },
            {
                "name": "kilometers",
                "type": "uint256"
            }
        ],
        "name": "updateKilometers",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "vin",
                "type": "string"
            }
        ],
        "name": "getCar",
        "outputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_kilometers",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "vin",
                "type": "string"
            },
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "kilometers",
                "type": "uint256"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "vin",
                "type": "string"
            }
        ],
        "name": "createCar",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "vin",
                "type": "string"
            }
        ],
        "name": "Creation",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "vin",
                "type": "string"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];
