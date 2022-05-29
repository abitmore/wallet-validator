var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

var chai = isNode ? require('chai') : window.chai,
    expect = chai.expect;

var WAValidator = isNode ? require('../src/wallet_address_validator') : window.WAValidator;

function valid (address, currency, networkType) {
    var result = WAValidator.validate(address, currency, networkType);
    expect(result).to.be.true;
}

function invalid (address, currency, networkType) {
    var result = WAValidator.validate(address, currency, networkType);
    expect(result).to.be.false;
}

describe('WAValidator.validate()', function () {
    describe('valid results', function () {
        it('should return true for correct bitcoin addresses', function () {
            valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BTC');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'prod');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'both');
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'testnet');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'both');

            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez');
            valid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt');
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoin', 'testnet');

            // segwit addresses
            valid('BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4', 'bitcoin');
            valid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7', 'bitcoin');
            valid('bc1pw508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7k7grplx', 'bitcoin');
            valid('BC1SW50QA3JX3S', 'bitcoin');
            valid('bc1zw508d6qejxtdg4y5r3zarvaryvg6kdaj', 'bitcoin');
            valid('tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy', 'bitcoin');

            invalid("tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty", 'bitcoin'),
            invalid("bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5", 'bitcoin'),
            invalid("BC13W508D6QEJXTDG4Y5R3ZARVARY0C5XW7KN40WF2", 'bitcoin'),
            invalid("bc1rw5uspcuh", 'bitcoin'),
            invalid("bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90", 'bitcoin'),
            invalid("BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P", 'bitcoin'),
            invalid("tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sL5k7", 'bitcoin'),
            invalid("bc1zw508d6qejxtdg4y5r3zarvaryvqyzf3du", 'bitcoin'),
            invalid("tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3pjxtptv", 'bitcoin'),
            invalid("bc1gmk9yu", 'bitcoin')
        });

        it('should return true for correct bitcoincash addresses', function () {
            valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoincash');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoincash');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BCH');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'prod');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'both');
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoincash');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'testnet');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'both');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoincash');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoincash', 'testnet');
        });

        it('should return true for correct litecoin addresses', function () {
            valid('ltc1q5det08ke2gpet06wczcdfs2v3hgfqllxw28uln8vxxx82qlue6uswceljm', 'LTC');
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin');
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'LTC');
            valid('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin');
            valid('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'litecoin', 'testnet');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'litecoin', 'testnet');
            valid('QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy', 'litecoin', 'testnet');
            valid('QjpzxpbLp5pCGsCczMbfh1uhC3P89QZavY', 'litecoin', 'testnet');
        });

        it('should return true for correct peercoin addresses', function () {
            valid('PHCEsP6od3WJ8K2WKWEDBYKhH95pc9kiZN', 'peercoin');
            valid('PSbM1pGoE9dnAuVWvpQqTTYVpKZU41dNAz', 'peercoin');
            valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'peercoin');
            valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'PPC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'peercoin', 'testnet');

            // p2sh addresses
            valid('pNms4CaWqgZUxbNZaA1yP2gPr3BYnez9EM', 'peercoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'peercoin', 'testnet');
        });

        it('should return true for correct dogecoin addresses', function () {
            valid('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin');
            valid('DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin');
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin');
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'DOGE');
            //TODO: NEED A DOGECOIN TESTNET ADDRESS

            //p2sh addresses
            valid('A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'dogecoin', 'testnet');
        });

        it('should return true for correct beavercoin addresses', function () {
            valid('BPPtB4EpPi5wCaGXZuNyKQgng8ya579qUh', 'beavercoin');
            valid('BC1LLYoE4mTCHTJhVYvLGxhRTwAHyWTQ49', 'beavercoin');
            valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'beavercoin');
            valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'BVC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'beavercoin', 'testnet');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'beavercoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'beavercoin', 'testnet');
        });

        it('should return true for correct freicoin addresses', function () {
            valid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'freicoin');
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'freicoin');
            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'freicoin');
            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'FRC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'freicoin', 'testnet');

            // p2sh addresse
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'freicoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'freicoin', 'testnet');
        });

        it('should return true for correct protoshares addresses', function () {
            valid('PaNGELmZgzRQCKeEKM6ifgTqNkC4ceiAWw', 'protoshares');
            valid('Piev8TMX2fT5mFtgxx2TXJaqXP37weMPuD', 'protoshares');
            valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'protoshares');
            valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'PTS');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'protoshares', 'testnet');

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'protoshares');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'protoshares', 'testnet');
        });

        it('should return true for correct megacoin addresses', function () {
            valid('MWUHaNxjXGZUYTh92i3zuDmsnH1rHSBk5M', 'megacoin');
            valid('MSAkrhRyte7bz999Ga5SqYjzypFFYa2oEb', 'megacoin');
            valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'megacoin');
            valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'MEC');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'megacoin', 'testnet');

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'megacoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'megacoin', 'testnet');
        });

        it('should return true for correct primecoin addresses', function () {
            valid('AVKeiZ5JadfWdH2EYVgVRfX4ufoyd4ehuM', 'primecoin');
            valid('AQXBRPyob4dywUJ21RUKrR1xetQCDVenKD', 'primecoin');
            valid('ANHfTZnskKqaBU7oZuSha9SpbHU3YBfeKf', 'primecoin');
            valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'primecoin');
            valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'XPM');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'primecoin', 'testnet');

            //p2sh addresses
            valid('af5CvTQq7agDh717Wszb5QDbWb7nT2mukP', 'primecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'primecoin', 'testnet');
        });

        it('should return true for correct auroracoin addresses', function () {
            valid('ARM3GLZXF1PDTZ5vz3wh5MVahbK9BHTWAN', 'auroracoin');
            valid('AUtfc6ThCLb7FuEu7QPrWpJuaXaJRPciDF', 'auroracoin');
            valid('AUN1oaj5hjispGnczt8Aruw3TxgGyRqB3V', 'auroracoin');
            valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'auroracoin');
            valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'AUR');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'auroracoin', 'testnet');

            //p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'auroracoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'auroracoin', 'testnet');
        });

        it('should return true for correct namecoin addresses', function () {
            valid('NEpeRmS775fnti8TDgJA28m8KLEfNNRZvT', 'namecoin');
            valid('MyJ691bGJ48RBK2LS8n1U57wcFLFScFXxi', 'namecoin');
            valid('NFY9aw1RXLGtWpeqgNQXprnUcZXyKNinTh', 'namecoin');
            valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'namecoin');
            valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'NMC');
        });

        it('should return true for correct BioCoin addresses', function () {
            valid('B7xseoLGk7hEpMDDeSvZDKmmiAMHWiccok', 'biocoin');
            valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'biocoin');
            valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'biocoin', 'testnet');
            valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'BIO', 'testnet');
            valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'BIO');
        });

        it('should return true for correct Garlicoin addresses', function () {
            valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'garlicoin');
            valid('GNWeWaoQ6rv21ZFjJWT9vb91hXUzFTLkru', 'garlicoin');
            valid('mjKbQTkgwzmsL3J86tdVzhyW9pc4NePqTb', 'garlicoin', 'testnet');
            valid('mnYp36NuyRavMKQ9Q9Q6oGqoorAs9p3zYn', 'GRLC', 'testnet');
            valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'GRLC');
        });

        it('should return true for correct Vertcoin addresses', function () {
            valid('VmoMjGf3zgZLy8sk3PMKd3xikZHXWvnYi7', 'vertcoin');
            valid('VmhHwXr3J8xMZpy62WuBGpu3xVvThWzcTQ', 'vertcoin');
            valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'vertcoin', 'testnet');
            valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'VTC', 'testnet');
            valid('Vri6Q4GgNFfdtcpxD961TotJwaSaYQCaL5', 'VTC');
            valid('vtc1qmzq3erafwvz23yfeu9tu45uz2kx3d7esk0rayg', 'VTC');
            valid('vtc1qhy8eqwqxpyryz4wctus36yl2uu60t0z6ecrvtc', 'VTC');
            valid('vtc1qh9y09s2crkp63mk26u3vrq9q4w3h8ee8gepjgw', 'VTC');
        });

        it('should return true for correct BitcoinGold addresses', function () {
            valid('GW3JrQyHtoVfEFES3Y9JagiX3VSKQStLwj', 'bitcoingold');
            valid('GUDWdeMyAXQbrNFFivAhkJQ1GfBCFdc7JF', 'bitcoingold');
            valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'bitcoingold', 'testnet');
            valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'BTG', 'testnet');
            valid('GSNFPRsdaM3MXrU5HW1AxgFwmUQC8HXK9F', 'BTG');
        });

        it('should return true for correct Decred addresses', function () {
            valid('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh85', 'DCR');
            valid('DsYuxtvGRfN8rncXAndtLUpJm55F77K17RA', 'decred');
            valid('DsaXDG2NrJW8g4tFAb8n9MNx81Sn3Qc8AEV', 'decred');
            valid('TsijUgejaRnLKF5WAbpUxNtwKGUiKVeXLr7', 'decred', 'testnet');
            valid('TsZ9QmAoadF12hGvyALp6qvaF4be3BmLqG9', 'dcr', 'testnet');
        });

        it('should return true for correct Digibyte addresses', function () {
            valid('DG2rM2orU2JH5i4ACh3AKNpRTNESdv5xf8', 'DGB');
            valid('DBR2Lj1F17eHGHXgbpae2Wb4m39bDyA1qo', 'DGB');
            valid('D9TDZTR9Z9Mx2NoDJnhqhnYhDLKRAmsL9n', 'digibyte');
            valid('DHRzA1YHA1kFWpz2apRckZJy6KZRyGq4EV', 'digibyte');
            valid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'digibyte');
        });

        it('should return true for correct Ethereum addresses', function () {
            valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'ethereum');
            valid('0xa00354276d2fC74ee91e37D085d35748613f4748', 'ethereum');
            valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'ETH');
            valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'ETH');
            valid('0x52908400098527886E0F7030069857D2E4169EE7', 'ETH');
            valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'ETH');
            valid('0xde709f2102306220921060314715629080e2fb77', 'ETH');
            valid('0x27b1fdb04752bbc536007a920d24acb045561c26', 'ETH');
            valid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ETH');
            valid('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'ETH');
            valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ETH');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETH');

            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ethereumclassic');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETC');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'etherzero');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETZ');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'callisto');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'CLO');
        });

        it('should return true for correct Ripple addresses', function () {
            valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'ripple');
            valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'XRP');
            valid('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV', 'XRP');
            valid('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', 'XRP');
            valid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN', 'XRP');
        });

        it('should return true for correct dash addresses', function () {
            valid('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahb6b', 'dash');
            valid('XcY4WJ6Z2Q8w7vcYER1JypC8s2oa3SQ1b1', 'DASH');
            valid('XqMkVUZnqe3w4xvgdZRtZoe7gMitDudGs4', 'dash');
            valid('yPv7h2i8v3dJjfSH4L3x91JSJszjdbsJJA', 'dash', 'testnet');
        });

        it('should return true for correct neo addresses', function () {
            valid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neo');
            valid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ1X', 'NEO');
        });

        it('should return true for correct neo gas addresses', function () {
            valid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neogas');
        });

        it('should return true for correct qtum addresses', function () {
            valid('QNjUiD3bVVZwYTc5AhpeQbS1mfb2guyWhe', 'qtum');
            valid('QVZnSrMwKp6AL4FjUPPnfFgsma6j1DXQXu', 'QTUM');
            valid('qcSLSxN1sngCWSrKFZ6UC7ri4hhVSdq9SU', 'qtum', 'testnet');
            valid('qbgHcqxXYHVJZXHheGpHwLJsB5epDUtWxe', 'qtum', 'testnet');
            valid('qZqqcqCsVtP2U38WWaUnwshHRpefvCa8hX', 'qtum', 'testnet');
        });

        it('should return true for correct votecoin addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin');
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT');
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', 'testnet');
        });

        it('should return true for correct bitcoinz addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz');
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ');
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', 'testnet');
        });

        it('should return true for correct zclassic addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic');
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL');
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', 'testnet');
        });

        it('should return true for correct hush addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush');
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH');
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', 'testnet');
        });

        it('should return true for correct zcash addresses', function () {
            valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash');
            valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC');
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', 'testnet');
        });

        it('should return true for correct bitcoinprivate addresses', function () {
            valid('b1M4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate');
            //valid('bx....', 'BTCP');
            //valid('nx....', 'bitcoinprivate', 'testnet');
        });

        it('should return true for correct snowgem addresses', function () {
            valid('s1fx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem');
            valid('s3d27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG');
            valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', 'testnet');
        });

        it('should return true for correct zencash addresses', function () {
            valid('znhiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash');
            valid('zssEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN');
            valid('ztmWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', 'testnet');
        });

        it('should return true for correct komodo addresses', function () {
            valid('R9R5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo');
            valid('RAvj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD');
            //valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', 'testnet');
        });

        it('should return true for correct Bankex addresses', function () {
            valid('0xeac39e1bc802baae3d4b9cb518f3f60374bbad6c', 'bankex');
            valid('0x45245bc59219eeaaf6cd3f382e078a461ff9de7b', 'BKX');
            valid('0xf40d80FCfa5cdEa0bB1E570c2D52132ac9bC6aEC', 'bankex', 'testnet');
            valid('0x8A7395f281EeCf2B471B689E87Cf4C7fa8bb957d', 'BKX', 'testnet');
        });

        it('should return true for correct monero addresses', function () {
            valid('47zQ5LAivg6hNCgijXSEFVLX7mke1bgM6YGLFaANDoJbgXDymcAAZvvMNt2PmMpqEe5qRy2zyfMYXdwpmdyitiFh84xnPG2', 'monero');
            valid('48bWuoDG75CXMDHbmPEvUF2hm1vLDic7ZJ7hqRkL65QR9p13AQAX4eEACXNk4YP115Q4KRVZnAvmMBHrcGfv9FvKPZnH6vH', 'XMR');
            valid('A2be3UvzMtkJtxRYgcCbQt2y7Rp2eLVGqNTWfZeankrWimSMM4y7uMP6B9oAZaHsXTj8KFSerkSkkVRuEuEca9QM8VhxCNU', 'monero', 'testnet');

            //integrated addresses
            valid('4Gd4DLiXzBmbVX2FZZ3Cvu6fUaWACup1qDowprUCje1kSP4FmbftiJMSfV8kWZXNqmVwj4m52xqtgFNUudVmsmGkGvkLcCibWfVUfUFVB7', 'monero');
            valid('4J5sF94AzXgFgx8LuWc9dcWkJkGkD3cL3L2AuhX6QA9jFvSxxj6QhHqHXqM2b2Go7G8RyDzEbHxYd9G26XUUbuJChipEyBz9fENMU2Ua9b', 'XMR');
        });

        it('should return true for correct nano addresses', function () {
            valid('xrb_3t6k35gi95xu6tergt6p69ck76ogmitsa8mnijtpxm9fkcm736xtoncuohr3', 'nano');
            valid('xrb_13ezf4od79h1tgj9aiu4djzcmmguendtjfuhwfukhuucboua8cpoihmh8byo', 'nano');
            valid('xrb_35jjmmmh81kydepzeuf9oec8hzkay7msr6yxagzxpcht7thwa5bus5tomgz9', 'nano');
            valid('xrb_1111111111111111111111111111111111111111111111111111hifc8npp', 'nano');
            valid('xrb_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est', 'nano');
            valid('xrb_3wm37qz19zhei7nzscjcopbrbnnachs4p1gnwo5oroi3qonw6inwgoeuufdp', 'nano');
            valid('xrb_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4', 'nano');
            valid('xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjmgu', 'nano');
            valid('xrb_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano');
            valid('nano_1q79ahdr36uqn38p5tp5sqwkn73rnpj1k8obtuetdbjcx37d5gahhd1u9cuh', 'nano');
        });

        it('should return true for correct postcoin addresses', function () {
            valid('PLMXMM3S4KPBpGE1QE4vM6NCh5VCGfdzuo', 'postcoin');
            valid('PMVAVBjVu62ZtWj2V97pzweocfyi7wzijy', 'postcoin');
            valid('PWU5zwWfwkJ6qe2oULt3tpytPyrjGZ1DcR', 'postcoin');
            valid('PSPFeBDrEYkpDrzUGGeez4d7LgK2agQFcN', 'postcoin');
            valid('PBr8QAv864poZH5G3HUQiqT9P8DcxQr7k6', 'POST');
        });

        it('should return true for correct nobtcoin addresses', function () {
            valid('7PBd9WhCesCkxe4MLz3hGg43QJzAUh2qR5', 'nobtcoin');
            valid('7S92MyxcH2bryh5LkpZUDfAuFrqRLhn1hc', 'nobtcoin');
            valid('7KKVdy36VCg22RAiJu5mXEy5yVzAb2LAGQ', 'nobtcoin');
            valid('7C3AnBLnqVuZV12StgoLtG8r2qqKiypEpm', 'nobtcoin');
            valid('7BrqqDeHPr1Wz3by2RhAq3TvRSwB4nAAde', 'NOBT');
        });

        it('should return true for correct vericoin addresses', function () {
            valid('VFPQEB3tHGubDvBQP5eSrpsdWnAahHUFfX', 'vericoin');
            valid('VNCyBYA8g5LAYyRG6nhZxAawxayymBLu2z', 'vericoin');
            valid('VX8oTbJMx2dcsC6pWej8vgPm1pwDftyFZs', 'vericoin');
            valid('VRixSzymyKcNqfyHs3xopVyZV5cVXEWn9p', 'vericoin');
            valid('VK3eZetdYnise2pzAK3Da3DDwyCbzzjNB7', 'VRC');
        });

        it('should return true for correct verium addresses', function () {
            valid('VNhdp3sZu1gPHRiX7mFaZWAbbG17598u9w', 'verium');
            valid('VYgRwKK4wnaQQQeCakqb7iMiQ3naqi6XAw', 'verium');
            valid('VCyQbu6gJBsYNe2W2nBacx2GzR8zowVfao', 'verium');
            valid('VFe9XzzKKhEHeSoPKWhVkrZrPYpZQrQkJF', 'verium');
            valid('VWPG4HB22HbBNgbWoaSAzjApUMJ52Kq4kv', 'VRM');
        });

        it('should return true for correct Smilo addresses', function () {
            valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'smilo');
            valid('0x20824d4ff9115cc38ec2103d05fd13b1002d3dd5', 'smilo');
            valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'XSM');
            valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'XSM');
            valid('0x52908400098527886E0F7030069857D2E4169EE7', 'XSM');
            valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'XSM');
            valid('0xde709f2102306220921060314715629080e2fb77', 'XSM');
            valid('0x27b1fdb04752bbc536007a920d24acb045561c26', 'XSM');
            valid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'XSM');
            valid('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'XSM');
            valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'XSM');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'XSM');
        });

        it('should return true for correct ZENZO addresses', function () {
            valid('Zq2W3QvQeJi82Mm4jJ8JJCRUrfuqA2VH7d', 'zenzo');
            valid('ZzashRFQoYBXmzr9VGbUUpcAwGNi9ptxqw', 'znz');
            valid('Zun7EuKZHoZgkuwMFFd6i8ZKr3FFu4Rd35', 'ZNZ');
            valid('ZkC4jacJWMscjULWxydb7928wqXx8S8BJZ', 'ZNZ');
        });

        it('should return true for correct Universe addresses', function () {
            valid('UihGPPbSK1LEh3cM2gLqYrc9UJnY23DvGc', 'universe');
            valid('UeGiqc1VTGxAbimkotZARK44isnk5cHwQ1', 'uni');
            valid('UkKRRyGywbr6TpejGpzcGFwCiPviEwoKig', 'UNI');
            valid('URHAYQ9iL1B88uou7nWydCniBw4GKvxnZF', 'UNI');
        });

        it('should return true for correct Spectrecoin addresses', function () {
            valid('SVzzccdxXwp9UovUmH7tdns1qXHpP44BgZ', 'spectre');
            valid('SWRNCEYEtP2QMW4Vy3GpHzHvYBw985QoBv', 'xspec');
            valid('SUrEKDFqM9aD1a3514AMRXBx6mgR2BAvb4', 'XSPEC');
            valid('SeZqSvLBQXowcHVL8F4Wmwsuddu997AX8i', 'XSPEC');
        });

        it('should return true for correct 42-coin addresses', function () {
            valid('4LChCd9to8DY8uQpJDsWST7q9o8iUnakCG', '42coin');
            valid('4bwnfH38aYLKDCcCamKrDVqzboJxaQv99f', '42');
            valid('4GEVVaU7LPfDrUCTPEESKwRanS8SLSpVZH', '42');
            valid('4M5yjQETzE7dUBUKgUddfGsfHYcfWxQwjg', '42');
        });

        it('should return true for correct SmartHoldem addresses', function () {
            valid('STDJjaureBxczEPsTBjFxPcgjHQN7mMDb6', 'STH');
            valid('SRgE2ndckJfrWHQhgBSsTLojTT28EgYanT', 'smartholdem');
            valid('SZauWR2SgRTpGRx2ZadeLbxMJ22myhp1GD', 'sth');
            valid('SNiSmCHNbULHX6VGR9ZaTgvw45cgZdyf2A', 'sth');
        });

        it('should return true for correct steep addresses', function () {
            valid('sUETEnMawsqE6GTXgX7XTBpe6Saa5SsSqb', 'STEEP');
            valid('sXfzHAATvuRPgKa7z3HFEUuDN5n26qJeeH', 'steep');
            valid('sNrsQ7CtGWH8XMUXTeDdrxBDRa1PmG376G', 'steep');
            valid('sKE382aGXE2DX45tR9Pvkv55ih6W6YdpLV', 'steep');
        });

        it('should return true for correct evergreen addresses', function () {
            valid('EfPTyLqYk5JkZExiMegXKrufEkYP2ep3Lr', 'EGC');
            valid('EJPM2tLLpGnrtWhfbQYgiktVYj1MumfRqh', 'evergreen');
            valid('EfKC3gyz8GqT3j5fp9Q6Maj5Z4UNT7dLjh', 'egc');
            valid('EShn8S3brVgZjuBASExCE1hmaDp5GfAvZj', 'egc');
        });

        it('should return true for correct bitconnectx addresses', function () {
            valid('XJC4A6gHAhRn359ACgNhGK39t3ed8jLKqe', 'BCCX');
            valid('XVAEfAPbcM7PiPMT3fwsKFfhNHERQMqvQh', 'bitconnectx');
            valid('XZD6sNy6z7wjLhJwKRgxwoxu5yXCqHAUgg', 'bccx');
            valid('XLTXn8NnHTXJJbQ56SNfNs6q6GkFZ5nWe5', 'bccx');
        });

        it('should return true for correct guapcoin addresses', function () {
            valid('GZYf3w6LMNDuuoSeWQtvJcZhKARhmspS6W', 'GUAP');
            valid('GX7qZcqdAXK38trLpiGZoPj61d4GSaYcEF', 'guapcoin');
            valid('GYwayqaQeSP12WW24ZPUS6HK3AXbgxsFk9', 'guap');
            valid('GJ4oAvHYU2NfpyKxmu13mmhuZa7TDSMczv', 'guap');
        });

        it('should return true for correct ravencoin addresses', function () {
            valid('RTg8togXdjfUHf3So38k3vk4yL5DxRkzB9', 'RVN');
            valid('RTo5Kou9rMYuQ2EJPHz1534T9GGKP4uj8r', 'ravencoin');
            valid('RDRhxdteMgFoohtHw3k6RwUQHZsf9Cje8P', 'rvn');
            valid('R9ukycPdaNymRAZhA6SYBZ4v2XjqWfAGeg', 'rvn');
        });

        it('should return true for correct stellar addresses', function () {
            valid('GBBM6BKZPEHWYO3E3YKREDPQXMS4VK35YLNU7NFBRI26RAN7GI5POFBB', 'stellar');
            valid('GB7KKHHVYLDIZEKYJPAJUOTBE5E3NJAXPSDZK7O6O44WR3EBRO5HRPVT', 'stellar');
            valid('GD6WVYRVID442Y4JVWFWKWCZKB45UGHJAABBJRS22TUSTWGJYXIUR7N2', 'stellar');
            valid('GBCG42WTVWPO4Q6OZCYI3D6ZSTFSJIXIS6INCIUF23L6VN3ADE4337AP', 'stellar');
            valid('GDFX463YPLCO2EY7NGFMI7SXWWDQAMASGYZXCG2LATOF3PP5NQIUKBPT', 'stellar');
            valid('GBXEODUMM3SJ3QSX2VYUWFU3NRP7BQRC2ERWS7E2LZXDJXL2N66ZQ5PT', 'stellar');
            valid('GAJHORKJKDDEPYCD6URDFODV7CVLJ5AAOJKR6PG2VQOLWFQOF3X7XLOG', 'stellar');
            valid('GACXQEAXYBEZLBMQ2XETOBRO4P66FZAJENDHOQRYPUIXZIIXLKMZEXBJ', 'stellar');
            valid('GDD3XRXU3G4DXHVRUDH7LJM4CD4PDZTVP4QHOO4Q6DELKXUATR657OZV', 'stellar');
            valid('GDTYVCTAUQVPKEDZIBWEJGKBQHB4UGGXI2SXXUEW7LXMD4B7MK37CWLJ', 'stellar');
        });

        it('should return true for correct cardano addresses', function () {
            valid('Ae2tdPwUPEZJ4CA1ECfG6bs6s42TYAmGD1WivKapvq4goyEvTtJkWoKvfjQ', 'cardano');
            valid('DdzFFzCqrht2DShg1SMD6ssDLLzSQM7g8MUSdcQM9Cf8M1DRjGC9Da4CfMabY4RxoVhdaGqmY2EHTfxLQqiqR2jFF5jQyqTKWGcx3KX3', 'cardano');
            valid('DdzFFzCqrhsu8ZiYwD8EY7NdPVeCs87iMomsZxreWAJzeXwZEZtWGVVLDKHu5khHWKyEbtwWq58vkXzxhhcsRJiksXErhQivqHpQLrLz', 'cardano');
            valid('Ae2tdPwUPEYx4T3GnQH4XE632Z5ZCMJ5SLesNTEmuJJUQJRW9z1ty4F8qfc', 'cardano');
        });

        it('should return true for correct vechain addresses', function () {
            valid('0x6bf76c6f76e0971130e72055b6445ee10eabf48b', 'vechain');
            valid('0x1671a3e4A2519A653E66E827ef6eaE690ee86729', 'vechain');
        });

        it('should return true for correct trx addresses', function () {
            valid('TNDzfERDpxLDS2w1q6yaFC7pzqaSQ3Bg3r', 'trx');
            valid('41e825d52582eec346c839b4875376117904a76cbc', 'trx');
            valid('27bLJCYjbH6MT8DBF9xcrK6yZnm43vx7MNQ', 'trx', 'testnet');
        });

        it('should return true for correct pruxcoin addresses', function () {
            valid('PQfFKRVVTF2bL8NvZhJvfdJ5pj3HV5jzcC', 'pruxcoin');
            valid('PNUjGoD94enJUz1Z5X1T5MJQ2ifQaGcX3y', 'pruxcoin');
            valid('PGu2P1vkFhqqEJmjGtcHbGTMzfm3xJHDTJ', 'pruxcoin');
            valid('PWSdDSRTCR7s5NZT6WV4C2pJJSNHGhrRJF', 'prux');
            valid('PSQJF24CEwBUeSja5SyT54cQvJZ2rRnCwg', 'PRUX');
        });

        it('should return true for correct deeponion addresses', function () {
            valid('DVRDAgeVzNgKyXLRSfenRW7FPw33GFsqBM', 'deeponion');
            valid('DVNtSjHooV7NHFaSx2Zj8LJAySDddRAJSo', 'deeponion');
            valid('Dgvn4a9APEK8SYyxbDdbMSnneiBxc29PJN', 'ONION');
            valid('DcLfVVzrmbBk1feiBSrChLCjZiwBE8M6AL', 'onion');
            valid('DpWgx3SvuWKish9Fm5RPpgp6u6B3QxV6fT', 'onion');
        });

        it('should return true for correct Bitcoinrand addresses', function () {
            valid('RaemJcXKLPHi6CretDDwk7DrttnVGjSxAR', 'bitcoinrand');
            valid('Rjb7LJkxe7nP8LHGd2UDkk8hZSxKhNeHeS', 'bitcoinrand');
            valid('RwowUVU93GKQ52KhXEAQqUR4ctJdP4iPER', 'bzar'); //3c
            valid('RB38MTnqBJKquPVMEWJoaiK2URPRkLgStp', 'BZAR'); //3d
        });

        it('should return true for correct Emercoin addresses', function () {
            valid('EU9QzrQBgz9T96SviumxtRD3oX3XTr9dD2', 'emercoin');
            valid('EaDuchgXysbGH5zkbwzGvAH5nYLxsNizTq', 'emercoin');
            valid('EeLeckKqTRvbbyThGhvMYeVWhrCwYb6ev6', 'emc');
            valid('EMMP65RxczS2EPSNQyZ5h83qpeX3Quktf3', 'EMC');
        });

        it('should return true for correct HiveCoin HVQ addresses', function () {
            valid('HMgF4B7sTrvEa8Bx1LqwARWVQhwnFVWHhE', 'hivecoin');
            valid('HGwYYA3NPuTYFyZ2hj9mQFb4SYE8dSfji3', 'hivecoin');
            valid('HCNjL8qAyHNXZqBBCdMKcZurJCHPWk9wMi', 'hvq');
            valid('HBDKG9NCo4Dt3WmLrnSiZJGHcQK1GFWfuf', 'HVQ');
        });

        it('should return true for correct Binance Coin addresses', () => {
            valid('bnb1l6a3wcvwypzxa58nkr5ug4edqv0hg7ye24smag', 'bnb')
            valid('bnb1jdy9svxl8jk3s9grsvencvrhx7pt3nvel68uk5', 'bnb')
        });

        it('should return true for correct PIVX addresses', function () {
            valid('D8xM8qYTxCngeWeMTzC5b5aRCMkAmLJUfk', 'pivx');
            valid('DKVT2txKM8sdCXJbJoq95iauk9sgsxpeAF', 'pivx');
            valid('DBa5cB3hMns5kwrdWVuCx9JjR5s5sVCY7U', 'PIVX');
            valid('D5cxRBS92eE3UZyNBB25APazRtUi8yAy7D', 'PIVX');
        });

        it('should return true for correct Raptoreum addresses', function () {
            valid('RLJNQi7Ss9qbN3SsbEeUK9SnQuzqLfUJXb', 'rtm');
            valid('REeMNzSdhz6dNUrGrtYbehTdPFc2zbrp9G', 'rtm');
            valid('RTtyQU6DoSuNWetT4WUem5qXP5jNYGpwat', 'RTM');
            valid('RN8n9x9DHzaq3tD7Dm3rzaU1JusSx9ZG7G', 'raptoreum');
        });

        it('should return true for correct ReddCoin addresses', function () {
            valid('RkLdxQfBXow3KU1HvT3fAfbKAF2DxM6uHd', 'rdd');
            valid('Rmhzj2GptZxkKBMqbUL6VjFcX8npDneAXR', 'RDD');
            valid('RrarkPQxHhTcPDKi2omJPHV1TFNMkWM3Cv', 'rdd');
            valid('Rmhzj2GptZxkKBMqbUL6VjFcX8npDneAXR', 'reddcoin');
        });

    });

    describe('invalid results', function () {
        function commonTests(currency) {
            invalid('', currency); //reject blank
            invalid('%%@', currency); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency);  //reject transaction id's
            //testnet
            invalid('', currency, 'testnet'); //reject blank
            invalid('%%@', currency, 'testnet'); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, 'testnet'); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, 'testnet');  //reject transaction id's
        }

        it('should return false for incorrect bitcoin addresses', function () {
            commonTests('bitcoin');
        });

        it('should return false for incorrect bitcoincash addresses', function () {
            commonTests('bitcoincash');
        });

        it('should return false for incorrect litecoin addresses', function () {
            commonTests('litecoin');
        });

        it('should return false for incorrect peercoin addresses', function () {
            commonTests('peercoin');
        });

        it('should return false for incorrect dogecoin addresses', function () {
            commonTests('dogecoin');
        });

        it('should return false for incorrect beavercoin addresses', function () {
            commonTests('beavercoin');
        });

        it('should return false for incorrect freicoin addresses', function () {
            commonTests('freicoin');
        });

        it('should return false for incorrect protoshares addresses', function () {
            commonTests('protoshares');
        });

        it('should return false for incorrect megacoin addresses', function () {
            commonTests('megacoin');
        });

        it('should return false for incorrect primecoin addresses', function () {
            commonTests('primecoin');
        });

        it('should return false for incorrect auroracoin addresses', function () {
            commonTests('auroracoin');
        });

        it('should return false for incorrect namecoin addresses', function () {
            commonTests('namecoin');
        });

        it('should return false for incorrect biocoin addresses', function () {
            commonTests('biocoin');
        });

        it('should return false for incorrect garlicoin addresses', function () {
            commonTests('garlicoin');
        });

        it('should return false for incorrect vertcoin addresses', function () {
            commonTests('vertcoin');
            invalid('vtc1qmzq3erafwvz23yabc9tu45uz2kx3d7esk0rayg', 'vertcoin');
            invalid('vtc1qhy8eqwqxpyryz4wctus36yl2uu60t0z6ecrvt', 'vertcoin');
            invalid('vtd1qhy8eqwqxpyryz4wctus36yl2uu60t0z6ecrvtc', 'vertcoin');
        });

        it('should return false for incorrect bitcoingold addresses', function () {
            commonTests('bitcoingold');
        });

        it('should return false for incorrect decred addresses', function () {
            commonTests('decred');
        });

        it('should return false for incorrect bankex addresses', function () {
            invalid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'bankex');
            invalid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd', 'BKX');
            invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bankex', 'testnet');
            invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'BKX', 'testnet');
        });

        it('should return false for incorrect digibyte addresses', function () {
            commonTests('digibyte');
        });

        it('should return false for incorrect eip55 addresses', function () {
            invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum');
            invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum');
            invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum');
            invalid('0xff4d6793F584a473', 'ethereum');

            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereumclassic');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'etherzero');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'callisto');
        });

        it('should return false for incorrect ripple addresses', function () {
            invalid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCN', 'ripple');
            invalid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhMN', 'XRP');
            invalid('6xAff4d6793F584a473348EbA058deb8ca', 'ripple');
            invalid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'ripple');
        });

        it('should return false for incorrect dash addresses', function () {
            commonTests('dash');
        });

        it('should return false for incorrect neo addresses', function () {
            commonTests('neo');
            invalid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTa', 'neo');
            invalid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ10', 'NEO');
        });

        it('should return false for incorrect qtum addresses', function () {
            commonTests('qtum');
            invalid('QNPhBbVhDghASxcUh2vHotQUgNeLRFTcfb', 'qtum');
            invalid('QOPhBbVhDghASxcUh2vHotQUgNeLRFTcfa', 'QTUM');
            invalid('qZqqcqCsVtP2U38ABCUnwshHRpefvCa8hX', 'QTUM', 'testnet');
        });

        it('should return false for incorrect votecoin addresses', function () {
            commonTests('votecoin');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin');
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT');
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', 'testnet');
        });

        it('should return false for incorrect bitcoinz addresses', function () {
            commonTests('bitcoinz');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz');
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ');
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', 'testnet');
        });

        it('should return false for incorrect zclassic addresses', function () {
            commonTests('zclassic');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic');
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL');
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', 'testnet');
        });

        it('should return false for incorrect hush addresses', function () {
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush');
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH');
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', 'testnet');
        });

        it('should return false for incorrect zcash addresses', function () {
            commonTests('zcash');
            invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash');
            invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC');
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', 'testnet');
        });

        it('should return false for incorrect bitcoinprivate addresses', function () {
            commonTests('bitcoinprivate');
            invalid('b1Y4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate');
            //invalid('bx....', 'BTCP');
            //invalid('nx....', 'bitcoinprivate', 'testnet');
        });

        it('should return false for incorrect snowgem addresses', function () {
            commonTests('snowgem');
            invalid('s1Yx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem');
            invalid('s3Y27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG');
            invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', 'testnet');
        });

        it('should return false for incorrect zencash addresses', function () {
            commonTests('zencash');
            invalid('znYiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash');
            invalid('zsYEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN');
            invalid('ztYWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', 'testnet');
        });

        it('should return false for incorrect komodo addresses', function () {
            commonTests('komodo');
            invalid('R9Y5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo');
            invalid('RAYj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD');
            //invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', 'testnet');
        });

        it('should return false for incorrect monero addresses', function () {
            commonTests('monero');
            invalid('4AWygwA3hHNE4e4Yr9PtRWJiorXTjZkCi57g4ExYzfXDFFQ8DRFEFyui1dLqVknpqQjGUBdTMbgaFAZaDbrVHdk3GAKBZ3E', 'monero');
            invalid('44643dtxcxjgMWEQLo6mh1c4d9Zxx9GbgK9hEj9iGSiFEryCkbwHyJ3JqxZJRqeC3Hb7ZBLKq5NkaJwR1x95EYnR1bTgN6d', 'xmr');
            invalid('A17N9ztrxjQD3v3JJtHGvHVnq6BAbujDNEuensB6PFwBYFpkjAicih8hDtX76HBuEag5NeaCuMZmRMe6eE5NMRGxFTQn8nJ', 'monero', 'testnet');

            //integrated
            invalid('4LNSCKNSTPNbJYkyAEgL966eHJHLDHiq1PpwKoiFBybcSqNGYfLBJApC62uQEeGAFxfYEd29uXBBrJFo7DhKqFVNi3GhmN79EtD5dgycYz', 'monero');
            invalid('4JpzTwf3i1GeCV76beVr19179oa8j1L8xNSC1bXMtAxxdf4aTTLqubL8EvXfQmUGKt9MMigFtKy91VtoTTSfg1LU7LocPruT6KcGC9RKJV', 'xmr');
        });

        it('should return false for incorrect nano addresses', function () {
            commonTests('nano');
            invalid('xrb_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano');
            invalid('nano_1f5e4w33ndqbkx4bw5jtp13kp5xghebfxcmw9hdt1f7goid1s4373w6tjdgu', 'nano');
            invalid('xrb_1111111112111111111111111111111111111111111111111111hifc8npp', 'nano');
            invalid('nano_111111111111111111111111111111111111111111111111111hifc8npp', 'nano');
        });

        it('should return false for incorrect postcoin addresses', function () {
            commonTests('postcoin');
        });

        it('should return false for incorrect nobtcoin addresses', function () {
            commonTests('nobtcoin');
        });

        it('should return false for incorrect vericoin addresses', function () {
            commonTests('vericoin');
        });

        it('should return false for incorrect verium addresses', function () {
            commonTests('verium');
        });

        it('should return false for incorrect smilo eip55 addresses', function () {
            invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'smilo');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'smilo');
            invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'smilo');
            invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'smilo');
            invalid('0xff4d6793F584a473', 'smilo');
        });

        it('should return false for incorrect zenzo addresses', function () {
            commonTests('zenzo');
        });

        it('should return false for incorrect universe addresses', function () {
            commonTests('universe');
        });

        it('should return false for incorrect spectre addresses', function () {
            commonTests('spectre');
        });

        it('should return false for incorrect 42-coin addresses', function () {
            commonTests('42');
        });

        it('should return false for incorrect SmartHoldem addresses', function () {
            commonTests('sth');
        });

        it('should return false for incorrect steep addresses', function () {
            commonTests('steep');
        });

        it('should return false for incorrect evergreen addresses', function () {
            commonTests('evergreen');
        });

        it('should return false for incorrect bitconnectx addresses', function () {
            commonTests('bitconnectx');
        });

        it('should return false for incorrect guapcoin addresses', function () {
            commonTests('guapcoin');
        });

        it('should return false for incorrect ravencoin addresses', function () {
            commonTests('ravencoin');
        });

        it('should return false for incorrect stellar addresses', function () {
            commonTests('stellar');
            invalid('SBGWKM3CD4IL47QN6X54N6Y33T3JDNVI6AIJ6CD5IM47HG3IG4O36XCU', 'stellar');
            invalid('GBPXX0A5N4JYPESHAADMQKBPWZWQDQ64ZV6ZL2S3LAGW4SY7NTCMWIVL', 'stellar');
            invalid('GCFZB6L25D26RQFDWSSBDEYQ32JHLRMTT44ZYE3DZQUTYOL7WY43PLBG++', 'stellar');
            invalid('GADE5QJ2TY7S5ZB65Q43DFGWYWCPHIYDJ2326KZGAGBN7AE5UY6JVDRRA', 'stellar');
            invalid('GB6OWYST45X57HCJY5XWOHDEBULB6XUROWPIKW77L5DSNANBEQGUPADT2', 'stellar');
            invalid('GB6OWYST45X57HCJY5XWOHDEBULB6XUROWPIKW77L5DSNANBEQGUPADT2T', 'stellar');
            invalid('GDXIIZTKTLVYCBHURXL2UPMTYXOVNI7BRAEFQCP6EZCY4JLKY4VKFNLT', 'stellar');
            invalid('SAB5556L5AN5KSR5WF7UOEFDCIODEWEO7H2UR4S5R62DFTQOGLKOVZDY', 'stellar');
            invalid('gWRYUerEKuz53tstxEuR3NCkiQDcV4wzFHmvLnZmj7PUqxW2wt', 'stellar');
            invalid('g4VPBPrHZkfE8CsjuG2S4yBQNd455UWmk', 'stellar');
        });

        it('should return false for incorrect cardano addresses', function () {
            commonTests('cardano');
            invalid('Ae2tdPwUPEZJ4CA1ECfG6bs6s42TYAmGD1WivKapvq4goyEvTtJkW0KvfjQ', 'cardano');
            invalid('Be2tdPwUPEZJ4CA1ECfG6bs6sTtJkW0KvfjQ', 'cardano');
            invalid('LdzFFzCqrht2DShg1SMD6ssDLLzSQM7g8MUSdcQM9Cf8M1DRjGC9Da4CfMabY4RxoVhdaGqmY2EHTfxLQqiqR2jFF5jQyqTKWGcx3KX3', 'cardano');
            invalid('DdzFFzCqrht2DShg1SMD6ssDLLzSQM7g8MUSdcQM9Cf8M1DRjGC9Da4CfMabY4Rx0VhdaGqmY2EHTfxLQqiqR2jFF5jQyqTKWGcx3KX3', 'cardano');
            invalid('DdzFFzCqrht2DShg1SMD6ssDLLzSQM7g8MUSdcQM9Cf8M1DRjGC9Da4CfMa', 'cardano');
        });

        it('should return false for incorrect vechain addresses', function () {
            commonTests('vechain');
            invalid('2a6bf76c6f76e0971130e72055b6445ee10eabf48b', 'vechain');
            invalid('0x6bf76c6f76e0971130e72055b6445ee10eabf48', 'vechain');
        });

        it('should return false for incorrect pruxcoin addresses', function () {
            commonTests('pruxcoin');
        });

        it('should return false for incorrect deeponion addresses', function () {
            commonTests('onion');
        });

        it('should return false for incorrect bitcoinrand addresses', function () {
            commonTests('bitcoinrand');
        });

        it('should return false for incorrect Emercoin addresses', function () {
            commonTests('emercoin');
        });

        it('should return false for incorrect hivecoin addresses', function () {
            commonTests('hivecoin');
        });

        it('should return false for incorrect pivx addresses', function () {
            commonTests('pivx');
        });

        it('should return false for incorrect rtm addresses', function () {
            commonTests('rtm');
        });

        it('should return false for incorrect rdd addresses', function () {
            commonTests('rdd');
        });

    });
});
