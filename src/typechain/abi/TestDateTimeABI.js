export const _abi = [
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