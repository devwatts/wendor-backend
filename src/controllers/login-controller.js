const { sendOTP,confirmOTP } = require("../middleware/twilio");

const Login = async(req,res) => {
    res.status(200).json({
        body:req.body
    })
}

module.exports = {
    Login
};