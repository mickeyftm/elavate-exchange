'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex
}

var JSBI = _interopDefault(require('jsbi'))
var invariant = _interopDefault(require('tiny-invariant'))
var address = require('@ethersproject/address')
var warning = _interopDefault(require('tiny-warning'))
var _Big = _interopDefault(require('big.js'))
var _Decimal = _interopDefault(require('decimal.js-light'))
var toFormat = _interopDefault(require('toformat'))
var solidity = require('@ethersproject/solidity')

;(function (ChainId) {
  ChainId[(ChainId['MAINNET'] = 1)] = 'MAINNET'
  ChainId[(ChainId['ROPSTEN'] = 3)] = 'ROPSTEN'
  ChainId[(ChainId['RINKEBY'] = 4)] = 'RINKEBY'
  ChainId[(ChainId['G\xD6RLI'] = 5)] = 'G\xD6RLI'
  ChainId[(ChainId['KOVAN'] = 42)] = 'KOVAN'
  ChainId[(ChainId['MATIC'] = 137)] = 'MATIC'
  ChainId[(ChainId['MATIC_TESTNET'] = 80001)] = 'MATIC_TESTNET'
  ChainId[(ChainId['FANTOM'] = 250)] = 'FANTOM'
  ChainId[(ChainId['FANTOM_TESTNET'] = 4002)] = 'FANTOM_TESTNET'
  ChainId[(ChainId['XDAI'] = 100)] = 'XDAI'
  ChainId[(ChainId['BSC'] = 56)] = 'BSC'
  ChainId[(ChainId['BSC_TESTNET'] = 97)] = 'BSC_TESTNET'
  ChainId[(ChainId['ARBITRUM'] = 42161)] = 'ARBITRUM'
  ChainId[(ChainId['ARBITRUM_TESTNET'] = 79377087078960)] = 'ARBITRUM_TESTNET'
  ChainId[(ChainId['MOONBEAM_TESTNET'] = 1287)] = 'MOONBEAM_TESTNET'
  ChainId[(ChainId['AVALANCHE'] = 43114)] = 'AVALANCHE'
  ChainId[(ChainId['AVALANCHE_TESTNET'] = 43113)] = 'AVALANCHE_TESTNET'
  ChainId[(ChainId['HECO'] = 128)] = 'HECO'
  ChainId[(ChainId['HECO_TESTNET'] = 256)] = 'HECO_TESTNET'
  ChainId[(ChainId['HARMONY'] = 1666600000)] = 'HARMONY'
  ChainId[(ChainId['HARMONY_TESTNET'] = 1666700000)] = 'HARMONY_TESTNET'
  ChainId[(ChainId['OKEX'] = 66)] = 'OKEX'
  ChainId[(ChainId['OKEX_TESTNET'] = 65)] = 'OKEX_TESTNET'
  ChainId[(ChainId['CELO'] = 42220)] = 'CELO'
})(exports.ChainId || (exports.ChainId = {}))

var _FACTORY_ADDRESS,
  _ROUTER_ADDRESS,
  _SUSHI_ADDRESS,
  _MASTERCHEF_ADDRESS,
  _BAR_ADDRESS,
  _MAKER_ADDRESS,
  _TIMELOCK_ADDRESS,
  _BENTOBOX_ADDRESS,
  _KASHI_ADDRESS,
  _SUSHISWAP_SWAPPER_AD,
  _SUSHISWAP_MULTISWAPP,
  _SUSHISWAP_MULTI_EXAC,
  _BORING_HELPER_ADDRES
var FACTORY_ADDRESS =
  ((_FACTORY_ADDRESS = {}),
  (_FACTORY_ADDRESS[exports.ChainId.MAINNET] =
    '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'),
  (_FACTORY_ADDRESS[exports.ChainId.ROPSTEN] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.RINKEBY] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.GÖRLI] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.KOVAN] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.FANTOM] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_FACTORY_ADDRESS[exports.ChainId.MATIC] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.MATIC_TESTNET] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.XDAI] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.BSC] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.BSC_TESTNET] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.ARBITRUM] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_FACTORY_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] =
    '0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5'),
  (_FACTORY_ADDRESS[exports.ChainId.AVALANCHE] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] =
    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'),
  (_FACTORY_ADDRESS[exports.ChainId.HECO] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.HECO_TESTNET] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.HARMONY] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.HARMONY_TESTNET] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.OKEX] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.OKEX_TESTNET] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  (_FACTORY_ADDRESS[exports.ChainId.CELO] =
    '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'),
  _FACTORY_ADDRESS)
var ROUTER_ADDRESS =
  ((_ROUTER_ADDRESS = {}),
  (_ROUTER_ADDRESS[exports.ChainId.MAINNET] =
    '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'),
  (_ROUTER_ADDRESS[exports.ChainId.RINKEBY] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.ROPSTEN] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.GÖRLI] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.KOVAN] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.FANTOM] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_ROUTER_ADDRESS[exports.ChainId.MATIC] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.MATIC_TESTNET] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.XDAI] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.BSC] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.BSC_TESTNET] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.ARBITRUM] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_ROUTER_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] =
    '0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef'),
  (_ROUTER_ADDRESS[exports.ChainId.AVALANCHE] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.HECO] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.HECO_TESTNET] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.HARMONY] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.HARMONY_TESTNET] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.OKEX] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.OKEX_TESTNET] =
    '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'),
  (_ROUTER_ADDRESS[exports.ChainId.CELO] =
    '0x1421bDe4B10e8dd459b3BCb598810B1337D56842'),
  _ROUTER_ADDRESS)
var SUSHI_ADDRESS =
  ((_SUSHI_ADDRESS = {}),
  (_SUSHI_ADDRESS[exports.ChainId.MAINNET] =
    '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2'),
  (_SUSHI_ADDRESS[exports.ChainId.ROPSTEN] =
    '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'),
  (_SUSHI_ADDRESS[exports.ChainId.RINKEBY] =
    '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'),
  (_SUSHI_ADDRESS[exports.ChainId.GÖRLI] =
    '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'),
  (_SUSHI_ADDRESS[exports.ChainId.KOVAN] =
    '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'),
  (_SUSHI_ADDRESS[exports.ChainId.FANTOM] =
    '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC'),
  (_SUSHI_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.MATIC] =
    '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a'),
  (_SUSHI_ADDRESS[exports.ChainId.MATIC_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.XDAI] =
    '0x2995D1317DcD4f0aB89f4AE60F3f020A4F17C7CE'),
  (_SUSHI_ADDRESS[exports.ChainId.BSC] =
    '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4'),
  (_SUSHI_ADDRESS[exports.ChainId.BSC_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.ARBITRUM] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.AVALANCHE] =
    '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc'),
  (_SUSHI_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.HECO] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.HECO_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.HARMONY] =
    '0xBEC775Cb42AbFa4288dE81F387a9b1A3c4Bc552A'),
  (_SUSHI_ADDRESS[exports.ChainId.HARMONY_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.OKEX] =
    '0x2218E0D5E0173769F5b4939a3aE423f7e5E4EAB7'),
  (_SUSHI_ADDRESS[exports.ChainId.OKEX_TESTNET] = ''),
  (_SUSHI_ADDRESS[exports.ChainId.CELO] = ''),
  _SUSHI_ADDRESS)
var MASTERCHEF_ADDRESS =
  ((_MASTERCHEF_ADDRESS = {}),
  (_MASTERCHEF_ADDRESS[exports.ChainId.MAINNET] =
    '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd'),
  (_MASTERCHEF_ADDRESS[exports.ChainId.ROPSTEN] =
    '0x80C7DD17B01855a6D2347444a0FCC36136a314de'),
  (_MASTERCHEF_ADDRESS[exports.ChainId.RINKEBY] =
    '0x80C7DD17B01855a6D2347444a0FCC36136a314de'),
  (_MASTERCHEF_ADDRESS[exports.ChainId.GÖRLI] =
    '0x80C7DD17B01855a6D2347444a0FCC36136a314de'),
  (_MASTERCHEF_ADDRESS[exports.ChainId.KOVAN] =
    '0x80C7DD17B01855a6D2347444a0FCC36136a314de'),
  (_MASTERCHEF_ADDRESS[exports.ChainId.FANTOM] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.MATIC] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.MATIC_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.XDAI] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.BSC] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.BSC_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.ARBITRUM] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.AVALANCHE] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.HECO] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.HECO_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.HARMONY] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.HARMONY_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.OKEX] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.OKEX_TESTNET] = ''),
  (_MASTERCHEF_ADDRESS[exports.ChainId.CELO] = ''),
  _MASTERCHEF_ADDRESS)
var BAR_ADDRESS =
  ((_BAR_ADDRESS = {}),
  (_BAR_ADDRESS[exports.ChainId.MAINNET] =
    '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272'),
  (_BAR_ADDRESS[exports.ChainId.ROPSTEN] =
    '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c'),
  (_BAR_ADDRESS[exports.ChainId.RINKEBY] =
    '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c'),
  (_BAR_ADDRESS[exports.ChainId.GÖRLI] =
    '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c'),
  (_BAR_ADDRESS[exports.ChainId.KOVAN] =
    '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c'),
  (_BAR_ADDRESS[exports.ChainId.FANTOM] = ''),
  (_BAR_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.MATIC] = ''),
  (_BAR_ADDRESS[exports.ChainId.MATIC_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.XDAI] = ''),
  (_BAR_ADDRESS[exports.ChainId.BSC] = ''),
  (_BAR_ADDRESS[exports.ChainId.BSC_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.ARBITRUM] = ''),
  (_BAR_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.AVALANCHE] = ''),
  (_BAR_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.HECO] = ''),
  (_BAR_ADDRESS[exports.ChainId.HECO_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.HARMONY] = ''),
  (_BAR_ADDRESS[exports.ChainId.HARMONY_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.OKEX] = ''),
  (_BAR_ADDRESS[exports.ChainId.OKEX_TESTNET] = ''),
  (_BAR_ADDRESS[exports.ChainId.CELO] = ''),
  _BAR_ADDRESS)
var MAKER_ADDRESS =
  ((_MAKER_ADDRESS = {}),
  (_MAKER_ADDRESS[exports.ChainId.MAINNET] =
    '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50'),
  (_MAKER_ADDRESS[exports.ChainId.ROPSTEN] =
    '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa'),
  (_MAKER_ADDRESS[exports.ChainId.RINKEBY] =
    '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa'),
  (_MAKER_ADDRESS[exports.ChainId.GÖRLI] =
    '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa'),
  (_MAKER_ADDRESS[exports.ChainId.KOVAN] =
    '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa'),
  (_MAKER_ADDRESS[exports.ChainId.FANTOM] = ''),
  (_MAKER_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.MATIC] = ''),
  (_MAKER_ADDRESS[exports.ChainId.MATIC_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.XDAI] = ''),
  (_MAKER_ADDRESS[exports.ChainId.BSC] = ''),
  (_MAKER_ADDRESS[exports.ChainId.BSC_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.ARBITRUM] = ''),
  (_MAKER_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.AVALANCHE] = ''),
  (_MAKER_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.HECO] = ''),
  (_MAKER_ADDRESS[exports.ChainId.HECO_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.HARMONY] = ''),
  (_MAKER_ADDRESS[exports.ChainId.HARMONY_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.OKEX] = ''),
  (_MAKER_ADDRESS[exports.ChainId.OKEX_TESTNET] = ''),
  (_MAKER_ADDRESS[exports.ChainId.CELO] = ''),
  _MAKER_ADDRESS)
var TIMELOCK_ADDRESS =
  ((_TIMELOCK_ADDRESS = {}),
  (_TIMELOCK_ADDRESS[exports.ChainId.MAINNET] =
    '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1'),
  (_TIMELOCK_ADDRESS[exports.ChainId.ROPSTEN] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.RINKEBY] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.GÖRLI] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.KOVAN] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.FANTOM] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.MATIC] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.MATIC_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.XDAI] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.BSC] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.BSC_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.ARBITRUM] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.AVALANCHE] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.HECO] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.HECO_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.HARMONY] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.HARMONY_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.OKEX] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.OKEX_TESTNET] = ''),
  (_TIMELOCK_ADDRESS[exports.ChainId.CELO] = ''),
  _TIMELOCK_ADDRESS)
var BENTOBOX_ADDRESS =
  ((_BENTOBOX_ADDRESS = {}),
  (_BENTOBOX_ADDRESS[exports.ChainId.MAINNET] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.ROPSTEN] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.RINKEBY] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.GÖRLI] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.KOVAN] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.FANTOM] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.MATIC] =
    '0x0319000133d3AdA02600f0875d2cf03D442C3367'),
  (_BENTOBOX_ADDRESS[exports.ChainId.MATIC_TESTNET] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.XDAI] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.BSC] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.BSC_TESTNET] =
    '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'),
  (_BENTOBOX_ADDRESS[exports.ChainId.ARBITRUM] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.AVALANCHE] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.HECO] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.HECO_TESTNET] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.HARMONY] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.HARMONY_TESTNET] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.OKEX] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.OKEX_TESTNET] = ''),
  (_BENTOBOX_ADDRESS[exports.ChainId.CELO] = ''),
  _BENTOBOX_ADDRESS)
var KASHI_ADDRESS =
  ((_KASHI_ADDRESS = {}),
  (_KASHI_ADDRESS[exports.ChainId.MAINNET] =
    '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42'),
  (_KASHI_ADDRESS[exports.ChainId.ROPSTEN] = ''),
  (_KASHI_ADDRESS[exports.ChainId.RINKEBY] = ''),
  (_KASHI_ADDRESS[exports.ChainId.GÖRLI] = ''),
  (_KASHI_ADDRESS[exports.ChainId.KOVAN] =
    '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42'),
  (_KASHI_ADDRESS[exports.ChainId.FANTOM] = ''),
  (_KASHI_ADDRESS[exports.ChainId.FANTOM_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.MATIC] =
    '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7'),
  (_KASHI_ADDRESS[exports.ChainId.MATIC_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.XDAI] = ''),
  (_KASHI_ADDRESS[exports.ChainId.BSC] =
    '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42'),
  (_KASHI_ADDRESS[exports.ChainId.BSC_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.ARBITRUM] = ''),
  (_KASHI_ADDRESS[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.AVALANCHE] = ''),
  (_KASHI_ADDRESS[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.HECO] = ''),
  (_KASHI_ADDRESS[exports.ChainId.HECO_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.HARMONY] = ''),
  (_KASHI_ADDRESS[exports.ChainId.HARMONY_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.OKEX] = ''),
  (_KASHI_ADDRESS[exports.ChainId.OKEX_TESTNET] = ''),
  (_KASHI_ADDRESS[exports.ChainId.CELO] = ''),
  _KASHI_ADDRESS) // export const KASHI_ADDRESS = '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42'

var SUSHISWAP_SWAPPER_ADDRESS =
  ((_SUSHISWAP_SWAPPER_AD = {}),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.MAINNET] =
    '0x1766733112408b95239aD1951925567CB1203084'),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.ROPSTEN] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.RINKEBY] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.GÖRLI] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.KOVAN] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.FANTOM] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.FANTOM_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.MATIC] =
    '0xe9589382130Ded5DF2397E2fD7A3E9b41DD2701D'),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.MATIC_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.XDAI] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.BSC] =
    '0x1766733112408b95239aD1951925567CB1203084'),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.BSC_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.ARBITRUM] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.AVALANCHE] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.HECO] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.HECO_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.HARMONY] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.HARMONY_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.OKEX] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.OKEX_TESTNET] = ''),
  (_SUSHISWAP_SWAPPER_AD[exports.ChainId.CELO] = ''),
  _SUSHISWAP_SWAPPER_AD)
var SUSHISWAP_MULTISWAPPER_ADDRESS =
  ((_SUSHISWAP_MULTISWAPP = {}),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.MAINNET] =
    '0x545820d5Cc05248da112419fEfb18522c63C8e12'),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.ROPSTEN] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.RINKEBY] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.GÖRLI] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.KOVAN] =
    '0xc0c1649b2c67f1a9f5ff1dd618188165e2555bcf'),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.FANTOM] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.FANTOM_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.MATIC] =
    '0x73BE093B84c773fe8eE0f76DDc0829E45c215415'),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.MATIC_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.XDAI] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.BSC] =
    '0x86c655cAc122e9A2fd9Ae1f79Df27b30E357968c'),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.BSC_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.ARBITRUM] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.AVALANCHE] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.HECO] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.HECO_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.HARMONY] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.HARMONY_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.OKEX] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.OKEX_TESTNET] = ''),
  (_SUSHISWAP_MULTISWAPP[exports.ChainId.CELO] = ''),
  _SUSHISWAP_MULTISWAPP)
var SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS =
  ((_SUSHISWAP_MULTI_EXAC = {}),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.MAINNET] =
    '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7'),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.ROPSTEN] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.RINKEBY] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.GÖRLI] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.KOVAN] =
    '0x75AE0Aa596D39b20addC921DeB5EE3c96279dABE'),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.FANTOM] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.FANTOM_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.MATIC] =
    '0xDB6C4EDd9545d3b815dA85E6429B699c418886f9'),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.MATIC_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.XDAI] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.BSC] =
    '0x1B16149Edaf1EFa6ADE6aEEF33e63C6e08c9bB1B'),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.BSC_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.ARBITRUM] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.AVALANCHE] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.HECO] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.HECO_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.HARMONY] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.HARMONY_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.OKEX] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.OKEX_TESTNET] = ''),
  (_SUSHISWAP_MULTI_EXAC[exports.ChainId.CELO] = ''),
  _SUSHISWAP_MULTI_EXAC)
var PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'
var SUSHISWAP_TWAP_0_ORACLE_ADDRESS =
  '0x66F03B0d30838A3fee971928627ea6F59B236065'
var SUSHISWAP_TWAP_1_ORACLE_ADDRESS =
  '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'
var CHAINLINK_ORACLE_ADDRESS = '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB'
var BORING_HELPER_ADDRESS =
  ((_BORING_HELPER_ADDRES = {}),
  (_BORING_HELPER_ADDRES[exports.ChainId.MAINNET] =
    '0x11Ca5375AdAfd6205E41131A4409f182677996E6'),
  (_BORING_HELPER_ADDRES[exports.ChainId.ROPSTEN] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.RINKEBY] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.GÖRLI] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.KOVAN] =
    '0x11Ca5375AdAfd6205E41131A4409f182677996E6'),
  (_BORING_HELPER_ADDRES[exports.ChainId.FANTOM] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.FANTOM_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.MATIC] =
    '0xA77a7fD5a16237B85E0FAd02C51f459D18AE93Cd'),
  (_BORING_HELPER_ADDRES[exports.ChainId.MATIC_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.XDAI] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.BSC] =
    '0x11Ca5375AdAfd6205E41131A4409f182677996E6'),
  (_BORING_HELPER_ADDRES[exports.ChainId.BSC_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.ARBITRUM] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.ARBITRUM_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.MOONBEAM_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.AVALANCHE] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.AVALANCHE_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.HECO] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.HECO_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.HARMONY] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.HARMONY_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.OKEX] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.OKEX_TESTNET] = ''),
  (_BORING_HELPER_ADDRES[exports.ChainId.CELO] = ''),
  _BORING_HELPER_ADDRES)

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype)
  subClass.prototype.constructor = subClass
  subClass.__proto__ = superClass
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
      }
  return _getPrototypeOf(o)
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p
      return o
    }

  return _setPrototypeOf(o, p)
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false
  if (Reflect.construct.sham) return false
  if (typeof Proxy === 'function') return true

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
    return true
  } catch (e) {
    return false
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null]
      a.push.apply(a, args)
      var Constructor = Function.bind.apply(Parent, a)
      var instance = new Constructor()
      if (Class) _setPrototypeOf(instance, Class.prototype)
      return instance
    }
  }

  return _construct.apply(null, arguments)
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class

    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function')
    }

    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class)

      _cache.set(Class, Wrapper)
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor)
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    return _setPrototypeOf(Wrapper, Class)
  }

  return _wrapNativeSuper(Class)
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }

  return self
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
  var n = Object.prototype.toString.call(o).slice(8, -1)
  if (n === 'Object' && o.constructor) n = o.constructor.name
  if (n === 'Map' || n === 'Set') return Array.from(o)
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen)
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]

  return arr2
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it

  if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it
      var i = 0
      return function () {
        if (i >= o.length)
          return {
            done: true,
          }
        return {
          done: false,
          value: o[i++],
        }
      }
    }

    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    )
  }

  it = o[Symbol.iterator]()
  return it.next.bind(it)
}

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */

var AbstractCurrency =
  /**
   * Constructs an instance of the base class `BaseCurrency`.
   * @param chainId the chain ID on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  function AbstractCurrency(chainId, decimals, symbol, name) {
    !Number.isSafeInteger(chainId) ? invariant(false, 'CHAIN_ID') : void 0
    !(decimals >= 0 && decimals < 255 && Number.isInteger(decimals))
      ? invariant(false, 'DECIMALS')
      : void 0
    this.chainId = chainId
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }

;(function (Rounding) {
  Rounding[(Rounding['ROUND_DOWN'] = 0)] = 'ROUND_DOWN'
  Rounding[(Rounding['ROUND_HALF_UP'] = 1)] = 'ROUND_HALF_UP'
  Rounding[(Rounding['ROUND_UP'] = 2)] = 'ROUND_UP'
})(exports.Rounding || (exports.Rounding = {}))
;(function (TradeType) {
  TradeType[(TradeType['EXACT_INPUT'] = 0)] = 'EXACT_INPUT'
  TradeType[(TradeType['EXACT_OUTPUT'] = 1)] = 'EXACT_OUTPUT'
})(exports.TradeType || (exports.TradeType = {}))

function validateAndParseAddress(address$1) {
  try {
    var checksummedAddress = address.getAddress(address$1)
    'development' !== 'production'
      ? warning(
          address$1 === checksummedAddress,
          address$1 + ' is not checksummed.'
        )
      : void 0
    return checksummedAddress
  } catch (error) {
    invariant(false, address$1 + ' is not a valid address.')
  }
}

var _WETH, _WNATIVE
/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/ (function (_AbstractCurrency) {
  _inheritsLoose(Token, _AbstractCurrency)

  function Token(chainId, address, decimals, symbol, name) {
    var _this

    _this =
      _AbstractCurrency.call(this, chainId, decimals, symbol, name) || this
    _this.isNative = false
    _this.isToken = true
    _this.chainId = chainId
    _this.address = validateAndParseAddress(address)
    return _this
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */

  var _proto = Token.prototype

  _proto.equals = function equals(other) {
    return (
      other.isToken &&
      this.chainId === other.chainId &&
      this.address === other.address
    )
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ? invariant(false, 'CHAIN_IDS') : void 0
    !(this.address !== other.address) ? invariant(false, 'ADDRESSES') : void 0
    return this.address.toLowerCase() < other.address.toLowerCase()
  }
  /**
   * Return this token, which does not need to be wrapped
   */

  _createClass(Token, [
    {
      key: 'wrapped',
      get: function get() {
        return this
      },
    },
  ])

  return Token
})(AbstractCurrency)
/**
 * Compares two currencies for equality
 */

function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB)
  } else if (currencyA instanceof Token) {
    return false
  } else if (currencyB instanceof Token) {
    return false
  } else {
    return currencyA === currencyB
  }
}
var WETH9 =
  ((_WETH = {}),
  (_WETH[exports.ChainId.MAINNET] = /*#__PURE__*/ new Token(
    exports.ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH9',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.ROPSTEN] = /*#__PURE__*/ new Token(
    exports.ChainId.ROPSTEN,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH9',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.RINKEBY] = /*#__PURE__*/ new Token(
    exports.ChainId.RINKEBY,
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    18,
    'WETH9',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.GÖRLI] = /*#__PURE__*/ new Token(
    exports.ChainId.GÖRLI,
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    18,
    'WETH9',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.RINKEBY] = /*#__PURE__*/ new Token(
    exports.ChainId.RINKEBY,
    '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
    18,
    'WETH9',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.ARBITRUM] = /*#__PURE__*/ new Token(
    exports.ChainId.ARBITRUM,
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    18,
    'WETH9',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.ARBITRUM_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.ARBITRUM_TESTNET,
    '0xf8456e5e6A225C2C1D74D8C9a4cB2B1d5dc1153b',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.BSC] = /*#__PURE__*/ new Token(
    exports.ChainId.BSC,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.FANTOM] = /*#__PURE__*/ new Token(
    exports.ChainId.FANTOM,
    '0x74b23882a30290451A17c44f4F05243b6b58C76d',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.MATIC] = /*#__PURE__*/ new Token(
    exports.ChainId.MATIC,
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.OKEX] = /*#__PURE__*/ new Token(
    exports.ChainId.OKEX,
    '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.HECO] = /*#__PURE__*/ new Token(
    exports.ChainId.HECO,
    '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.HARMONY] = /*#__PURE__*/ new Token(
    exports.ChainId.HARMONY,
    '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.XDAI] = /*#__PURE__*/ new Token(
    exports.ChainId.XDAI,
    '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WETH[exports.ChainId.AVALANCHE] = /*#__PURE__*/ new Token(
    exports.ChainId.AVALANCHE,
    '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  _WETH)
var WNATIVE =
  ((_WNATIVE = {}),
  (_WNATIVE[exports.ChainId.MAINNET] = WETH9[exports.ChainId.MAINNET]),
  (_WNATIVE[exports.ChainId.ROPSTEN] = WETH9[exports.ChainId.ROPSTEN]),
  (_WNATIVE[exports.ChainId.RINKEBY] = WETH9[exports.ChainId.RINKEBY]),
  (_WNATIVE[exports.ChainId.GÖRLI] = WETH9[exports.ChainId.GÖRLI]),
  (_WNATIVE[exports.ChainId.KOVAN] = WETH9[exports.ChainId.KOVAN]),
  (_WNATIVE[exports.ChainId.FANTOM] = /*#__PURE__*/ new Token(
    exports.ChainId.FANTOM,
    '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    18,
    'WFTM',
    'Wrapped FTM'
  )),
  (_WNATIVE[exports.ChainId.FANTOM_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.FANTOM_TESTNET,
    '0xf1277d1Ed8AD466beddF92ef448A132661956621',
    18,
    'FTM',
    'Wrapped FTM'
  )),
  (_WNATIVE[exports.ChainId.MATIC] = /*#__PURE__*/ new Token(
    exports.ChainId.MATIC,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic'
  )),
  (_WNATIVE[exports.ChainId.MATIC_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.MATIC_TESTNET,
    '0x5B67676a984807a212b1c59eBFc9B3568a474F0a',
    18,
    'WMATIC',
    'Wrapped Matic'
  )),
  (_WNATIVE[exports.ChainId.XDAI] = /*#__PURE__*/ new Token(
    exports.ChainId.XDAI,
    '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    18,
    'WXDAI',
    'Wrapped xDai'
  )),
  (_WNATIVE[exports.ChainId.BSC] = /*#__PURE__*/ new Token(
    exports.ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB'
  )),
  (_WNATIVE[exports.ChainId.BSC_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.BSC_TESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB'
  )),
  (_WNATIVE[exports.ChainId.ARBITRUM] = WETH9[exports.ChainId.ARBITRUM]),
  (_WNATIVE[exports.ChainId.ARBITRUM_TESTNET] =
    WETH9[exports.ChainId.ARBITRUM_TESTNET]),
  (_WNATIVE[exports.ChainId.MOONBEAM_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.MOONBEAM_TESTNET,
    '0xe73763DB808ecCDC0E36bC8E32510ED126910394',
    18,
    'WETH',
    'Wrapped Ether'
  )),
  (_WNATIVE[exports.ChainId.AVALANCHE] = /*#__PURE__*/ new Token(
    exports.ChainId.AVALANCHE,
    '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    18,
    'WAVAX',
    'Wrapped AVAX'
  )),
  (_WNATIVE[exports.ChainId.AVALANCHE_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.AVALANCHE_TESTNET,
    '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    18,
    'WAVAX',
    'Wrapped AVAX'
  )),
  (_WNATIVE[exports.ChainId.HECO] = /*#__PURE__*/ new Token(
    exports.ChainId.HECO,
    '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
    18,
    'WHT',
    'Wrapped HT'
  )),
  (_WNATIVE[exports.ChainId.HECO_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.HECO_TESTNET,
    '0x5B2DA6F42CA09C77D577a12BeaD0446148830687',
    18,
    'WHT',
    'Wrapped HT'
  )),
  (_WNATIVE[exports.ChainId.HARMONY] = /*#__PURE__*/ new Token(
    exports.ChainId.HARMONY,
    '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
    18,
    'WONE',
    'Wrapped ONE'
  )),
  (_WNATIVE[exports.ChainId.HARMONY_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.HARMONY_TESTNET,
    '0x7a2afac38517d512E55C0bCe3b6805c10a04D60F',
    18,
    'WONE',
    'Wrapped ONE'
  )),
  (_WNATIVE[exports.ChainId.OKEX] = /*#__PURE__*/ new Token(
    exports.ChainId.OKEX,
    '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15',
    18,
    'WOKT',
    'Wrapped OKExChain'
  )),
  (_WNATIVE[exports.ChainId.OKEX_TESTNET] = /*#__PURE__*/ new Token(
    exports.ChainId.OKEX_TESTNET,
    '0x2219845942d28716c0F7C605765fABDcA1a7d9E0',
    18,
    'WOKT',
    'Wrapped OKExChain'
  )),
  (_WNATIVE[exports.ChainId.CELO] = /*#__PURE__*/ new Token(
    exports.ChainId.CELO,
    '0x471EcE3750Da237f93B8E339c536989b8978a438',
    18,
    'CELO',
    'Celo'
  )),
  _WNATIVE)

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */

var NativeCurrency = /*#__PURE__*/ (function (_AbstractCurrency) {
  _inheritsLoose(NativeCurrency, _AbstractCurrency)

  function NativeCurrency() {
    var _this

    _this = _AbstractCurrency.apply(this, arguments) || this
    _this.isNative = true
    _this.isToken = false
    return _this
  }

  return NativeCurrency
})(AbstractCurrency)

var Avalanche = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Avalanche, _NativeCurrency)

  function Avalanche(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'AVAX', 'Avalanche') || this
  }

  Avalanche.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Avalanche(chainId))
  }

  var _proto = Avalanche.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Avalanche, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return Avalanche
})(NativeCurrency)
Avalanche._cache = {}

var Binance = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Binance, _NativeCurrency)

  function Binance(chainId) {
    return (
      _NativeCurrency.call(this, chainId, 18, 'BNB', 'Binance Coin') || this
    )
  }

  Binance.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Binance(chainId))
  }

  var _proto = Binance.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Binance, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return Binance
})(NativeCurrency)
Binance._cache = {}

var Celo = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Celo, _NativeCurrency)

  function Celo(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'CELO', 'Celo') || this
  }

  Celo.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Celo(chainId))
  }

  var _proto = Celo.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Celo, [
    {
      key: 'wrapped',
      get: function get() {
        var wcelo = WNATIVE[this.chainId]
        !!!wcelo ? invariant(false, 'WRAPPED') : void 0
        return wcelo
      },
    },
  ])

  return Celo
})(NativeCurrency)
Celo._cache = {}

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */

var Ether = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Ether, _NativeCurrency)

  function Ether(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ETH', 'Ether') || this
  }

  Ether.onChain = function onChain(chainId) {
    var _this$_etherCache$cha

    return (_this$_etherCache$cha = this._etherCache[chainId]) != null
      ? _this$_etherCache$cha
      : (this._etherCache[chainId] = new Ether(chainId))
  }

  var _proto = Ether.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Ether, [
    {
      key: 'wrapped',
      get: function get() {
        var weth9 = WETH9[this.chainId]
        !!!weth9 ? invariant(false, 'WRAPPED') : void 0
        return weth9
      },
    },
  ])

  return Ether
})(NativeCurrency)
Ether._etherCache = {}

var Fantom = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Fantom, _NativeCurrency)

  function Fantom(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'FTM', 'Fantom') || this
  }

  Fantom.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Fantom(chainId))
  }

  var _proto = Fantom.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Fantom, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return Fantom
})(NativeCurrency)
Fantom._cache = {}

var Harmony = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Harmony, _NativeCurrency)

  function Harmony(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ONE', 'Harmony') || this
  }

  Harmony.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Harmony(chainId))
  }

  var _proto = Harmony.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Harmony, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return Harmony
})(NativeCurrency)
Harmony._cache = {}

var Heco = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Heco, _NativeCurrency)

  function Heco(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'HT', 'Huobi Token') || this
  }

  Heco.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Heco(chainId))
  }

  var _proto = Heco.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Heco, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return Heco
})(NativeCurrency)
Heco._cache = {}

var Matic = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Matic, _NativeCurrency)

  function Matic(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'MATIC', 'Matic') || this
  }

  Matic.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Matic(chainId))
  }

  var _proto = Matic.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Matic, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return Matic
})(NativeCurrency)
Matic._cache = {}

var Okex = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(Okex, _NativeCurrency)

  function Okex(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'OKT', 'OKExChain') || this
  }

  Okex.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new Okex(chainId))
  }

  var _proto = Okex.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(Okex, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return Okex
})(NativeCurrency)
Okex._cache = {}

var xDai = /*#__PURE__*/ (function (_NativeCurrency) {
  _inheritsLoose(xDai, _NativeCurrency)

  function xDai(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'XDAI', 'xDai') || this
  }

  xDai.onChain = function onChain(chainId) {
    var _this$_cache$chainId

    return (_this$_cache$chainId = this._cache[chainId]) != null
      ? _this$_cache$chainId
      : (this._cache[chainId] = new xDai(chainId))
  }

  var _proto = xDai.prototype

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId
  }

  _createClass(xDai, [
    {
      key: 'wrapped',
      get: function get() {
        var wnative = WNATIVE[this.chainId]
        !!!wnative ? invariant(false, 'WRAPPED') : void 0
        return wnative
      },
    },
  ])

  return xDai
})(NativeCurrency)
xDai._cache = {}

var _NATIVE
var NATIVE =
  ((_NATIVE = {}),
  (_NATIVE[exports.ChainId.MAINNET] = /*#__PURE__*/ Ether.onChain(
    exports.ChainId.MAINNET
  )),
  (_NATIVE[exports.ChainId.ROPSTEN] = /*#__PURE__*/ Ether.onChain(
    exports.ChainId.ROPSTEN
  )),
  (_NATIVE[exports.ChainId.RINKEBY] = /*#__PURE__*/ Ether.onChain(
    exports.ChainId.RINKEBY
  )),
  (_NATIVE[exports.ChainId.GÖRLI] = /*#__PURE__*/ Ether.onChain(
    exports.ChainId.GÖRLI
  )),
  (_NATIVE[exports.ChainId.KOVAN] = /*#__PURE__*/ Ether.onChain(
    exports.ChainId.KOVAN
  )),
  (_NATIVE[exports.ChainId.FANTOM] = /*#__PURE__*/ Fantom.onChain(
    exports.ChainId.FANTOM
  )),
  (_NATIVE[exports.ChainId.FANTOM_TESTNET] = /*#__PURE__*/ Fantom.onChain(
    exports.ChainId.FANTOM_TESTNET
  )),
  (_NATIVE[exports.ChainId.MATIC] = /*#__PURE__*/ Matic.onChain(
    exports.ChainId.MATIC
  )),
  (_NATIVE[exports.ChainId.MATIC_TESTNET] = /*#__PURE__*/ Matic.onChain(
    exports.ChainId.MATIC_TESTNET
  )),
  (_NATIVE[exports.ChainId.XDAI] = /*#__PURE__*/ xDai.onChain(
    exports.ChainId.XDAI
  )),
  (_NATIVE[exports.ChainId.BSC] = /*#__PURE__*/ Binance.onChain(
    exports.ChainId.BSC
  )),
  (_NATIVE[exports.ChainId.BSC_TESTNET] = /*#__PURE__*/ Binance.onChain(
    exports.ChainId.BSC_TESTNET
  )),
  (_NATIVE[exports.ChainId.AVALANCHE] = /*#__PURE__*/ Avalanche.onChain(
    exports.ChainId.AVALANCHE
  )),
  (_NATIVE[exports.ChainId.AVALANCHE_TESTNET] = /*#__PURE__*/ Avalanche.onChain(
    exports.ChainId.AVALANCHE_TESTNET
  )),
  (_NATIVE[exports.ChainId.HECO] = /*#__PURE__*/ Heco.onChain(
    exports.ChainId.HECO
  )),
  (_NATIVE[exports.ChainId.HECO_TESTNET] = /*#__PURE__*/ Heco.onChain(
    exports.ChainId.HECO_TESTNET
  )),
  (_NATIVE[exports.ChainId.HARMONY] = /*#__PURE__*/ Harmony.onChain(
    exports.ChainId.HARMONY
  )),
  (_NATIVE[exports.ChainId.HARMONY_TESTNET] = /*#__PURE__*/ Harmony.onChain(
    exports.ChainId.HARMONY_TESTNET
  )),
  (_NATIVE[exports.ChainId.OKEX] = /*#__PURE__*/ Okex.onChain(
    exports.ChainId.OKEX
  )),
  (_NATIVE[exports.ChainId.OKEX_TESTNET] = /*#__PURE__*/ Okex.onChain(
    exports.ChainId.OKEX_TESTNET
  )),
  (_NATIVE[exports.ChainId.CELO] = /*#__PURE__*/ Celo.onChain(
    exports.ChainId.CELO
  )),
  _NATIVE)

var _SOLIDITY_TYPE_MAXIMA
var MaxUint256 = /*#__PURE__*/ JSBI.BigInt(
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
)
var INIT_CODE_HASH =
  '0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303'
var MINIMUM_LIQUIDITY = /*#__PURE__*/ JSBI.BigInt(1000) // exports for internal consumption

var ZERO = /*#__PURE__*/ JSBI.BigInt(0)
var ONE = /*#__PURE__*/ JSBI.BigInt(1)
var TWO = /*#__PURE__*/ JSBI.BigInt(2)
var THREE = /*#__PURE__*/ JSBI.BigInt(3)
var FIVE = /*#__PURE__*/ JSBI.BigInt(5)
var TEN = /*#__PURE__*/ JSBI.BigInt(10)
var _100 = /*#__PURE__*/ JSBI.BigInt(100)
var _997 = /*#__PURE__*/ JSBI.BigInt(997)
var _1000 = /*#__PURE__*/ JSBI.BigInt(1000)

;(function (SolidityType) {
  SolidityType['uint8'] = 'uint8'
  SolidityType['uint256'] = 'uint256'
})(exports.SolidityType || (exports.SolidityType = {}))

var SOLIDITY_TYPE_MAXIMA =
  ((_SOLIDITY_TYPE_MAXIMA = {}),
  (_SOLIDITY_TYPE_MAXIMA[exports.SolidityType.uint8] =
    /*#__PURE__*/ JSBI.BigInt('0xff')),
  (_SOLIDITY_TYPE_MAXIMA[exports.SolidityType.uint256] =
    /*#__PURE__*/ JSBI.BigInt(
      '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    )),
  _SOLIDITY_TYPE_MAXIMA)

// see https://stackoverflow.com/a/41102306
var CAN_SET_PROTOTYPE = 'setPrototypeOf' in Object
/**
 * Indicates that the pair has insufficient reserves for a desired output amount. I.e. the amount of output cannot be
 * obtained by sending any amount of input.
 */

var InsufficientReservesError = /*#__PURE__*/ (function (_Error) {
  _inheritsLoose(InsufficientReservesError, _Error)

  function InsufficientReservesError() {
    var _this

    _this = _Error.call(this) || this
    _this.isInsufficientReservesError = true
    _this.name = _this.constructor.name
    if (CAN_SET_PROTOTYPE)
      Object.setPrototypeOf(
        _assertThisInitialized(_this),
        (this instanceof InsufficientReservesError ? this.constructor : void 0)
          .prototype
      )
    return _this
  }

  return InsufficientReservesError
})(/*#__PURE__*/ _wrapNativeSuper(Error))
/**
 * Indicates that the input amount is too small to produce any amount of output. I.e. the amount of input sent is less
 * than the price of a single unit of output after fees.
 */

var InsufficientInputAmountError = /*#__PURE__*/ (function (_Error2) {
  _inheritsLoose(InsufficientInputAmountError, _Error2)

  function InsufficientInputAmountError() {
    var _this2

    _this2 = _Error2.call(this) || this
    _this2.isInsufficientInputAmountError = true
    _this2.name = _this2.constructor.name
    if (CAN_SET_PROTOTYPE)
      Object.setPrototypeOf(
        _assertThisInitialized(_this2),
        (this instanceof InsufficientInputAmountError
          ? this.constructor
          : void 0
        ).prototype
      )
    return _this2
  }

  return InsufficientInputAmountError
})(/*#__PURE__*/ _wrapNativeSuper(Error))

var _toSignificantRoundin, _toFixedRounding
var Decimal = /*#__PURE__*/ toFormat(_Decimal)
var Big = /*#__PURE__*/ toFormat(_Big)
var toSignificantRounding =
  ((_toSignificantRoundin = {}),
  (_toSignificantRoundin[exports.Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN),
  (_toSignificantRoundin[exports.Rounding.ROUND_HALF_UP] =
    Decimal.ROUND_HALF_UP),
  (_toSignificantRoundin[exports.Rounding.ROUND_UP] = Decimal.ROUND_UP),
  _toSignificantRoundin)
var toFixedRounding =
  ((_toFixedRounding = {}),
  (_toFixedRounding[exports.Rounding.ROUND_DOWN] = 0),
  (_toFixedRounding[exports.Rounding.ROUND_HALF_UP] = 1),
  (_toFixedRounding[exports.Rounding.ROUND_UP] = 3),
  _toFixedRounding)
var Fraction = /*#__PURE__*/ (function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = JSBI.BigInt(1)
    }

    this.numerator = JSBI.BigInt(numerator)
    this.denominator = JSBI.BigInt(denominator)
  }

  Fraction.tryParseFraction = function tryParseFraction(fractionish) {
    if (
      fractionish instanceof JSBI ||
      typeof fractionish === 'number' ||
      typeof fractionish === 'string'
    )
      return new Fraction(fractionish)
    if ('numerator' in fractionish && 'denominator' in fractionish)
      return fractionish
    throw new Error('Could not parse fraction')
  } // performs floor division

  var _proto = Fraction.prototype

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator)
  }

  _proto.add = function add(other) {
    var otherParsed = Fraction.tryParseFraction(other)

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(
        JSBI.add(this.numerator, otherParsed.numerator),
        this.denominator
      )
    }

    return new Fraction(
      JSBI.add(
        JSBI.multiply(this.numerator, otherParsed.denominator),
        JSBI.multiply(otherParsed.numerator, this.denominator)
      ),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  _proto.subtract = function subtract(other) {
    var otherParsed = Fraction.tryParseFraction(other)

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(
        JSBI.subtract(this.numerator, otherParsed.numerator),
        this.denominator
      )
    }

    return new Fraction(
      JSBI.subtract(
        JSBI.multiply(this.numerator, otherParsed.denominator),
        JSBI.multiply(otherParsed.numerator, this.denominator)
      ),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  _proto.lessThan = function lessThan(other) {
    var otherParsed = Fraction.tryParseFraction(other)
    return JSBI.lessThan(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(otherParsed.numerator, this.denominator)
    )
  }

  _proto.equalTo = function equalTo(other) {
    var otherParsed = Fraction.tryParseFraction(other)
    return JSBI.equal(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(otherParsed.numerator, this.denominator)
    )
  }

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = Fraction.tryParseFraction(other)
    return JSBI.greaterThan(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(otherParsed.numerator, this.denominator)
    )
  }

  _proto.multiply = function multiply(other) {
    var otherParsed = Fraction.tryParseFraction(other)
    return new Fraction(
      JSBI.multiply(this.numerator, otherParsed.numerator),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  _proto.divide = function divide(other) {
    var otherParsed = Fraction.tryParseFraction(other)
    return new Fraction(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(this.denominator, otherParsed.numerator)
    )
  }

  _proto.toSignificant = function toSignificant(
    significantDigits,
    format,
    rounding
  ) {
    if (format === void 0) {
      format = {
        groupSeparator: '',
      }
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP
    }

    !Number.isInteger(significantDigits)
      ? invariant(false, significantDigits + ' is not an integer.')
      : void 0
    !(significantDigits > 0)
      ? invariant(false, significantDigits + ' is not positive.')
      : void 0
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding],
    })
    var quotient = new Decimal(this.numerator.toString())
      .div(this.denominator.toString())
      .toSignificantDigits(significantDigits)
    return quotient.toFormat(quotient.decimalPlaces(), format)
  }

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: '',
      }
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP
    }

    !Number.isInteger(decimalPlaces)
      ? invariant(false, decimalPlaces + ' is not an integer.')
      : void 0
    !(decimalPlaces >= 0)
      ? invariant(false, decimalPlaces + ' is negative.')
      : void 0
    Big.DP = decimalPlaces
    Big.RM = toFixedRounding[rounding]
    return new Big(this.numerator.toString())
      .div(this.denominator.toString())
      .toFormat(decimalPlaces, format)
  }
  /**
   * Helper method for converting any super class back to a fraction
   */

  _createClass(Fraction, [
    {
      key: 'quotient',
      get: function get() {
        return JSBI.divide(this.numerator, this.denominator)
      }, // remainder after floor division
    },
    {
      key: 'remainder',
      get: function get() {
        return new Fraction(
          JSBI.remainder(this.numerator, this.denominator),
          this.denominator
        )
      },
    },
    {
      key: 'asFraction',
      get: function get() {
        return new Fraction(this.numerator, this.denominator)
      },
    },
  ])

  return Fraction
})()

var Big$1 = /*#__PURE__*/ toFormat(_Big)
var CurrencyAmount = /*#__PURE__*/ (function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction)

  function CurrencyAmount(currency, numerator, denominator) {
    var _this

    _this = _Fraction.call(this, numerator, denominator) || this
    !JSBI.lessThanOrEqual(_this.quotient, MaxUint256)
      ? invariant(false, 'AMOUNT')
      : void 0
    _this.currency = currency
    _this.decimalScale = JSBI.exponentiate(
      JSBI.BigInt(10),
      JSBI.BigInt(currency.decimals)
    )
    return _this
  }
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */

  CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount)
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */

  CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(
    currency,
    numerator,
    denominator
  ) {
    return new CurrencyAmount(currency, numerator, denominator)
  }

  var _proto = CurrencyAmount.prototype

  _proto.add = function add(other) {
    !this.currency.equals(other.currency)
      ? invariant(false, 'CURRENCY')
      : void 0

    var added = _Fraction.prototype.add.call(this, other)

    return CurrencyAmount.fromFractionalAmount(
      this.currency,
      added.numerator,
      added.denominator
    )
  }

  _proto.subtract = function subtract(other) {
    !this.currency.equals(other.currency)
      ? invariant(false, 'CURRENCY')
      : void 0

    var subtracted = _Fraction.prototype.subtract.call(this, other)

    return CurrencyAmount.fromFractionalAmount(
      this.currency,
      subtracted.numerator,
      subtracted.denominator
    )
  }

  _proto.multiply = function multiply(other) {
    var multiplied = _Fraction.prototype.multiply.call(this, other)

    return CurrencyAmount.fromFractionalAmount(
      this.currency,
      multiplied.numerator,
      multiplied.denominator
    )
  }

  _proto.divide = function divide(other) {
    var divided = _Fraction.prototype.divide.call(this, other)

    return CurrencyAmount.fromFractionalAmount(
      this.currency,
      divided.numerator,
      divided.denominator
    )
  }

  _proto.toSignificant = function toSignificant(
    significantDigits,
    format,
    rounding
  ) {
    if (significantDigits === void 0) {
      significantDigits = 6
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN
    }

    return _Fraction.prototype.divide
      .call(this, this.decimalScale)
      .toSignificant(significantDigits, format, rounding)
  }

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN
    }

    !(decimalPlaces <= this.currency.decimals)
      ? invariant(false, 'DECIMALS')
      : void 0
    return _Fraction.prototype.divide
      .call(this, this.decimalScale)
      .toFixed(decimalPlaces, format, rounding)
  }

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: '',
      }
    }

    Big$1.DP = this.currency.decimals
    return new Big$1(this.quotient.toString())
      .div(this.decimalScale.toString())
      .toFormat(format)
  }

  _createClass(CurrencyAmount, [
    {
      key: 'wrapped',
      get: function get() {
        if (this.currency.isToken) return this
        return CurrencyAmount.fromFractionalAmount(
          this.currency.wrapped,
          this.numerator,
          this.denominator
        )
      },
    },
  ])

  return CurrencyAmount
})(Fraction)

var Price = /*#__PURE__*/ (function (_Fraction) {
  _inheritsLoose(Price, _Fraction)

  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  function Price() {
    var _this

    var baseCurrency, quoteCurrency, denominator, numerator

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    if (args.length === 4) {
      baseCurrency = args[0]
      quoteCurrency = args[1]
      denominator = args[2]
      numerator = args[3]
    } else {
      var result = args[0].quoteAmount.divide(args[0].baseAmount)
      var _ref = [
        args[0].baseAmount.currency,
        args[0].quoteAmount.currency,
        result.denominator,
        result.numerator,
      ]
      baseCurrency = _ref[0]
      quoteCurrency = _ref[1]
      denominator = _ref[2]
      numerator = _ref[3]
    }

    _this = _Fraction.call(this, numerator, denominator) || this
    _this.baseCurrency = baseCurrency
    _this.quoteCurrency = quoteCurrency
    _this.scalar = new Fraction(
      JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(baseCurrency.decimals)),
      JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(quoteCurrency.decimals))
    )
    return _this
  }
  /**
   * Flip the price, switching the base and quote currency
   */

  var _proto = Price.prototype

  _proto.invert = function invert() {
    return new Price(
      this.quoteCurrency,
      this.baseCurrency,
      this.numerator,
      this.denominator
    )
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */

  _proto.multiply = function multiply(other) {
    !this.quoteCurrency.equals(other.baseCurrency)
      ? invariant(false, 'TOKEN')
      : void 0

    var fraction = _Fraction.prototype.multiply.call(this, other)

    return new Price(
      this.baseCurrency,
      other.quoteCurrency,
      fraction.denominator,
      fraction.numerator
    )
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */

  _proto.quote = function quote(currencyAmount) {
    !currencyAmount.currency.equals(this.baseCurrency)
      ? invariant(false, 'TOKEN')
      : void 0

    var result = _Fraction.prototype.multiply.call(this, currencyAmount)

    return CurrencyAmount.fromFractionalAmount(
      this.quoteCurrency,
      result.numerator,
      result.denominator
    )
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */

  _proto.toSignificant = function toSignificant(
    significantDigits,
    format,
    rounding
  ) {
    if (significantDigits === void 0) {
      significantDigits = 6
    }

    return this.adjustedForDecimals.toSignificant(
      significantDigits,
      format,
      rounding
    )
  }

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4
    }

    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding)
  }

  _createClass(Price, [
    {
      key: 'adjustedForDecimals',
      get: function get() {
        return _Fraction.prototype.multiply.call(this, this.scalar)
      },
    },
  ])

  return Price
})(Fraction)

var computePairAddress = function computePairAddress(_ref) {
  var factoryAddress = _ref.factoryAddress,
    tokenA = _ref.tokenA,
    tokenB = _ref.tokenB

  var _ref2 = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA],
    token0 = _ref2[0],
    token1 = _ref2[1] // does safety checks

  return address.getCreate2Address(
    factoryAddress,
    solidity.keccak256(
      ['bytes'],
      [solidity.pack(['address', 'address'], [token0.address, token1.address])]
    ),
    INIT_CODE_HASH
  )
}

function validateSolidityTypeInstance(value, solidityType) {
  !JSBI.greaterThanOrEqual(value, ZERO)
    ? invariant(false, value + ' is not a ' + solidityType + '.')
    : void 0
  !JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType])
    ? invariant(false, value + ' is not a ' + solidityType + '.')
    : void 0
}

function sqrt(y) {
  validateSolidityTypeInstance(y, exports.SolidityType.uint256)
  var z = ZERO
  var x

  if (JSBI.greaterThan(y, THREE)) {
    z = y
    x = JSBI.add(JSBI.divide(y, TWO), ONE)

    while (JSBI.lessThan(x, z)) {
      z = x
      x = JSBI.divide(JSBI.add(JSBI.divide(y, x), x), TWO)
    }
  } else if (JSBI.notEqual(y, ZERO)) {
    z = ONE
  }

  return z
}

var Pair = /*#__PURE__*/ (function () {
  function Pair(currencyAmountA, tokenAmountB) {
    var tokenAmounts = currencyAmountA.currency.sortsBefore(
      tokenAmountB.currency
    ) // does safety checks
      ? [currencyAmountA, tokenAmountB]
      : [tokenAmountB, currencyAmountA]
    this.liquidityToken = new Token(
      tokenAmounts[0].currency.chainId,
      Pair.getAddress(tokenAmounts[0].currency, tokenAmounts[1].currency),
      18,
      'UNI-V2',
      'Uniswap V2'
    )
    this.tokenAmounts = tokenAmounts
  }

  Pair.getAddress = function getAddress(tokenA, tokenB) {
    return computePairAddress({
      factoryAddress: FACTORY_ADDRESS[tokenA.chainId],
      tokenA: tokenA,
      tokenB: tokenB,
    })
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */

  var _proto = Pair.prototype

  _proto.involvesToken = function involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1)
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */

  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  _proto.priceOf = function priceOf(token) {
    !this.involvesToken(token) ? invariant(false, 'TOKEN') : void 0
    return token.equals(this.token0) ? this.token0Price : this.token1Price
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */

  _proto.reserveOf = function reserveOf(token) {
    !this.involvesToken(token) ? invariant(false, 'TOKEN') : void 0
    return token.equals(this.token0) ? this.reserve0 : this.reserve1
  }

  _proto.getOutputAmount = function getOutputAmount(inputAmount) {
    !this.involvesToken(inputAmount.currency)
      ? invariant(false, 'TOKEN')
      : void 0

    if (
      JSBI.equal(this.reserve0.quotient, ZERO) ||
      JSBI.equal(this.reserve1.quotient, ZERO)
    ) {
      throw new InsufficientReservesError()
    }

    var inputReserve = this.reserveOf(inputAmount.currency)
    var outputReserve = this.reserveOf(
      inputAmount.currency.equals(this.token0) ? this.token1 : this.token0
    )
    var inputAmountWithFee = JSBI.multiply(inputAmount.quotient, _997)
    var numerator = JSBI.multiply(inputAmountWithFee, outputReserve.quotient)
    var denominator = JSBI.add(
      JSBI.multiply(inputReserve.quotient, _1000),
      inputAmountWithFee
    )
    var outputAmount = CurrencyAmount.fromRawAmount(
      inputAmount.currency.equals(this.token0) ? this.token1 : this.token0,
      JSBI.divide(numerator, denominator)
    )

    if (JSBI.equal(outputAmount.quotient, ZERO)) {
      throw new InsufficientInputAmountError()
    }

    return [
      outputAmount,
      new Pair(
        inputReserve.add(inputAmount),
        outputReserve.subtract(outputAmount)
      ),
    ]
  }

  _proto.getInputAmount = function getInputAmount(outputAmount) {
    !this.involvesToken(outputAmount.currency)
      ? invariant(false, 'TOKEN')
      : void 0

    if (
      JSBI.equal(this.reserve0.quotient, ZERO) ||
      JSBI.equal(this.reserve1.quotient, ZERO) ||
      JSBI.greaterThanOrEqual(
        outputAmount.quotient,
        this.reserveOf(outputAmount.currency).quotient
      )
    ) {
      throw new InsufficientReservesError()
    }

    var outputReserve = this.reserveOf(outputAmount.currency)
    var inputReserve = this.reserveOf(
      outputAmount.currency.equals(this.token0) ? this.token1 : this.token0
    )
    var numerator = JSBI.multiply(
      JSBI.multiply(inputReserve.quotient, outputAmount.quotient),
      _1000
    )
    var denominator = JSBI.multiply(
      JSBI.subtract(outputReserve.quotient, outputAmount.quotient),
      _997
    )
    var inputAmount = CurrencyAmount.fromRawAmount(
      outputAmount.currency.equals(this.token0) ? this.token1 : this.token0,
      JSBI.add(JSBI.divide(numerator, denominator), ONE)
    )
    return [
      inputAmount,
      new Pair(
        inputReserve.add(inputAmount),
        outputReserve.subtract(outputAmount)
      ),
    ]
  }

  _proto.getLiquidityMinted = function getLiquidityMinted(
    totalSupply,
    tokenAmountA,
    tokenAmountB
  ) {
    !totalSupply.currency.equals(this.liquidityToken)
      ? invariant(false, 'LIQUIDITY')
      : void 0
    var tokenAmounts = tokenAmountA.currency.sortsBefore(tokenAmountB.currency) // does safety checks
      ? [tokenAmountA, tokenAmountB]
      : [tokenAmountB, tokenAmountA]
    !(
      tokenAmounts[0].currency.equals(this.token0) &&
      tokenAmounts[1].currency.equals(this.token1)
    )
      ? invariant(false, 'TOKEN')
      : void 0
    var liquidity

    if (JSBI.equal(totalSupply.quotient, ZERO)) {
      liquidity = JSBI.subtract(
        sqrt(JSBI.multiply(tokenAmounts[0].quotient, tokenAmounts[1].quotient)),
        MINIMUM_LIQUIDITY
      )
    } else {
      var amount0 = JSBI.divide(
        JSBI.multiply(tokenAmounts[0].quotient, totalSupply.quotient),
        this.reserve0.quotient
      )
      var amount1 = JSBI.divide(
        JSBI.multiply(tokenAmounts[1].quotient, totalSupply.quotient),
        this.reserve1.quotient
      )
      liquidity = JSBI.lessThanOrEqual(amount0, amount1) ? amount0 : amount1
    }

    if (!JSBI.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError()
    }

    return CurrencyAmount.fromRawAmount(this.liquidityToken, liquidity)
  }

  _proto.getLiquidityValue = function getLiquidityValue(
    token,
    totalSupply,
    liquidity,
    feeOn,
    kLast
  ) {
    if (feeOn === void 0) {
      feeOn = false
    }

    !this.involvesToken(token) ? invariant(false, 'TOKEN') : void 0
    !totalSupply.currency.equals(this.liquidityToken)
      ? invariant(false, 'TOTAL_SUPPLY')
      : void 0
    !liquidity.currency.equals(this.liquidityToken)
      ? invariant(false, 'LIQUIDITY')
      : void 0
    !JSBI.lessThanOrEqual(liquidity.quotient, totalSupply.quotient)
      ? invariant(false, 'LIQUIDITY')
      : void 0
    var totalSupplyAdjusted

    if (!feeOn) {
      totalSupplyAdjusted = totalSupply
    } else {
      !!!kLast ? invariant(false, 'K_LAST') : void 0
      var kLastParsed = JSBI.BigInt(kLast)

      if (!JSBI.equal(kLastParsed, ZERO)) {
        var rootK = sqrt(
          JSBI.multiply(this.reserve0.quotient, this.reserve1.quotient)
        )
        var rootKLast = sqrt(kLastParsed)

        if (JSBI.greaterThan(rootK, rootKLast)) {
          var numerator = JSBI.multiply(
            totalSupply.quotient,
            JSBI.subtract(rootK, rootKLast)
          )
          var denominator = JSBI.add(JSBI.multiply(rootK, FIVE), rootKLast)
          var feeLiquidity = JSBI.divide(numerator, denominator)
          totalSupplyAdjusted = totalSupply.add(
            CurrencyAmount.fromRawAmount(this.liquidityToken, feeLiquidity)
          )
        } else {
          totalSupplyAdjusted = totalSupply
        }
      } else {
        totalSupplyAdjusted = totalSupply
      }
    }

    return CurrencyAmount.fromRawAmount(
      token,
      JSBI.divide(
        JSBI.multiply(liquidity.quotient, this.reserveOf(token).quotient),
        totalSupplyAdjusted.quotient
      )
    )
  }

  _createClass(Pair, [
    {
      key: 'token0Price',
      get: function get() {
        var result = this.tokenAmounts[1].divide(this.tokenAmounts[0])
        return new Price(
          this.token0,
          this.token1,
          result.denominator,
          result.numerator
        )
      },
      /**
       * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
       */
    },
    {
      key: 'token1Price',
      get: function get() {
        var result = this.tokenAmounts[0].divide(this.tokenAmounts[1])
        return new Price(
          this.token1,
          this.token0,
          result.denominator,
          result.numerator
        )
      },
    },
    {
      key: 'chainId',
      get: function get() {
        return this.token0.chainId
      },
    },
    {
      key: 'token0',
      get: function get() {
        return this.tokenAmounts[0].currency
      },
    },
    {
      key: 'token1',
      get: function get() {
        return this.tokenAmounts[1].currency
      },
    },
    {
      key: 'reserve0',
      get: function get() {
        return this.tokenAmounts[0]
      },
    },
    {
      key: 'reserve1',
      get: function get() {
        return this.tokenAmounts[1]
      },
    },
  ])

  return Pair
})()

var ONE_HUNDRED = /*#__PURE__*/ new Fraction(/*#__PURE__*/ JSBI.BigInt(100))
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */

function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator)
}

var Percent = /*#__PURE__*/ (function (_Fraction) {
  _inheritsLoose(Percent, _Fraction)

  function Percent() {
    var _this

    _this = _Fraction.apply(this, arguments) || this
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */

    _this.isPercent = true
    return _this
  }

  var _proto = Percent.prototype

  _proto.add = function add(other) {
    return toPercent(_Fraction.prototype.add.call(this, other))
  }

  _proto.subtract = function subtract(other) {
    return toPercent(_Fraction.prototype.subtract.call(this, other))
  }

  _proto.multiply = function multiply(other) {
    return toPercent(_Fraction.prototype.multiply.call(this, other))
  }

  _proto.divide = function divide(other) {
    return toPercent(_Fraction.prototype.divide.call(this, other))
  }

  _proto.toSignificant = function toSignificant(
    significantDigits,
    format,
    rounding
  ) {
    if (significantDigits === void 0) {
      significantDigits = 5
    }

    return _Fraction.prototype.multiply
      .call(this, ONE_HUNDRED)
      .toSignificant(significantDigits, format, rounding)
  }

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2
    }

    return _Fraction.prototype.multiply
      .call(this, ONE_HUNDRED)
      .toFixed(decimalPlaces, format, rounding)
  }

  return Percent
})(Fraction)

var Route = /*#__PURE__*/ (function () {
  function Route(pairs, input, output) {
    this._midPrice = null
    !(pairs.length > 0) ? invariant(false, 'PAIRS') : void 0
    var chainId = pairs[0].chainId
    !pairs.every(function (pair) {
      return pair.chainId === chainId
    })
      ? invariant(false, 'CHAIN_IDS')
      : void 0
    var wrappedInput = input.wrapped
    !pairs[0].involvesToken(wrappedInput) ? invariant(false, 'INPUT') : void 0
    !(
      typeof output === 'undefined' ||
      pairs[pairs.length - 1].involvesToken(output.wrapped)
    )
      ? invariant(false, 'OUTPUT')
      : void 0
    var path = [wrappedInput]

    for (
      var _iterator = _createForOfIteratorHelperLoose(pairs.entries()), _step;
      !(_step = _iterator()).done;

    ) {
      var _step$value = _step.value,
        i = _step$value[0],
        pair = _step$value[1]
      var currentInput = path[i]
      !(currentInput.equals(pair.token0) || currentInput.equals(pair.token1))
        ? invariant(false, 'PATH')
        : void 0

      var _output = currentInput.equals(pair.token0) ? pair.token1 : pair.token0

      path.push(_output)
    }

    this.pairs = pairs
    this.path = path
    this.input = input
    this.output = output
  }

  _createClass(Route, [
    {
      key: 'midPrice',
      get: function get() {
        if (this._midPrice !== null) return this._midPrice
        var prices = []

        for (
          var _iterator2 = _createForOfIteratorHelperLoose(
              this.pairs.entries()
            ),
            _step2;
          !(_step2 = _iterator2()).done;

        ) {
          var _step2$value = _step2.value,
            i = _step2$value[0],
            pair = _step2$value[1]
          prices.push(
            this.path[i].equals(pair.token0)
              ? new Price(
                  pair.reserve0.currency,
                  pair.reserve1.currency,
                  pair.reserve0.quotient,
                  pair.reserve1.quotient
                )
              : new Price(
                  pair.reserve1.currency,
                  pair.reserve0.currency,
                  pair.reserve1.quotient,
                  pair.reserve0.quotient
                )
          )
        }

        var reduced = prices
          .slice(1)
          .reduce(function (accumulator, currentValue) {
            return accumulator.multiply(currentValue)
          }, prices[0])
        return (this._midPrice = new Price(
          this.input,
          this.output,
          reduced.denominator,
          reduced.numerator
        ))
      },
    },
    {
      key: 'chainId',
      get: function get() {
        return this.pairs[0].chainId
      },
    },
  ])

  return Route
})()

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var quotedOutputAmount = midPrice.quote(inputAmount) // calculate price impact := (exactQuote - outputAmount) / exactQuote

  var priceImpact = quotedOutputAmount
    .subtract(outputAmount)
    .divide(quotedOutputAmount)
  return new Percent(priceImpact.numerator, priceImpact.denominator)
}

// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ? invariant(false, 'MAX_SIZE_ZERO') : void 0 // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ? invariant(false, 'ITEMS_SIZE') : void 0 // short circuit first item add

  if (items.length === 0) {
    items.push(add)
    return null
  } else {
    var isFull = items.length === maxSize // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add
    }

    var lo = 0,
      hi = items.length

    while (lo < hi) {
      var mid = (lo + hi) >>> 1

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }

    items.splice(lo, 0, add)
    return isFull ? items.pop() : null
  }
}

// in increasing order. i.e. the best trades have the most outputs for the least inputs and are sorted first

function inputOutputComparator(a, b) {
  // must have same input and output token for comparison
  !a.inputAmount.currency.equals(b.inputAmount.currency)
    ? invariant(false, 'INPUT_CURRENCY')
    : void 0
  !a.outputAmount.currency.equals(b.outputAmount.currency)
    ? invariant(false, 'OUTPUT_CURRENCY')
    : void 0

  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0
    } // trade A requires less input than trade B, so A should come first

    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1
    } else {
      return 1
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1
    } else {
      return -1
    }
  }
} // extension of the input output comparator that also considers other dimensions of the trade in ranking them

function tradeComparator(a, b) {
  var ioComp = inputOutputComparator(a, b)

  if (ioComp !== 0) {
    return ioComp
  } // consider lowest slippage next, since these are less likely to fail

  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1
  } // finally consider the number of hops since each hop costs gas

  return a.route.path.length - b.route.path.length
}
/**
 * Represents a trade executed against a list of pairs.
 * Does not account for slippage, i.e. trades that front run this trade and move the price.
 */

var Trade = /*#__PURE__*/ (function () {
  function Trade(route, amount, tradeType) {
    this.route = route
    this.tradeType = tradeType
    var tokenAmounts = new Array(route.path.length)

    if (tradeType === exports.TradeType.EXACT_INPUT) {
      !amount.currency.equals(route.input) ? invariant(false, 'INPUT') : void 0
      tokenAmounts[0] = amount.wrapped

      for (var i = 0; i < route.path.length - 1; i++) {
        var pair = route.pairs[i]

        var _pair$getOutputAmount = pair.getOutputAmount(tokenAmounts[i]),
          outputAmount = _pair$getOutputAmount[0]

        tokenAmounts[i + 1] = outputAmount
      }

      this.inputAmount = CurrencyAmount.fromFractionalAmount(
        route.input,
        amount.numerator,
        amount.denominator
      )
      this.outputAmount = CurrencyAmount.fromFractionalAmount(
        route.output,
        tokenAmounts[tokenAmounts.length - 1].numerator,
        tokenAmounts[tokenAmounts.length - 1].denominator
      )
    } else {
      !amount.currency.equals(route.output)
        ? invariant(false, 'OUTPUT')
        : void 0
      tokenAmounts[tokenAmounts.length - 1] = amount.wrapped

      for (var _i = route.path.length - 1; _i > 0; _i--) {
        var _pair = route.pairs[_i - 1]

        var _pair$getInputAmount = _pair.getInputAmount(tokenAmounts[_i]),
          inputAmount = _pair$getInputAmount[0]

        tokenAmounts[_i - 1] = inputAmount
      }

      this.inputAmount = CurrencyAmount.fromFractionalAmount(
        route.input,
        tokenAmounts[0].numerator,
        tokenAmounts[0].denominator
      )
      this.outputAmount = CurrencyAmount.fromFractionalAmount(
        route.output,
        amount.numerator,
        amount.denominator
      )
    }

    this.executionPrice = new Price(
      this.inputAmount.currency,
      this.outputAmount.currency,
      this.inputAmount.quotient,
      this.outputAmount.quotient
    )
    this.priceImpact = computePriceImpact(
      route.midPrice,
      this.inputAmount,
      this.outputAmount
    )
  }
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */

  Trade.exactIn = function exactIn(route, amountIn) {
    return new Trade(route, amountIn, exports.TradeType.EXACT_INPUT)
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */

  Trade.exactOut = function exactOut(route, amountOut) {
    return new Trade(route, amountOut, exports.TradeType.EXACT_OUTPUT)
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */

  var _proto = Trade.prototype

  _proto.minimumAmountOut = function minimumAmountOut(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO)
      ? invariant(false, 'SLIPPAGE_TOLERANCE')
      : void 0

    if (this.tradeType === exports.TradeType.EXACT_OUTPUT) {
      return this.outputAmount
    } else {
      var slippageAdjustedAmountOut = new Fraction(ONE)
        .add(slippageTolerance)
        .invert()
        .multiply(this.outputAmount.quotient).quotient
      return CurrencyAmount.fromRawAmount(
        this.outputAmount.currency,
        slippageAdjustedAmountOut
      )
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */

  _proto.maximumAmountIn = function maximumAmountIn(slippageTolerance) {
    !!slippageTolerance.lessThan(ZERO)
      ? invariant(false, 'SLIPPAGE_TOLERANCE')
      : void 0

    if (this.tradeType === exports.TradeType.EXACT_INPUT) {
      return this.inputAmount
    } else {
      var slippageAdjustedAmountIn = new Fraction(ONE)
        .add(slippageTolerance)
        .multiply(this.inputAmount.quotient).quotient
      return CurrencyAmount.fromRawAmount(
        this.inputAmount.currency,
        slippageAdjustedAmountIn
      )
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param nextAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */

  Trade.bestTradeExactIn = function bestTradeExactIn(
    pairs,
    currencyAmountIn,
    currencyOut,
    _temp, // used in recursion.
    currentPairs,
    nextAmountIn,
    bestTrades
  ) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$maxNumResults = _ref.maxNumResults,
      maxNumResults = _ref$maxNumResults === void 0 ? 3 : _ref$maxNumResults,
      _ref$maxHops = _ref.maxHops,
      maxHops = _ref$maxHops === void 0 ? 3 : _ref$maxHops

    if (currentPairs === void 0) {
      currentPairs = []
    }

    if (nextAmountIn === void 0) {
      nextAmountIn = currencyAmountIn
    }

    if (bestTrades === void 0) {
      bestTrades = []
    }

    !(pairs.length > 0) ? invariant(false, 'PAIRS') : void 0
    !(maxHops > 0) ? invariant(false, 'MAX_HOPS') : void 0
    !(currencyAmountIn === nextAmountIn || currentPairs.length > 0)
      ? invariant(false, 'INVALID_RECURSION')
      : void 0
    var amountIn = nextAmountIn.wrapped
    var tokenOut = currencyOut.wrapped

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i] // pair irrelevant

      if (
        !pair.token0.equals(amountIn.currency) &&
        !pair.token1.equals(amountIn.currency)
      )
        continue
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue
      var amountOut = void 0

      try {
        var _pair$getOutputAmount2 = pair.getOutputAmount(amountIn)

        amountOut = _pair$getOutputAmount2[0]
      } catch (error) {
        // input too low
        if (error.isInsufficientInputAmountError) {
          continue
        }

        throw error
      } // we have arrived at the output token, so this is the final trade of one of the paths

      if (amountOut.currency.equals(tokenOut)) {
        sortedInsert(
          bestTrades,
          new Trade(
            new Route(
              [].concat(currentPairs, [pair]),
              currencyAmountIn.currency,
              currencyOut
            ),
            currencyAmountIn,
            exports.TradeType.EXACT_INPUT
          ),
          maxNumResults,
          tradeComparator
        )
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs
          .slice(0, i)
          .concat(pairs.slice(i + 1, pairs.length)) // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops

        Trade.bestTradeExactIn(
          pairsExcludingThisPair,
          currencyAmountIn,
          currencyOut,
          {
            maxNumResults: maxNumResults,
            maxHops: maxHops - 1,
          },
          [].concat(currentPairs, [pair]),
          amountOut,
          bestTrades
        )
      }
    }

    return bestTrades
  }
  /**
   * Return the execution price after accounting for slippage tolerance
   * @param slippageTolerance the allowed tolerated slippage
   */

  _proto.worstExecutionPrice = function worstExecutionPrice(slippageTolerance) {
    return new Price(
      this.inputAmount.currency,
      this.outputAmount.currency,
      this.maximumAmountIn(slippageTolerance).quotient,
      this.minimumAmountOut(slippageTolerance).quotient
    )
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param nextAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param currencyAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */

  Trade.bestTradeExactOut = function bestTradeExactOut(
    pairs,
    currencyIn,
    currencyAmountOut,
    _temp2, // used in recursion.
    currentPairs,
    nextAmountOut,
    bestTrades
  ) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$maxNumResults = _ref2.maxNumResults,
      maxNumResults = _ref2$maxNumResults === void 0 ? 3 : _ref2$maxNumResults,
      _ref2$maxHops = _ref2.maxHops,
      maxHops = _ref2$maxHops === void 0 ? 3 : _ref2$maxHops

    if (currentPairs === void 0) {
      currentPairs = []
    }

    if (nextAmountOut === void 0) {
      nextAmountOut = currencyAmountOut
    }

    if (bestTrades === void 0) {
      bestTrades = []
    }

    !(pairs.length > 0) ? invariant(false, 'PAIRS') : void 0
    !(maxHops > 0) ? invariant(false, 'MAX_HOPS') : void 0
    !(currencyAmountOut === nextAmountOut || currentPairs.length > 0)
      ? invariant(false, 'INVALID_RECURSION')
      : void 0
    var amountOut = nextAmountOut.wrapped
    var tokenIn = currencyIn.wrapped

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i] // pair irrelevant

      if (
        !pair.token0.equals(amountOut.currency) &&
        !pair.token1.equals(amountOut.currency)
      )
        continue
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO)) continue
      var amountIn = void 0

      try {
        var _pair$getInputAmount2 = pair.getInputAmount(amountOut)

        amountIn = _pair$getInputAmount2[0]
      } catch (error) {
        // not enough liquidity in this pair
        if (error.isInsufficientReservesError) {
          continue
        }

        throw error
      } // we have arrived at the input token, so this is the first trade of one of the paths

      if (amountIn.currency.equals(tokenIn)) {
        sortedInsert(
          bestTrades,
          new Trade(
            new Route(
              [pair].concat(currentPairs),
              currencyIn,
              currencyAmountOut.currency
            ),
            currencyAmountOut,
            exports.TradeType.EXACT_OUTPUT
          ),
          maxNumResults,
          tradeComparator
        )
      } else if (maxHops > 1 && pairs.length > 1) {
        var pairsExcludingThisPair = pairs
          .slice(0, i)
          .concat(pairs.slice(i + 1, pairs.length)) // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops

        Trade.bestTradeExactOut(
          pairsExcludingThisPair,
          currencyIn,
          currencyAmountOut,
          {
            maxNumResults: maxNumResults,
            maxHops: maxHops - 1,
          },
          [pair].concat(currentPairs),
          amountIn,
          bestTrades
        )
      }
    }

    return bestTrades
  }

  return Trade
})()

function toHex(currencyAmount) {
  return '0x' + currencyAmount.quotient.toString(16)
}
var ZERO_HEX = '0x0'
/**
 * Represents the Uniswap V2 Router, and has static methods for helping execute trades.
 */

var Router = /*#__PURE__*/ (function () {
  /**
   * Cannot be constructed.
   */
  function Router() {}
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */

  Router.swapCallParameters = function swapCallParameters(trade, options) {
    var etherIn = trade.inputAmount.currency.isNative
    var etherOut = trade.outputAmount.currency.isNative // the router does not support both ether in and out

    !!(etherIn && etherOut) ? invariant(false, 'ETHER_IN_OUT') : void 0
    !(!('ttl' in options) || options.ttl > 0) ? invariant(false, 'TTL') : void 0
    var to = validateAndParseAddress(options.recipient)
    var amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage))
    var amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage))
    var path = trade.route.path.map(function (token) {
      return token.address
    })
    var deadline =
      'ttl' in options
        ? '0x' +
          (Math.floor(new Date().getTime() / 1000) + options.ttl).toString(16)
        : '0x' + options.deadline.toString(16)
    var useFeeOnTransfer = Boolean(options.feeOnTransfer)
    var methodName
    var args
    var value

    switch (trade.tradeType) {
      case exports.TradeType.EXACT_INPUT:
        if (etherIn) {
          methodName = useFeeOnTransfer
            ? 'swapExactETHForTokensSupportingFeeOnTransferTokens'
            : 'swapExactETHForTokens' // (uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline]
          value = amountIn
        } else if (etherOut) {
          methodName = useFeeOnTransfer
            ? 'swapExactTokensForETHSupportingFeeOnTransferTokens'
            : 'swapExactTokensForETH' // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline]
          value = ZERO_HEX
        } else {
          methodName = useFeeOnTransfer
            ? 'swapExactTokensForTokensSupportingFeeOnTransferTokens'
            : 'swapExactTokensForTokens' // (uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)

          args = [amountIn, amountOut, path, to, deadline]
          value = ZERO_HEX
        }

        break

      case exports.TradeType.EXACT_OUTPUT:
        !!useFeeOnTransfer ? invariant(false, 'EXACT_OUT_FOT') : void 0

        if (etherIn) {
          methodName = 'swapETHForExactTokens' // (uint amountOut, address[] calldata path, address to, uint deadline)

          args = [amountOut, path, to, deadline]
          value = amountIn
        } else if (etherOut) {
          methodName = 'swapTokensForExactETH' // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline]
          value = ZERO_HEX
        } else {
          methodName = 'swapTokensForExactTokens' // (uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)

          args = [amountOut, amountIn, path, to, deadline]
          value = ZERO_HEX
        }

        break
    }

    return {
      methodName: methodName,
      args: args,
      value: value,
    }
  }

  return Router
})()

exports.JSBI = JSBI
exports.AbstractCurrency = AbstractCurrency
exports.Avalanche = Avalanche
exports.BAR_ADDRESS = BAR_ADDRESS
exports.BENTOBOX_ADDRESS = BENTOBOX_ADDRESS
exports.BORING_HELPER_ADDRESS = BORING_HELPER_ADDRESS
exports.Binance = Binance
exports.CHAINLINK_ORACLE_ADDRESS = CHAINLINK_ORACLE_ADDRESS
exports.Celo = Celo
exports.CurrencyAmount = CurrencyAmount
exports.Ether = Ether
exports.FACTORY_ADDRESS = FACTORY_ADDRESS
exports.FIVE = FIVE
exports.Fantom = Fantom
exports.Fraction = Fraction
exports.Harmony = Harmony
exports.Heco = Heco
exports.INIT_CODE_HASH = INIT_CODE_HASH
exports.InsufficientInputAmountError = InsufficientInputAmountError
exports.InsufficientReservesError = InsufficientReservesError
exports.KASHI_ADDRESS = KASHI_ADDRESS
exports.MAKER_ADDRESS = MAKER_ADDRESS
exports.MASTERCHEF_ADDRESS = MASTERCHEF_ADDRESS
exports.MINIMUM_LIQUIDITY = MINIMUM_LIQUIDITY
exports.Matic = Matic
exports.MaxUint256 = MaxUint256
exports.NATIVE = NATIVE
exports.NativeCurrency = NativeCurrency
exports.ONE = ONE
exports.Okex = Okex
exports.PEGGED_ORACLE_ADDRESS = PEGGED_ORACLE_ADDRESS
exports.Pair = Pair
exports.Percent = Percent
exports.Price = Price
exports.ROUTER_ADDRESS = ROUTER_ADDRESS
exports.Route = Route
exports.Router = Router
exports.SOLIDITY_TYPE_MAXIMA = SOLIDITY_TYPE_MAXIMA
exports.SUSHISWAP_MULTISWAPPER_ADDRESS = SUSHISWAP_MULTISWAPPER_ADDRESS
exports.SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS =
  SUSHISWAP_MULTI_EXACT_SWAPPER_ADDRESS
exports.SUSHISWAP_SWAPPER_ADDRESS = SUSHISWAP_SWAPPER_ADDRESS
exports.SUSHISWAP_TWAP_0_ORACLE_ADDRESS = SUSHISWAP_TWAP_0_ORACLE_ADDRESS
exports.SUSHISWAP_TWAP_1_ORACLE_ADDRESS = SUSHISWAP_TWAP_1_ORACLE_ADDRESS
exports.SUSHI_ADDRESS = SUSHI_ADDRESS
exports.TEN = TEN
exports.THREE = THREE
exports.TIMELOCK_ADDRESS = TIMELOCK_ADDRESS
exports.TWO = TWO
exports.Token = Token
exports.Trade = Trade
exports.WETH9 = WETH9
exports.WNATIVE = WNATIVE
exports.ZERO = ZERO
exports._100 = _100
exports._1000 = _1000
exports._997 = _997
exports.computePairAddress = computePairAddress
exports.computePriceImpact = computePriceImpact
exports.currencyEquals = currencyEquals
exports.inputOutputComparator = inputOutputComparator
exports.sortedInsert = sortedInsert
exports.sqrt = sqrt
exports.toHex = toHex
exports.tradeComparator = tradeComparator
exports.validateAndParseAddress = validateAndParseAddress
exports.validateSolidityTypeInstance = validateSolidityTypeInstance
exports.xDai = xDai
//# sourceMappingURL=sdk.cjs.development.js.map
