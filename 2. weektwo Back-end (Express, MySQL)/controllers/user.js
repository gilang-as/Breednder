const models = require("../models");
const UserModel = models.user;

exports.UserDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const species = await UserModel.findOne(
      { attributes: { exclude: ["id", "password", "email"] } },
      { where: { id } }
    );
    res.send(species);
  } catch (err) {
    console.log(err);
  }
};

exports.UserUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.update(req.body, { where: { id } });
    const data = await UserModel.findOne(
      { attributes: { exclude: ["id", "password", "email"] } },
      { where: { id: id } }
    );
    res.status(200).send({
      status: true,
      message: "Success Updated a pet",
      data: data
    });
  } catch (err) {
    console.log(err);
  }
};

exports.UserDestroy = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.destroy({ where: { id } });
    res.status(200).send({ message: "Success Deleted a user", id: user });
  } catch (err) {
    console.log(err);
  }
};
