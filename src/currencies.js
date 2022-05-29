var XRPValidator = require('./ripple_validator');
var ETHValidator = require('./ethereum_validator');
var BTCValidator = require('./bitcoin_validator');
var XMRValidator = require('./monero_validator');
var NANOValidator = require('./nano_validator');
var XLMValidator = require('./stellar_validator');
var ADAValidator = require('./cardano_validator');
var TRXValidator = require('./tron_validator');
var BNBValidator = require('./bnb_validator')

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
var CURRENCIES = [{
    name: 'bitcoin',
    symbol: 'btc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'bitcoincash',
    symbol: 'bch',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'litecoin',
    symbol: 'ltc',
    addressTypes: {prod: ['30', '05', '32'], testnet: ['6f', 'c4', '3a']},
    segwitHrp: 'ltc',
    validator: BTCValidator
}, {
    name: 'peercoin',
    symbol: 'ppc',
    addressTypes: {prod: ['37', '75'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'dogecoin',
    symbol: 'doge',
    addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']},
    validator: BTCValidator
}, {
    name: 'beavercoin',
    symbol: 'bvc',
    addressTypes: {prod: ['19', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator,
}, {
    name: 'freicoin',
    symbol: 'frc',
    addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'protoshares',
    symbol: 'pts',
    addressTypes: {prod: ['38', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'megacoin',
    symbol: 'mec',
    addressTypes: {prod: ['32', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'primecoin',
    symbol: 'xpm',
    addressTypes: {prod: ['17', '53'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'auroracoin',
    symbol: 'aur',
    addressTypes: {prod: ['17', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'namecoin',
    symbol: 'nmc',
    addressTypes: {prod: ['34'], testnet: []},
    validator: BTCValidator
}, {
    name: 'biocoin',
    symbol: 'bio',
    addressTypes: {prod: ['19', '14'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'garlicoin',
    symbol: 'grlc',
    addressTypes: {prod: ['26', '05'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'vertcoin',
    symbol: 'vtc',
    addressTypes: {prod: ['0x', '47'], testnet: ['6f', 'c4']},
    segwitHrp: 'vtc',
    validator: BTCValidator
}, {
    name: 'bitcoingold',
    symbol: 'btg',
    addressTypes: {prod: ['26', '17'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'komodo',
    symbol: 'kmd',
    addressTypes: {prod: ['3c', '55'], testnet: ['0', '5']},
    validator: BTCValidator
}, {
    name: 'bitcoinz',
    symbol: 'btcz',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
}, {
    name: 'bitcoinprivate',
    symbol: 'btcp',
    expectedLength: 26,
    addressTypes: {prod: ['1325', '13af'], testnet: ['1957', '19e0']},
    validator: BTCValidator
}, {
    name: 'hush',
    symbol: 'hush',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
}, {
    name: 'snowgem',
    symbol: 'sng',
    expectedLength: 26,
    addressTypes: {prod: ['1c28', '1c2d'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
}, {
    name: 'zcash',
    symbol: 'zec',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
}, {
    name: 'zclassic',
    symbol: 'zcl',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
}, {
    name: 'zencash',
    symbol: 'zen',
    expectedLength: 26,
    addressTypes: {prod: ['2089', '2096'], testnet: ['2092', '2098']},
    validator: BTCValidator
}, {
    name: 'votecoin',
    symbol: 'vot',
    expectedLength: 26,
    addressTypes: {prod: ['1cb8', '1cbd'], testnet: ['1d25', '1cba']},
    validator: BTCValidator
}, {
    name: 'decred',
    symbol: 'dcr',
    addressTypes: {prod: ['073f', '071a'], testnet: ['0f21', '0efc']},
    hashFunction: 'blake256',
    expectedLength: 26,
    validator: BTCValidator
}, {
    name: 'digibyte',
    symbol: 'dgb',
    addressTypes: {prod: ['1e'], testnet: []},
    validator: BTCValidator
}, {
    name: 'ethereum',
    symbol: 'eth',
    validator: ETHValidator,
}, {
    name: 'etherzero',
    symbol: 'etz',
    validator: ETHValidator,
}, {
    name: 'ethereumclassic',
    symbol: 'etc',
    validator: ETHValidator,
}, {
    name: 'callisto',
    symbol: 'clo',
    validator: ETHValidator,
}, {
    name: 'ripple',
    symbol: 'xrp',
    validator: XRPValidator,
}, {
    name: 'dash',
    symbol: 'dash',
    addressTypes: {prod: ['4c', '10'], testnet: ['8c', '13']},
    validator: BTCValidator
}, {
    name: 'neo',
    symbol: 'neo',
    addressTypes: {prod: ['17'], testnet: []},
    validator: BTCValidator
}, {
    name: 'neogas',
    symbol: 'gas',
    addressTypes: {prod: ['17'], testnet: []},
    validator: BTCValidator
}, {
    name: 'qtum',
    symbol: 'qtum',
    addressTypes: {prod: ['3a', '32'], testnet: ['78', '6e']},
    validator: BTCValidator
}, {
    name: 'bankex',
    symbol: 'bkx',
    validator: ETHValidator
}, {
    name: 'monero',
    symbol: 'xmr',
    addressTypes: {prod: ['18'], testnet: ['53']},
    iAddressTypes: {prod: ['19'], testnet: ['54']},
    validator: XMRValidator
}, {
    name: 'nano',
    symbol: 'nano',
    validator: NANOValidator,
}, {
    name: 'raiblocks',
    symbol: 'xrb',
    validator: NANOValidator,
}, {
    name: 'postcoin',
    symbol: 'post',
    addressTypes: {prod: ['37', '1c'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'nobtcoin',
    symbol: 'nobt',
    addressTypes: {prod: ['0f', '55'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'vericoin',
    symbol: 'vrc',
    addressTypes: {prod: ['46', '84'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'verium',
    symbol: 'vrm',
    addressTypes: {prod: ['46', '84'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'smilo',
    symbol: 'xsm',
    validator: ETHValidator,
}, {
    name: 'zenzo',
    symbol: 'znz',
    addressTypes: {prod: ['46', '51'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'universe',
    symbol: 'uni',
    addressTypes: {prod: ['44', 'c4'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'spectre',
    symbol: 'xspec',
    addressTypes: {prod: ['3f', 'c4'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: '42coin',
    symbol: '42',
    addressTypes: {prod: ['05', '08'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'smartholdem',
    symbol: 'sth',
    addressTypes: {prod: ['ff', '3f'], testnet: ['01', '1e']},
    validator: BTCValidator
}, {
    name: 'steep',
    symbol: 'steep',
    addressTypes: {prod: ['7d', 'fd'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'evergreen',
    symbol: 'egc',
    addressTypes: {prod: ['21', '1a'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'bitconnectx',
    symbol: 'bccx',
    addressTypes: {prod: ['4b', 'cb'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'guapcoin',
    symbol: 'guap',
    addressTypes: {prod: ['26', '2e'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'ravencoin',
    symbol: 'rvn',
    addressTypes: {prod: ['3c', '80'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'stellar',
    symbol: 'xlm',
    validator: XLMValidator,
}, {
    name: 'cardano',
    symbol: 'ada',
    validator: ADAValidator,
}, {
    name: 'vechain',
    symbol: 'vet',
    validator: ETHValidator,
}, {
    name: 'tron',
    symbol: 'trx',
    addressTypes: {prod: [0x41], testnet: [0xa0]},
    validator: TRXValidator
}, {
    name: 'pruxcoin',
    symbol: 'prux',
    addressTypes: {prod: ['37', 'b7'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'deeponion',
    symbol: 'onion',
    addressTypes: {prod: ['1f', '9f'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'bitcoinrand',
    symbol: 'bzar',
    addressTypes: {prod: ['3c', '3d'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'emercoin',
    symbol: 'emc',
    addressTypes: {prod: ['21', '80'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'hivecoin',
    symbol: 'hvq',
    addressTypes: {prod: ['28', '80'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'binancecoin',
    symbol: 'bnb',
    validator: BNBValidator
}, {
    name: 'pivx',
    symbol: 'pivx',
    addressTypes: {prod: ['1e', '10'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'raptoreum',
    symbol: 'rtm',
    addressTypes: {prod: ['3c', '80'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}, {
    name: 'reddcoin',
    symbol: 'rdd',
    addressTypes: {prod: ['3d', 'bd'], testnet: ['6f', 'c4']},
    validator: BTCValidator
}
];


module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        for (var i = 0; i < CURRENCIES.length; i++) {
            var currency = CURRENCIES[i];
            if (currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                return currency;
            }
        }
        return null;
    }
};
