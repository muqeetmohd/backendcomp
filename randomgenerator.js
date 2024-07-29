const crypto = require('crypto');

// Generate random bytes which will be used for encryption
const randomBytes = crypto.randomBytes(64).toString('hex');
console.log(randomBytes);
