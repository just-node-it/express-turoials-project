const jwt = require('jsonwebtoken');
const userService = require('../services/user');
const AppError = require('../utils/app-error');

function jwtVerification(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw AppError.forbidden('JWT verification failed.');
  }
}

module.exports = async (req, res, next) => {
  try {
    if (!req.header('Authorization')) {
      throw AppError.forbidden();
    }

    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      throw AppError.forbidden();
    }

    const decoded = jwtVerification(token);
    const user = await userService.findOne({ id: decoded.sub });

    if (!user) {
      throw AppError.forbidden();
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
