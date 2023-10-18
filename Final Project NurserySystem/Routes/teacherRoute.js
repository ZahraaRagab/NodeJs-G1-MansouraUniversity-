const express = require("express");
const router = express.Router();
const controller = require("./../Controller/teacherController");
const validateMW = require("./../Core/validations/validateMW");
const teacherArray = require("../Core/validations/teacherValidate");
const {
  checkAdmin,
  checkAdminAndTeacher,
} = require("./../Core/auth/authenticationMW");
const uploadImage = require("./../Core/uploadImage/uploadImage");


router
  .route("/teachers")
  .get(checkAdmin, controller.getAllTeacher)
  .post(
    checkAdmin,
    uploadImage.single("image"),
    teacherArray.postTeacherArray,
    validateMW,
    controller.addTeacher
  );

router
  .route("/teachers/:id")
  .get(
    checkAdminAndTeacher,
    controller.getTeacherById
  )
  .put(
    checkAdminAndTeacher,
    uploadImage.single("image"),
    teacherArray.putTeacherArray,
    validateMW,
    controller.updateTeacher
  )
  .delete(
    checkAdmin,
    teacherArray.deleteTeacherArray,
    validateMW,
    controller.deleteTeacher
  );

module.exports = router;
