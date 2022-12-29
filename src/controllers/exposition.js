const expositionService = require('../services/exposition');

module.exports = {
  findExpositions: async (req, res, next) => {
    try {
      const expositions = await expositionService.findAll();
      res.send(expositions);
    } catch (error) {
      next(error);
    }
  },

  findExposition: async (req, res, next) => {
    try {
      const exposition = await expositionService.findOne(req.params.id);
      if (!exposition) {
        return res.sendStatus(404);
      }
      res.send(exposition);
    } catch (error) {
      next(error);
    }
  },

  createExposition: async (req, res, next) => {
    try {
      const exposition = await expositionService.create(req.body);
      res.status(201).send(exposition);
    } catch (error) {
      next(error);
    }
  },

  deleteExposition: async (req, res, next) => {
    try {
      await expositionService.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  updateExposition: async (req, res, next) => {
    try {
      const exposition = await expositionService.update(
        req.params.id,
        req.body,
      );
      res.send(exposition);
    } catch (error) {
      next(error);
    }
  },
};
