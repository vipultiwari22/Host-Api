const connectDB = require("./db/connect");
const productmodel = require("./models/product");
require("dotenv").config();

const productJson = require("./productdata.json")



const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await productmodel.deleteMany();
        await productmodel.create(productJson);
        console.log("successfully Data Added in Database");
    } catch (error) {
        console.log(error);
    }
}

start();