const models = require("../models");
const jwt = require("jsonwebtoken");
const PetModel = models.pet;
const UserModel = models.user;
const SpeciesModel = models.species;

exports.PetIndex = async (req, res) => {
  try {
    const species = await PetModel.findAll({
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
      attributes: { exclude: ["user", "species"] }
    });
    res.send(species);
  } catch (err) {
    console.log(err);
  }
};

exports.PetAdd = async (req, res) => {
  const { name, gender, age, about_pet, photo } = req.body;
  const species = req.body.species.id;
  const user = req.body.user.id;

  try {
    //console.log(req.user);
    const pet = await PetModel.create({
      name,
      gender,
      species,
      age,
      user,
      about_pet,
      photo
    });
    const id = pet.id;
    const data = await PetModel.findOne({
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
      attributes: { exclude: ["user", "species"] },
      where: { id }
    });
    res.status(200).send({
      status: true,
      message: "Success add new pet",
      data: data
    });
  } catch (err) {
    console.log(err);
  }
};

exports.PetUpdate = async (req, res) => {
  const id_data = req.params.id;
  const { name, gender, age, about_pet, photo } = req.body;
  const species = req.body.species.id;
  const user = req.body.user.id;

  const token = req.header("Authorization").replace("Bearer ", "");
  const us = jwt.verify(token, process.env.SECRET_KEY);

  try {
    const id = id_data;
    const data = await PetModel.findOne({
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
      attributes: { exclude: ["user", "species"] },
      where: { id }
    });

    if (data.breeder.id == us.user_id) {
      //console.log(req.user);
      await PetModel.update(
        {
          name,
          gender,
          species,
          age,
          user,
          about_pet,
          photo
        },
        { where: { id } }
      );

      res.status(200).send({
        status: true,
        message: "Success Updated a pet",
        data: data
      });
    } else {
      res.status(200).send({
        status: false,
        message: "Only owner to update this data"
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.PetDestroy = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await PetModel.destroy({ where: { id } });
    res.status(200).send({ message: "Success Deleted a pet", status: "true" });
  } catch (err) {
    console.log(err);
  }
};

exports.PetDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await PetModel.findOne({
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
      attributes: { exclude: ["user", "species"] },
      where: { id }
    });
    res.send(pet);
  } catch (err) {
    console.log(err);
  }
};
