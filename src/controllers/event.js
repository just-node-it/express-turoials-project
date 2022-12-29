const eventService = require('../services/event');

module.exports = {
  findEvents: async (req, res, next) => {
    try {
      const events = await eventService.findAll();
      res.send(events);
    } catch (error) {
      next(error);
    }
  },

  findEvent: async (req, res, next) => {
    try {
      const event = await eventService.findOne(req.params.id);
      if (!event) {
        return res.sendStatus(404);
      }
      res.send(event);
    } catch (error) {
      next(error);
    }
  },

  createEvent: async (req, res, next) => {
    try {
      const event = await eventService.create(req.body);
      res.status(201).send(event);
    } catch (error) {
      next(error);
    }
  },

  deleteEvent: async (req, res, next) => {
    try {
      await eventService.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  updateEvent: async (req, res, next) => {
    try {
      const event = await eventService.update(req.params.id, req.body);
      res.send(event);
    } catch (error) {
      next(error);
    }
  },
};
