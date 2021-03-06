import CONFIGURATION from './config';
const address = CONFIGURATION.superblockContract;
const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "trustedClaimManager",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "bestSuperblock",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "minProposalDeposit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "respondBlockHeaderCost",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "superblockCost",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "minChallengeDeposit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "respondMerkleRootHashesCost",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "minReward",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "verifySuperblockCost",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "bestSuperblockAccumulatedWork",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "challengeCost",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "superblockHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "who",
        "type": "address"
      }
    ],
    "name": "NewSuperblock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "superblockHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "who",
        "type": "address"
      }
    ],
    "name": "ApprovedSuperblock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "superblockHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "who",
        "type": "address"
      }
    ],
    "name": "ChallengeSuperblock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "superblockHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "who",
        "type": "address"
      }
    ],
    "name": "SemiApprovedSuperblock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "superblockHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "who",
        "type": "address"
      }
    ],
    "name": "InvalidSuperblock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "superblockHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "err",
        "type": "uint256"
      }
    ],
    "name": "ErrorSuperblock",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "txHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "returnCode",
        "type": "uint256"
      }
    ],
    "name": "VerifyTransaction",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "txHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "returnCode",
        "type": "uint256"
      }
    ],
    "name": "RelayTransaction",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_claimManager",
        "type": "address"
      }
    ],
    "name": "setClaimManager",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_blocksMerkleRoot",
        "type": "bytes32"
      },
      {
        "name": "_accumulatedWork",
        "type": "uint256"
      },
      {
        "name": "_timestamp",
        "type": "uint256"
      },
      {
        "name": "_prevTimestamp",
        "type": "uint256"
      },
      {
        "name": "_lastHash",
        "type": "bytes32"
      },
      {
        "name": "_lastBits",
        "type": "uint32"
      },
      {
        "name": "_parentId",
        "type": "bytes32"
      },
      {
        "name": "_blockHeight",
        "type": "uint32"
      }
    ],
    "name": "initialize",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_blocksMerkleRoot",
        "type": "bytes32"
      },
      {
        "name": "_accumulatedWork",
        "type": "uint256"
      },
      {
        "name": "_timestamp",
        "type": "uint256"
      },
      {
        "name": "_prevTimestamp",
        "type": "uint256"
      },
      {
        "name": "_lastHash",
        "type": "bytes32"
      },
      {
        "name": "_lastBits",
        "type": "uint32"
      },
      {
        "name": "_parentId",
        "type": "bytes32"
      },
      {
        "name": "_blockHeight",
        "type": "uint32"
      },
      {
        "name": "submitter",
        "type": "address"
      }
    ],
    "name": "propose",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      },
      {
        "name": "_validator",
        "type": "address"
      }
    ],
    "name": "confirm",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      },
      {
        "name": "_challenger",
        "type": "address"
      }
    ],
    "name": "challenge",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      },
      {
        "name": "_validator",
        "type": "address"
      }
    ],
    "name": "semiApprove",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      },
      {
        "name": "_validator",
        "type": "address"
      }
    ],
    "name": "invalidate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_txBytes",
        "type": "bytes"
      },
      {
        "name": "_txIndex",
        "type": "uint256"
      },
      {
        "name": "_txSiblings",
        "type": "uint256[]"
      },
      {
        "name": "_syscoinBlockHeader",
        "type": "bytes"
      },
      {
        "name": "_syscoinBlockIndex",
        "type": "uint256"
      },
      {
        "name": "_syscoinBlockSiblings",
        "type": "uint256[]"
      },
      {
        "name": "_superblockHash",
        "type": "bytes32"
      },
      {
        "name": "_untrustedTargetContract",
        "type": "address"
      }
    ],
    "name": "relayTx",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_txBytes",
        "type": "bytes"
      },
      {
        "name": "_txIndex",
        "type": "uint256"
      },
      {
        "name": "_siblings",
        "type": "uint256[]"
      },
      {
        "name": "_txBlockHeaderBytes",
        "type": "bytes"
      },
      {
        "name": "_txsuperblockHash",
        "type": "bytes32"
      }
    ],
    "name": "verifyTx",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_blocksMerkleRoot",
        "type": "bytes32"
      },
      {
        "name": "_accumulatedWork",
        "type": "uint256"
      },
      {
        "name": "_timestamp",
        "type": "uint256"
      },
      {
        "name": "_prevTimestamp",
        "type": "uint256"
      },
      {
        "name": "_lastHash",
        "type": "bytes32"
      },
      {
        "name": "_lastBits",
        "type": "uint32"
      },
      {
        "name": "_parentId",
        "type": "bytes32"
      },
      {
        "name": "_blockHeight",
        "type": "uint32"
      }
    ],
    "name": "calcSuperblockHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBestSuperblock",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblock",
    "outputs": [
      {
        "name": "_blocksMerkleRoot",
        "type": "bytes32"
      },
      {
        "name": "_accumulatedWork",
        "type": "uint256"
      },
      {
        "name": "_timestamp",
        "type": "uint256"
      },
      {
        "name": "_prevTimestamp",
        "type": "uint256"
      },
      {
        "name": "_lastHash",
        "type": "bytes32"
      },
      {
        "name": "_lastBits",
        "type": "uint32"
      },
      {
        "name": "_parentId",
        "type": "bytes32"
      },
      {
        "name": "_submitter",
        "type": "address"
      },
      {
        "name": "_status",
        "type": "uint8"
      },
      {
        "name": "_blockHeight",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockHeight",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockAncestors",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockMerkleRoot",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockTimestamp",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockPrevTimestamp",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockLastHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockParentId",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockAccumulatedWork",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "getSuperblockStatus",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getIndexNextSuperblock",
    "outputs": [
      {
        "name": "",
        "type": "uint32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "hashes",
        "type": "bytes32[]"
      }
    ],
    "name": "makeMerkle",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_superblockHash",
        "type": "bytes32"
      }
    ],
    "name": "isApproved",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getChainHeight",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSuperblockLocator",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[9]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_height",
        "type": "uint256"
      }
    ],
    "name": "getSuperblockAt",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
var sbconfig = {
  data: abi,
  contract: address
}

export default sbconfig;