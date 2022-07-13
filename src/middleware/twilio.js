require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const app_sid = process.env.TWILIO_APP_SERVICE_ID;
const client = require('twilio')(accountSid, authToken);

const confirmOTP = async (otp) => {
    return new Promise(function (resolve, reject) {
        client.verify.v2.services(app_sid)
            .verificationChecks
            .create({
                to: '+919355350111',
                code: otp
            })
            .then(verification_check => resolve(verification_check));
    })
}

const sendOTP = async (phone) => {
    return new Promise(function (resolve, reject) {
        client.verify.v2.services(app_sid)
            .verifications
            .create({
                to: phone,
                channel: 'sms'
            })
            .then(verification => resolve(verification));
    })
}

module.exports = {
    confirmOTP,
    sendOTP
}