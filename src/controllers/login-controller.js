const { sendOTP,confirmOTP } = require("../middleware/twilio");

const Login = async(req,res) => {
    const phone_num = req.body.phone_num;
    try{
        await sendOTP(phone_num)
        .then(response => {
            console.log(response)
            if(response.status == 'pending'){
                res.status(200).json({
                    error:"",
                    message:"OTP sent successfully"
                })
            }else{
                res.status(500).json({
                    error:"Internal Server Error",
                    message:"Some issue with the number"
                })
            }
        })
    }catch(err){
        console.log(err);
    }
}

const confirmLogin = async(req,res) => {
    const phone_num = req.body.phone_num;
    const otp = req.body.otp;
    try{
        await confirmOTP(phone_num,otp)
        .then(response => {
            if(response.status == 'approved'){
                res.status(200).json({
                    error:"",
                    message:"Login Confirmed"
                })
            }else{
                res.status(200).json({
                    error:"",
                    message:"Wrong OTP"
                })
            }
        })
    }catch(err){
        console.log(err);
    }
}
module.exports = {
    Login,
    confirmLogin
};