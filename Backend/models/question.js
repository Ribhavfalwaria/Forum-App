const mongoose = require("mongoose");

const questionschema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: [],
  userid: { type: String },
  lastname: { type: String },
  firstname: { type: String },
});

module.exports = mongoose.model("Question", questionschema);
