const orderService = require('../services/order');

module.exports = {
  findOrders: async (req, res, next) => {
    try {
      const orders = await orderService.findAll();
      res.send(orders);
    } catch (error) {
      next(error);
    }
  },

  findOrder: async (req, res, next) => {
    try {
      const order = await orderService.findOne(req.params.id);
      if (!order) {
        return res.sendStatus(404);
      }
      res.send(order);
    } catch (error) {
      next(error);
    }
  },

  createOrder: async (req, res, next) => {
    try {
      const order = await orderService.create(req.body);
      res.status(201).send(order);
    } catch (error) {
      next(error);
    }
  },

  changeOrderStatus: async (req, res, next) => {
    try {
      const order = await orderService.updateState(
        req.params.id,
        req.body.state,
      );
      res.send(order);
    } catch (error) {
      next(error);
    }
  },
};
