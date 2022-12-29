const express = require('express');
require('dotenv').config();
const config = require('./config');
const routes = require('./routes');
const { apiErrorHandler, prismaClientErrorHandler } = require('./middlewares');

async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  routes(app);
  app.use(prismaClientErrorHandler);
  app.use(apiErrorHandler);

  app
    .listen(config.port, () => {
      console.log(`Server started on port: ${config.port}`);
    })
    .on('error', (error) => {
      console.log(error.message);
      process.exit(1);
    });
}

startServer();
