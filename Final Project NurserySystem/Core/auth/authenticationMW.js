const { body } = require("express-validator");
const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  try {
    let token = request.get("authorization").split(" ")[1];
    let decodedToken = jwt.verify(token, "nurserySystem");
    request.id = decodedToken._id;
    request.role = decodedToken.role;
    next();
  } catch (error) {
    error.status = 401;
    error.message = "not authenticated";
    next(error);
  }
};

module.exports.checkAdmin = (request, response, next) => {
  console.log(request.role);
  if (request.role == "admin") next();
  else {
    let error = new Error("not authorized");
    error.status = 403;
    next(error);
  }
};

module.exports.checkAdminAndTeacher = (request, response, next) => {
  if (
    request.role == "admin" ||
    (request.role == "teacher" && request.id == request.body._id)
  )
    next();
  else {
    let error = new Error("not authorized ");
    error.status = 403;
    next(error);
  }
};
