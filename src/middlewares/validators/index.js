const { param, validationResult, matchedData } = require('express-validator');
const authValidator = require('./auth-validator');
const eventValidator = require('./event-validator');
const classificationValidator = require('./classification-validator');
const employeeValidator = require('./employee-validator');
const expositionValidator = require('./exposition-validator');
const ticketValidator = require('./ticket-validator');
const orderValidator = require('./order-validator');
const animalValidator = require('./animal-validator');

const AppError = require('../../utils/app-error');

module.exports = {
  idRules: () => {
    return param('id')
      .notEmpty()
      .isInt()
      .toInt()
      .withMessage('Id is an integer number');
  },

  authValidator,
  eventValidator,
  classificationValidator,
  employeeValidator,
  expositionValidator,
  ticketValidator,
  orderValidator,
  animalValidator,

  validate: (req, res, next) => {
    // whitelist
    req.body = matchedData(req, {
      locations: ['body'],
      includeOptionals: true,
    });
    req.query = matchedData(req, {
      locations: ['query'],
      includeOptionals: true,
    });

    const { errors } = validationResult(req);

    errorsArray =
      !Array.isArray(errors) && typeof errors === 'object'
        ? errors.errors
        : errors;

    if (errorsArray.length) {
      const extractedErrors = [];
      errorsArray.map((error) =>
        extractedErrors.push({
          [error.param]: `${error.msg} -- ${error.param} param in the ${error.location} has value ${error.value}`,
        }),
      );

      next(AppError.badRequest(extractedErrors));
    } else {
      next();
    }
  },
};
