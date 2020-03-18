const jwt = require("jsonwebtoken");
const models = require("../models");
const AdminModel = models.admin;

// LOGIN ADMIN
exports.AuthAdminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AdminModel.findOne({ where: { email, password } });
    if (user) {
      const token = jwt.sign(
        { user_id: user.id, level: "admin" },
        process.env.SECRET_KEY
      );
      res
        .status(200)
        .send({ email, token, status: true, message: "Login Success" });
    } else {
      res.status(401).send({ status: false, message: "Invalid login" });
    }
  } catch (err) {
    console.log(err);
  }
};
