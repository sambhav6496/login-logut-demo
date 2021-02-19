const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/usersdb";
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", function () {
  console.log("connected", dbURL);
});
mongoose.connection.on("error", function (error) {
  console.log(error);
});
const userSchema = {
  email: {
    type: String,
    required: true,
    min: 10,
  },
  password: {
    type: String,
    min: 5,
    required: true,
  },
};
const User = mongoose.model("User", userSchema);

module.exports = User;
