import UserModel from '../models/User.js'
import DashboardModel from '../models/Dashboard.js'
import OptionModel from '../models/Option.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import transporter from '../config/emailConfig.js'


class AuthController {
  static authCheck = async (req, res, next) => {
    if (req.session.loggedin) {
      return next();
    } else {
      res.send({ "error": "failed", "message": "User Not Authenticated." })
    }
  };

  static userRegistration = async (req, res) => {
    const { name, email, password, password_confirmation, tc, status } = req.body

    const user = await UserModel.findOne({ email: email })
    if (user) {
      res.send({ "status": "failed", "message": "Email already exists" })
    } else {
      if (name && email && password && tc) {
        //if (password === password_confirmation) {
        // fiding user
        try {
          const salt = await bcrypt.genSalt(10)
          const hashPassword = await bcrypt.hash(password, salt)
          const doc = new UserModel({
            name: name,
            email: email,
            password: hashPassword,
            tc: tc,
            status: '0'
          })
          await doc.save()
          const saved_user = await UserModel.findOne({ email: email })
          const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
          const link = `${process.env.SITE_URL}/auth/verifyemail/${saved_user._id}/${token}`
          let info = await transporter.sendMail({
            from: 'Bill-Bio@gmail.com',
            to: email,
            subject: "BillBio - Please Verify Email",
            html: `<a href=${link}>Click Here</a> to Verify.`
          })

          // Generate JWT Token

          res.status(201).send({ "status": "success", "message": "Registered Successfully Please Verify Your Email.", "token": token, "id": saved_user._id })
        } catch (error) {
          console.log(error)
          res.send({ "status": "failed", "message": "Unable to Register" })
        }
        // } else {
        //   res.send({ "status": "failed", "message": "Password and Confirm Password doesn't match" })
        // }
      } else {
        res.send({ "status": "failed", "message": "All fields are required" })
      }
    }
  }
  static userLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      if (email && password) {
        const user = await UserModel.findOne({ email: email })
        console.log(user.status);
        if (user.status == 1) {
          if (user != null) {
            const isMatch = await bcrypt.compare(password, user.password)
            if ((user.email === email) && isMatch) {

              // Generate JWT Token
              const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
              req.session.token = token;
              req.session.loggedin = true;
              // req.session.username = 'Hamza Ali';
              console.log(req.session.token);
              res.send({ "status": "success", "message": "Login Success", "token": token })
            } else {
              res.send({ "status": "failed", "message": "Email or Password is not Valid" })
            }
          } else {
            res.send({ "status": "failed", "message": "You are not a Registered User" })
          }
        }
        else {
          res.send({ "status": "failed", "message": "Please Verify Your Email." })
        }
      } else {
        res.send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to Login" })
    }
  }
  static mediaUpload = async (req, res) => {
    if (req.file) {
      const uniqueSuffix = Date.now() + '-' + req.file.originalname
      res.send({ "status": "success", "message": "profile Uploaded.", "profile": uniqueSuffix })
    }
    else {
      res.send({ "status": "failed", "message": "File Field are Required" })
    }
  }
  static changeUserPassword = async (req, res) => {
    const { password, password_confirmation } = req.body
    if (password && password_confirmation) {
      if (password !== password_confirmation) {
        res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
      } else {
        const salt = await bcrypt.genSalt(10)
        const newHashPassword = await bcrypt.hash(password, salt)
        await UserModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } })
        res.send({ "status": "success", "message": "Password changed succesfully" })
      }
    } else {
      res.send({ "status": "failed", "message": "All Fields are Required" })
    }
  }

  static loggedUser = async (req, res) => {
    res.send({ "user": req.user })
  }
  static home = async (req, res) => {
    res.send({ "status": " sucess", "message": "User redirect to main route." })
  }
  static sendUserPasswordResetEmail = async (req, res) => {
    const { email } = req.body
    if (email) {
      const user = await UserModel.findOne({ email: email })
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY
        const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
        const link = `${process.env.SITE_URL}/auth/new-password/${user._id}/${token}`
        console.log(link)
        // Send Email
        let info = await transporter.sendMail({
          from: 'Bill-Bio@gmail.com',
          to: user.email,
          subject: "BillBio - Password Reset Link",
          html: `<a href=${link}>Click Here</a> to Reset Your Password`
        })
        console.log('info')
        res.send({ "status": "success", "message": "Password Reset Emails Sent... Please Check Your Email" })
      } else {
        res.send({ "status": "failed", "message": "Email doesn't exists" })
      }
    } else {
      res.send({ "status": "failed", "message": "Email Field is Required" })
    }
  }
  static logout = async (req, res, err) => {
    console.log(req.session.loggedin);
    if (req.session.loggedin) {
      req.session.destroy((err) => {
        res.send({ "status": "sucess", "message": "logouts successfully." })
      });
    } else {
      res.send({ "status": "sucess", "message": "logout successfully." })
    }
  }

  static verifyEmail = async (req, res) => {
    const { id, token } = req.params
    const user = await UserModel.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
    if (user) {
      try {
        const checking = jwt.verify(token, process.env.JWT_SECRET_KEY)
        res.send({ "status": "success", "message": "valid Token" })

      } catch (error) {
        res.send({ "status": "failed", "message": "Invalid Token" })
      }
    }
    else {
      res.send({ "status": "failed", "message": "Verification Failed." })
    }
  }

  static getEmail = async (req, res) => {
    const { id, token } = req.params
    const user = await UserModel.findById(id)
    console.log(token)
    const new_secret = process.env.JWT_SECRET_KEY
    if (user) {
      res.send({ "status": "success", "message": "valid Token", "email": user.email })
      // try {
      //   const checking = jwt.verify(token, process.env.JWT_SECRET_KEY)
      //   res.send({ "status": "success", "message": "valid Token", "email": user.email })

      // } catch (error) {
      //   res.send({ "status": "success", "message": "valid Token", "email": user.email })
      // }
    }
    else {
      res.send({ "status": "failed", "message": "Verification Failed." })
    }
  }
  static verifyUserEmail = async (req, res) => {
    const { id, token } = req.params

    const user = await UserModel.findById(id)

    console.log(token)
    const new_secret = process.env.JWT_SECRET_KEY
    if (user) {
      await UserModel.findByIdAndUpdate(id, { $set: { status: 1 } })
      res.send({ "status": "success", "message": "Verified Email Successfully.", "id": id })
      // try {
      //   const checking = jwt.verify(token, process.env.JWT_SECRET_KEY)
      //   res.send({ "status": "success", "message": "valid Token", "email": user.email })

      // } catch (error) {
      //   res.send({ "status": "success", "message": "valid Token", "email": user.email })
      // }
    }
    else {
      res.send({ "status": "failed", "message": "Verification Failed." })
    }
  }
  static userPasswordReset = async (req, res) => {
    const { password, password_confirmation } = req.body
    const { id, token } = req.params
    const user = await UserModel.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
    try {
      jwt.verify(token, new_secret)
      if (password && password_confirmation) {
        if (password !== password_confirmation) {
          res.send({ "status": "failed", "message": "New Password and Confirm New Password doesn't match" })
        } else {
          const salt = await bcrypt.genSalt(10)
          const newHashPassword = await bcrypt.hash(password, salt)
          await UserModel.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } })
          res.send({ "status": "success", "message": "Password Reset Successfully" })
        }
      } else {
        res.send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Invalid Token" })
    }
  }
}

export default AuthController