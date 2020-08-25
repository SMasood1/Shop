const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("wth");
  try {
    console.log("running");
    const token = req.headers.authentication.split(" ")[1];
    // Retrive JWT payload
    console.log(token);

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log(decoded);
    req.userData = decoded.userId;
    next();
  } catch (error) {
    console.log("error", error);
    return res.status(401).send({
      message: "Auth failed",
    });
  }
};
