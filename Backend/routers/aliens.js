const express = require("express");
const alien = require("../models/alien");
const router = express.Router();
const Alien = require("../models/alien");

router.get("/", async (req, res) => {
  try {
    const alien = await Alien.find();
    res.json(alien);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.name = req.body.name;
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    const a1 = await alien.remove();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    description: req.body.description,
    username: req.body.username,
    password: req.body.password,
    apikey: req.body.apikey,
    apisecret: req.body.apisecret,
    code: req.body.code,
  });
  try {
    const a1 = await alien.save();
    res.send(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
