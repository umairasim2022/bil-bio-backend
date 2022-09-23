import UserModel from '../models/User.js'
import DashboardModel from '../models/Dashboard.js'
import OptionModel from '../models/Option.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import transporter from '../config/emailConfig.js'


class AuthController {
  static updateCustomizeDashboard = async (req, res,next) => {
    console.log(req.params.optionid);
     const { coloum_name, coloum_type,coloum_value } = req.body
     if (coloum_name && coloum_type && coloum_value && req.params.optionid ) {
      const user = await OptionModel.findByIdAndUpdate(req.params.optionid, {
        coloum_name: coloum_name,
        coloum_type: coloum_type,
        coloum_value: coloum_value,
    }, {new: true});
      res.status(200).send({ "status": "success", "message": "Dashboard Data Updated." })
    }
    else {
      res.send({ "status": "failed", "message": "All fields are required" })
    }

  };
  static getDashboardValueByColoumName = async (req, res,next) => {
    const { coloum_name } = req.body
    if (coloum_name  && req.params.userid ) {
      const options = await OptionModel.find( {
        $and: [
           { coloum_name: 'social_links' } ,
           { _id: '63299f4bb4743f0223bb3034' } ,
        ]
     }
     
     );
      res.status(200).send({ "status": "success", "message": "Dashboard Data Updated.", "response": options })
    }
    else {
      res.send({ "status": "failed", "message": "All fields are required" })
    }

  };
  static getCustomizeDashboard = async (req, res,next) => {
    const { coloum_name, coloum_type } = req.body
    if (coloum_name && coloum_type && req.params.userid ) {
      const options = await OptionModel.find( {
        $and: [
           { coloum_name: 'social_links' } ,
           { coloum_type: 'fb' } ,
           { _id: '63299f4bb4743f0223bb3034' } ,
        ]
     }
     
     );
      res.status(200).send({ "status": "success", "message": "Dashboard Data Updated.", "response": options })
    }
    else {
      res.send({ "status": "failed", "message": "All fields are required" })
    }

  };
  static customizeDashboard = async (req, res,next) => {
    const { coloum_name, coloum_type,coloum_value } = req.body
    if (coloum_name && coloum_value && req.params.userid ) {
      const user = await UserModel.findOne({ _id: req.params.userid })
      const customize = new OptionModel({
        coloum_name: coloum_name,
        coloum_type: coloum_type,
        coloum_value: coloum_value,
        user: user._id
      })
      await customize.save()
      res.status(200).send({ "status": "success", "message": "Dashboard Data Updated." })
    }
    else {
      res.send({ "status": "failed", "message": "All fields are required" })
    }

  };

  static authCheck = async (req, res,next) => {
    if(req.session.loggedin){
      return next(); 
    }else{
      res.send({ "error": "failed", "message": "User Not Authenticated." })
    }
  };
  
  static userRegistration = async (req, res) => {
    const { name, email, password, password_confirmation, tc, status} = req.body
    
    const user = await UserModel.findOne({ email: email })
    if (user) {
      res.send({ "status": "failed", "message": "Email already exists" })
    } else {
      if (name && email && password && tc ) {
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
              status:'0'
            })
            await doc.save()
            const saved_user = await UserModel.findOne({ email: email })
            const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
            const link = `http://127.0.0.1:3000/api/user/verify_email/${saved_user._id}/${token}`
            let info = await transporter.sendMail({
              from: 'Bill-Bio@gmail.com',
              to: email,
              subject: "BillBio - Please Verify Email",
              html: `<a href=${link}>Click Here</a> to Verify.`
            })
           
            // Generate JWT Token
           
            res.status(201).send({ "status": "success", "message": "Registration Success", "token": token,"id":saved_user._id })
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
        console.log(user);
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
      } else {
        res.send({ "status": "failed", "message": "All Fields are Required" })
      }
    } catch (error) {
      console.log(error)
      res.send({ "status": "failed", "message": "Unable to Login" })
    }
  }
  static mediaUpload = async (req, res) => {
    if(req.file)
    {
    const uniqueSuffix = Date.now() + '-' + req.file.originalname
    res.send({ "status": "success", "message": "profile Uploaded." ,"profile": uniqueSuffix})
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
  static dashboard = async (req, res) => {
    res.send({ "status": "sucess", "message": "User is login" })
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
        const links = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
        const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
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
  static logout = async (req, res, err)=>{  
    console.log(req.session.loggedin);
    if(req.session.loggedin){
      req.session.destroy((err) => {
        res.send({ "status": "sucess", "message": "logouts successfully." })
      });
    }else{
      res.send({ "status": "sucess", "message": "logout successfully." })
    }
  }
  
  static verifyEmail = async (req, res) => {
    const { id, token } = req.params
    const user = await UserModel.findById(id)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
    if(user)
    {
      try {
        const checking=jwt.verify(token, process.env.JWT_SECRET_KEY)
        res.send({ "status": "success", "message": "valid Token" })
      
      } catch (error) {
        res.send({ "status": "failed", "message": "Invalid Token" })
      }
    }
    else{
      res.send({ "status": "failed", "message": "Verification Failed." })
    }
  }
  static getEmail = async (req, res) => {
    const { id, token } = req.params
    const user = await UserModel.findById(id)
    console.log(user.email)
    const new_secret = user._id + process.env.JWT_SECRET_KEY
    if(user)
    {
      try {
        const checking=jwt.verify(token, process.env.JWT_SECRET_KEY)
        res.send({ "status": "success", "message": "valid Token","email":user.email })
      
      } catch (error) {
        res.send({ "status": "failed", "message": "Invalid Token" })
      }
    }
    else{
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