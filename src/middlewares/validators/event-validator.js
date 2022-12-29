const { checkSchema } = require('express-validator');

module.exports = {
  createEventRules: () => {
    return checkSchema({
      name: {
        isString: true,
        notEmpty: true,
      },
      description: {
        isString: true,
        notEmpty: true,
      },
      startAt: {
        isISO8601: true,
        notEmpty: true,
        toDate: true,
      },
      endAt: {
        isISO8601: true,
        notEmpty: true,
        toDate: true,
      },
      maxVisitorsNumber: {
        isInt: { options: { min: 0 } },
        notEmpty: true,
      },
      registeredVisitorsNumber: {
        isInt: { options: { min: 0 } },
        optional: true,
        default: 0,
        custom: {
          options: (value, { req }) => {
            if (value > req.body.maxVisitorsNumber) {
              throw new Error(
                'registeredVisitorsNumber can not be bigger than maxVisitorsNumber',
              );
            }
            // Indicates the success of the custom validator
            return true;
          },
        },
      },
    });
  },

  updateEventRules: () => {
    return checkSchema({
      name: {
        isString: true,
        optional: true,
      },
      description: {
        isString: true,
        optional: true,
      },
      startAt: {
        isISO8601: true,
        optional: true,
        toDate: true,
      },
      endAt: {
        isISO8601: true,
        optional: true,
        toDate: true,
      },
      maxVisitorsNumber: {
        isInt: { options: { min: 0 } },
        optional: true,
      },
      registeredVisitorsNumber: {
        isInt: { options: { min: 0 } },
        optional: true,
        default: 0,
        custom: {
          options: (value, { req }) => {
            if (
              value &&
              req.body.maxVisitorsNumber &&
              value > req.body.maxVisitorsNumber
            ) {
              throw new Error(
                'registeredVisitorsNumber can not be bigger than maxVisitorsNumber',
              );
            }
            // Indicates the success of the custom validator
            return true;
          },
        },
      },
    });
  },
};
