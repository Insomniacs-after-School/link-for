const crypto = require('crypto');
const Global = require('./global');

const random = () => crypto.randomBytes(120).toString('base64');
const authentication = (salt, password) => crypto.createHmac('sha256', [salt, password].join('/')).update(Global.SECRET).digest('hex');

module.exports = {
  random,
  authentication,
};
