const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    const decoded = jwt.verify(token, "masai", (err, decoded) => {
      if (decoded) {
        const userID = decoded.userID;
        req.body.userID = userID;
        next();
      } else {
        res.send({ message: "Please Login" });
      }
    });
  } else {
    res.send({ message: "Please Login" });
  }
};

module.exports = {
  Auth,
};
