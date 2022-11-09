let CryptoJS = require("crypto-js")

let key = CryptoJS.enc.Utf8.parse("023145543211234569662334");
let IV = CryptoJS.enc.Utf8.parse("22453260");

function encrypt(data) {
    let encrypted = CryptoJS.TripleDES.encrypt(data, key, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
    });
    return encrypted.toString();
}

function decrypt(data) {
    let decrypted = CryptoJS.TripleDES.decrypt(data, key, {
        iv: IV,
        mode: CryptoJS.mode.CBC
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

function encryptAES(data){
    const key = CryptoJS.enc.Hex.parse("023145543211234569662334");
    const passphrase = CryptoJS.enc.Hex.parse("22453260");
    const encrypted = CryptoJS.AES.encrypt(payload, key, {
        iv: passphrase, 
        mode: CryptoJS.mode.CBC, 
        padding: CryptoJS.pad.Pkcs7
    });
    console.log(encrypted);
}

console.log(decrypt(`85PzdKDoXRR8FyIjiBjvcjlJb8eg4JiboiZjyMHOR/o=`));
//console.log(decrypt(`KYQmWID39MJZ3NolGlqfvSpqHwfDgq7P8wYsm0134Mo=`));

console.log(encrypt(`{"status":1,"msg":"system err"}`));