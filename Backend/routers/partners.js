const express = require("express");
const router = express.Router();
const Partner = require("../models/Partner");

router.get("/", async (req, res) => {
  try {
    const partner = await Partner.find();
    res.json(partner);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    res.json(partner);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    partner.name = req.body.name;
    const a1 = await partner.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    const a1 = await partner.remove();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  const partner = new Partner({
    name: req.body.name,
    description: req.body.description,
    username: req.body.username,
    password: req.body.password,
    apikey: req.body.apikey,
    apisecret: req.body.apisecret,
    code: req.body.code,
  });
  try {
    const a1 = await partner.save();
    res.send(a1);
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
