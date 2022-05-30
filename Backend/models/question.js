const mongoose = require("mongoose");
const childSchema = mongoose.Schema({
  name: String,
});
const questionschema = new mongoose.Schema({
  question: {
    type: String,
  },
  answer: [],
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
});

module.exports = mongoose.model("Question", questionschema);
