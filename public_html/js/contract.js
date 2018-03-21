var Contract = {};
        Contract.address = "0xb05dF5D936A35b09CA895bcAef9064cEd7B80418";
        /**
         * This is statically generated. Hands off!
         */
        Contract.abi = [
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
				"name": "from",
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
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
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
				"name": "owner",
				"type": "address"
			},
			{
				"name": "kilometers",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];