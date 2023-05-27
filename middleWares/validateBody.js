const { RequestError } = require("../helpers");

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    const body = req.body;
    const { error } = schema.validate(body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;