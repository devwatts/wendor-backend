require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const app_sid = process.env.TWILIO_APP_SERVICE_ID;
const client = require('twilio')(accountSid, authToken);

const confirmOTP = async (phone,otp) => {
    return new Promise(function (resolve, reject) {
        try {
            client.verify.v2.services(app_sid)
                .verificationChecks
                .create({
                    to: phone,
                    code: otp
                })
                .then(verification_check => {
                    console.log(verification_check)
                    resolve(verification_check)
                });
        } catch (err) {
            reject('An Error occurred', err);
        }
    })
}

const sendOTP = async (phone) => {
    return new Promise(function (resolve, reject) {
        try {
            client.verify.v2.services(app_sid)
                .verifications
                .create({
                    to: phone,
                    channel: 'whatsapp'
                })
                .then(verification => resolve(verification));
        } catch (err) {
            reject('An Error occurred', err);
        }
    })
}

module.exports = {
    confirmOTP,
    sendOTP
}