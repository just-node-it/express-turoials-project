const { checkSchema } = require('express-validator');

module.exports = {
  createTicketRules: () => {
    return checkSchema({
      name: {
        isString: true,
        notEmpty: true,
      },
      price: {
        isNumeric: true,
        notEmpty: true,
      },
      description: {
        isString: true,
        optional: true,
      },
    });
  },

  updateTicketRules: () => {
    return checkSchema({
      name: {
        isString: true,
        optional: true,
      },
      price: {
        isNumeric: true,
        optional: true,
      },
      description: {
        isString: true,
        optional: true,
      },
    });
  },
};
