const router = require("express").Router();
const restrict = require("../middleware/restricted-middleware");
const Users = require("./users-model.js");

//Add restricted x2 middleware: x1 to restrict based on departement x1 verifies token when clients sends back

router.get("/", restrict(), async (req, res) => {
  try {
    res.json(await Users.find());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
