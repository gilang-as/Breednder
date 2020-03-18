const models = require("../models");
const jwt = require("jsonwebtoken");
const UserModel = models.user;

exports.UserDetail2 = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  console.log(user);
  const id = user.user_id;
  try {
    const species = await UserModel.findOne({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"]
      },
      where: { id }
    });
    res.send(species);
  } catch (err) {
    console.log(err);
  }
};
