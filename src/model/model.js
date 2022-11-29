const mongoose=require("mongoose")

const userShema=new mongoose.Schema({

      "id":{type:String,required:true},
      "first_name":{type:String,required:true},
      "last_name":{type:String,required:true},
      "email":{type:String,required:true},
      "gender":{type:String,required:false,default:"male"},
      "age":{type:Number,required:true},
      "ip_address":{type:String,required:false}

},{versionKey:false,timestamps:true})

const user=mongoose.model("user",userShema)

module.exports=user