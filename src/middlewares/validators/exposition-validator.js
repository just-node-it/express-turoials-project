const { checkSchema } = require('express-validator');

module.exports = {
  createExpositionRules: () => {
    return checkSchema({
      title: {
        isString: true,
        notEmpty: true,
      },
      description: {
        isString: true,
        optional: true,
      },
    });
  },

  updateExpositionRules: () => {
    return checkSchema({
      title: {
        isString: true,
        optional: true,
      },
      description: {
        isString: true,
        optional: true,
      },
    });
  },
};
