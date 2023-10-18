const { body, param, query } = require("express-validator");
exports.postChildArray = [
  body("fullname")
    .isString()
    .withMessage("fullname should be string")
    .isLength({ max: 10 })
    .withMessage("fullname name <10"),
  body("age").isInt().withMessage("Age must be number"),
  body("level")
    .isIn(["PreKG", "KG1", "KG2"])
    .withMessage("must be one of (PreKG,KG1,KG2)"),
  body("address")
    .isObject()
    .withMessage("address must be object (city , street , building)"),
  body("address.city").isString().withMessage("city must be string"),
  body("address.street").isString().withMessage("street must be string"),
  body("address.building").isNumeric().withMessage("build must be number"),
];

exports.putChildArray = [
  body("fullname")
    .optional()
    .isString()
    .withMessage("fullname should be string")
    .isLength({ max: 10 })
    .withMessage("fullname <10"),
  body("age").optional().isInt().withMessage("Wrong Age"),
  body("level")
    .optional()
    .isIn(["PreKG", "KG1", "KG2"])
    .withMessage("must be one of (PreKG,KG1,KG2)"),
  body("address")
    .optional()
    .isObject()
    .withMessage("address must be object (city , street , building)"),
  body("address.city").optional().isString().withMessage("city must be string"),
  body("address.street")
    .optional()
    .isString()
    .withMessage("street must be string"),
  body("address.building")
    .optional()
    .isNumeric()
    .withMessage("build must be number"),
];



exports.getChild = [param("id").isMongoId().withMessage("Invalid ID")];
