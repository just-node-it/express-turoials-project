const { checkSchema, body, check } = require('express-validator');

const orderStates = ['NEW', 'PROCESSED', 'FINISHED', 'REJECTED'];

module.exports = {
  createOrderRules: () => {
    return [
      checkSchema({
        orderItems: {
          isArray: true,
          notEmpty: true,
        },
        customerName: {
          isString: true,
          notEmpty: true,
        },
        customerSurname: {
          isString: true,
          notEmpty: true,
        },
        customerEmail: {
          isEmail: true,
          notEmpty: true,
        },
        reservationDay: {
          notEmpty: true,
          isISO8601: true,
          toDate: true,
        },
      }),
      body('orderItems.*.ticketId').exists().isInt(),
      body('orderItems.*.amount').exists().isInt({ min: 1 }),
    ];
  },

  updateOrderState: () => {
    return body('state').notEmpty().isString().isIn(orderStates);
  },
};
