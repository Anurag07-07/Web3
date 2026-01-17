const crypto = require('crypto')

const value = "Anurag"
const hash = crypto.createHash('sha256').update(value).digest('hex')
console.log(hash);
