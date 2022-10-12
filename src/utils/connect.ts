import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>("dbUri");
    try {
        await mongoose.connect(dbUri);
        console.log("MongoDB Connection Successfully Initiated")
    } catch (error) {
        console.log("MongoDB Connection Error")
        process.exit(1)
    }

    // return mongoose.connect(dbUri)
    //     .then(() => {
    //     console.log("MongoDB Connection Successfully Initiated")
    // })
    //     .catch(() => {
    //         console.log("MongoDB Connection Error")
    //         process.exit(1)
    //     })
}