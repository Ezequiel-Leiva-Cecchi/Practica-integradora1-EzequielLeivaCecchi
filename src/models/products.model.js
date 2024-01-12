import mongoose from "mongoose";
 
const productsCollection = 'products';

const productsSchema = mongoose.Schema({
    name:{
        type:String,
        unique: true
    } ,
    description:{
       type: String,
       unique: true
    },
    price:{
        type: parseFloat,
        require: true
    },
    stock:{
        type:String,
        require: true
    },
    category:{
        type:String
    }
});

export const productsModel = mongoose.model(productsCollection, productsSchema)