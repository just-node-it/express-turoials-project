module.exports = (error, req, res, next) => {
  console.error({ error });
  if (error.statusCode) {
    return res.status(error.statusCode).json({
      message: error.message || 'Request failed',
    });
  }

  res.status(500).json({
    error: 'Server side error',
  });
};
