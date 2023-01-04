const { checkSchema } = require('express-validator');

module.exports = {
  loginRules: () => {
    return checkSchema({
      email: {
        isEmail: true,
        optional: true,
        custom: {
          options: (value, { req }) => {
            if (!value && !req.body.username) {
              throw new Error(
                'E-mail or username should be used for the login operation',
              );
            }
            return true;
          },
        },
      },
      username: {
        isString: true,
        optional: true,
        isLength: {
          options: {
            min: 4,
          },
        },
        custom: {
          options: (value, { req }) => {
            if (!value && !req.body.email) {
              throw new Error(
                'E-mail or username should be used for the login operation',
              );
            }
            return true;
          },
        },
      },
      password: {
        isString: true,
        notEmpty: true,
        isLength: {
          options: {
            min: 8,
          },
        },
      },
    });
  },

  registerRules: () => {
    return checkSchema({
      email: {
        isEmail: true,
        notEmpty: true,
      },
      username: {
        isString: true,
        notEmpty: true,
        isLength: {
          options: {
            min: 4,
          },
        },
      },
      password: {
        isString: true,
        notEmpty: true,
        isLength: {
          options: {
            min: 8,
          },
        },
      },
    });
  },
};
