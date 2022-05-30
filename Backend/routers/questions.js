const express = require("express");
const router = express.Router();
const Question = require("../models/question");

router.get("/", async (req, res) => {
  try {
    const question = await Question.find();
    res.json(question);
  } catch (err) {
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    res.json(question);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    question.answer = req.body.answer;
    const a1 = await question.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    const a1 = await question.remove();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  const question = new Question({
    question: req.body.question,
    answer: req.body.answer,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  try {
    const a1 = await question.save();
    res.send(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.post("/:id", async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, {
      $push: { answer: req.body.answer },
    });

    const a1 = await question.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.put("/:id", async function (req, res) {
  try {
    const question = Question.findByIdAndUpdate(req.params.id, {
      $push: { answer: req.body.answer },
    })
      .populate("answer")
      .exec(function (err, course) {
        if (err)
          return res
            .status(500)
            .send(
              "There was a problem adding this information to the database"
            );
        res.status(201).send(course);
      });
  } catch (err) {
    res.send("Error");
  }

  //   const a1 = await question.save();
  //   res.send(a1);
});

module.exports = router;
