require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift reward stereo prosper harvest person swift sunset'; 
let testAccounts = [
"0x4a6c613a6f6a8b8fa0dd11a7d2113db88d760f47fe781590a6a03dd023070046",
"0x5d5dd9b6f0770b0782ce6e2c5c595036e37b7bdc87c92229918bca6be239fb39",
"0x5325881c86d7737f2619197bd2dee19b66d407d3f129da21fcdca9e29fadbb95",
"0x65149943aa2148952bde532b1280281e1b9e4eff8177f123ac8323413caa0f04",
"0x8a6f35949fdb603bc5534c610fdc5de5c7493f3554753e3c2a7f06473e00f7be",
"0x3fee721c313c88ef19eb0b78bf58982459619501486a78e2c155a2d02953dafa",
"0xc3f6fef281ba5fc1f2bb7a104ce69ec7df8996745d516f4ed2d489fd46864e59",
"0x22066c36d97daf209917d4d86ee4fe5b001d3989c68b77f30b2882270ab1d4e3",
"0x286c3608adbef07cc7396d1b1f698e888da696541259089eed088ae0e6362e25",
"0x282f762a3a3c7862362d14fe74f299468caf9c6b837dc066796db44b3d31df1f"
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
            version: '^0.8.0'
        }
    }
};

