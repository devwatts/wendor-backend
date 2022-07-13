const { Query } = require("../config/dbConnection")

const displayAllProducts = async(req,res) => {
    try{
        const data = await Query('select * from products');
        res.status(200).json({
        data:data
    })
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

module.exports = {
    displayAllProducts
}