const { Query } = require("../config/dbConnection")

const displayAllProducts = async(req,res) => {
    const data = await Query('select * from products');
    res.status(200).json({
        data:data
    })
}

module.exports = {
    displayAllProducts
}