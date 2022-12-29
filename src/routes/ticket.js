const {
  validators: { idRules, validate, ticketValidator },
  jwtAuth,
} = require('../middlewares');
const { Router } = require('express');
const router = Router();
const {
  findTickets,
  findTicket,
  createTicket,
  editTicket,
} = require('../controllers/ticket');

router
  .route('/')
  .get(findTickets)
  .post(jwtAuth, ticketValidator.createTicketRules(), validate, createTicket);
router
  .route('/:id')
  .get(idRules(), validate, findTicket)
  .put(
    jwtAuth,
    idRules(),
    ticketValidator.updateTicketRules(),
    validate,
    editTicket,
  );

module.exports = router;
