const { Query } = require("../config/dbConnection")
const jwt = require('jsonwebtoken');

const displayAllProducts = async(req,res) => {
    try{
        const data = await Query('select * from products');
        res.status(200).json({
        data:data
    })
    }catch(err){
        res.status(200).json({
            error:err,
            status:false
        })
    }
}


module.exports = {
    displayAllProducts
}