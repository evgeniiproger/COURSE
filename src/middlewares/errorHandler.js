module.exports = function (err, req, res, next) {
  console.error(err);
  const status = err.status || 500;

  res.status(status).json({
    error: true,
    message:
      process.env.NODE_ENV === 'development'
        ? err.message
        : 'Internal server error',
  });
};
