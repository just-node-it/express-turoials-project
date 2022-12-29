const {
  validators: { idRules, validate, orderValidator },
  jwtAuth,
} = require('../middlewares');
const { Router } = require('express');
const router = Router();
const {
  findOrders,
  findOrder,
  createOrder,
  changeOrderStatus,
} = require('../controllers/order');

router
  .route('/')
  .get(jwtAuth, findOrders)
  .post(orderValidator.createOrderRules(), validate, createOrder);
router.get('/:id', jwtAuth, idRules(), validate, findOrder);
router.put(
  '/:id/state',
  jwtAuth,
  idRules(),
  orderValidator.updateOrderState(),
  validate,
  changeOrderStatus,
);

module.exports = router;
