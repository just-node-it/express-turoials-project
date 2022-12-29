const {
  validators: { idRules, validate, employeeValidator },
  jwtAuth,
} = require('../middlewares');
const { Router } = require('express');
const router = Router();
const {
  findEmployees,
  findEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require('../controllers/employee');

router
  .route('/')
  .get(findEmployees)
  .post(
    jwtAuth,
    employeeValidator.createEmployeeRules(),
    validate,
    createEmployee,
  );
router
  .route('/:id')
  .get(idRules(), validate, findEmployee)
  .delete(jwtAuth, idRules(), validate, deleteEmployee)
  .put(
    jwtAuth,
    idRules(),
    employeeValidator.updateEmployeeRules(),
    validate,
    updateEmployee,
  );

module.exports = router;
