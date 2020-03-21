const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model.js");
const restrict = require("../middleware/restricted-middleware");


// api/auth/register ADD VALIDATION so need to include name, password and departement

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, department } = req.body;
    const user = await Users.findBy({ username }).first();
    if (user) {
      return res.status(409).json({
        message: "Username is already taken, please use another one"
      });
    } else {
      if (!username || !password || !department) {
        res.status(400).json({
          message: "enter all fields please"
        });
      }
    }

    res.status(201).json(await Users.add(req.body));
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const authError = {
    message: "Invalid credentials"
  };

  try {
    let { username, password, department } = req.body;
    const user = await Users.findBy({ username }).first();
    if (!user || !department) {
      return res.status(401).json(authError);
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(401).json(authError);
    }

    // Generating new token once user credentials valid

    const payload = {
      userId: user.id,
      department: user.department
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({
      message: `Welcome ${user.username}!!!!`,
      token: token
    });
  } catch (error) {
    next(error);
  }
});


router.get("/protected", restrict(), async (req, res, next) => {
    try {
      res.json({
        message: "Welcome to this page, You are Authorised"
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
