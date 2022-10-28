/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MasterChef, MasterChefInterface } from "../MasterChef";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardingToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vesting",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenPerBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_supply",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "claim",
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
      {
        internalType: "uint256",
        name: "_stakeFor",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getCurrentClaimed",
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
        name: "user",
        type: "address",
      },
    ],
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
        name: "user",
        type: "address",
      },
    ],
    name: "getCurrentUnstaked",
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
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "getStakes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakeUntill",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakeFor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakedBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardDebt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawed",
            type: "bool",
          },
        ],
        internalType: "struct MasterChef.DepositInfo[]",
        name: "stakes",
        type: "tuple[]",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingRewards",
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
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "stakeToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "accSmcwPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalWeight",
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
        name: "user",
        type: "address",
      },
    ],
    name: "pull",
    outputs: [
      {
        internalType: "uint256",
        name: "rewards",
        type: "uint256",
      },
    ],
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
    inputs: [],
    name: "rewardingToken",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewardsInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "totalClaimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalUnstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastVest",
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
    name: "rewardsPerWallet",
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
    name: "startBlock",
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
    name: "supplyContract",
    outputs: [
      {
        internalType: "contract Supply",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "tokenPerBlock",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "updatePool",
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
    name: "updateTokenPerBlock",
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
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalRewardDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vesting",
    outputs: [
      {
        internalType: "contract IVesting",
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
        internalType: "uint256",
        name: "stakeIndex",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d9b38038062001d9b83398101604081905262000034916200028b565b6200003f336200023b565b600180556002805460ff19169055600580546001600160a01b03199081166001600160a01b03978816908117909255600780548216968816969096179095556006805486169487169490941790935560088054851691909516179093556009929092554360105560408051608081018252838152600060208083018290529282018190526060909101819052600a8054909316909317909155600b829055600c829055600d829055670494654067e100007f6117fee2f1274e1b392d2c3fe842478040a980d896757f38cbfe2ceebfa9f55f55670de0b6b3a76400007f3219ed562b3fd9188a49dd9a57bec5aecadcb61ea33f29053262442c210d825f55671bc16d674ec800007f3803eb3ad32319afb811b1ed93c96ec4bdf98bf0a9358801efe0713a54aa4f1955673782dace9d9000007f9c8aae2e9cebb36b5ec5fd4a2c38e858dd32d8cc6534255991490fb7908a309f556004905262278d007f9041ee6632bd2142b9cc58f348e0761559f8d964fe48ac6d87dc2b689213e3bb556276a7007fdf768ab10bd9bf6991efbce6ca12a3eab909711d259e530cf7c7661f662cdb235562ed4e007fc863fa5af6bb48872cec7870bb32c7c91f7aeb27df0fe984f7cf436bab7e8c525561016890526301da9c007fa06e5b3859f5fcf7f927f2ba6ee70f534a7190e4d17af4e8b5003a42807d13dc5562000317565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080600060a08688031215620002a3578081fd5b8551620002b081620002fe565b6020870151909550620002c381620002fe565b6040870151909450620002d681620002fe565b606087015160808801519194509250620002f081620002fe565b809150509295509295909350565b6001600160a01b03811681146200031457600080fd5b50565b611a7480620003276000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80635c975abb116100f9578063a1397f7611610097578063f2fde38b11610071578063f2fde38b1461044b578063fc0c546a1461045e578063fc56a81314610471578063fccc887f146104e157600080fd5b8063a1397f7614610405578063ae0e597a14610425578063e2bbb1581461043857600080fd5b80637ba6f458116100d35780637ba6f458146103b95780638456cb59146103d95780638da5cb5b146103e15780638dbb1e3a146103f257600080fd5b80635c975abb14610388578063715018a61461039e5780637b46c54f146103a657600080fd5b80634198709a1161016657806348cd4cb11161014057806348cd4cb11461031057806350cb82d31461031957806352d112381461032c5780635a2f3d091461033f57600080fd5b80634198709a146102c8578063443de10c146102d157806344c63eec146102fd57600080fd5b80632e1a7d4d116101a25780632e1a7d4d1461028557806331d7a2621461029a578063379607f5146102ad5780633f4ba83a146102c057600080fd5b80630f8a267b146101c95780631959a002146101f95780631f715f9b1461024e575b600080fd5b6007546101dc906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61022e6102073660046117e3565b600e6020526000908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080016101f0565b61027761025c3660046117e3565b6001600160a01b03166000908152600f602052604090205490565b6040519081526020016101f0565b61029861029336600461182a565b61050d565b005b6102776102a83660046117e3565b610751565b6102986102bb36600461182a565b6108b0565b610298610917565b61027760095481565b6102776102df3660046117e3565b6001600160a01b03166000908152600f602052604090206002015490565b6006546101dc906001600160a01b031681565b61027760105481565b6008546101dc906001600160a01b031681565b61027761033a3660046117e3565b61094b565b600a54600b54600c54600d5461035e936001600160a01b031692919084565b604080516001600160a01b03909516855260208501939093529183015260608201526080016101f0565b60025460ff1660405190151581526020016101f0565b610298610a3a565b6102986103b43660046117e3565b610a6e565b6103cc6103c73660046117e3565b610bdb565b6040516101f09190611897565b610298610ca3565b6000546001600160a01b03166101dc565b61027761040036600461185a565b610cd5565b6102776104133660046117e3565b60116020526000908152604090205481565b61029861043336600461182a565b610ce8565b61029861044636600461185a565b610d17565b6102986104593660046117e3565b6111d0565b6005546101dc906001600160a01b031681565b6104b461047f3660046117e3565b600f60205260009081526040902080546001820154600283015460038401546004850154600590950154939492939192909186565b604080519687526020870195909552938501929092526060840152608083015260a082015260c0016101f0565b6102776104ef3660046117e3565b6001600160a01b03166000908152600f602052604090206001015490565b600260015414156105655760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260015560006105758261126b565b336000908152600e6020526040902060e0820151919250600a91156105d15760405162461bcd60e51b8152602060048201526012602482015271105b1c9958591e481dda5d1a191c985dd95960721b604482015260640161055c565b428360600151106105e157600080fd5b6105ea33610a6e565b8251336000908152600f60205260408120600201805490919061060e9084906119e5565b90915550508251336000908152600f60205260408120600101805490919061063790849061198e565b9091555050602080840151336000908152600f909252604082206003018054919290916106659084906119e5565b909155505060c0830151336000908152600f6020526040812060040180549091906106919084906119e5565b90915550508251815482906000906106aa9084906119e5565b909155505060208301516001820180546000906106c89084906119e5565b909155505060c08301516002820180546000906106e69084906119e5565b909155505082516002830180546000906107019084906119e5565b9091555050602083015160038301805460009061071f9084906119e5565b90915550508251600a54610740916001600160a01b0390911690339061135c565b5050600160e0909101819052805550565b6001600160a01b038181166000908152600e6020526040808220600b5460075460085493516370a0823160e01b815293861660048501529394600a949293919286929116906370a082319060240160206040518083038186803b1580156107b757600080fd5b505afa1580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef9190611842565b9050600083600301544311801561080557508115155b80156108115750835415155b156108a6576000610826856003015443610cd5565b9050600061083f600954836113c490919063ffffffff16565b905061087161086a886003015461086464e8d4a51000856113c490919063ffffffff16565b906113d0565b86906113dc565b94506108a1866002015461089b64e8d4a51000610864898b600101546113c490919063ffffffff16565b906113e8565b925050505b9695505050505050565b60065460405163017043b560e51b8152336004820152602481018390526001600160a01b0390911690632e0876a090604401600060405180830381600087803b1580156108fc57600080fd5b505af1158015610910573d6000803e3d6000fd5b5050505050565b6000546001600160a01b031633146109415760405162461bcd60e51b815260040161055c90611959565b6109496113f4565b565b6006546000906001600160a01b0316331461096557600080fd5b61096e82610a6e565b506001600160a01b03818116600090815260116020908152604080832054600f9092529182902043600590910155600754600654925163095ea7b360e01b81529284166004840152602483018290529092169063095ea7b390604401602060405180830381600087803b1580156109e457600080fd5b505af11580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c919061180a565b506001600160a01b0390911660009081526011602052604081205590565b6000546001600160a01b03163314610a645760405162461bcd60e51b815260040161055c90611959565b6109496000611487565b6001600160a01b0381166000908152600e6020526040902060030154600a904311610a97575050565b6007546008546040516370a0823160e01b81526001600160a01b03918216600482015260009291909116906370a082319060240160206040518083038186803b158015610ae357600080fd5b505afa158015610af7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1b9190611842565b905080610b445750506001600160a01b03166000908152600e6020526040902043600390910155565b6000610b4f84610751565b6001600160a01b038516600090815260116020526040812080549293508392909190610b7c90849061198e565b9091555050600383015415610bb8576003830154610bb290610ba7906108648464e8d4a510006113c4565b6001850154906113dc565b60018401555b5050506001600160a01b03166000908152600e6020526040902043600390910155565b6001600160a01b0381166000908152600e60209081526040808320600401805482518185028101850190935280835260609492939192909184015b82821015610c9857600084815260209081902060408051610100810182526008860290920180548352600180820154848601526002820154928401929092526003810154606084015260048101546080840152600581015460a0840152600681015460c08401526007015460ff16151560e08301529083529092019101610c16565b505050509050919050565b6000546001600160a01b03163314610ccd5760405162461bcd60e51b815260040161055c90611959565b6109496114d7565b6000610ce182846113e8565b9392505050565b6000546001600160a01b03163314610d125760405162461bcd60e51b815260040161055c90611959565b600955565b60026001541415610d6a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161055c565b6002600155610d7b60025460ff1690565b15610dbb5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161055c565b8080601e1480610dcb575080605a145b80610dd657508060b4145b80610de2575080610168145b610e275760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a59081cdd185ada5b99c81c195c9a5bd960521b604482015260640161055c565b60008311610e665760405162461bcd60e51b815260206004820152600c60248201526b15dc9bdb99c8185b5bdd5b9d60a21b604482015260640161055c565b600a54604051636eb1769f60e11b815233600482015230602482015284916001600160a01b03169063dd62ed3e9060440160206040518083038186803b158015610eaf57600080fd5b505afa158015610ec3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee79190611842565b1015610ef257600080fd5b336000818152600e6020526040902090600a90610f0e90610a6e565b6000604051806101000160405280878152602001610f54670de0b6b3a76400006108648a600360008c8152602001908152602001600020546113c490919063ffffffff16565b8152602001428152602001610f856004600089815260200190815260200160002054426113dc90919063ffffffff16565b8152602001868152602001438152602001610fb664e8d4a5100061086486600101548b6113c490919063ffffffff16565b81526000602091820181905260c0830151338252600f9092526040812060040180549394509192610fe890849061198e565b90915550508051336000908152600f60205260408120600201805490919061101190849061198e565b9091555050602080820151336000908152600f9092526040822060030180549192909161103f90849061198e565b9091555050336000908152600f602052604081204360059091015560028301805488929061106e90849061198e565b909155505060008581526003602052604090205461109a90670de0b6b3a76400009061086490896113c4565b8260030160008282546110ad919061198e565b90915550508254869084906000906110c690849061198e565b90915550506000858152600360205260409020546110f290670de0b6b3a76400009061086490896113c4565b836001016000828254611105919061198e565b909155505060c081015160028401805460009061112390849061198e565b90915550504360038481019190915560048085018054600180820183556000928352602092839020865160089093020191825591850151918101919091556040840151600282015560608401519281019290925560808301519082015560a0820151600582015560c0820151600682015560e08201516007909101805460ff191691151591909117905581546111c4906001600160a01b0316333089611552565b50506001805550505050565b6000546001600160a01b031633146111fa5760405162461bcd60e51b815260040161055c90611959565b6001600160a01b03811661125f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161055c565b61126881611487565b50565b6112b5604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b336000908152600e602052604090206004018054839081106112e757634e487b7160e01b600052603260045260246000fd5b600091825260209182902060408051610100810182526008909302909101805483526001810154938301939093526002830154908201526003820154606082015260048201546080820152600582015460a0820152600682015460c082015260079091015460ff16151560e082015292915050565b6040516001600160a01b0383166024820152604481018290526113bf90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611590565b505050565b6000610ce182846119c6565b6000610ce182846119a6565b6000610ce1828461198e565b6000610ce182846119e5565b60025460ff1661143d5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161055c565b6002805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60025460ff161561151d5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161055c565b6002805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861146a3390565b6040516001600160a01b038085166024830152831660448201526064810182905261158a9085906323b872dd60e01b90608401611388565b50505050565b60006115e5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116629092919063ffffffff16565b8051909150156113bf5780806020019051810190611603919061180a565b6113bf5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161055c565b60606116718484600085611679565b949350505050565b6060824710156116da5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161055c565b6001600160a01b0385163b6117315760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161055c565b600080866001600160a01b0316858760405161174d919061187b565b60006040518083038185875af1925050503d806000811461178a576040519150601f19603f3d011682016040523d82523d6000602084013e61178f565b606091505b509150915061179f8282866117aa565b979650505050505050565b606083156117b9575081610ce1565b8251156117c95782518084602001fd5b8160405162461bcd60e51b815260040161055c9190611926565b6000602082840312156117f4578081fd5b81356001600160a01b0381168114610ce1578182fd5b60006020828403121561181b578081fd5b81518015158114610ce1578182fd5b60006020828403121561183b578081fd5b5035919050565b600060208284031215611853578081fd5b5051919050565b6000806040838503121561186c578081fd5b50508035926020909101359150565b6000825161188d8184602087016119fc565b9190910192915050565b602080825282518282018190526000919060409081850190868401855b828110156119195781518051855286810151878601528581015186860152606080820151908601526080808201519086015260a0808201519086015260c0808201519086015260e09081015115159085015261010090930192908501906001016118b4565b5091979650505050505050565b60208152600082518060208401526119458160408501602087016119fc565b601f01601f19169190910160400192915050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082198211156119a1576119a1611a28565b500190565b6000826119c157634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156119e0576119e0611a28565b500290565b6000828210156119f7576119f7611a28565b500390565b60005b83811015611a175781810151838201526020016119ff565b8381111561158a5750506000910152565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220e425d3b97ff477ac3ac0437932b6c5475fc15bd61b45291007e571772978fb7764736f6c63430008040033";

export class MasterChef__factory extends ContractFactory {
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
    _rewardingToken: string,
    _vesting: string,
    _tokenPerBlock: BigNumberish,
    _supply: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterChef> {
    return super.deploy(
      _stakingToken,
      _rewardingToken,
      _vesting,
      _tokenPerBlock,
      _supply,
      overrides || {}
    ) as Promise<MasterChef>;
  }
  getDeployTransaction(
    _stakingToken: string,
    _rewardingToken: string,
    _vesting: string,
    _tokenPerBlock: BigNumberish,
    _supply: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _stakingToken,
      _rewardingToken,
      _vesting,
      _tokenPerBlock,
      _supply,
      overrides || {}
    );
  }
  attach(address: string): MasterChef {
    return super.attach(address) as MasterChef;
  }
  connect(signer: Signer): MasterChef__factory {
    return super.connect(signer) as MasterChef__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterChefInterface {
    return new utils.Interface(_abi) as MasterChefInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChef {
    return new Contract(address, _abi, signerOrProvider) as MasterChef;
  }
}
