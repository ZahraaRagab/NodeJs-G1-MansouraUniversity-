const express = require("express");
const router = express.Router();
const controller = require("./../Controller/classController");
const validateMW = require("./../Core/validations/validateMW");
const classArray = require("../Core/validations/classValidate");
const { checkAdmin } = require("./../Core/auth/authenticationMW");

router
  .route("/class")
  .get(checkAdmin, controller.getAllClass)
  .post(checkAdmin, classArray.postClassArray, validateMW, controller.addClass);

router
  .route("/class/:id")
  .get(checkAdmin, classArray.getClass, validateMW, controller.getClass)
  .put(checkAdmin, classArray.putClassArray, validateMW, controller.updateClass)
  .delete(
    checkAdmin,
    classArray.deleteClassArray,
    validateMW,
    controller.deleteClass
  );

router.get(
  "/class/:id/children",
  classArray.getChildrenClass,
  validateMW,
  controller.getClassChildern
);
router.get(
  "/class/:id/teacher",
  classArray.getTeacherClass,
  validateMW,
  controller.getClassTeacher
);

module.exports = router;
