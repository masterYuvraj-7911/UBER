const mongoose = require("mongoose");

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected Bro...");
    }
    catch(err){
        console.error("In Connect DB",err)
        process.exit(1);
    }
}

module.exports = connectDB;