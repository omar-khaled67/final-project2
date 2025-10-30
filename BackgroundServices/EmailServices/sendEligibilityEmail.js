const ejs = require('ejs');
const dotenv = require('dotenv');
const Prospect = require('../Models/Prospect');
const sendMail = require('../helpers/sendMail');

dotenv.config();

const sendEligibilityEmail = async () => {
    const prospects = await Prospect.find({ status: 0 });
    if (prospects.length > 0) {
        for (let Prospect of prospects) {
            if (Prospect.age >= 18 || Prospect.weight >= 50) {
                ejs.renderFile("templates/EligibilityEmail.ejs",
                    { name: Prospect.name, age: Prospect.age, weight: Prospect.weight },
                    async (err, data) => {
                        let messageoption = {
                            from: process.env.EMAIL,
                            to: Prospect.email,
                            subject: "Blood Donation Prospect Details",
                            html: data
                        };
                        try {
                            await Prospect.findByIdAndUpdate(Prospect._id);
                            sendMail(messageoption);
                        }
                        catch (error) {
                            console.log(error);
                        }
                    });
            }
        }
    }

}
module.exports = { sendEligibilityEmail };