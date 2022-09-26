import mongoose from "mongoose";

// Defining Schema
const linkSchema = new mongoose.Schema({
  tag: { type: String, required: true, trim: true },
  link: { type: String, required: true, trim: true },
  user : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  
})

// Model
const LinkModel = mongoose.model("link", linkSchema)

export default LinkModel
