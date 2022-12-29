const { checkSchema } = require('express-validator');

module.exports = {
  createEmployeeRules: () => {
    return checkSchema({
      firstName: {
        isString: true,
        notEmpty: true,
      },
      lastName: {
        isString: true,
        notEmpty: true,
      },
      email: {
        isEmail: true,
        notEmpty: true,
      },
    });
  },
  updateEmployeeRules: () => {
    return checkSchema({
      firstName: {
        isString: true,
        optional: true,
      },
      lastName: {
        isString: true,
        optional: true,
      },
      email: {
        isEmail: true,
        optional: true,
      },
    });
  },
};
