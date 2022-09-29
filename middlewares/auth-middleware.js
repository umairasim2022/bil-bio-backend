import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

var checkUserAuth = async (req, res, next) => {
  console.log(req.session);
  if(req.session.loggedin){
    res.status(200).send({ "status": "success", "message": "authorized User,  Token" })
    //return next(); 
  }else{
    res.status(401).send({ "failed": "failed", "message": "unauthorized User,  Token" })
  }
}

export default checkUserAuth