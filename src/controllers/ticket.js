const ticketService = require('../services/ticket');

module.exports = {
  findTickets: async (req, res, next) => {
    try {
      const tickets = await ticketService.findAll();
      res.send(tickets);
    } catch (error) {
      next(error);
    }
  },

  findTicket: async (req, res, next) => {
    try {
      const ticket = await ticketService.findOne(req.params.id);
      if (!ticket) {
        return res.sendStatus(404);
      }
      res.send(ticket);
    } catch (error) {
      next(error);
    }
  },

  createTicket: async (req, res, next) => {
    try {
      const ticket = await ticketService.create(req.body);
      res.status(201).send(ticket);
    } catch (error) {
      next(error);
    }
  },

  editTicket: async (req, res, next) => {
    try {
      const ticket = await ticketService.update(req.params.id, req.body);
      res.send(ticket);
    } catch (error) {
      next(error);
    }
  },
};
