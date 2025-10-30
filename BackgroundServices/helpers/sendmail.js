const nodemailer = require("nodemailer");
import { create } from './../../Backend/node_modules/@types/whatwg-url/lib/URLSearchParams.d';
import { configDotenv } from './../../Backend/node_modules/dotenv/lib/main.d';
const dotenv = require("dotenv");
dotenv.config();

function createTransporter(config) {
    const transporter = nodemailer.createTransport(config);
    return transporter;
}

let configurations={
    service:"gmail",
    host:"smtp.gmail.com",
    port:587,
    requireTLS:true,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
};
const sendMail=async(messageoption)=>{
    const transporter=await createTransporter(configurations);
    await transporter.verify();
    await transporter.sendMail(messageoption,(error,info)=>{
        if(err){
            console.log(error);
        }else{
            console.log(info);
        }
    });
}
module.exports=sendMail;