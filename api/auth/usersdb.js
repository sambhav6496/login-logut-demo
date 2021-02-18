const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/usersdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const userSchema = {
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    min: 5,
    required: true,
  },
};
const User = mongoose.model("User", userSchema);

class Usersdb {
  updateUser(userDetails) {
    User.find({}, function (err, foundItems) {
      const checkUserByEmail = foundItems.find(
        (u) => u.email === userDetails.email
      );
      console.log(checkUserByEmail);
      if (checkUserByEmail) {
        console.log("in loop");
        return {
          error : "user already exist",
        }
      }
      const user = new User({
        email: userDetails.email,
        password: userDetails.password,
      });
      user.save();
      return {
        user : userDetails,
      }
    })
  }
}

module.exports = new Usersdb();
