/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestDateTime, TestDateTimeInterface } from "../TestDateTime";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
    ],
    name: "_getDaysInMonth",
    outputs: [
      {
        internalType: "uint256",
        name: "daysInMonth",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
    ],
    name: "_isLeapYear",
    outputs: [
      {
        internalType: "bool",
        name: "leapYear",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "addDays",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hours",
        type: "uint256",
      },
    ],
    name: "addHours",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minutes",
        type: "uint256",
      },
    ],
    name: "addMinutes",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_months",
        type: "uint256",
      },
    ],
    name: "addMonths",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_seconds",
        type: "uint256",
      },
    ],
    name: "addSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_years",
        type: "uint256",
      },
    ],
    name: "addYears",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTimestamp",
        type: "uint256",
      },
    ],
    name: "diffDays",
    outputs: [
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTimestamp",
        type: "uint256",
      },
    ],
    name: "diffHours",
    outputs: [
      {
        internalType: "uint256",
        name: "_hours",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTimestamp",
        type: "uint256",
      },
    ],
    name: "diffMinutes",
    outputs: [
      {
        internalType: "uint256",
        name: "_minutes",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTimestamp",
        type: "uint256",
      },
    ],
    name: "diffMonths",
    outputs: [
      {
        internalType: "uint256",
        name: "_months",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTimestamp",
        type: "uint256",
      },
    ],
    name: "diffSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "_seconds",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toTimestamp",
        type: "uint256",
      },
    ],
    name: "diffYears",
    outputs: [
      {
        internalType: "uint256",
        name: "_years",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getDay",
    outputs: [
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getDayOfWeek",
    outputs: [
      {
        internalType: "uint256",
        name: "dayOfWeek",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getDaysInMonth",
    outputs: [
      {
        internalType: "uint256",
        name: "daysInMonth",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getHour",
    outputs: [
      {
        internalType: "uint256",
        name: "hour",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getMinute",
    outputs: [
      {
        internalType: "uint256",
        name: "minute",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getMonth",
    outputs: [
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getSecond",
    outputs: [
      {
        internalType: "uint256",
        name: "second",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "getYear",
    outputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "isLeapYear",
    outputs: [
      {
        internalType: "bool",
        name: "leapYear",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
    ],
    name: "isValidDate",
    outputs: [
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hour",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minute",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "second",
        type: "uint256",
      },
    ],
    name: "isValidDateTime",
    outputs: [
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "isWeekDay",
    outputs: [
      {
        internalType: "bool",
        name: "weekDay",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "isWeekEnd",
    outputs: [
      {
        internalType: "bool",
        name: "weekEnd",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "nextYear",
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
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_days",
        type: "uint256",
      },
    ],
    name: "subDays",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_hours",
        type: "uint256",
      },
    ],
    name: "subHours",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minutes",
        type: "uint256",
      },
    ],
    name: "subMinutes",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_months",
        type: "uint256",
      },
    ],
    name: "subMonths",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_seconds",
        type: "uint256",
      },
    ],
    name: "subSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_years",
        type: "uint256",
      },
    ],
    name: "subYears",
    outputs: [
      {
        internalType: "uint256",
        name: "newTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "test",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
    ],
    name: "timestampFromDate",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hour",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minute",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "second",
        type: "uint256",
      },
    ],
    name: "timestampFromDateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "timestampToDate",
    outputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "timestampToDateTime",
    outputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hour",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minute",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "second",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506114a9806100206000396000f3fe608060405234801561001057600080fd5b506004361061023c5760003560e01c80637217523c1161013b578063b8d16dbc116100b8578063ea1c16901161007c578063ea1c1690146104fb578063f615ed541461053b578063f8a8fd6d1461054e578063fa93f88314610558578063ff2258cb1461056b57600080fd5b8063b8d16dbc14610481578063c7b6fd6a14610494578063c9d34622146104a7578063d6582d0d146104ba578063de5101af146104cd57600080fd5b806392d66313116100ff57806392d66313146104225780639e524caa14610435578063a324ad2414610448578063ad203bd41461045b578063b05eb08d1461046e57600080fd5b80637217523c146103c35780637be34109146103d657806389a3a00d146103e95780638aa001fc146103fc5780638d4a2d391461040f57600080fd5b80633e239e1a116101c9578063444fda821161018d578063444fda82146103645780634b321502146103775780635e05bd6d1461038a57806362fb96971461039d57806365c72840146103b057600080fd5b80633e239e1a146103055780633f9e0eb7146103185780634355644d1461032b5780634371c4651461033e578063442b8c791461035157600080fd5b806314b2d6dc1161021057806314b2d6dc146102965780631f4f77b2146102b957806322f8a2b8146102cc5780632af123b8146102df5780633293d007146102f257600080fd5b80625015531461024157806302e98e0d1461026757806310848ddf1461027a578063146bea7b1461028d575b600080fd5b61025461024f366004611212565b61057e565b6040519081526020015b60405180910390f35b610254610275366004611212565b610591565b6102546102883660046111fa565b61059d565b61025460005481565b6102a96102a4366004611233565b6105ae565b604051901515815260200161025e565b6102546102c7366004611233565b6105c3565b6102546102da3660046111fa565b6105d0565b6102546102ed366004611212565b6105db565b6102a961030036600461125e565b6105e7565b6102546103133660046111fa565b610602565b610254610326366004611212565b61060d565b610254610339366004611212565b610619565b6102a961034c3660046111fa565b610625565b61025461035f366004611212565b610630565b610254610372366004611212565b61063c565b610254610385366004611212565b610648565b61025461039836600461125e565b610654565b6102546103ab366004611212565b61066e565b6102546103be3660046111fa565b61067a565b6102546103d1366004611212565b610685565b6102546103e4366004611212565b610691565b6102546103f7366004611212565b61069d565b61025461040a3660046111fa565b6106a9565b61025461041d366004611212565b6106b4565b6102546104303660046111fa565b6106c0565b610254610443366004611212565b6106cb565b6102546104563660046111fa565b6106d7565b610254610469366004611212565b6106e2565b6102a961047c3660046111fa565b6106ee565b6102a961048f3660046111fa565b6106f9565b6102546104a2366004611212565b610704565b6102546104b5366004611212565b610710565b6102a96104c83660046111fa565b61071c565b6104e06104db3660046111fa565b610727565b6040805193845260208401929092529082015260600161025e565b61050e6105093660046111fa565b610742565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161025e565b610254610549366004611212565b610768565b610556610774565b005b6102546105663660046111fa565b610786565b610254610579366004611212565b610791565b600061058a838361079d565b9392505050565b600061058a83836107c4565b60006105a8826107e9565b92915050565b60006105bb848484610811565b949350505050565b60006105bb848484610867565b60006105a882610882565b600061058a83836108b6565b60006105f78787878787876108d2565b979650505050505050565b60006105a882610912565b600061058a8383610930565b600061058a83836109b6565b60006105a882610a88565b600061058a8383610a9d565b600061058a8383610ad1565b600061058a8383610b52565b60006105f7878787878787610b79565b9695505050505050565b600061058a8383610bca565b60006105a882610be3565b600061058a8383610bf5565b600061058a8383610c04565b600061058a8383610c7b565b60006105a882610c88565b600061058a8383610c95565b60006105a882610ca1565b600061058a8383610cbc565b60006105a882610cc9565b600061058a8383610cdb565b60006105a882610daf565b60006105a882610deb565b600061058a8383610e0b565b600061058a8383610e1a565b60006105a882610e37565b600080600061073584610e4c565b9196909550909350915050565b60008060008060008061075487610e60565b949c939b5091995097509550909350915050565b600061058a8383610ecf565b42610780816001610a9d565b60005550565b60006105a882610edb565b600061058a8383610ef7565b60006107ab610e10836113be565b6107b5908461141c565b9050828111156105a857600080fd5b6000818311156107d357600080fd5b603c6107df848461141c565b61058a9190611327565b600080806108026107fd6201518086611327565b610f49565b50915091506105bb8282610930565b60006107b284101580156108255750600083115b80156108325750600c8311155b1561058a5760006108438585610930565b90506000831180156108555750808311155b1561085f57600191505b509392505050565b6000620151806108788585856110bd565b6105bb91906113be565b6000806108926201518084611327565b905060076108a18260036112e1565b6108ab9190611433565b61058a9060016112e1565b6000818311156108c557600080fd5b610e106107df848461141c565b60006108df878787610811565b15610664576018841080156108f45750603c83105b80156109005750603c82105b15610664575060019695505050505050565b6000806109226201518084611433565b905061058a610e1082611327565b600081600114806109415750816003145b8061094c5750816005145b806109575750816007145b806109625750816008145b8061096d575081600a145b80610978575081600c145b156109855750601f6105a8565b816002146109955750601e6105a8565b61099e83610daf565b6109a957601c6109ac565b601d5b60ff169392505050565b60008080806109cb6107fd6201518088611327565b919450925090506109dc85836112e1565b9150600c6109eb60018461141c565b6109f59190611327565b6109ff90846112e1565b9250600c610a0e60018461141c565b610a189190611433565b610a239060016112e1565b91506000610a318484610930565b905080821115610a3f578091505b610a4c6201518088611433565b62015180610a5b8686866110bd565b610a6591906113be565b610a6f91906112e1565b945086851015610a7e57600080fd5b5050505092915050565b60006006610a9583610882565b101592915050565b6000808080610ab26107fd6201518088611327565b91945092509050610ac385846112e1565b92506000610a318484610930565b6000808080610ae66107fd6201518088611327565b91945092509050610af7858461141c565b92506000610b058484610930565b905080821115610b13578091505b610b206201518088611433565b62015180610b2f8686866110bd565b610b3991906113be565b610b4391906112e1565b945086851115610a7e57600080fd5b6000610b60610e10836113be565b610b6a90846112e1565b9050828110156105a857600080fd5b600081610b87603c856113be565b610b93610e10876113be565b62015180610ba28b8b8b6110bd565b610bac91906113be565b610bb691906112e1565b610bc091906112e1565b6105f791906112e1565b600081831115610bd957600080fd5b61058a838361141c565b60006105bb6107fd6201518084611327565b6000610b6062015180836113be565b600081831115610c1357600080fd5b600080610c266107fd6201518087611327565b509092509050600080610c3f6107fd6201518088611327565b50909250905082610c5185600c6113be565b82610c5d85600c6113be565b610c6791906112e1565b610c71919061141c565b6105f7919061141c565b6000610b60603c836113be565b60006105a8603c83611433565b6000610b6a82846112e1565b6000610cb36107fd6201518084611327565b50909392505050565b60006107ab603c836113be565b600061085f6107fd6201518084611327565b6000808080610cf06107fd6201518088611327565b91945092509050600085610d0560018561141c565b610d1086600c6113be565b610d1a91906112e1565b610d24919061141c565b9050610d31600c82611327565b9350610d3e600c82611433565b610d499060016112e1565b92506000610d578585610930565b905080831115610d65578092505b610d726201518089611433565b62015180610d818787876110bd565b610d8b91906113be565b610d9591906112e1565b955087861115610da457600080fd5b505050505092915050565b6000610dbc600483611433565b158015610dd25750610dcf606483611433565b15155b806105a85750610de461019083611433565b1592915050565b600080610dfe6107fd6201518085611327565b5050905061058a81610daf565b60006107ab62015180836113be565b600081831115610e2957600080fd5b620151806107df848461141c565b60006005610e4483610882565b111592915050565b600080806107356107fd6201518086611327565b60008080808080610e776107fd6201518089611327565b919750955093506000610e8d6201518089611433565b9050610e9b610e1082611327565b9350610ea9610e1082611433565b9050610eb6603c82611327565b9250610ec3603c82611433565b91505091939550919395565b60006107b5828461141c565b600080610eea610e1084611433565b905061058a603c82611327565b600081831115610f0657600080fd5b6000610f186107fd6201518086611327565b505090506000610f3062015180856107fd9190611327565b505090508181610f40919061141c565b95945050505050565b60008080838162253d8c610f608362010bd96112a0565b610f6a91906112a0565b9050600062023ab1610f7d83600461133b565b610f8791906112f9565b90506004610f988262023ab161133b565b610fa39060036112a0565b610fad91906112f9565b610fb790836113dd565b9150600062164b09610fca8460016112a0565b610fd690610fa061133b565b610fe091906112f9565b90506004610ff0826105b561133b565b610ffa91906112f9565b61100490846113dd565b61100f90601f6112a0565b9250600061098f61102185605061133b565b61102b91906112f9565b90506000605061103d8361098f61133b565b61104791906112f9565b61105190866113dd565b905061105e600b836112f9565b945061106b85600c61133b565b6110768360026112a0565b61108091906113dd565b9150848361108f6031876113dd565b61109a90606461133b565b6110a491906112a0565b6110ae91906112a0565b9a919950975095505050505050565b60006107b28410156110ce57600080fd5b838383600062253d8c60046064600c6110e8600e886113dd565b6110f291906112f9565b6110fe886113246112a0565b61110891906112a0565b61111291906112f9565b61111d90600361133b565b61112791906112f9565b600c80611135600e886113dd565b61113f91906112f9565b61114a90600c61133b565b6111556002886113dd565b61115f91906113dd565b61116b9061016f61133b565b61117591906112f9565b6004600c611184600e896113dd565b61118e91906112f9565b61119a896112c06112a0565b6111a491906112a0565b6111b0906105b561133b565b6111ba91906112f9565b6111c6617d4b876113dd565b6111d091906112a0565b6111da91906112a0565b6111e491906113dd565b6111ee91906113dd565b98975050505050505050565b60006020828403121561120b578081fd5b5035919050565b60008060408385031215611224578081fd5b50508035926020909101359150565b600080600060608486031215611247578081fd5b505081359360208301359350604090920135919050565b60008060008060008060c08789031215611276578182fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b600080821280156001600160ff1b03849003851316156112c2576112c2611447565b600160ff1b83900384128116156112db576112db611447565b50500190565b600082198211156112f4576112f4611447565b500190565b6000826113085761130861145d565b600160ff1b82146000198414161561132257611322611447565b500590565b6000826113365761133661145d565b500490565b60006001600160ff1b038184138284138082168684048611161561136157611361611447565b600160ff1b8487128281168783058912161561137f5761137f611447565b85871292508782058712848416161561139a5761139a611447565b878505871281841616156113b0576113b0611447565b505050929093029392505050565b60008160001904831182151516156113d8576113d8611447565b500290565b60008083128015600160ff1b8501841216156113fb576113fb611447565b6001600160ff1b038401831381161561141657611416611447565b50500390565b60008282101561142e5761142e611447565b500390565b6000826114425761144261145d565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfea2646970667358221220631e9039b3d1696b2407a980b60d785be91995f916228f5a9fdd54dd905e33e164736f6c63430008040033";

export class TestDateTime__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestDateTime> {
    return super.deploy(overrides || {}) as Promise<TestDateTime>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestDateTime {
    return super.attach(address) as TestDateTime;
  }
  connect(signer: Signer): TestDateTime__factory {
    return super.connect(signer) as TestDateTime__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestDateTimeInterface {
    return new utils.Interface(_abi) as TestDateTimeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestDateTime {
    return new Contract(address, _abi, signerOrProvider) as TestDateTime;
  }
}
