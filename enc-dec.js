var CryptoJS = require("crypto-js")

var key = CryptoJS.enc.Utf8.parse("22453260");
let iv = CryptoJS.enc.Utf8.parse("023145543211234569662334");

function encrypt(data) {
    var encrypted = CryptoJS.TripleDES.encrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
    });
    return encrypted.toString();
}

function decrypt(data) {
    let decrypted = CryptoJS.TripleDES.decrypt(data, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}

console.log(decrypt(`85PzdKDoXRR8FyIjiBjvcjlJb8eg4JiboiZjyMHOR/o=`));
console.log(encrypt(`{"status":1,"msg":"system err"}`));

/*
* DESede [used in java] is the same as TripleDES
* padding is not matter
*
**/