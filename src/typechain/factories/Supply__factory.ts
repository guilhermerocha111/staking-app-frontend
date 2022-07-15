/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Supply, SupplyInterface } from "../Supply";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
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
        indexed: false,
        internalType: "address[]",
        name: "admin",
        type: "address[]",
      },
    ],
    name: "AdminsAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "admin",
        type: "address[]",
      },
    ],
    name: "AdminsRemoved",
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
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "TokensTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_admins",
        type: "address[]",
      },
    ],
    name: "addAdmins",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "admins",
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
    inputs: [
      {
        internalType: "address[]",
        name: "_admins",
        type: "address[]",
      },
    ],
    name: "removeAdmins",
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
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "safeTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610c16380380610c1683398101604081905261002f9161009d565b6100383361004d565b60601b6001600160601b0319166080526100cb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ae578081fd5b81516001600160a01b03811681146100c4578182fd5b9392505050565b60805160601c610b186100fe60003960008181610145015281816101ed0152818161028601526102bf0152610b186000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100f55780639c54df641461011a578063f2fde38b1461012d578063fc0c546a1461014057600080fd5b8063301d29db1461008d578063377e11e0146100a2578063429b62e5146100b5578063715018a6146100ed575b600080fd5b6100a061009b3660046108ea565b610167565b005b6100a06100b0366004610913565b61032e565b6100d86100c33660046108d0565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100a061040b565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100e4565b6100a0610128366004610913565b610441565b6100a061013b3660046108d0565b61051d565b6101027f000000000000000000000000000000000000000000000000000000000000000081565b3360009081526001602052604090205460ff166101d55760405162461bcd60e51b815260206004820152602160248201527f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f6044820152603760f91b60648201526084015b60405180910390fd5b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a082319060240160206040518083038186803b15801561023757600080fd5b505afa15801561024b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026f91906109a3565b9050808211156102b2576102ad6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684836105b8565b6102e6565b6102e66001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684846105b8565b604080516001600160a01b0385168152602081018490527f12f4533b5cbd2c9f8a0752a2d0b16379af992dbb2a0844a5007a19d983b3a93491015b60405180910390a1505050565b6000546001600160a01b031633146103585760405162461bcd60e51b81526004016101cc90610a56565b8060005b818110156103d95760006001600086868581811061038a57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061039f91906108d0565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055806103d181610abb565b91505061035c565b507fd5e6894641b5030a67e637ab2e12da64d8aec689f8bd1328de2b04d6a439c81083836040516103219291906109d7565b6000546001600160a01b031633146104355760405162461bcd60e51b81526004016101cc90610a56565b61043f600061060f565b565b6000546001600160a01b0316331461046b5760405162461bcd60e51b81526004016101cc90610a56565b8060005b818110156104eb57600180600086868581811061049c57634e487b7160e01b600052603260045260246000fd5b90506020020160208101906104b191906108d0565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055806104e381610abb565b91505061046f565b507f45486b220020cc2482ad1a5e0ae4d5f0b5372cea1b48173f6273c616a504726983836040516103219291906109d7565b6000546001600160a01b031633146105475760405162461bcd60e51b81526004016101cc90610a56565b6001600160a01b0381166105ac5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101cc565b6105b58161060f565b50565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261060a90849061065f565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006106b4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107319092919063ffffffff16565b80519091501561060a57808060200190518101906106d29190610983565b61060a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101cc565b6060610740848460008561074a565b90505b9392505050565b6060824710156107ab5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101cc565b6001600160a01b0385163b6108025760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101cc565b600080866001600160a01b0316858760405161081e91906109bb565b60006040518083038185875af1925050503d806000811461085b576040519150601f19603f3d011682016040523d82523d6000602084013e610860565b606091505b509150915061087082828661087b565b979650505050505050565b6060831561088a575081610743565b82511561089a5782518084602001fd5b8160405162461bcd60e51b81526004016101cc9190610a23565b80356001600160a01b03811681146108cb57600080fd5b919050565b6000602082840312156108e1578081fd5b610743826108b4565b600080604083850312156108fc578081fd5b610905836108b4565b946020939093013593505050565b60008060208385031215610925578182fd5b823567ffffffffffffffff8082111561093c578384fd5b818501915085601f83011261094f578384fd5b81358181111561095d578485fd5b8660208260051b8501011115610971578485fd5b60209290920196919550909350505050565b600060208284031215610994578081fd5b81518015158114610743578182fd5b6000602082840312156109b4578081fd5b5051919050565b600082516109cd818460208701610a8b565b9190910192915050565b60208082528181018390526000908460408401835b86811015610a18576001600160a01b03610a05846108b4565b16825291830191908301906001016109ec565b509695505050505050565b6020815260008251806020840152610a42816040850160208701610a8b565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60005b83811015610aa6578181015183820152602001610a8e565b83811115610ab5576000848401525b50505050565b6000600019821415610adb57634e487b7160e01b81526011600452602481fd5b506001019056fea2646970667358221220ca1df2c6a304b32340f429fa97753cd4ca48986b735ec67e4e9e163be8100b0064736f6c63430008040033";

export class Supply__factory extends ContractFactory {
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
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Supply> {
    return super.deploy(_token, overrides || {}) as Promise<Supply>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): Supply {
    return super.attach(address) as Supply;
  }
  connect(signer: Signer): Supply__factory {
    return super.connect(signer) as Supply__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SupplyInterface {
    return new utils.Interface(_abi) as SupplyInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Supply {
    return new Contract(address, _abi, signerOrProvider) as Supply;
  }
}
