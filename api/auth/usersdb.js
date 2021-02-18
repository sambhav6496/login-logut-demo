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
    min: 10,
  },
  password: {
    type: String,
    min: 5,
    required: true,
  },
};
const User = mongoose.model("User", userSchema);

class Usersdb {
  register(userDetails) {
    return new Promise((resolve, reject) => {
      User.find({}, function (err, foundItems) {
        const checkUserByEmail = foundItems.find(
          (u) => u.email === userDetails.email
        );
        if (checkUserByEmail) {
          console.log("in loop");
          resolve({
            error: "user already exist",
          });
        }
        newUser();
        async function newUser() {
          const user = new User({
            email: userDetails.email,
            password: userDetails.password,
          });
          try {
            await user.save();
            resolve({
              user: userDetails,
            });
          } catch (error) {
            resolve({
              error: error.message,
            });
          }
        }
      });
    });
  }
  login(userDetails) {
    return new Promise((resolve, reject) => {
      User.find({}, function (err, foundItems) {
        const checkUserByEmail = foundItems.find(
          (u) => u.email === userDetails.email
        );
        if (checkUserByEmail) {
          if (checkUserByEmail.password === userDetails.password) {
            resolve({
              userResponse: userDetails,
            });
          }
          resolve({
            message: "email or password is invalid",
          });
        }
        resolve({
          message: "email or passwor is invalid",
        });
      });
    });
  }
}

module.exports = new Usersdb();
