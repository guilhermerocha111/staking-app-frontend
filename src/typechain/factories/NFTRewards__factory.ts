/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTRewards, NFTRewardsInterface } from "../NFTRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "enjinAddress",
        type: "address",
      },
    ],
    name: "Claimed",
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
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_staker",
        type: "address",
      },
    ],
    name: "calculateRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "rewards",
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "enjinAddress",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentStaked",
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
        name: "_staker",
        type: "address",
      },
    ],
    name: "estimatedRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentStaked",
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
        name: "",
        type: "address",
      },
    ],
    name: "numberOfStakes",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "poolStakers",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastStakeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakeTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastStakeTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastClaim",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "puase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "unpuase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516115c63803806115c683398101604081905261002f916100c1565b600160005561003d3361006f565b6001805460ff60a01b19169055600280546001600160a01b0319166001600160a01b03929092169190911790556100ef565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156100d2578081fd5b81516001600160a01b03811681146100e8578182fd5b9392505050565b6114c8806100fe6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638a9758fe116100a2578063daae16e111610071578063daae16e11461026b578063ddd5e1b21461027e578063dfef667914610291578063eeb58d0a146102b1578063f2fde38b146102b957600080fd5b80638a9758fe146101bf5780638da5cb5b146101c7578063a694fc3a146101d8578063cddb3e7b146101eb57600080fd5b8063695464e9116100de578063695464e914610170578063715018a61461017957806372f702f3146101815780638980f11f146101ac57600080fd5b80632e17de78146101105780635c975abb146101255780635d5eaa4f1461014757806364ab86751461014f575b600080fd5b61012361011e36600461129c565b6102cc565b005b600154600160a01b900460ff1660405190151581526020015b60405180910390f35b6101236105ed565b61016261015d366004611239565b610621565b60405190815260200161013e565b61016260035481565b6101236106ee565b600254610194906001600160a01b031681565b6040516001600160a01b03909116815260200161013e565b6101236101ba366004611253565b610722565b6101236107e5565b6001546001600160a01b0316610194565b6101236101e636600461129c565b610817565b6102366101f9366004611239565b6004602081905260009182526040909120805460018201546002830154600384015494840154600585015460069095015493959294919390919087565b604080519788526020880196909652948601939093526060850191909152608084015260a083015260c082015260e00161013e565b610162610279366004611239565b610b3b565b61012361028c3660046112b4565b610bc9565b61016261029f366004611239565b60056020526000908152604090205481565b600354610162565b6101236102c7366004611239565b610d2e565b600260005414156102f85760405162461bcd60e51b81526004016102ef9061138d565b60405180910390fd5b6002600055600154600160a01b900460ff16156103275760405162461bcd60e51b81526004016102ef9061132e565b80683635c9adc5dea0000081101561036f5760405162461bcd60e51b815260206004820152600b60248201526a4d494e5f554e5354414b4560a81b60448201526064016102ef565b69043c33c19375648000008111156103b75760405162461bcd60e51b815260206004820152600b60248201526a4d41585f554e5354414b4560a81b60448201526064016102ef565b6103ca68056bc75e2d6310000082611452565b1561040a5760405162461bcd60e51b815260206004820152601060248201526f554e5354414b455f4d554c5449504c4560801b60448201526064016102ef565b600080610415610dc9565b3360009081526004602052604090206001810154815493955091935091869161043d916113c4565b101561047e5760405162461bcd60e51b815260206004820152601060248201526f125b98dbdc9c9958dd08185b5bdd5b9d60821b60448201526064016102ef565b80600301544211156104dd5761049333610621565b8160020160008282546104a691906113c4565b90915550506001810154815482906000906104c29084906113c4565b90915550506000600182015560048101839055600381018290555b60018101546104f95780546104f29086610ddd565b815561057d565b600081600101541180156105105750806001015485105b1561052e5760018101546105249086610ddd565b600182015561057d565b600081600101541180156105455750806001015485115b1561057d576000610563826001015487610ddd90919063ffffffff16565b6000600184015582549091506105799082610ddd565b8255505b846003600082825461058f919061140f565b90915550506002546105ab906001600160a01b03163387610df0565b60405185815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a250506001600055505050565b6001546001600160a01b031633146106175760405162461bcd60e51b81526004016102ef90611358565b61061f610e58565b565b6001600160a01b0381166000908152600460208181526040808420815160e0810183528154808252600183015494820185905260028301549382019390935260038201546060820152938101546080850152600581015460a08501526006015460c08401528391829161069391610eda565b83519091506106a457505050919050565b82606001514211156106e6576106be836080015142610ee6565b915081156106e6576106e3683635c9adc5dea000006106dd8385610f0b565b90610f17565b93505b505050919050565b6001546001600160a01b031633146107185760405162461bcd60e51b81526004016102ef90611358565b61061f6000610f23565b6001546001600160a01b0316331461074c5760405162461bcd60e51b81526004016102ef90611358565b6002600054141561076f5760405162461bcd60e51b81526004016102ef9061138d565b600260005561079a6107896001546001600160a01b031690565b6001600160a01b0384169083610df0565b604080516001600160a01b0384168152602081018390527f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28910160405180910390a150506001600055565b6001546001600160a01b0316331461080f5760405162461bcd60e51b81526004016102ef90611358565b61061f610f75565b6002600054141561083a5760405162461bcd60e51b81526004016102ef9061138d565b6002600055600154600160a01b900460ff16156108695760405162461bcd60e51b81526004016102ef9061132e565b80683635c9adc5dea000008110156108b35760405162461bcd60e51b815260206004820152600d60248201526c4552525f4d494e5f5354414b4560981b60448201526064016102ef565b69043c33c19375648000008111156108fd5760405162461bcd60e51b815260206004820152600d60248201526c4552525f4d41585f5354414b4560981b60448201526064016102ef565b610910683635c9adc5dea0000082611452565b156109535760405162461bcd60e51b81526020600482015260136024820152724552525f5354414b455f4d554c544954504c4560681b60448201526064016102ef565b60008061095e610dc9565b336000908152600460205260409020600181015481549395509193509169043c33c1937564800000919061099290886113c4565b61099c91906113c4565b11156109e05760405162461bcd60e51b8152602060048201526013602482015272414d4f554e5420495320544f4f204c4152474560681b60448201526064016102ef565b3360009081526005602052604090205415806109fb57508054155b15610a2d576004810183905560038101829055805485908290600090610a229084906113c4565b90915550610aaa9050565b8060030154421115610a9057610a4233610621565b816002016000828254610a5591906113c4565b9091555050600181015481548290600090610a719084906113c4565b9091555050600181018590556004810183905560038101829055610aaa565b84816001016000828254610aa491906113c4565b90915550505b8460036000828254610abc91906113c4565b909155505033600090815260056020526040902054610adc9060016113c4565b33600081815260056020526040902091909155600254610b09916001600160a01b03909116903088610ff9565b60405185815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d906020016105d9565b6001600160a01b0381166000908152600460208181526040808420815160e0810183528154808252600183015494820185905260028301549382019390935260038201546060820152938101546080850152600581015460a08501526006015460c08401528391610bac9190610eda565b9050610bc181683635c9adc5dea00000610f17565b949350505050565b60026000541415610bec5760405162461bcd60e51b81526004016102ef9061138d565b6002600055600154600160a01b900460ff1615610c1b5760405162461bcd60e51b81526004016102ef9061132e565b600080610c26610dc9565b336000908152600460205260409020805492945090925090851115610c4a57600080fd5b8060030154421115610ca957610c5f33610621565b816002016000828254610c7291906113c4565b9091555050600181015481548290600090610c8e9084906113c4565b90915550506000600182015560048101839055600381018290555b8481600201541015610cba57600080fd5b84816005016000828254610cce91906113c4565b9250508190555084816002016000828254610ce9919061140f565b9091555050604080518681526001600160a01b038616602082015233917f7e6632ca16a0ac6cf28448500b1a17d96c8b8163ad4c4a9b44ef5386cc02779e91016105d9565b6001546001600160a01b03163314610d585760405162461bcd60e51b81526004016102ef90611358565b6001600160a01b038116610dbd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102ef565b610dc681610f23565b50565b426000610dd782603c6113c4565b90509091565b6000610de9828461140f565b9392505050565b6040516001600160a01b038316602482015260448101829052610e5390849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611037565b505050565b600154600160a01b900460ff1615610e825760405162461bcd60e51b81526004016102ef9061132e565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ebd3390565b6040516001600160a01b03909116815260200160405180910390a1565b6000610de982846113c4565b600081831115610ef557600080fd5b603c610f01848461140f565b610de991906113dc565b6000610de982846113f0565b6000610de982846113dc565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600154600160a01b900460ff16610fc55760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016102ef565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610ebd565b6040516001600160a01b03808516602483015283166044820152606481018290526110319085906323b872dd60e01b90608401610e1c565b50505050565b600061108c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166111099092919063ffffffff16565b805190915015610e5357808060200190518101906110aa919061127c565b610e535760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102ef565b6060610bc18484600085856001600160a01b0385163b61116b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102ef565b600080866001600160a01b0316858760405161118791906112df565b60006040518083038185875af1925050503d80600081146111c4576040519150601f19603f3d011682016040523d82523d6000602084013e6111c9565b606091505b50915091506111d98282866111e4565b979650505050505050565b606083156111f3575081610de9565b8251156112035782518084602001fd5b8160405162461bcd60e51b81526004016102ef91906112fb565b80356001600160a01b038116811461123457600080fd5b919050565b60006020828403121561124a578081fd5b610de98261121d565b60008060408385031215611265578081fd5b61126e8361121d565b946020939093013593505050565b60006020828403121561128d578081fd5b81518015158114610de9578182fd5b6000602082840312156112ad578081fd5b5035919050565b600080604083850312156112c6578182fd5b823591506112d66020840161121d565b90509250929050565b600082516112f1818460208701611426565b9190910192915050565b602081526000825180602084015261131a816040850160208701611426565b601f01601f19169190910160400192915050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600082198211156113d7576113d7611466565b500190565b6000826113eb576113eb61147c565b500490565b600081600019048311821515161561140a5761140a611466565b500290565b60008282101561142157611421611466565b500390565b60005b83811015611441578181015183820152602001611429565b838111156110315750506000910152565b6000826114615761146161147c565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea264697066735822122047d4704e61dd544f8343f44ed514860e6a7beaa682a189d9d69ecd72d5eeebfa64736f6c63430008040033";

export class NFTRewards__factory extends ContractFactory {
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
    _stakingToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTRewards> {
    return super.deploy(_stakingToken, overrides || {}) as Promise<NFTRewards>;
  }
  getDeployTransaction(
    _stakingToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_stakingToken, overrides || {});
  }
  attach(address: string): NFTRewards {
    return super.attach(address) as NFTRewards;
  }
  connect(signer: Signer): NFTRewards__factory {
    return super.connect(signer) as NFTRewards__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTRewardsInterface {
    return new utils.Interface(_abi) as NFTRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTRewards {
    return new Contract(address, _abi, signerOrProvider) as NFTRewards;
  }
}
