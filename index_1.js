const crypto = require('crypto');

function anotherInsecurePassword() {
  // BAD: the random suffix is not  secure
  var suffix = crypto.randomBytes(8).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}