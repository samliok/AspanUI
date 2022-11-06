// vault contract abi
exports.VALUT_ABI = [];
// vault contact address
exports.VAULT_ADDRESS = "temp value";

exports.PRIVATE_KEY =
  "4bb6a5b1003da2eab5fde958503cdc39964c2076aff7a1c6d3eff8681757cff6";
// vault contract abi
exports.ORACLE_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usdcAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdcAggregatorAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "priceFeedAddress",
        type: "address",
      },
    ],
    name: "getPriceFromAggregator",
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
        name: "vaultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "aTokenAddresses",
        type: "address[]",
      },
    ],
    name: "getUSDCPriceOf",
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
        name: "vaultAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "aTokenAddresses",
        type: "address[]",
      },
    ],
    name: "getUSDPriceOf",
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
        name: "valueHolder",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "aTokenAddresses",
        type: "address[]",
      },
    ],
    name: "getUSDValueOf",
    outputs: [
      {
        internalType: "uint256",
        name: "usdValue",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20Address",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregatorAddress",
        type: "address",
      },
    ],
    name: "setAggregatorAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usdcAddress",
        type: "address",
      },
    ],
    name: "setUSDCaddress",
    outputs: [],
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
];

// vault contact address
exports.ORACLE_ADDRESS = "0x33B2d557B000aD6b2cbc69e05E8C2dEcf967Acc7";
