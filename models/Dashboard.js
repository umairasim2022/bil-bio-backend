import mongoose from "mongoose";

// Defining Schema
const dashboardSchema = new mongoose.Schema({
  backgrond_image: { type: String, required: true, trim: true },
  colors: { type: String, required: true, trim: true },
  user : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  
})

// Model
const DashboardModel = mongoose.model("dashboard", dashboardSchema)

export default DashboardModel