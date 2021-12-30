module.exports = function (req, _, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};
