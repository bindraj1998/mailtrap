

const express=require("express")
const nodemailer = require("nodemailer");
const path=require("path")

const router=express.Router()
const User=require("../model/model")
const {varificationemail,welcomeemail}=require("../utilty")

const EventEmitter=require("events")
const eventemitter=new EventEmitter()


router.get("",async(req,res)=>{
    const pa=req.query.page || 1
    const lim=req.query.limit || 15
    try{
       
        const pagelimit= await User.find().skip((pa-1)*lim).limit(lim).lean().exec()
        const data=await User.find().lean().exec()
        let totalpage=Math.ceil(data.length/lim)
        return res.send({pagelimit,totalpage})

    }catch(err){


        return res.status(500).send(err.message)
    }
})


router.post("",async (req,res)=>{


    try{
        // console.log(path.join(__dirname,"../raj.txt") )
 
        const data=await User.create(req.body)
        
         
        //  await mailsend({

        //      from:"masai@gmailcom",
        //      to:data.email,
        //      subject:"welcome to masai school",
        //      text:"hello masai",
        //      html:"<h1>welcome to jungle</h1>"

        //  }
        //  )
        
          
        eventemitter.on("sendemail",varificationemail)

        eventemitter.on("sendemail",welcomeemail)
        eventemitter.emit("sendemail",{from :"masaischol@.com",to:data.email,data:data,attachments:[{ 
            filename: 'name.txt',
            path: path.join(__dirname,"../raj.txt")  
        }],

        alternatives: [
            {
                contentType: 'text/html',
                path: path.join(__dirname,"../name.html") 
            }
        ]
    })
        
        
      
        

       
       
       
        return res.send("mailsend")

    }catch(err){


        return res.status(500).send(err.message)
    }

})


module.exports=router
