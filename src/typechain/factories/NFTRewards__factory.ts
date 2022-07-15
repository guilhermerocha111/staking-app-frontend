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
        name: "claimed",
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
  "0x608060405234801561001057600080fd5b506040516115eb3803806115eb83398101604081905261002f916100c1565b600160005561003d3361006f565b6001805460ff60a01b19169055600280546001600160a01b0319166001600160a01b03929092169190911790556100ef565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156100d2578081fd5b81516001600160a01b03811681146100e8578182fd5b9392505050565b6114ed806100fe6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638980f11f11610097578063cddb3e7b11610066578063cddb3e7b146101f3578063dfef667914610248578063eeb58d0a14610268578063f2fde38b1461027057600080fd5b80638980f11f146101b45780638a9758fe146101c75780638da5cb5b146101cf578063a694fc3a146101e057600080fd5b806364ab8675116100d357806364ab867514610157578063695464e914610178578063715018a61461018157806372f702f31461018957600080fd5b80632e17de7814610105578063379607f51461011a5780635c975abb1461012d5780635d5eaa4f1461014f575b600080fd5b6101186101133660046111bb565b610283565b005b6101186101283660046111bb565b6103ed565b600154600160a01b900460ff1660405190151581526020015b60405180910390f35b6101186104e1565b61016a610165366004611158565b610515565b604051908152602001610146565b61016a60035481565b6101186105ba565b60025461019c906001600160a01b031681565b6040516001600160a01b039091168152602001610146565b6101186101c2366004611172565b6105ee565b6101186106b1565b6001546001600160a01b031661019c565b6101186101ee3660046111bb565b6106e3565b610228610201366004611158565b60046020526000908152604090208054600182015460028301546003909301549192909184565b604080519485526020850193909352918301526060820152608001610146565b61016a610256366004611158565b60056020526000908152604090205481565b60035461016a565b61011861027e366004611158565b610851565b600260005414156102af5760405162461bcd60e51b81526004016102a690611281565b60405180910390fd5b6002600055600154600160a01b900460ff16156102de5760405162461bcd60e51b81526004016102a690611222565b8068056bc75e2d631000008110156102f557600080fd5b686c6b935b8bbd40000081111561030b57600080fd5b61031e68056bc75e2d6310000082611477565b1561032857600080fd5b336000908152600460205260409020805483111561034557600080fd5b61035c61035133610515565b6001830154906108ec565b6001820155805461036d90846108ff565b815561037761090b565b816002018190555082600360008282546103919190611434565b90915550506002546103ad906001600160a01b03163385610937565b60405183815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a25050600160005550565b600260005414156104105760405162461bcd60e51b81526004016102a690611281565b6002600055600154600160a01b900460ff161561043f5760405162461bcd60e51b81526004016102a690611222565b3360008181526004602052604090209061045c9061035190610515565b6001820181905582111561046f57600080fd5b8181600301600082825461048391906112f9565b925050819055508181600101600082825461049e9190611434565b909155505060405182815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a250506001600055565b6001546001600160a01b0316331461050b5760405162461bcd60e51b81526004016102a69061124c565b61051361099f565b565b6001600160a01b0381166000908152600460209081526040808320815160808101835281548082526001830154948201949094526002820154928101929092526003015460608201529082908061056e57505050919050565b826040015142111561058f57610588836040015142610a21565b9150610594565b600091505b6105b1683635c9adc5dea000006105ab8385610a48565b90610a54565b95945050505050565b6001546001600160a01b031633146105e45760405162461bcd60e51b81526004016102a69061124c565b6105136000610a60565b6001546001600160a01b031633146106185760405162461bcd60e51b81526004016102a69061124c565b6002600054141561063b5760405162461bcd60e51b81526004016102a690611281565b60026000556106666106556001546001600160a01b031690565b6001600160a01b0384169083610937565b604080516001600160a01b0384168152602081018390527f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28910160405180910390a150506001600055565b6001546001600160a01b031633146106db5760405162461bcd60e51b81526004016102a69061124c565b610513610ab2565b600260005414156107065760405162461bcd60e51b81526004016102a690611281565b6002600055600154600160a01b900460ff16156107355760405162461bcd60e51b81526004016102a690611222565b80683635c9adc5dea0000081101561074c57600080fd5b69043c33c193756480000081111561076357600080fd5b610776683635c9adc5dea0000082611477565b1561078057600080fd5b3360008181526004602052604090209061079d9061035190610515565b60018201556107aa61090b565b816002018190555082600360008282546107c491906112f9565b909155505080546107d590846108ec565b8155336000908152600560205260409020546107f29060016112f9565b3360008181526005602052604090209190915560025461081f916001600160a01b03909116903086610b36565b60405183815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d906020016103db565b6001546001600160a01b0316331461087b5760405162461bcd60e51b81526004016102a69061124c565b6001600160a01b0381166108e05760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102a6565b6108e981610a60565b50565b60006108f882846112f9565b9392505050565b60006108f88284611434565b600080600080610919610b74565b92509250925061092f8383836017600080610ba0565b935050505090565b6040516001600160a01b03831660248201526044810182905261099a90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610bfc565b505050565b600154600160a01b900460ff16156109c95760405162461bcd60e51b81526004016102a690611222565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610a043390565b6040516001600160a01b03909116815260200160405180910390a1565b600081831115610a3057600080fd5b62015180610a3e8484611434565b6108f8919061133f565b60006108f882846113d6565b60006108f8828461133f565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600154600160a01b900460ff16610b025760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016102a6565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610a04565b6040516001600160a01b0380851660248301528316604482015260648101829052610b6e9085906323b872dd60e01b90608401610963565b50505050565b6000808042610b8281610cce565b9350610b8d81610cee565b9250610b9881610d08565b915050909192565b600081610bae603c856113d6565b610bba610e10876113d6565b62015180610bc98b8b8b610d22565b610bd391906113d6565b610bdd91906112f9565b610be791906112f9565b610bf191906112f9565b979650505050505050565b6000610c51826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e5f9092919063ffffffff16565b80519091501561099a5780806020019051810190610c6f919061119b565b61099a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102a6565b6000610ce5610ce0620151808461133f565b610e6e565b50909392505050565b6000610d00610ce0620151808461133f565b509392505050565b6000610d1a610ce0620151808461133f565b949350505050565b60006107b2841015610d3357600080fd5b838383600062253d8c60046064600c610d4d600e886113f5565b610d579190611311565b610d63886113246112b8565b610d6d91906112b8565b610d779190611311565b610d82906003611353565b610d8c9190611311565b600c80610d9a600e886113f5565b610da49190611311565b610daf90600c611353565b610dba6002886113f5565b610dc491906113f5565b610dd09061016f611353565b610dda9190611311565b6004600c610de9600e896113f5565b610df39190611311565b610dff896112c06112b8565b610e0991906112b8565b610e15906105b5611353565b610e1f9190611311565b610e2b617d4b876113f5565b610e3591906112b8565b610e3f91906112b8565b610e4991906113f5565b610e5391906113f5565b98975050505050505050565b6060610d1a8484600085610fe2565b60008080838162253d8c610e858362010bd96112b8565b610e8f91906112b8565b9050600062023ab1610ea2836004611353565b610eac9190611311565b90506004610ebd8262023ab1611353565b610ec89060036112b8565b610ed29190611311565b610edc90836113f5565b9150600062164b09610eef8460016112b8565b610efb90610fa0611353565b610f059190611311565b90506004610f15826105b5611353565b610f1f9190611311565b610f2990846113f5565b610f3490601f6112b8565b9250600061098f610f46856050611353565b610f509190611311565b905060006050610f628361098f611353565b610f6c9190611311565b610f7690866113f5565b9050610f83600b83611311565b9450610f9085600c611353565b610f9b8360026112b8565b610fa591906113f5565b91508483610fb46031876113f5565b610fbf906064611353565b610fc991906112b8565b610fd391906112b8565b9a919950975095505050505050565b6060824710156110435760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102a6565b6001600160a01b0385163b61109a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102a6565b600080866001600160a01b031685876040516110b691906111d3565b60006040518083038185875af1925050503d80600081146110f3576040519150601f19603f3d011682016040523d82523d6000602084013e6110f8565b606091505b5091509150610bf1828286606083156111125750816108f8565b8251156111225782518084602001fd5b8160405162461bcd60e51b81526004016102a691906111ef565b80356001600160a01b038116811461115357600080fd5b919050565b600060208284031215611169578081fd5b6108f88261113c565b60008060408385031215611184578081fd5b61118d8361113c565b946020939093013593505050565b6000602082840312156111ac578081fd5b815180151581146108f8578182fd5b6000602082840312156111cc578081fd5b5035919050565b600082516111e581846020870161144b565b9190910192915050565b602081526000825180602084015261120e81604085016020870161144b565b601f01601f19169190910160400192915050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600080821280156001600160ff1b03849003851316156112da576112da61148b565b600160ff1b83900384128116156112f3576112f361148b565b50500190565b6000821982111561130c5761130c61148b565b500190565b600082611320576113206114a1565b600160ff1b82146000198414161561133a5761133a61148b565b500590565b60008261134e5761134e6114a1565b500490565b60006001600160ff1b03818413828413808216868404861116156113795761137961148b565b600160ff1b848712828116878305891216156113975761139761148b565b8587129250878205871284841616156113b2576113b261148b565b878505871281841616156113c8576113c861148b565b505050929093029392505050565b60008160001904831182151516156113f0576113f061148b565b500290565b60008083128015600160ff1b8501841216156114135761141361148b565b6001600160ff1b038401831381161561142e5761142e61148b565b50500390565b6000828210156114465761144661148b565b500390565b60005b8381101561146657818101518382015260200161144e565b83811115610b6e5750506000910152565b600082611486576114866114a1565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220b12ab9548af5a59d48018af0722c3757edae945d6ee5dbe1f50d535bdfc43dc264736f6c63430008040033";

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
