const secretKey = 'YOUR_SECRET_KEY';

function encryptMessage() {
    const message = document.getElementById('message').value;
    const encrypted = CryptoJS.AES.encrypt(message, secretKey).toString();
    document.getElementById('encrypted').value = encrypted;
}

function decryptMessage() {
    const encryptedMessage = document.getElementById('encrypted').value;
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, secretKey).toString(CryptoJS.enc.Utf8);
    document.getElementById('decrypted').value = decrypted;
}
