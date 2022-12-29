const classificationService = require('../services/classification');

module.exports = {
  findClassifications: async (req, res, next) => {
    try {
      const classifications = await classificationService.findAll();
      res.send(classifications);
    } catch (error) {
      next(error);
    }
  },

  findClassification: async (req, res, next) => {
    try {
      const classification = await classificationService.findOne(req.params.id);
      if (!classification) {
        return res.sendStatus(404);
      }
      res.send(classification);
    } catch (error) {
      next(error);
    }
  },

  createClassification: async (req, res, next) => {
    try {
      const classification = await classificationService.create(req.body);
      res.status(201).send(classification);
    } catch (error) {
      next(error);
    }
  },

  deleteClassification: async (req, res, next) => {
    try {
      await classificationService.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  updateClassification: async (req, res, next) => {
    try {
      const classification = await classificationService.update(
        req.params.id,
        req.body,
      );
      res.send(classification);
    } catch (error) {
      next(error);
    }
  },

  findClassificationTree: async (req, res, next) => {
    try {
      const classificationTree = await classificationService.findTree(
        req.params.id,
      );
      res.send(classificationTree);
    } catch (error) {
      next(error);
    }
  },
};
