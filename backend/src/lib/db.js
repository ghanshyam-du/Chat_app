import mongoose from 'mongoose';

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error("Error in connecting to MongoDb", error)
        process.exit(1); // Exit process with failure
        
    }
}