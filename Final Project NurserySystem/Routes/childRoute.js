const express = require("express");
const router = express.Router();
const controller = require("./../Controller/childController");
const validateMW = require("./../Core/validations/validateMW");
const childArray = require("../Core/validations/childValidate");
const { checkAdmin } = require("./../Core/auth/authenticationMW");

router
  .route("/child")
  .get(checkAdmin, controller.getAllChild)
  .post(checkAdmin, childArray.postChildArray, validateMW, controller.addChild);

router
  .route("/child/:id")
  .get(checkAdmin, childArray.getChild, validateMW, controller.getChild)
  .put(checkAdmin, childArray.putChildArray, validateMW, controller.updateChild)
  .delete(checkAdmin, controller.deleteChild);

module.exports = router;
