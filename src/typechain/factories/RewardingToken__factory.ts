/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RewardingToken,
  RewardingTokenInterface,
} from "../RewardingToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "sym",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001453380380620014538339810160408190526200003491620003a9565b8151829082906200004d90600390602085019062000250565b5080516200006390600490602084019062000250565b50506005805460ff19169055506200007b336200009a565b62000092336a084595161401484a000000620000f4565b505062000488565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001505760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b6200015e60008383620001eb565b806002600082825462000172919062000410565b90915550506001600160a01b03821660009081526020819052604081208054839290620001a190849062000410565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b60055460ff1615620002335760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640162000147565b6200024b8383836200024b60201b620006231760201c565b505050565b8280546200025e9062000435565b90600052602060002090601f016020900481019282620002825760008555620002cd565b82601f106200029d57805160ff1916838001178555620002cd565b82800160010185558215620002cd579182015b82811115620002cd578251825591602001919060010190620002b0565b50620002db929150620002df565b5090565b5b80821115620002db5760008155600101620002e0565b600082601f83011262000307578081fd5b81516001600160401b038082111562000324576200032462000472565b604051601f8301601f19908116603f011681019082821181831017156200034f576200034f62000472565b816040528381526020925086838588010111156200036b578485fd5b8491505b838210156200038e57858201830151818301840152908201906200036f565b838211156200039f57848385830101525b9695505050505050565b60008060408385031215620003bc578182fd5b82516001600160401b0380821115620003d3578384fd5b620003e186838701620002f6565b93506020850151915080821115620003f7578283fd5b506200040685828601620002f6565b9150509250929050565b600082198211156200043057634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200044a57607f821691505b602082108114156200046c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610fbb80620004986000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad57806395d89b411161007157806395d89b4114610269578063a457c2d714610271578063a9059cbb14610284578063dd62ed3e14610297578063f2fde38b146102aa57600080fd5b806370a08231146101f4578063715018a61461021d57806379cc6790146102255780638456cb59146102385780638da5cb5b1461024057600080fd5b806339509351116100f457806339509351146101a65780633f4ba83a146101b957806340c10f19146101c357806342966c68146101d65780635c975abb146101e957600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b6101396102bd565b6040516101469190610e7d565b60405180910390f35b61016261015d366004610e3c565b61034f565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610e01565b610367565b60405160128152602001610146565b6101626101b4366004610e3c565b61038b565b6101c16103ad565b005b6101c16101d1366004610e3c565b6103f0565b6101c16101e4366004610e65565b61042e565b60055460ff16610162565b610176610202366004610dae565b6001600160a01b031660009081526020819052604090205490565b6101c161043b565b6101c1610233366004610e3c565b610475565b6101c161048a565b60055461010090046001600160a01b03166040516001600160a01b039091168152602001610146565b6101396104c2565b61016261027f366004610e3c565b6104d1565b610162610292366004610e3c565b61054c565b6101766102a5366004610dcf565b61055a565b6101c16102b8366004610dae565b610585565b6060600380546102cc90610f34565b80601f01602080910402602001604051908101604052809291908181526020018280546102f890610f34565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b5050505050905090565b60003361035d818585610628565b5060019392505050565b60003361037585828561074c565b6103808585856107c6565b506001949350505050565b60003361035d81858561039e838361055a565b6103a89190610f05565b610628565b6005546001600160a01b036101009091041633146103e65760405162461bcd60e51b81526004016103dd90610ed0565b60405180910390fd5b6103ee61099f565b565b6005546001600160a01b036101009091041633146104205760405162461bcd60e51b81526004016103dd90610ed0565b61042a8282610a32565b5050565b6104383382610b1d565b50565b6005546001600160a01b0361010090910416331461046b5760405162461bcd60e51b81526004016103dd90610ed0565b6103ee6000610c77565b61048082338361074c565b61042a8282610b1d565b6005546001600160a01b036101009091041633146104ba5760405162461bcd60e51b81526004016103dd90610ed0565b6103ee610cd1565b6060600480546102cc90610f34565b600033816104df828661055a565b90508381101561053f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103dd565b6103808286868403610628565b60003361035d8185856107c6565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6005546001600160a01b036101009091041633146105b55760405162461bcd60e51b81526004016103dd90610ed0565b6001600160a01b03811661061a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103dd565b61043881610c77565b505050565b6001600160a01b03831661068a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103dd565b6001600160a01b0382166106eb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103dd565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610758848461055a565b905060001981146107c057818110156107b35760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103dd565b6107c08484848403610628565b50505050565b6001600160a01b03831661082a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103dd565b6001600160a01b03821661088c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103dd565b610897838383610d4c565b6001600160a01b0383166000908152602081905260409020548181101561090f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103dd565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610946908490610f05565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161099291815260200190565b60405180910390a36107c0565b60055460ff166109e85760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103dd565b6005805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610a885760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103dd565b610a9460008383610d4c565b8060026000828254610aa69190610f05565b90915550506001600160a01b03821660009081526020819052604081208054839290610ad3908490610f05565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610b7d5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103dd565b610b8982600083610d4c565b6001600160a01b03821660009081526020819052604090205481811015610bfd5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103dd565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610c2c908490610f1d565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600580546001600160a01b03838116610100818102610100600160a81b031985161790945560405193909204169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60055460ff1615610d175760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103dd565b6005805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610a153390565b60055460ff16156106235760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103dd565b80356001600160a01b0381168114610da957600080fd5b919050565b600060208284031215610dbf578081fd5b610dc882610d92565b9392505050565b60008060408385031215610de1578081fd5b610dea83610d92565b9150610df860208401610d92565b90509250929050565b600080600060608486031215610e15578081fd5b610e1e84610d92565b9250610e2c60208501610d92565b9150604084013590509250925092565b60008060408385031215610e4e578182fd5b610e5783610d92565b946020939093013593505050565b600060208284031215610e76578081fd5b5035919050565b6000602080835283518082850152825b81811015610ea957858101830151858201604001528201610e8d565b81811115610eba5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610f1857610f18610f6f565b500190565b600082821015610f2f57610f2f610f6f565b500390565b600181811c90821680610f4857607f821691505b60208210811415610f6957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212206d456523acad53f067b1f9874951b6153c5e72abe95b2565305cd4429075709d64736f6c63430008040033";

export class RewardingToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    sym: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardingToken> {
    return super.deploy(name, sym, overrides || {}) as Promise<RewardingToken>;
  }
  getDeployTransaction(
    name: string,
    sym: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, sym, overrides || {});
  }
  attach(address: string): RewardingToken {
    return super.attach(address) as RewardingToken;
  }
  connect(signer: Signer): RewardingToken__factory {
    return super.connect(signer) as RewardingToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardingTokenInterface {
    return new utils.Interface(_abi) as RewardingTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardingToken {
    return new Contract(address, _abi, signerOrProvider) as RewardingToken;
  }
}
