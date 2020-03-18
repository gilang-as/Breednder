const models = require("../models");
const jwt = require("jsonwebtoken");
const PaymentModel = models.payment;
const UserModel = models.user;

exports.UpdatePayment2 = async (req, res) => {
  const id = req.params.id;
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (user.level == "admin") {
      const payment = await PaymentModel.update(req.body, { where: { id } });
      const payment_detail = await PaymentModel.findOne({
        include: [
          {
            model: UserModel,
            as: "us",
            attributes: [
              "id",
              "breeder",
              "address",
              "phone",
              "createdAt",
              "UpdatedAt"
            ]
          }
        ],
        attributes: { exclude: ["user"] },
        where: { id }
      });
      res.status(200).send({
        status: true,
        message: "Success to Updated Payment",
        data: payment_detail
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Only Admin to Update payment"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.CheckPayment2 = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const dataPayment = await PaymentModel.findOne({
      attributes: {
        exclude: ["id"]
      },
      where: { user: user.user_id }
    });
    res.status(200).send({
      status: true,
      message: "Success get status payment",
      data: dataPayment
    });
  } catch (err) {
    console.log(err);
  }
};
