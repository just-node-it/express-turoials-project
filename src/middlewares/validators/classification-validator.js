const { checkSchema } = require('express-validator');
const animalClassificationTypes = [
  'KINGDOM',
  'PHYLUM',
  'CLASS',
  'ORDER',
  'FAMILY',
  'GENUS',
  'SPECIES',
];

module.exports = {
  createClassificationRules: () => {
    return checkSchema({
      type: {
        isString: true,
        notEmpty: true,
        isIn: {
          options: [animalClassificationTypes],
        },
      },
      name: {
        isString: true,
        notEmpty: true,
      },
      parentCategoryId: {
        isInt: true,
        optional: true,
      },
    });
  },

  updateClassificationRules: () => {
    return checkSchema({
      type: {
        isString: true,
        optional: true,
        isIn: {
          options: [animalClassificationTypes],
        },
      },
      name: {
        isString: true,
        optional: true,
      },
      parentCategoryId: {
        isInt: true,
        optional: true,
      },
    });
  },
};
