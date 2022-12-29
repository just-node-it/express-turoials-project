const {
  validators: { idRules, validate, expositionValidator },
  jwtAuth,
} = require('../middlewares');
const { Router } = require('express');
const router = Router();
const {
  findExpositions,
  findExposition,
  createExposition,
  deleteExposition,
  updateExposition,
} = require('../controllers/exposition');

router
  .route('/')
  .get(findExpositions)
  .post(
    jwtAuth,
    expositionValidator.createExpositionRules(),
    validate,
    createExposition,
  );

router
  .route('/:id')
  .get(idRules(), validate, findExposition)
  .delete(jwtAuth, idRules(), validate, deleteExposition)
  .put(
    jwtAuth,
    idRules(),
    expositionValidator.updateExpositionRules(),
    validate,
    updateExposition,
  );

module.exports = router;
