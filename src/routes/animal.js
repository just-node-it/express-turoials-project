const {
  validators: { idRules, validate, animalValidator },
  jwtAuth,
} = require('../middlewares');

const { Router } = require('express');
const router = Router();
const {
  findAnimals,
  findAnimal,
  createAnimal,
  editAnimal,
  deleteAnimal,
  addChild,
  removeChild,
  addParent,
  removeParent,
} = require('../controllers/animal');
const {
  createAnimalRules,
  updateAnimalRules,
  addRemoveChildRules,
  addRemoveParentRules,
  findAnimalRules,
  findAnimalsRules,
} = animalValidator;

router
  .route('/')
  .get(findAnimalsRules(), validate, findAnimals)
  .post(jwtAuth, createAnimalRules(), validate, createAnimal);

router
  .route('/:id')
  .get(idRules(), findAnimalRules(), validate, findAnimal)
  .put(jwtAuth, idRules(), updateAnimalRules(), validate, editAnimal)
  .delete(jwtAuth, idRules(), validate, deleteAnimal);

router
  .route('/:id/child/:childId')
  .post(jwtAuth, idRules(), addRemoveChildRules(), validate, addChild)
  .delete(jwtAuth, idRules(), addRemoveChildRules(), validate, removeChild);

router
  .route('/:id/parent/:parentId')
  .post(jwtAuth, idRules(), addRemoveParentRules(), validate, addParent)
  .delete(jwtAuth, idRules(), addRemoveParentRules(), validate, removeParent);

module.exports = router;
