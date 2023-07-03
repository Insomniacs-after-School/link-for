const crypto = require('crypto');

const random = () => crypto.randomBytes(120).toString('base64');
const authentication = (salt, password) => crypto.createHmac('sha256', [salt, password].join('/')).update(process.env.SECRET).digest('hex');

module.exports = {
  random,
  authentication,
};
