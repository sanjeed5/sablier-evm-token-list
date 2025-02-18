const { version } = require("../package.json");

const abstractMainnet = require("./tokens/abstract-mainnet.json");
const arbitrumMainnet = require("./tokens/arbitrum-mainnet.json");
const avalancheMainnet = require("./tokens/avalanche-mainnet.json");
const baseMainnet = require("./tokens/base-mainnet.json");
const baseSepolia = require("./tokens/base-sepolia.json");
const berachainMainnet = require("./tokens/berachain-mainnet.json");
const blastMainnet = require("./tokens/blast-mainnet.json");
const bscMainnet = require("./tokens/bsc-mainnet.json");
const chilizMainnet = require("./tokens/chiliz-mainnet.json");
const ethereumMainnet = require("./tokens/ethereum-mainnet.json");
const ethereumSepolia = require("./tokens/ethereum-sepolia.json");
const gnosisMainnet = require("./tokens/gnosis-mainnet.json");
const iotexMainnet = require("./tokens/iotex-mainnet.json");
const optimismMainnet = require("./tokens/optimism-mainnet.json");
const lightlinkMainnet = require("./tokens/lightlink-mainnet.json");
const lineaMainnet = require("./tokens/linea-mainnet.json");
const morphMainnet = require("./tokens/morph-mainnet.json");
const modeMainnet = require("./tokens/mode-mainnet.json");
const polygonMainnet = require("./tokens/polygon-mainnet.json");
const roninMainnet = require("./tokens/ronin-mainnet.json");
const roninTestnet = require("./tokens/ronin-testnet.json");
const scrollTestnet = require("./tokens/scroll-mainnet.json");
const superseedMainnet = require("./tokens/superseed-mainnet.json");
const tangleMainnet = require("./tokens/tangle-mainnet.json");
const xdcMainnet = require("./tokens/xdc-mainnet.json");
const zksyncMainnet = require("./tokens/zksync-mainnet.json");

const bridgeUtils = require("@uniswap/token-list-bridge-utils");

module.exports = function buildList() {
  const parsed = version.split(".");
  const l1List = {
    name: "Sablier Community Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://files.sablier.com/icon-180x180.png",
    keywords: ["sablier", "default"],
    tokens: [
      ...ethereumMainnet,
      ...abstractMainnet,
      ...avalancheMainnet,
      ...arbitrumMainnet,
      ...baseMainnet,
      ...baseSepolia,
      ...berachainMainnet,
      ...blastMainnet,
      ...bscMainnet,
      ...chilizMainnet,
      ...ethereumSepolia,
      ...gnosisMainnet,
      ...iotexMainnet,
      ...lightlinkMainnet,
      ...lineaMainnet,
      ...modeMainnet,
      ...morphMainnet,
      ...optimismMainnet,
      ...polygonMainnet,
      ...roninMainnet,
      ...roninTestnet,
      ...scrollTestnet,
      ...superseedMainnet,
      ...tangleMainnet,
      ...xdcMainnet,
      ...zksyncMainnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return bridgeUtils.chainify(l1List);
};
