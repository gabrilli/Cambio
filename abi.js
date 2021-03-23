/* This is for example purposes */
const contractABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Latitude",
				"type": "string"
			},
			{
				"name": "Longitude",
				"type": "string"
			},
			{
				"name": "IP",
				"type": "string"
			},
			{
				"name": "Senha",
				"type": "string"
			}
		],
		"name": "gerarid",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_Onwer",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "Nome",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "CPF",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Celular",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Bloco",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "Latitude",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "Longitude",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "IP",
				"type": "string"
			}
		],
		"name": "NovaID",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Senha",
				"type": "string"
			}
		],
		"name": "imprimirid",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListaClientesM1",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			},
			{
				"name": "Latitude",
				"type": "string"
			},
			{
				"name": "Longitude",
				"type": "string"
			},
			{
				"name": "IP",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "ListaClientesM2",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			},
			{
				"name": "Latitude",
				"type": "string"
			},
			{
				"name": "Longitude",
				"type": "string"
			},
			{
				"name": "IP",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ListaClientesM3",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			},
			{
				"name": "Latitude",
				"type": "string"
			},
			{
				"name": "Longitude",
				"type": "string"
			},
			{
				"name": "IP",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"name": "ListaClientesM4",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			},
			{
				"name": "Latitude",
				"type": "string"
			},
			{
				"name": "Longitude",
				"type": "string"
			},
			{
				"name": "IP",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "Celular",
				"type": "uint256"
			}
		],
		"name": "procurarporcelular",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Idetificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CPF",
				"type": "uint256"
			}
		],
		"name": "procurarporcpf",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "Identificador",
				"type": "bytes32"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "Identificador",
				"type": "bytes32"
			}
		],
		"name": "procurarporidentificador",
		"outputs": [
			{
				"name": "Nome",
				"type": "string"
			},
			{
				"name": "Celular",
				"type": "uint256"
			},
			{
				"name": "CPF",
				"type": "uint256"
			},
			{
				"name": "Timestamp",
				"type": "uint256"
			},
			{
				"name": "Bloco",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

if (network === "4") {
    contractAddress = "0x767a31897e95B51339EB78a033A47966032e3062"; 
} else {
    contractAddress = "0x767a31897e95B51339EB78a033A47966032e3062"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
