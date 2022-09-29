import mongoose from "mongoose";

// Defining Schema
const optionSchema = new mongoose.Schema({
  coloum_name: { type: String, required: true, trim: true },
  coloum_type: { type: String, required: true, trim: true },
  coloum_value: { type: String, required: true, trim: true },
  user : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  link_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Link' },
  
})

// Model
const OptionModel = mongoose.model("option", optionSchema)

export default OptionModel