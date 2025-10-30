const ejs=require('ejs');
const dotenv=require('dotenv');
const Prospect=require('../Models/Prospect');
const sendMail=require('../helpers/sendMail');

dotenv.config();

const sendDetailsProspectEmail= async()=>{

    const prospects=await Prospect.find({statuse:0});
    if(prospects.length>0){
        for(let Prospect of prospects){
            ejs.renderFile("templates/BloodDonationProspect.ejs",
                {name:Prospect.name},
                async (err, data)=> {
                    let messageoption={
                        from:process.env.EMAIL,
                        to:Prospect.email,
                        subject:"Blood Donation Prospect Details",
                        html:data
                    };
                    try{
                        sendMail(messageoption);
                        await Prospect.findByIdAndUpdate(Prospect._id,{$set:{statuse:1}});
                    }
                    catch(error){
                        console.log(error);
                    }

            });
        }
    }
};
module.exports={sendDetailsProspectEmail};

    