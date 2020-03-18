const models = require("../models");
const Species = models.species;

exports.SpeciesIndex = async (req, res) => {
  try {
    const species = await Species.findAll();
    res.status(200).send({
      status: true,
      message: "Success get species",
      data: species
    });
  } catch (err) {
    console.log(err);
  }
};

exports.SpeciesAdd = async (req, res) => {
  try {
    const { name } = req.body;
    const check = await Species.findOne({
      where: { name }
    });
    if (check) {
      res.status(401).send({
        status: false,
        message: "The species name is ready to use"
      });
    } else {
      //console.log(req.user);
      const species = await Species.create(req.body);
      res.status(200).send({
        status: true,
        message: "Success add new species name",
        data: species
      });
    }
  } catch (err) {
    console.log(err);
  }
};
