import mongoose from "mongoose";

const answerSchema=new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
      },
      fesc: {
        type: String,
        required: true
      },
      besc: {
        type: String,
        required: true
      },
      fedc: {
        type: String,
        required: true
      },
      bedc: {
        type: String,
        required: true
      },
      
      date: {
        type: Date,
        default: Date.now
      }
})

export default mongoose.model("Answer",answerSchema)