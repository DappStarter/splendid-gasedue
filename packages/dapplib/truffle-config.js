require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain umbrella inflict clinic bubble sketch'; 
let testAccounts = [
"0x11474ed9ed508e14d70479f61dbe0e9214dc95ded60ecb84764ee447942a1d30",
"0xb1492c6ccbe134c364eb44674f770ce4a55f5109425cfdd1df4f11811f16b348",
"0xabfd06e57cb8016bc2699472b88216a9666042b35fc0d15ee935f785fa65123f",
"0x1f37b839364544a2c4d461e843445158df66cea7887f7d5bab9bf46fae8bed22",
"0x13ea881fbd55aa4ee83f4149ff8c03a600bf68ceb0c4008881c289a2825e0bbb",
"0x06267cc19d6565f2e27f5900e7e2f4a60de8bf9a6a43f3f4cc8d424f08ff74e5",
"0x593029b400a84a392d223a20b4f88d65bac194e5cd35dc580f9c22cdaec25f6c",
"0x37f86702ad312abf879620cdb89a8f9b6ae8a1ae3642687c97ac391419a9f0e2",
"0xab04c791f7f54fbc89ff1416346e3f400e08b2686d7947f9212efb677453ebee",
"0xca45c92e8559befbe124c044f3bcc6a143e73fbc58dd7bec336273cd3a32c737"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
