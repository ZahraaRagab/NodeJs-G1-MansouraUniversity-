const { body, param, query } = require("express-validator");
exports.postClassArray = [
  body("name")
    .isString()
    .withMessage("className should be string")
    .isLength({ max: 10 })
    .withMessage("class name <10"),
  body("supervisor").optional().isMongoId().withMessage("Wrong supervisor ID"),
  body("children").isArray().withMessage("children must be array of number"),
  body("children.*").isMongoId().withMessage("Wrong children _id format"),
];

exports.putClassArray = [
  body("name")
    .optional()
    .isString()
    .withMessage("className should be string")
    .isLength({ max: 10 })
    .withMessage("class name <10"),
  body("supervisor")
    .optional()
    .optional()
    .isMongoId()
    .withMessage("Wrong supervisor ID"),
  body("children")
    .optional()
    .isArray()
    .withMessage("children must be array of number"),
  body("children.*")
    .optional()
    .isMongoId()
    .withMessage("Wrong children _id format"),
];

exports.deleteClassArray = [
  body("_id").isInt().withMessage("class id should be number"),
];

exports.getClass = [param("id").isMongoId().withMessage("Invalid ID")];
exports.getChildrenClass = [param("id").isMongoId().withMessage("Invalid ID")];
exports.getTeacherClass = [param("id").isMongoId().withMessage("Invalid ID")];
