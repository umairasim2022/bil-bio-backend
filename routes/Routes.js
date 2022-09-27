import express from "express";
const router = express.Router();
import AuthController from "../controllers/AuthController.js";
import DashboardController from "../controllers/DashboardController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";
import Multer from "multer";
const multer = Multer;
// ROute Level Middleware - To Protect Route
router.use("/changepassword", checkUserAuth);
//router.use('/loggeduser', checkUserAuth)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/profile/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
// Public Routes
router.post("/register", AuthController.userRegistration);
router.post(
  "/mediaUpload",
  upload.single("picture"),
  DashboardController.mediaUpload
);
router.post("/login", AuthController.userLogin);
router.post(
  "/send-reset-password-email",
  AuthController.sendUserPasswordResetEmail
);
router.post("/reset-password/:id/:token", AuthController.userPasswordReset);
router.get("/verify-email/:id/:token", AuthController.verifyEmail);
router.get("/get-email/:id/:token", AuthController.getEmail);
router.get("/verify-user-email/:id/:token", AuthController.verifyUserEmail);
// Protected Routesd

router.post("/changepassword", AuthController.changeUserPassword);
router.get("/loggeduser", AuthController.authCheck, AuthController.loggedUser);
router.get(
  "/dashboard",
  AuthController.authCheck,
  DashboardController.dashboard
);
router.get(
  "/getCustomizeDashboard/:userid/:token",
  DashboardController.getCustomizeDashboard
);
router.get(
  "/customize_dashboard_value/:userid",
  DashboardController.getDashboardValueByColoumName
);
router.post(
  "/customizeDashboard/:userid/:token",
  DashboardController.customizeDashboard
);
router.put(
  "/updateCustomizeDashboard/:optionid/:userid/:token",
  DashboardController.updateCustomizeDashboard
);
router.post("/createLink/:userid/:token", DashboardController.createLink);
router.get("/getLink/:userid/:token", DashboardController.getLink);
router.get("/getLinkWithTag/:userid/:token", DashboardController.getLinkWithTag);

router.get("/logout", AuthController.logout);
router.get("/", AuthController.home);
export default router;
