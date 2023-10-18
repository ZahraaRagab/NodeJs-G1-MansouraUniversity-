const multer = require("multer");
const path = require("path");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/teacher");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    let fileName = path.basename(file.originalname, ext);

    let allFileName = `teacher-${fileName}-${Date.now()}${ext}`;
    cb(null, allFileName);
    req.body.image = `/images/teacher/teacher-${allFileName}`;
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

module.exports = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// module.exports = multer({
//   storage: multer.diskStorage({
//     destination: (request, file, callbackFun) => {
//       callbackFun(
//         null,
//         path.join(__dirname, "..", "..", "public", "images", "teacher")
//       );
//     },
//     filename: (request, file, callbackFun) => {
//       let extention = path.extname(file.originalname);
//       let fileName = path.basename(file.originalname, extention);
//       let allFileName =
//         "/images/teacher/" +
//         file.fieldname +
//         "-" +
//         fileName +
//         "-" +
//         Date.now() +
//         extention;
//       request.body.image = allFileName;
//       callbackFun(null, allFileName);
//     },
//   }),
//   fileFilter: (request, file, callbackFun) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       callbackFun(null, true);
//     } else callbackFun(new Error("file must be image only"));
//   },
// });
