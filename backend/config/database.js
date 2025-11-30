// import mongoose from "mongoose";
// import { config } from "dotenv";

// config()

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGODB_URI)

//         console.log(`MongoDB Connected: ${conn.connection.host}`);
//         console.log(`Database: ${conn.connection.name}`);
//         return true
//     } catch (error) {
//         console.error('MongoDB connection error:', error.message)
//         process.exit(1)
//     }
// }

// export default connectDB
import mongoose from "mongoose";
import { config } from "dotenv";

config()

const connectDB = async () => {
    try {
        // MongoDB driver 4.0+ handles these automatically
        const conn = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`Database: ${conn.connection.name}`);
        return true
    } catch (error) {
        console.error('MongoDB connection error:', error.message)
        process.exit(1)
    }
}

export default connectDB