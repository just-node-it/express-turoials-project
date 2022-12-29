const jwt = require('jsonwebtoken');
const userService = require('../services/user');
const AppError = require('../utils/app-error');

async function jwtVerification(token) {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
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

    const decoded = await jwtVerification(token);
    const user = await userService.findOne({ id: decoded.sub });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
