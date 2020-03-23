const jwt = require("jsonwebtoken");

//Verify the token when the client to send it back as header
// postman --> SEND token up as value to Authorization in header to api/users

function restrict() {
  const authError = {
    message: "Invalid credentials"
  };

  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json(authError);
      }

      //Verify the token's signiture:
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json(authError);
        }

        req.token = decoded;
        // console.log(decoded)
        next();
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = restrict;
