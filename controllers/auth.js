const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const { createAccessToken, sendAccessToken } = require("../util/token");

exports.postSignup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      throw new Error("EMAIL_EXISTS");
    }
    // If user does not exist hash password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user on the database
    User.create({
      email,
      password: hashedPassword.toString(),
    })
      .then((userModel) => {
        // Create a cart for the user
        userModel.createCart();
      })
      .then(() => res.send({ message: "User was created" }));
  } catch (error) {
    res.status(409).send({
      message: `${error.message}`,
    });
  }
};

exports.postSignin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    // Find if user exists
    let user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw Error("EMAIL_NOT_FOUND");
    }
    // Check if valid password was entered
    let isValidPasssword = await bcrypt.compare(password, user.password);

    if (isValidPasssword) {
      // Createing refresh and accesstoken
      const accesstoken = createAccessToken(user.id);
      // const refreshToken = createRefreshToken(user.id);

      // Need to send access token
      sendAccessToken(req, res, accesstoken);
    } else {
      throw Error("INVALID_PASSWORD");
    }
  } catch (error) {
    res.status(409).send({
      message: `${error.message}`,
    });
  }
};
