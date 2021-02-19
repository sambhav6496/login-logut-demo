const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

const auth = require("./api/auth/index");
const user = require("./api/users/index");

app.use("/api", auth);
app.use("/user", user);

app.listen(3000, function () {
  console.log("listening on 3000");
});
