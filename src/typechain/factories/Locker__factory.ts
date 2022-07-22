/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Locker, LockerInterface } from "../Locker";
import { _abi } from '../abi/LockerABI';

const _bytecode =
  "0x60806040526224ea0060045534801561001757600080fd5b50604051611025380380611025833981016040819052610036916100bb565b61003f3361006b565b600180546001600160a01b0319166001600160a01b039290921691909117905562093a806002556100e9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100cc578081fd5b81516001600160a01b03811681146100e2578182fd5b9392505050565b610f2d806100f86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637bcb4a641161008c578063b36a4ab111610066578063b36a4ab114610189578063d54ad2a11461019c578063f2fde38b146101a5578063fc0c546a146101b857600080fd5b80637bcb4a64146101315780638da5cb5b14610151578063ac4afa381461017657600080fd5b80631514617e146100d45780632aa96acd146100f0578063458efde3146100f95780636459b25014610103578063715018a6146101165780637935510b1461011e575b600080fd5b6100dd60045481565b6040519081526020015b60405180910390f35b6100dd60025481565b6101016101cb565b005b6100dd610111366004610c93565b610661565b6101016106ff565b61010161012c366004610da3565b610735565b61014461013f366004610c79565b61098a565b6040516100e79190610dd3565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100e7565b61015e610184366004610da3565b610a39565b610101610197366004610cbc565b610a63565b6100dd60035481565b6101016101b3366004610c79565b610b53565b60015461015e906001600160a01b031681565b33600090815260066020526040902054600181106102e3573360009081526006602052604081206101fd600184610e99565b8154811061021b57634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805160a0810182526005909302909101805460ff161515835260018101549383019390935260028301546001600160a01b0316908201526003820154606082018190526004909201546080820152915062093a809061028e906102884290565b90610bee565b10156102e15760405162461bcd60e51b815260206004820152601f60248201527f43616e6e6f74207665737420616761696e206265666f7265203720646179730060448201526064015b60405180910390fd5b505b6000805b6005548110156104ce5760006005828154811061031457634e487b7160e01b600052603260045260246000fd5b600091825260209091200154604051630a5a224760e31b81523360048201526001600160a01b03909116906352d1123890602401602060405180830381600087803b15801561036257600080fd5b505af1158015610376573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039a9190610dbb565b90506103a68184610e81565b925080156104bb57600154600580546001600160a01b03909216916323b872dd9190859081106103e657634e487b7160e01b600052603260045260246000fd5b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b03909116600482015230602482015260448101849052606401602060405180830381600087803b15801561044057600080fd5b505af1158015610454573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104789190610d83565b6104bb5760405162461bcd60e51b81526020600482015260146024820152734e6f7420656e6f75676820616c6c6f776e61636560601b60448201526064016102d8565b50806104c681610eb0565b9150506102e7565b506000811161051f5760405162461bcd60e51b815260206004820152601760248201527f6e6f74206861766520656e6f756768207265776172647300000000000000000060448201526064016102d8565b60006040518060a00160405280600015158152602001838152602001336001600160a01b031681526020016105514290565b81526020016105696004546105634290565b90610c01565b9052336000908152600660209081526040808320805460018082018355918552938390208551600590950201805460ff191694151594909417845591840151838301558301516002830180546001600160a01b0319166001600160a01b039092169190911790556060830151600383015560808301516004909201919091559091506105f6908490610e81565b81604001516001600160a01b03167f941cbd834819010c51a7ba64d08be10e66647609622f7b32c3e81db19fdb0387836020015184606001518560800151604051610654939291909283526020830191909152604082015260600190565b60405180910390a3505050565b6001600160a01b038216600090815260066020526040812080548291908490811061069c57634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805160a0810182526005909302909101805460ff1615158352600181015493830184905260028101546001600160a01b031691830191909152600381015460608301526004015460809091015291505092915050565b6000546001600160a01b031633146107295760405162461bcd60e51b81526004016102d890610e4c565b6107336000610c0d565b565b33600090815260066020526040812080548390811061076457634e487b7160e01b600052603260045260246000fd5b906000526020600020906005020190508060010154600014156107b95760405162461bcd60e51b815260206004820152600d60248201526c0d2dcecc2d8d2c840d2dcc8caf609b1b60448201526064016102d8565b805460ff16156107fd5760405162461bcd60e51b815260206004820152600f60248201526e105b1c9958591e4818db185a5b5959608a1b60448201526064016102d8565b4281600401541061085a5760405162461bcd60e51b815260206004820152602160248201527f63616e277420636c61696d206265666f72652076657374696e6720706572696f6044820152601960fa1b60648201526084016102d8565b600180549082015460405163a9059cbb60e01b815233600482015260248101919091526001600160a01b039091169063a9059cbb90604401602060405180830381600087803b1580156108ac57600080fd5b505af11580156108c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e49190610d83565b61091c5760405162461bcd60e51b81526020600482015260096024820152686e6f20746f6b656e7360b81b60448201526064016102d8565b805460ff19166001908117825581015460038201546004830154849233927f68f63ec46cb9860416fca2d4e91e8556ee9bebfbebd14b92a5d1130190639220926109634290565b60408051948552602085019390935291830152606082015260800160405180910390a35050565b6001600160a01b0381166000908152600660209081526040808320805482518185028101850190935280835260609492939192909184015b82821015610a2e5760008481526020908190206040805160a08101825260058602909201805460ff16151583526001808201548486015260028201546001600160a01b0316928401929092526003810154606084015260040154608083015290835290920191016109c2565b505050509050919050565b60058181548110610a4957600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b03163314610a8d5760405162461bcd60e51b81526004016102d890610e4c565b60005b8151811015610b4f5760006001600160a01b0316828281518110610ac457634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03161415610ae057600080fd5b6005828281518110610b0257634e487b7160e01b600052603260045260246000fd5b60209081029190910181015182546001810184556000938452919092200180546001600160a01b0319166001600160a01b0390921691909117905580610b4781610eb0565b915050610a90565b5050565b6000546001600160a01b03163314610b7d5760405162461bcd60e51b81526004016102d890610e4c565b6001600160a01b038116610be25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102d8565b610beb81610c0d565b50565b6000610bfa8284610e99565b9392505050565b6000610bfa8284610e81565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610c7457600080fd5b919050565b600060208284031215610c8a578081fd5b610bfa82610c5d565b60008060408385031215610ca5578081fd5b610cae83610c5d565b946020939093013593505050565b60006020808385031215610cce578182fd5b823567ffffffffffffffff80821115610ce5578384fd5b818501915085601f830112610cf8578384fd5b813581811115610d0a57610d0a610ee1565b8060051b604051601f19603f83011681018181108582111715610d2f57610d2f610ee1565b604052828152858101935084860182860187018a1015610d4d578788fd5b8795505b83861015610d7657610d6281610c5d565b855260019590950194938601938601610d51565b5098975050505050505050565b600060208284031215610d94578081fd5b81518015158114610bfa578182fd5b600060208284031215610db4578081fd5b5035919050565b600060208284031215610dcc578081fd5b5051919050565b602080825282518282018190526000919060409081850190868401855b82811015610e3f5781518051151585528681015187860152858101516001600160a01b031686860152606080820151908601526080908101519085015260a09093019290850190600101610df0565b5091979650505050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115610e9457610e94610ecb565b500190565b600082821015610eab57610eab610ecb565b500390565b6000600019821415610ec457610ec4610ecb565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212204de86f91e0766cb9ae52327f67829e2724c8cf5ba1b9fbcc83268c6f2932e72e64736f6c63430008040033";

export class Locker__factory extends ContractFactory {
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
  ): Promise<Locker> {
    return super.deploy(_token, overrides || {}) as Promise<Locker>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): Locker {
    return super.attach(address) as Locker;
  }
  connect(signer: Signer): Locker__factory {
    return super.connect(signer) as Locker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockerInterface {
    return new utils.Interface(_abi) as LockerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Locker {
    return new Contract(address, _abi, signerOrProvider) as Locker;
  }
}
