import UserModel from "../models/User.js";
import DashboardModel from "../models/Dashboard.js";
import OptionModel from "../models/Option.js";
import LinkModel from "../models/Link.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/emailConfig.js";

class DashboardController {
  static getLinkWithTag = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    if (user) {
      try {
        const checking = jwt.verify(
          req.params.token,
          process.env.JWT_SECRET_KEY
        );
        const { id, tag } = req.body;
        //console.log(tag)
        if (req.params.userid && id && tag) {
          const link = await LinkModel.find({
            $and: [{ _id: id }, { tag: tag }, { user: req.params.userid }],
          });
          res.status(200).send({
            status: "success",
            message: "Customize Tag Link.",
            response: link,
          });
        } else {
          res.send({ status: "failed", message: "Verification Failed." });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Invalid Token" });
      }
    } else {
      res.send({ status: "failed", message: "User Not Exist" });
    }
  };
  static getLink = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    if (user) {
      try {
        const checking = jwt.verify(
          req.params.token,
          process.env.JWT_SECRET_KEY
        );
        const { id } = req.body;
        //console.log(tag)
        if (req.params.userid && id) {
          const link = await LinkModel.find({
            $and: [{ _id: id }, { tag: "main" }, { user: req.params.userid }],
          });
          res.status(200).send({
            status: "success",
            message: "Customize Tag Link.",
            response: link,
          });
        } else {
          res.send({ status: "failed", message: "Verification Failed." });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Invalid Token" });
      }
    } else {
      res.send({ status: "failed", message: "User Not Exist" });
    }
  };
  static createLink = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    if (user) {
      try {
        const checking = jwt.verify(
          req.params.token,
          process.env.JWT_SECRET_KEY
        );
        const { tag, link } = req.body;
        if (tag && link) {
          const doc = new LinkModel({
            tag: tag,
            link: link,
            user: user._id,
          });
          await doc.save();
          res
            .status(200)
            .send({ status: "success", message: "Link Created Successfully." });
        } else {
          res.send({ status: "failed", message: "All fields are required" });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Invalid Token" });
      }
    } else {
      res.send({ status: "failed", message: "User Not Exist" });
    }
  };
  static updateCustomizeDashboard = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    if (user) {
      try {
        const checking = jwt.verify(
          req.params.token,
          process.env.JWT_SECRET_KEY
        );
        const { coloum_name, coloum_type, coloum_value } = req.body;
        if (coloum_name && coloum_type && coloum_value && req.params.optionid) {
          const user = await OptionModel.findByIdAndUpdate(
            req.params.optionid,
            {
              coloum_name: coloum_name,
              coloum_type: coloum_type,
              coloum_value: coloum_value,
            },
            { new: true }
          );
          res
            .status(200)
            .send({ status: "success", message: "Dashboard Data Updated." });
        } else {
          res.send({ status: "failed", message: "All fields are required" });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Invalid Token" });
      }
    } else {
      res.send({ status: "failed", message: "User Not Exist" });
    }
  };
  static getDashboardValueByColoumName = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    if (user) {
      try {
        const checking = jwt.verify(
          req.params.token,
          process.env.JWT_SECRET_KEY
        );
        const { coloum_name } = req.body;
        if (coloum_name && req.params.userid) {
          const options = await OptionModel.find({
            $and: [
              { coloum_name: "social_links" },
              { _id: "63299f4bb4743f0223bb3034" },
            ],
          });
          res.status(200).send({
            status: "success",
            message: "Dashboard Data Updated.",
            response: options,
          });
        } else {
          res.send({ status: "failed", message: "All fields are required" });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Invalid Token" });
      }
    } else {
      res.send({ status: "failed", message: "User Not Exist" });
    }
  };
  static getCustomizeDashboard = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    if (user) {
      try {
        const checking = jwt.verify(
          req.params.token,
          process.env.JWT_SECRET_KEY
        );
        const { coloum_name, coloum_type, link_id } = req.body;
        if (coloum_name && coloum_type && req.params.userid) {
          const options = await OptionModel.find({
            $and: [
              { coloum_name: coloum_name },
              { coloum_type: coloum_type },
              { link_id: link_id },
            ],
          });
          res.status(200).send({
            status: "success",
            message: "Customize Dashboard Data.",
            response: options,
          });
        } else {
          res.send({ status: "failed", message: "All fields are required" });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Invalid Token" });
      }
    } else {
      res.send({ status: "failed", message: "User Not Exist" });
    }
  };
  static customizeDashboard = async (req, res, next) => {
    const user = await UserModel.findById(req.params.userid);
    if (user) {
      try {
        const checking = jwt.verify(
          req.params.token,
          process.env.JWT_SECRET_KEY
        );
        const { coloum_name, coloum_type, coloum_value, link_id } = req.body;
        if (coloum_name && coloum_value && req.params.userid) {
          // const user = await UserModel.findOne({ _id: req.params.userid });
          const link = await LinkModel.findOne({ _id: link_id });
          if (link) {
            const customize = new OptionModel({
              coloum_name: coloum_name,
              coloum_type: coloum_type,
              coloum_value: coloum_value,
              user: user._id,
              link_id: link._id,
            });
            await customize.save();
            res
              .status(200)
              .send({ status: "success", message: "Dashboard Data Inserted." });
          } else {
            res.send({ status: "failed", message: "Data Not Found." });
          }
        } else {
          res.send({ status: "failed", message: "All fields are required" });
        }
      } catch (error) {
        res.send({ status: "failed", message: "Invalid Token" });
      }
    } else {
      res.send({ status: "failed", message: "User Not Exist" });
    }
  };

  static authCheck = async (req, res, next) => {
    if (req.session.loggedin) {
      return next();
    } else {
      res.send({ error: "failed", message: "User Not Authenticated." });
    }
  };

  static mediaUpload = async (req, res) => {
    if (req.file) {
      const uniqueSuffix = Date.now() + "-" + req.file.originalname;
      res.send({
        status: "success",
        message: "profile Uploaded.",
        profile: uniqueSuffix,
      });
    } else {
      res.send({ status: "failed", message: "File Field are Required" });
    }
  };
  static dashboard = async (req, res) => {
    res.send({ status: "sucess", message: "User is login" });
  };
  static home = async (req, res) => {
    res.send({ status: " sucess", message: "User redirect to main route." });
  };
  static sendUserPasswordResetEmail = async (req, res) => {
    const { email } = req.body;
    if (email) {
      const user = await UserModel.findOne({ email: email });
      if (user) {
        const secret = user._id + process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ userID: user._id }, secret, {
          expiresIn: "15m",
        });
        const link = `${process.env.SITE_URL}/auth/new-password/${user._id}/${token}`;
        console.log(link);
        // Send Email
        let info = await transporter.sendMail({
          from: "Bill-Bio@gmail.com",
          to: user.email,
          subject: "BillBio - Password Reset Link",
          html: `<a href=${link}>Click Here</a> to Reset Your Password`,
        });
        console.log("info");
        res.send({
          status: "success",
          message: "Password Reset Emails Sent... Please Check Your Email",
        });
      } else {
        res.send({ status: "failed", message: "Email doesn't exists" });
      }
    } else {
      res.send({ status: "failed", message: "Email Field is Required" });
    }
  };
}

export default DashboardController;
