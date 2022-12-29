// const employeeService = require('../services/employee');
const baseService = new (require('../services/base'))('employee');

module.exports = {
  findEmployees: async (req, res, next) => {
    try {
      const employees = await baseService.findAll();
      res.send(employees);
    } catch (error) {
      next(error);
    }
  },

  findEmployee: async (req, res, next) => {
    try {
      const employee = await baseService.findOne(req.params.id);
      if (!employee) {
        return res.sendStatus(404);
      }
      res.send(employee);
    } catch (error) {
      next(error);
    }
  },

  createEmployee: async (req, res, next) => {
    try {
      const employee = await baseService.create(req.body);
      res.status(201).send(employee);
    } catch (error) {
      next(error);
    }
  },

  deleteEmployee: async (req, res, next) => {
    try {
      await baseService.delete(req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  },

  updateEmployee: async (req, res, next) => {
    try {
      const employee = await baseService.update(req.params.id, req.body);
      res.send(employee);
    } catch (error) {
      next(error);
    }
  },
};
