function errorHandler(err, req, res, next) {
  if (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  } else {
    next();
  }
}
module.exports = errorHandler;