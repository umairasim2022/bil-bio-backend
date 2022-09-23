import express from 'express';
const router = express.Router();
import AuthController from '../controllers/AuthController.js';
import checkUserAuth from '../middlewares/auth-middleware.js';
import Multer from 'multer'
const multer = Multer
// ROute Level Middleware - To Protect Route
router.use('/changepassword', checkUserAuth)
//router.use('/loggeduser', checkUserAuth)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/profile/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  const upload = multer({storage:storage})
// Public Routes
router.post('/register', AuthController.userRegistration)
router.post('/mediaUpload',upload.single('picture') ,AuthController.mediaUpload)
router.post('/login', AuthController.userLogin)
router.post('/send-reset-password-email', AuthController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', AuthController.userPasswordReset)
router.get('/verify-email/:id/:token', AuthController.verifyEmail)

// Protected Routesd
router.post('/changepassword', AuthController.changeUserPassword)
router.get('/loggeduser',AuthController.authCheck, AuthController.loggedUser)
router.get('/dashboard',AuthController.authCheck, AuthController.dashboard)
router.get('/customize_dashboard_value/:userid' ,AuthController.getCustomizeDashboard)
router.get('/customize_dashboard_value/:userid' ,AuthController.getDashboardValueByColoumName)
router.post('/customize_dashboard/:userid', AuthController.customizeDashboard)
router.put('/update_customize_dashboard/:optionid', AuthController.updateCustomizeDashboard)
router.get('/logout', AuthController.logout);
router.get('/', AuthController.home);
export default router