const authService = require('../services/auth');

module.exports = {
  registerUser: async (req, res, next) => {
    try {
      const accessToken = await authService.register(req.body);
      res.send(accessToken);
    } catch (error) {
      next(error);
    }
  },

  loginUser: async (req, res, next) => {
    try {
      const accessToken = await authService.login(req.body);
      res.send(accessToken);
    } catch (error) {
      next(error);
    }
  },
};
