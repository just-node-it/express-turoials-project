const animalRoute = require('./animal');
const authRoute = require('./auth');
const classificationRoute = require('./classification');
const employeeRoute = require('./employee');
const eventRoute = require('./event');
const expositionRoute = require('./exposition');
const orderRoute = require('./order');
const ticketRoute = require('./ticket');

module.exports = (app) => {
  app.use('/animals', animalRoute);
  app.use('/auth', authRoute);
  app.use('/classifications', classificationRoute);
  app.use('/employees', employeeRoute);
  app.use('/events', eventRoute);
  app.use('/expositions', expositionRoute);
  app.use('/orders', orderRoute);
  app.use('/tickets', ticketRoute);
};
