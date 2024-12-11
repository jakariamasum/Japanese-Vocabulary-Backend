const AppError = require("../errors/AppError");
const sendResponse = require("../utils/sendResponse");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) {
    console.log("Missing token");
    throw new AppError(404, "Token missing");
  }
  console.log("secret: ", process.env.JWT_SECRET);
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded: ", decodedToken);
    req.id = decodedToken.id;
    req.role = decodedToken.role;
    req.email = decodedToken.email;
    next();
  } catch (error) {
    return sendResponse(res, {
      success: false,
      statusCode: 401,
      message: "You have no access to this route",
      data: error,
    });
  }
};

// Middleware to check if user is admin
const isAdminMiddleware = (req, res, next) => {
  if (req.role !== "admin") {
    return sendResponse(res, {
      success: false,
      statusCode: 401,
      message: "You have no access to this route",
      data: "",
    });
  }
  console.log("admin verified");
  next();
};
// Middleware to check if user is admin
const isUserMiddleware = (req, res, next) => {
  if (req.role !== "user") {
    return sendResponse(res, {
      success: false,
      statusCode: 401,
      message: "You have no access to this route",
      data: "",
    });
  }
  next();
};

module.exports = { authMiddleware, isAdminMiddleware, isUserMiddleware };
