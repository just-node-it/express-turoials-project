const { PrismaClientKnownRequestError } = require('@prisma/client/runtime');

module.exports = (error, req, res, next) => {
  if (error instanceof PrismaClientKnownRequestError) {
    console.error({ error });
    switch (error.code) {
      case 'P2002': {
        res.status(409).json({ message: 'Conflict' });
        break;
      }
      case 'P2025': {
        res.status(404).json({ message: 'Resource was not found' });
        break;
      }
      case 'P2003': {
        res.status(400).json({ message: 'Foreign key constraint failed' });
        break;
      }
      case 'P2018': {
        res
          .status(400)
          .json({ message: 'The required connected records were not found.' });
        break;
      }
      default: {
        req.status(500).json({ message: 'Internal Server Error' });
      }
    }
  } else {
    next(error);
  }
};
