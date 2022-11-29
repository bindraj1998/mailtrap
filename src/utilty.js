
const transporter=require("./mail/mail")

const mailsend=async({from,to,subject,text,html,attachments,alternatives})=>{ await transporter.sendMail({
    from, 
    to, 
    subject, 
    text,
    html, 
    attachments,
    alternatives
  })}


  const varificationemail=({from,to,data,attachments,alternatives})=>{

     mailsend({
        from,
        to,
        attachments,
        alternatives,
        subject:` send varification email to ${data.first_name} ${data.last_name}`,
        text:"verify your email",
        html:`<h1>varification email to  ${data.first_name} ${data.last_name}</h1>  `
     })

  }

  const welcomeemail=({from,to,data,attachments,alternatives})=>{

    mailsend({
       from,
       to,
       attachments,
       alternatives,
       subject:`welcome email to ${data.first_name} ${data.last_name}`,
       text:`welcome email to ${data.first_name} ${data.last_name}`,
       html:`<h1>welcome to masai school ${data.first_name} ${data.last_name} </h1>`
    })

 }


  module.exports={mailsend,varificationemail,welcomeemail}