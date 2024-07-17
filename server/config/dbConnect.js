import mongoose from "mongoose";

const connectMongoDb = async()=>{
    try {
        const con = mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb connected : ${(await con).connection.host}`);
    } catch (error) {
        console.log(`Error while connecting mongodb : ${error.message}`);
        process.exit(1)
    }
}

export default connectMongoDb