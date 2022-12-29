const {
  validators: { idRules, classificationValidator, validate },
  jwtAuth,
} = require('../middlewares');
const { Router } = require('express');
const router = Router();
const {
  findClassifications,
  findClassification,
  createClassification,
  deleteClassification,
  updateClassification,
  findClassificationTree,
} = require('../controllers/classification');

router
  .route('/')
  .get(findClassifications)
  .post(
    jwtAuth,
    classificationValidator.createClassificationRules(),
    validate,
    createClassification,
  );
router
  .route('/:id')
  .get(idRules(), validate, findClassification)
  .delete(jwtAuth, idRules(), validate, deleteClassification)
  .put(
    jwtAuth,
    idRules(),
    classificationValidator.updateClassificationRules(),
    validate,
    updateClassification,
  );
router.get('/:id/tree', idRules(), validate, findClassificationTree);

module.exports = router;
