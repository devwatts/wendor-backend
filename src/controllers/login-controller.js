const { sendOTP,confirmOTP } = require("../middleware/twilio");

const Login = async(req,res) => {
    console.log(req.body)
}

module.exports = {
    Login
};