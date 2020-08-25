const { sign } = require("jsonwebtoken");

const createAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};
const sendAccessToken = (req, res, accessToken) => {
  res.send({
    email: req.body.email,
    accessToken,
  });
};
// const createRefreshToken = (userId) => {
//   return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: "7d",
//   });
// };

module.exports = {
  createAccessToken,
  sendAccessToken,
  //   createRefreshToken,
};
