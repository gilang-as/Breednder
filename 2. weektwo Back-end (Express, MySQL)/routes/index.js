const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { AuthLogin, AuthRegister } = require("../controllers/auth");
const { SpeciesIndex, SpeciesAdd } = require("../controllers/species");
const {
  PetIndex,
  PetAdd,
  PetUpdate,
  PetDestroy,
  PetDetails
} = require("../controllers/pet");
//PET v2
const { PetAdd2, PetIndex2, PetDetails2 } = require("../controllers/pet2");
//USER
const { UserDetails, UserUpdate, UserDestroy } = require("../controllers/user");
//USER v2
const { UserDetail2 } = require("../controllers/user2");
//MATCH
const {
  CheckMatch,
  CreateMatch,
  UpdateMatch,
  DetailMatch
} = require("../controllers/match");
//PAYMENT
const { CreatePayment, UpdatePayment } = require("../controllers/payment");
//PAYMENT v2
const { CheckPayment2, UpdatePayment2 } = require("../controllers/payment2");
const { AuthAdminLogin } = require("../controllers/authAdmin");

router.get("/", (req, res) => {
  res.send("<strong>Hello DumbWays Rumah Tengah cuy</strong>");
});

//AUTH
router.post("/auth/login", AuthLogin);
router.post("/auth/register", AuthRegister);

//SPECIES
router.get("/species", SpeciesIndex);
router.post("/species", SpeciesAdd);

//PET
router.get("/pets", auth, PetIndex);
router.post("/pet", auth, PetAdd);
router.put("/pet/:id", auth, PetUpdate);
router.delete("/pet/:id", auth, PetDestroy);
router.get("/pet/:id", PetDetails);
//PET V2
router.get("/pets2", auth, PetIndex2);
router.post("/pet2", auth, PetAdd2);
router.get("/pet2/:id", auth, PetDetails2);

//USER
router.get("/user/:id", auth, UserDetails);
router.put("/user/:id", auth, UserUpdate);
router.delete("/user/:id", UserDestroy);
//USER V2
router.get("/user", auth, UserDetail2);

//MATCH
router.get("/match", auth, CheckMatch);
router.post("/match", auth, CreateMatch);
router.patch("/match/:id", auth, UpdateMatch);
router.get("/matches", auth, DetailMatch);

//PAYMENT
router.post("/payment", CreatePayment);
router.put("/payment/:id", UpdatePayment);

//PAYMENT V2
router.get("/payment2", auth, CheckPayment2);

//PAYMENT
router.post("/auth/admin/login", AuthAdminLogin);

module.exports = router;
