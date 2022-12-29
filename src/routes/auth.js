const { authValidator, validate } = require('../middlewares/validators');
const { Router } = require('express');
const router = Router();
const { registerUser, loginUser } = require('../controllers/auth');

router.post('/register', authValidator.registerRules(), validate, registerUser);
router.post('/login', authValidator.loginRules(), validate, loginUser);

module.exports = router;
