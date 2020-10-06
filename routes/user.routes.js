const router = require("express").Router();
const {
  sequelize: { models },
} = require("../db");
router.get("/", async (req, res) => {
  try {
    const users = await models.User.findAll();
    res.json(users);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { userName } = req.body;
  try {
    const user = await models.User.create({ userName });
    res.json(user);
  } catch (err) {
    res.send(err.message);
  }
});
module.exports = router;
