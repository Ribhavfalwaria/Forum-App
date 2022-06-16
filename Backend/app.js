const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/market";
const app = express();
const cors = require("cors");
const partnerrouter = require("./routers/partners");
const registerrouter = require("./routers/registers");
const questionrouter = require("./routers/questions");
const Register = require("./models/register");

mongoose.connect(url);

const conn = mongoose.connection;

conn.on("open", () => {
  console.log("connected");
});
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Register.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send("Login successful");
      } else {
        res.send("Password didnt match");
      }
    } else {
      res.send("User not registered");
    }
  });
});

app.use("/registers", registerrouter);
app.use("/partners", partnerrouter);
app.use("/questions", questionrouter);
app.listen(9000, () => {
  console.log("server started");
});
