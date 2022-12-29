const animalService = require('../services/animal');

module.exports = {
  findAnimals: async (req, res, next) => {
    try {
      const animals = await animalService.findAll(req.query);
      res.send(animals);
    } catch (error) {
      next(error);
    }
  },

  findAnimal: async (req, res, next) => {
    try {
      const animal = await animalService.findOne(req.params.id, req.query);
      if (!animal) {
        return res.sendStatus(404);
      }
      res.send(animal);
    } catch (error) {
      next(error);
    }
  },

  createAnimal: async (req, res, next) => {
    try {
      const animal = await animalService.create(req.body);
      res.status(201).send(animal);
    } catch (error) {
      next(error);
    }
  },

  editAnimal: async (req, res, next) => {
    try {
      const animal = await animalService.update(req.params.id, req.body);
      res.send(animal);
    } catch (error) {
      next(error);
    }
  },

  deleteAnimal: async (req, res, next) => {
    try {
      await animalService.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  addChild: async (req, res, next) => {
    try {
      const animal = await animalService.addChild(
        req.params.id,
        req.params.childId,
      );
      res.send(animal);
    } catch (error) {
      next(error);
    }
  },

  removeChild: async (req, res, next) => {
    try {
      await animalService.deleteChild(req.params.id, req.params.childId);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  addParent: async (req, res, next) => {
    try {
      const animal = await animalService.addParent(
        req.params.id,
        req.params.parentId,
      );
      res.send(animal);
    } catch (error) {
      next(error);
    }
  },

  removeParent: async (req, res, next) => {
    try {
      await animalService.deleteParent(req.params.id, req.params.parentId);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },
};
