const models = require("../models");
const MatchModel = models.match;
const PetModel = models.pet;
const UserModel = models.user;
const SpeciesModel = models.species;
const Sequelize = require("sequelize");
exports.CheckMatch = async (req, res) => {
  const { pet_id, pet_id_liked } = req.query;
  try {
    const Op = Sequelize.Op;
    const data = await MatchModel.findAll({
      include: [
        {
          model: PetModel,
          as: "pet",
          attributes: ["id", "name", "gender", "age", "about_pet", "photo1"]
        },
        {
          model: PetModel,
          as: "pet_liked",
          attributes: ["id", "name", "gender", "age", "about_pet", "photo1"]
        }
      ],
      attributes: { exclude: ["pet_id", "pet_id_liked"] },
      where: {
        [Op.or]: [
          { pet_id, pet_id_liked },
          { pet_id: pet_id_liked, pet_id_liked: pet_id }
        ],
        [Op.and]: [{ status: 1 }]
      }
    });
    if (data) {
      res.status(200).send({
        status: true,
        message: "Pet a Matched",
        data
      });
    } else {
      res.status(204).send({
        status: false,
        message: "Matched not found"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.CreateMatch = async (req, res) => {
  try {
    const data = await MatchModel.create(req.body);

    const findMatch = await MatchModel.findOne({
      include: [
        {
          model: PetModel,
          as: "pet",
          include: [
            {
              model: UserModel,
              as: "breeder",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: SpeciesModel,
              as: "category",
              attributes: ["id", "name"]
            }
          ],
          attributes: [
            "id",
            "name",
            "gender",
            "species",
            "age",
            "user",
            "about_pet",
            "photo"
          ]
        },
        {
          model: PetModel,
          as: "pet_liked",
          include: [
            {
              model: UserModel,
              as: "breeder",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: SpeciesModel,
              as: "category",
              attributes: ["id", "name"]
            }
          ],
          attributes: [
            "id",
            "name",
            "gender",
            "species",
            "age",
            "user",
            "about_pet",
            "photo"
          ]
        }
      ],
      attributes: { exclude: ["createdAt", "UpdatedAt"] },
      where: { id: data.id }
    });

    res.status(200).send({
      status: true,
      message: "Pet Match Success to Created",
      data: findMatch
    });
  } catch (err) {
    console.log(err);
  }
};

exports.UpdateMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const { pet_id, pet_id_liked, status } = req.body;

    const findMatch = await MatchModel.findOne({
      include: [
        {
          model: PetModel,
          as: "pet",
          include: [
            {
              model: UserModel,
              as: "breeder",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: SpeciesModel,
              as: "category",
              attributes: ["id", "name"]
            }
          ],
          attributes: [
            "id",
            "name",
            "gender",
            "species",
            "age",
            "user",
            "about_pet",
            "photo"
          ]
        },
        {
          model: PetModel,
          as: "pet_liked",
          include: [
            {
              model: UserModel,
              as: "breeder",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: SpeciesModel,
              as: "category",
              attributes: ["id", "name"]
            }
          ],
          attributes: [
            "id",
            "name",
            "gender",
            "species",
            "age",
            "user",
            "about_pet",
            "photo"
          ]
        }
      ],
      attributes: { exclude: ["createdAt", "UpdatedAt"] },
      where: { id }
    });

    await MatchModel.update(
      { pet_id, pet_id_liked, status },
      { where: { id } }
    );

    res.status(200).send({
      status: true,
      message: "Pet Match Success to Updated",
      data: findMatch
    });
  } catch (err) {
    console.log(err);
  }
};

exports.DetailMatch = async (req, res) => {
  const { pet_id, status } = req.query;
  try {
    const data = await MatchModel.findAll({
      include: [
        {
          model: PetModel,
          as: "pet",
          include: [
            {
              model: UserModel,
              as: "breeder",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: SpeciesModel,
              as: "category",
              attributes: ["id", "name"]
            }
          ],
          attributes: [
            "id",
            "name",
            "gender",
            "species",
            "age",
            "user",
            "about_pet",
            "photo"
          ]
        },
        {
          model: PetModel,
          as: "pet_liked",
          include: [
            {
              model: UserModel,
              as: "breeder",
              attributes: ["id", "breeder", "address", "phone"]
            },
            {
              model: SpeciesModel,
              as: "category",
              attributes: ["id", "name"]
            }
          ],
          attributes: [
            "id",
            "name",
            "gender",
            "species",
            "age",
            "user",
            "about_pet",
            "photo"
          ]
        }
      ],
      attributes: { exclude: ["createdAt", "UpdatedAt"] },
      where: { pet_id, status }
    });

    res.status(200).send({
      status: true,
      message: "Pet a Matched",
      data
    });
  } catch (err) {
    console.log(err);
  }
};
