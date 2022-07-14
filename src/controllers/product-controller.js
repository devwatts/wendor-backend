const { Query } = require("../config/dbConnection")
const jwt = require('jsonwebtoken');
const { response } = require("express");

const displayAllProducts = async(req,res) => {
    try{
        const data = await Query('select * from products');
        res.status(200).json({
        data:data.rows
    })
    }catch(err){
        res.status(200).json({
            error:err,
            status:false
        })
    }
}

const addNewProduct = async(req,res) => {
    //console.log(req.token,req.body);
    const {title,sell_price,act_price,image_url} = req.body;
    if(image_url == ''){
        image_url = 'https://www.yiwubazaar.com/resources/assets/images/default-product.jpg';
    }
    try{
            const verified_user = await jwt.verify(req.token,process.env.JWT_SECRET)
            if(verified_user.phone.length == 13){
                const data = await Query(`insert into products (title,sell_price,act_price,image_url,_user) values ('${title}',${sell_price},${act_price},'${image_url}','${verified_user.phone}')`);
                res.status(200).json({
                data:data
                })
            }
    }catch(err){
        res.status(500).json({
            error:err,
            message:"Internal Server Error"
        })
    }
}

const deleteProduct = async(req,res) =>{
    //console.log(req.token,req.body);
    const {id} = req.body;
    try{
            const verified_user = await jwt.verify(req.token,process.env.JWT_SECRET)
            //console.log(verified_user);
            if(verified_user.phone.length == 13){
                const data = await Query(`delete from products where "_id" = ${id}`);
                res.status(200).json({
                    status:true
                })
            }
    }catch(err){
        res.status(500).json({
            error:err,
            message:"Internal Server Error",
            status:false
        })
    }
}

module.exports = {
    displayAllProducts,
    addNewProduct,
    deleteProduct
}