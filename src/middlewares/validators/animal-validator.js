const { checkSchema, body, param, query } = require('express-validator');
const sortOptions = ['asc', 'desc'];

module.exports = {
  createAnimalRules: () => {
    return [
      checkSchema({
        name: {
          isString: true,
          notEmpty: true,
        },
        age: {
          isInt: { options: { min: 0 } },
          optional: true,
        },
        sex: {
          isString: true,
          optional: true,
        },
        latinName: {
          isString: true,
          optional: true,
        },
        habitat: {
          isString: true,
          optional: true,
        },
        description: {
          isString: true,
          optional: true,
        },
        menu: {
          isString: true,
          optional: true,
        },
        dateArrived: {
          isISO8601: true,
          notEmpty: true,
          toDate: true,
        },
        photo: {
          isString: true,
          optional: true,
        },
        classificationId: {
          isInt: true,
          optional: true,
        },
        employeeId: {
          isInt: true,
          optional: true,
        },
        parents: {
          isArray: true,
          optional: true,
        },
        children: {
          isArray: true,
          optional: true,
        },
      }),
      body('parents.*').isInt(),
      body('children.*').isInt(),
    ];
  },

  updateAnimalRules: () => {
    return checkSchema({
      name: {
        isString: true,
        optional: true,
      },
      age: {
        isInt: { options: { min: 0 } },
        optional: true,
      },
      sex: {
        isString: true,
        optional: true,
      },
      latinName: {
        isString: true,
        optional: true,
      },
      habitat: {
        isString: true,
        optional: true,
      },
      description: {
        isString: true,
        optional: true,
      },
      menu: {
        isString: true,
        optional: true,
      },
      dateArrived: {
        isISO8601: true,
        optional: true,
        toDate: true,
      },
      photo: {
        isString: true,
        optional: true,
      },
      classificationId: {
        isInt: true,
        optional: true,
      },
      employeeId: {
        isInt: true,
        optional: true,
      },
      parents: {
        isArray: true,
        optional: true,
      },
      children: {
        isArray: true,
        optional: true,
      },
    });
  },

  addRemoveChildRules: () => {
    return param('childId')
      .notEmpty()
      .isInt()
      .toInt()
      .withMessage('childId is an integer number');
  },

  addRemoveParentRules: () => {
    return param('parentId')
      .notEmpty()
      .isInt()
      .toInt()
      .withMessage('parentId is an integer number');
  },

  findAnimalRules: () => {
    return checkSchema({
      classificationTree: {
        in: 'query',
        isBoolean: true,
        optional: true,
        toBoolean: true,
      },
      parentsIncluded: {
        in: 'query',
        isBoolean: true,
        optional: true,
        toBoolean: true,
      },
      childrenIncluded: {
        in: 'query',
        isBoolean: true,
        optional: true,
        toBoolean: true,
      },
    });
  },

  findAnimalsRules: () => {
    return [
      checkSchema({
        sort: {
          in: 'query',
          isString: true,
          optional: true,
          isIn: [sortOptions],
        },
        age: {
          in: 'query',
          isObject: true,
          optional: true,
        },
        parentId: {
          in: 'query',
          optional: true,
          isInt: true,
          toInt: true,
        },
        classificationId: {
          in: 'query',
          optional: true,
          isInt: true,
          toInt: true,
        },
        photo: {
          in: 'query',
          optional: true,
          isBoolean: true,
          toBoolean: true,
        },
        parentsIncluded: {
          in: 'query',
          optional: true,
          isBoolean: true,
          toBoolean: true,
        },
        childrenIncluded: {
          in: 'query',
          optional: true,
          isBoolean: true,
          toBoolean: true,
        },
      }),
      query('age.lte').optional().isInt().toInt(),
      query('age.gte').optional().isInt().toInt(),
      query('age.lt').optional().isInt().toInt(),
      query('age.gt').optional().isInt().toInt(),
      query('age.equals').optional().isInt().toInt(),
      query('age.not').optional().isInt().toInt(),
    ];
  },
};
