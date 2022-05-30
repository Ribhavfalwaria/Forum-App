const express = require("express");
const router = express.Router();
const Register = require("../models/register");

router.get("/", async (req, res) => {
  try {
    const register = await Register.find();
    res.json(register);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const register = await Register.findById(req.params.id);
    res.json(register);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const register = await Register.findById(req.params.id);
    register.name = req.body.name;
    const a1 = await register.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const register = await Register.findById(req.params.id);
    const a1 = await register.remove();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  const register = new Register({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
  });
  try {
    const a1 = await register.save();
    res.send(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
