const {
  validators: { eventValidator, idRules, validate },
  jwtAuth,
} = require('../middlewares');
const { Router } = require('express');
const router = Router();
const {
  findEvents,
  findEvent,
  createEvent,
  deleteEvent,
  updateEvent,
} = require('../controllers/event');

router
  .route('/')
  .get(findEvents)
  .post(jwtAuth, eventValidator.createEventRules(), validate, createEvent);
router
  .route('/:id')
  .get(idRules(), validate, findEvent)
  .delete(jwtAuth, idRules(), validate, deleteEvent)
  .put(
    jwtAuth,
    idRules(),
    eventValidator.updateEventRules(),
    validate,
    updateEvent,
  );

module.exports = router;
