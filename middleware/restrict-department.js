function restrictDepartment(dep) {

  return (req, res, next) => {

    if (req.token && req.token.department === dep) {
      next();
    } else {
      return res.status(403).json({
        message: "You cannot pass, not authorised here"
      });
    }
  };
}

module.exports = restrictDepartment;
