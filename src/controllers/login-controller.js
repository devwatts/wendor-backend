const { sendOTP,confirmOTP } = require("../middleware/twilio");
const jwt = require('jsonwebtoken');

const Login = async(req,res) => {
    const phone_num = req.body.phone_num;
    try{
        // const verified_user = jwt.verify(token, 'mySecretBoi');
        // console.log(verified_user)
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
        res.status(500).json({
            error:"Internal Server Error",
            message:"Some issue with the number"
        })
    }
}

const confirmLogin = async(req,res) => {
    const phone_num = req.body.phone_num;
    const otp = req.body.otp;
    try{
        await confirmOTP(phone_num,otp)
        .then(response => {
            if(response.status == 'approved'){
                let token = jwt.sign({ phone: phone_num }, process.env.JWT_SECRET);
                res.status(200).json({
                    error:"",
                    loggedUser:{
                        user:phone_num,
                        token:token
                    },
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

const verifyToken = async(req,res) => {
    //console.log(req.body)
    try{
        let verification_check = jwt.verify(req.body.token, process.env.JWT_SECRET);
        if(verification_check.phone == req.body.phone_num){
            res.status(200).json({
                error:"",
                status:true,
                user:verification_check.phone
            })
        }
    }catch(err){
        console.log(err);
        res.status(200).json({
            error:"",
            status:false,
            message:err
        })
    }
}
module.exports = {
    Login,
    confirmLogin,
    verifyToken
};