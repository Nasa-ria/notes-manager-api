const mongoose = require("mongoose")
const NotesSchema =  new mongoose.Schema({
    title:{ type:String ,required:true    },
  content:{ type:String,required:true  },   
  user_id:{type: mongoose.Schema.Types.ObjectId, 
  ref: 'User', 
  required: true,}
})
module.exports = mongoose.model("Note",NotesSchema)