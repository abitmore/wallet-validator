# wallet-validator

Fast and convenient utility for checking the validity of coin addresses without access to the blockchain.

Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

**File size is ~100 kB (minifed and gzipped)**.

## Installation

### NPM
```
npm install --save wallet-validator
```

### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Supported crypto currencies
* SmartHoldem/STH, `'smartholdem'` or `'STH'`
* Auroracoin/AUR, `'auroracoin'` or `'AUR'`
* Bankex/BKX, `'bankex'` or `'BKX'`
* BeaverCoin/BVC, `'beavercoin'` or `'BVC'`
* Biocoin/BIO, `'biocoin'` or `'BIO'`
* Bitcoin/BTC, `'bitcoin'` or `'BTC'`
* BitcoinCash/BCH, `'bitcoincash'` or `'BCH'`
* BitcoinGold/BTG, `'bitcoingold'` or `'BTG'`
* BitcoinPrivate/BTCP, `'bitcoinprivate'` or `'BTCP'`
* BitcoinZ/BTCZ, `'bitcoinz'` or `'BTCZ'`
* Callisto/CLO, `'callisto'` or `'CLO'`
* Dash, `'dash'` or `'DASH'`
* Decred/DCR, `'decred'` or `'DCR'`
* Digibyte/DGB, `'digibyte'` or `'DGB'`
* Dogecoin/DOGE, `'dogecoin'` or `'DOGE'`
* Ethereum/ETH, `'ethereum'` or `'ETH'`
* EthereumClassic/ETH, `'ethereumclassic'` or `'ETC'`
* EthereumZero/ETZ, `'etherzero'` or `'ETZ'`
* Freicoin/FRC, `'freicoin'` or `'FRC'`
* Garlicoin/GRLC, `'garlicoin'` or `'GRLC'`
* Hush/HUSH, `'hush'` or `'HUSH'`
* Komodo/KMD, `'komodo'` or `'KMD'`
* Litecoin/LTC, `'litecoin'` or `'LTC'`
* Megacoin/MEC, `'megacoin'` or `'MEC'`
* Monero/XMR, `'monero'` or `'XMR'`
* Namecoin/NMC, `'namecoin'` or `'NMC'`
* Nano/NANO, `'nano'` or `'NANO'`
* NEO/NEO, `'NEO'` or `'NEO'`
* NeoGas/GAS, `'neogas'` or `'GAS'`
* Peercoin/PPCoin/PPC, `'peercoin'` or `'PPC'`
* Primecoin/XPM, `'primecoin'` or `'XPM'`
* Protoshares/PTS, `'protoshares'` or `'PTS'`
* Qtum/QTUM, `'qtum'` or `'QTUM'`
* Raiblocks/XRB, `'raiblocks'` or `'XRB'`
* Ripple/XRP, `'ripple'` or `'XRP'`
* Snowgem/SNG, `'snowgem'` or `'SNG'`
* Vertcoin/VTC, `'vertcoin'` or `'VTC'`
* Votecoin/VTC, `'votecoin'` or `'VOT'`
* Zcash/ZEC, `'zcash'` or `'ZEC'`
* Zclassic/ZCL, `'zclassic'` or `'ZCL'`
* ZenCash/ZEN, `'zencash'` or `'ZEN'`
* PostCoin/POST, `'postcoin'` or `'POST'`
* Nobtcoin/NOBT, `'nobtcoin'` or `'NOBT'`
* VeriCoin/VRC, `'vericoin'` or `'VRC'`
* VeriumReserve/VRM, `'verium'` or `'VRM'`
* Smilo/XSM, `'smilo'` or `'XSM'`
* ZENZO/ZNZ, `'zenzo'` or `'ZNZ'`
* Universe/UNI, `'universe'` or `'UNI'`
* Spectrecoin/XSPEC, `'spectre'` or `'XSPEC'`
* 42-coin/42, `'42coin'` or `'42'`
* SteepCoin/STEEP, `'steep'` or `'STEEP'`
* EverGreenCoin/EGC, `'evergreen'` or `'EGC'`
* BitConnectX/BCCX, `'bitconnectx'` or `'BCCX'`
* GuapCoin/GUAP, `'guapcoin'` or `'GUAP'`
* Ravencoin/RVN, `'ravencoin'` or `'RVN'`
* Stellar/XLM, `'stellar'` or `'XLM'`
* Cardano/ADA, `'cardano' or 'ADA'`
* VeChain/VET, `'vechain'` or `'VET'`
* TRON/TRX, `'tron'` or `'TRX'`
* PRUX-Coin/PRUX, `'pruxcoin'` or `'PRUX'`
* DeepOnion/ONION, `'deeponion'` or `'ONION'`
* Bitcoinrand/BZAR, `'bitcoinrand'` or `'BZAR'`
* Emercoin/EMC, `'emercoin'` or `'EMC'`
* HiveCoin/HVQ, `'hivecoin'` or `'HVQ'`
* BinanceCoin/BNB, `'binancecoin'` or `'BNB'`
* PIVX/PIVX, `'pivx'` or `'PIVX'`
* Raptoreum/RTM, `'rtm'` or `'RTM'`
* ReddCoin/RDD, `'rdd'` or `'rdd'`

### Usage example

#### Node
```javascript
var Validator = require('wallet-validator');

var valid = Validator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require('wallet-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoin', 'testnet');
if(valid)
      console.log('This is a valid address');
else
      console.log('Address INVALID');

// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

#### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

```javascript
// WAValidator is exposed as a global (window.WAValidator)
var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if(valid)
    alert('This is a valid address');
else
    alert('Address INVALID');

// This should show a pop up with text 'This is a valid address'.
```
