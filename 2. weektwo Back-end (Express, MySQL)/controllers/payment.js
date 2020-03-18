const models = require("../models");
const jwt = require("jsonwebtoken");
const PaymentModel = models.payment;
const UserModel = models.user;

exports.CreatePayment = async (req, res) => {
  const { no_rek, proof_of_tran, status } = req.body;

  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);

  try {
    const payment = await PaymentModel.create({
      no_rek,
      proof_of_tran,
      user: user.id,
      status
    });
    res.status(200).send({
      status: true,
      message: "Success to Created Payment",
      data: payment
    });
  } catch (err) {
    console.log(err);
  }
};

exports.UpdatePayment = async (req, res) => {
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
