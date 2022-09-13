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
  "0x608060405234801561001057600080fd5b5060405162001b4438038062001b44833981016040819052610031916100c3565b600160005561003f33610071565b6001805460ff60a01b19169055600280546001600160a01b0319166001600160a01b03929092169190911790556100f1565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156100d4578081fd5b81516001600160a01b03811681146100ea578182fd5b9392505050565b611a4380620001016000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638a9758fe116100a2578063daae16e111610071578063daae16e11461025b578063ddd5e1b21461026e578063dfef667914610281578063eeb58d0a146102a1578063f2fde38b146102a957600080fd5b80638a9758fe146101bf5780638da5cb5b146101c7578063a694fc3a146101d8578063cddb3e7b146101eb57600080fd5b8063695464e9116100de578063695464e914610170578063715018a61461017957806372f702f3146101815780638980f11f146101ac57600080fd5b80632e17de78146101105780635c975abb146101255780635d5eaa4f1461014757806364ab86751461014f575b600080fd5b61012361011e3660046116e6565b6102bc565b005b600154600160a01b900460ff1660405190151581526020015b60405180910390f35b6101236105dd565b61016261015d366004611683565b610611565b60405190815260200161013e565b61016260035481565b6101236106d4565b600254610194906001600160a01b031681565b6040516001600160a01b03909116815260200161013e565b6101236101ba36600461169d565b610708565b6101236107cb565b6001546001600160a01b0316610194565b6101236101e63660046116e6565b6107fd565b61022e6101f9366004611683565b600460208190526000918252604090912080546001820154600283015460038401549484015460059094015492949193909286565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161013e565b610162610269366004611683565b610b21565b61012361027c3660046116fe565b610bee565b61016261028f366004611683565b60056020526000908152604090205481565b600354610162565b6101236102b7366004611683565b610d45565b600260005414156102e85760405162461bcd60e51b81526004016102df906117d7565b60405180910390fd5b6002600055600154600160a01b900460ff16156103175760405162461bcd60e51b81526004016102df90611778565b80683635c9adc5dea0000081101561035f5760405162461bcd60e51b815260206004820152600b60248201526a4d494e5f554e5354414b4560a81b60448201526064016102df565b69043c33c19375648000008111156103a75760405162461bcd60e51b815260206004820152600b60248201526a4d41585f554e5354414b4560a81b60448201526064016102df565b6103ba68056bc75e2d63100000826119cd565b156103fa5760405162461bcd60e51b815260206004820152601060248201526f554e5354414b455f4d554c5449504c4560801b60448201526064016102df565b600080610405610de0565b3360009081526004602052604090206001810154815493955091935091869161042d9161184f565b101561046e5760405162461bcd60e51b815260206004820152601060248201526f125b98dbdc9c9958dd08185b5bdd5b9d60821b60448201526064016102df565b80600301544211156104cd5761048333610611565b816002016000828254610496919061184f565b90915550506001810154815482906000906104b290849061184f565b90915550506000600182015560048101839055600381018290555b60018101546104e95780546104e29086610e43565b815561056d565b600081600101541180156105005750806001015485105b1561051e5760018101546105149086610e43565b600182015561056d565b600081600101541180156105355750806001015485115b1561056d576000610553826001015487610e4390919063ffffffff16565b6000600184015582549091506105699082610e43565b8255505b846003600082825461057f919061198a565b909155505060025461059b906001600160a01b03163387610e56565b60405185815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a250506001600055505050565b6001546001600160a01b031633146106075760405162461bcd60e51b81526004016102df906117a2565b61060f610ebe565b565b6001600160a01b0381166000908152600460208181526040808420815160c08101835281548082526001830154948201859052600283015493820193909352600382015460608201529381015460808501526005015460a08401528391829161067991610f40565b835190915061068a57505050919050565b82606001514211156106cc576106a4836080015142610f4c565b915081156106cc576106c9683635c9adc5dea000006106c38385610f73565b90610f7f565b93505b505050919050565b6001546001600160a01b031633146106fe5760405162461bcd60e51b81526004016102df906117a2565b61060f6000610f8b565b6001546001600160a01b031633146107325760405162461bcd60e51b81526004016102df906117a2565b600260005414156107555760405162461bcd60e51b81526004016102df906117d7565b600260005561078061076f6001546001600160a01b031690565b6001600160a01b0384169083610e56565b604080516001600160a01b0384168152602081018390527f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28910160405180910390a150506001600055565b6001546001600160a01b031633146107f55760405162461bcd60e51b81526004016102df906117a2565b61060f610fdd565b600260005414156108205760405162461bcd60e51b81526004016102df906117d7565b6002600055600154600160a01b900460ff161561084f5760405162461bcd60e51b81526004016102df90611778565b80683635c9adc5dea000008110156108995760405162461bcd60e51b815260206004820152600d60248201526c4552525f4d494e5f5354414b4560981b60448201526064016102df565b69043c33c19375648000008111156108e35760405162461bcd60e51b815260206004820152600d60248201526c4552525f4d41585f5354414b4560981b60448201526064016102df565b6108f6683635c9adc5dea00000826119cd565b156109395760405162461bcd60e51b81526020600482015260136024820152724552525f5354414b455f4d554c544954504c4560681b60448201526064016102df565b600080610944610de0565b336000908152600460205260409020600181015481549395509193509169043c33c19375648000009190610978908861184f565b610982919061184f565b11156109c65760405162461bcd60e51b8152602060048201526013602482015272414d4f554e5420495320544f4f204c4152474560681b60448201526064016102df565b3360009081526005602052604090205415806109e157508054155b15610a13576004810183905560038101829055805485908290600090610a0890849061184f565b90915550610a909050565b8060030154421115610a7657610a2833610611565b816002016000828254610a3b919061184f565b9091555050600181015481548290600090610a5790849061184f565b9091555050600181018590556004810183905560038101829055610a90565b84816001016000828254610a8a919061184f565b90915550505b8460036000828254610aa2919061184f565b909155505033600090815260056020526040902054610ac290600161184f565b33600081815260056020526040902091909155600254610aef916001600160a01b03909116903088611061565b60405185815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d906020016105c9565b6001600160a01b0381166000908152600460208181526040808420815160c08101835281548082526001830154948201859052600283015493820193909352600382015460608201529381015460808501526005015460a084015283918291610b8991610f40565b8351909150610b9a57505050919050565b8260800151421115610bbb57610bb4836080015142610f4c565b9150610bcc565b610bc9428460800151610f4c565b91505b6106c9683635c9adc5dea000006106c3610be785600161184f565b8490610f73565b60026000541415610c115760405162461bcd60e51b81526004016102df906117d7565b6002600055600154600160a01b900460ff1615610c405760405162461bcd60e51b81526004016102df90611778565b600080610c4b610de0565b336000908152600460205260409020600381015492945090925090421115610cc057610c7633610611565b816002016000828254610c89919061184f565b9091555050600181015481548290600090610ca590849061184f565b90915550506000600182015560048101839055600381018290555b8481600201541015610cd157600080fd5b84816005016000828254610ce5919061184f565b9250508190555084816002016000828254610d00919061198a565b9091555050604080518681526001600160a01b038616602082015233917f7e6632ca16a0ac6cf28448500b1a17d96c8b8163ad4c4a9b44ef5386cc02779e91016105c9565b6001546001600160a01b03163314610d6f5760405162461bcd60e51b81526004016102df906117a2565b6001600160a01b038116610dd45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102df565b610ddd81610f8b565b50565b6000806000806000610df14261109f565b925092509250610e0783838360176000806110cb565b945060008080610e21610e1c89610fa061184f565b61109f565b925092509250610e3783838360176000806110cb565b96505050505050509091565b6000610e4f828461198a565b9392505050565b6040516001600160a01b038316602482015260448101829052610eb990849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611127565b505050565b600154600160a01b900460ff1615610ee85760405162461bcd60e51b81526004016102df90611778565b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f233390565b6040516001600160a01b03909116815260200160405180910390a1565b6000610e4f828461184f565b600081831115610f5b57600080fd5b62015180610f69848461198a565b610e4f9190611895565b6000610e4f828461192c565b6000610e4f8284611895565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600154600160a01b900460ff1661102d5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016102df565b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33610f23565b6040516001600160a01b03808516602483015283166044820152606481018290526110999085906323b872dd60e01b90608401610e82565b50505050565b60008060006110ad846111f9565b92506110b884611219565b91506110c384611233565b929491935050565b6000816110d9603c8561192c565b6110e5610e108761192c565b620151806110f48b8b8b61124d565b6110fe919061192c565b611108919061184f565b611112919061184f565b61111c919061184f565b979650505050505050565b600061117c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661138a9092919063ffffffff16565b805190915015610eb9578080602001905181019061119a91906116c6565b610eb95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102df565b600061121061120b6201518084611895565b611399565b50909392505050565b600061122b61120b6201518084611895565b509392505050565b600061124561120b6201518084611895565b949350505050565b60006107b284101561125e57600080fd5b838383600062253d8c60046064600c611278600e8861194b565b6112829190611867565b61128e8861132461180e565b611298919061180e565b6112a29190611867565b6112ad9060036118a9565b6112b79190611867565b600c806112c5600e8861194b565b6112cf9190611867565b6112da90600c6118a9565b6112e560028861194b565b6112ef919061194b565b6112fb9061016f6118a9565b6113059190611867565b6004600c611314600e8961194b565b61131e9190611867565b61132a896112c061180e565b611334919061180e565b611340906105b56118a9565b61134a9190611867565b611356617d4b8761194b565b611360919061180e565b61136a919061180e565b611374919061194b565b61137e919061194b565b98975050505050505050565b6060611245848460008561150d565b60008080838162253d8c6113b08362010bd961180e565b6113ba919061180e565b9050600062023ab16113cd8360046118a9565b6113d79190611867565b905060046113e88262023ab16118a9565b6113f390600361180e565b6113fd9190611867565b611407908361194b565b9150600062164b0961141a84600161180e565b61142690610fa06118a9565b6114309190611867565b90506004611440826105b56118a9565b61144a9190611867565b611454908461194b565b61145f90601f61180e565b9250600061098f6114718560506118a9565b61147b9190611867565b90506000605061148d8361098f6118a9565b6114979190611867565b6114a1908661194b565b90506114ae600b83611867565b94506114bb85600c6118a9565b6114c683600261180e565b6114d0919061194b565b915084836114df60318761194b565b6114ea9060646118a9565b6114f4919061180e565b6114fe919061180e565b9a919950975095505050505050565b60608247101561156e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102df565b6001600160a01b0385163b6115c55760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102df565b600080866001600160a01b031685876040516115e19190611729565b60006040518083038185875af1925050503d806000811461161e576040519150601f19603f3d011682016040523d82523d6000602084013e611623565b606091505b509150915061111c8282866060831561163d575081610e4f565b82511561164d5782518084602001fd5b8160405162461bcd60e51b81526004016102df9190611745565b80356001600160a01b038116811461167e57600080fd5b919050565b600060208284031215611694578081fd5b610e4f82611667565b600080604083850312156116af578081fd5b6116b883611667565b946020939093013593505050565b6000602082840312156116d7578081fd5b81518015158114610e4f578182fd5b6000602082840312156116f7578081fd5b5035919050565b60008060408385031215611710578182fd5b8235915061172060208401611667565b90509250929050565b6000825161173b8184602087016119a1565b9190910192915050565b60208152600082518060208401526117648160408501602087016119a1565b601f01601f19169190910160400192915050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600080821280156001600160ff1b0384900385131615611830576118306119e1565b600160ff1b8390038412811615611849576118496119e1565b50500190565b60008219821115611862576118626119e1565b500190565b600082611876576118766119f7565b600160ff1b821460001984141615611890576118906119e1565b500590565b6000826118a4576118a46119f7565b500490565b60006001600160ff1b03818413828413808216868404861116156118cf576118cf6119e1565b600160ff1b848712828116878305891216156118ed576118ed6119e1565b858712925087820587128484161615611908576119086119e1565b8785058712818416161561191e5761191e6119e1565b505050929093029392505050565b6000816000190483118215151615611946576119466119e1565b500290565b60008083128015600160ff1b850184121615611969576119696119e1565b6001600160ff1b0384018313811615611984576119846119e1565b50500390565b60008282101561199c5761199c6119e1565b500390565b60005b838110156119bc5781810151838201526020016119a4565b838111156110995750506000910152565b6000826119dc576119dc6119f7565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220e58f4ab5e3613ab5873db14d4c85271ad8db467a75849dec9e57a77f0bc9ba3964736f6c63430008040033";

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
