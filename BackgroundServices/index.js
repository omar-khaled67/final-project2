const express=require("express");
const app=express();
const dotenv=require("dotenv");
const cron = require('node-cron');
const dbConnection = require("./utils/db");
const { send } = require("vite");
const {sendDetailsProspectEmail}=require('./EmailServices/sendDetailsProspect');
const {sendEligibilityEmail}=require('./EmailServices/sendEligibilityEmail');
const {sendBloodDonationReminder}=require('./EmailServices/sendBloodDonationReminder');
const {sendDetailsDonorEmail}=require('./EmailServices/sendDonorDetailsEmail');
dotenv.config();


//server
const PORT = process.env.PORT;

const run=()=>{
    cron.schedule('* * * * * *', () => {
 
        sendDetailsProspectEmail();
        sendEligibilityEmail();
        sendBloodDonationReminder();
        sendDetailsDonorEmail();
});
}
run();


app.listen(PORT,()=>{
    console.log(`Background Services is running on port ${PORT}`);
    dbConnection();
});


