const crypto = require('crypto');
const fs = require('fs');

crypto.generateKeyPair('rsa',
  {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    }
  },
  (error, publicKey, privateKey) => {
    if (error) {
      throw error;
    }

    fs.writeFile('pub-key.pem', publicKey, console.log);
    fs.writeFile('priv-key.pem', privateKey, console.log);
  });
