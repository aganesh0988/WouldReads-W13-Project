const db = require('./db/models');
const { jwtConfig } = require('./config');
const { User } = require('./db/models');
const bearerToken = require('express-bearer-token');
const { secret, expiresIn } = jwtConfig;

exports.loginUser = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username },
    secret,
    { expiresIn: parseInt(expiresIn) } // expressed in seconds
  );
};

exports.signupUser = async (token) => {
  try {
    const payload = jwt.verify(
      token,
      secret
    );
    return await User.findByPk(payload.id);
  } catch (err) {
    return null;
  }
}
