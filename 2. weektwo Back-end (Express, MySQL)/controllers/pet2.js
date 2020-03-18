const models = require("../models");
const jwt = require("jsonwebtoken");
const PetModel = models.pet;
const UserModel = models.user;
const SpeciesModel = models.species;

exports.PetIndex2 = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const DataPets = await PetModel.findAll({
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
      where: { user: user.user_id }
    });
    res.status(200).send({
      status: true,
      message: "Success get pets",
      data: DataPets
    });
  } catch (err) {
    console.log(err);
  }
};

exports.PetAdd2 = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  // console.log("disini : ")
  // console.log(user);
  const {
    name,
    gender,
    species,
    age,
    about_pet,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9
  } = req.body;
  try {
    //console.log(req.user);
    const pet = await PetModel.create({
      name,
      gender,
      species,
      age,
      user: user.user_id,
      about_pet,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      photo9
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

exports.PetDetails2 = async (req, res) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const user = jwt.verify(token, process.env.SECRET_KEY);
  const { id } = req.params;
  try {
    const DataPets = await PetModel.findOne({
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
      where: { id,  user: user.user_id }
    });
    res.status(200).send({
      status: true,
      message: "Success get details pet",
      data: DataPets
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

