import * as mongoose from "mongoose";
import config from "config";

function connect() {
    const dbUri = config.get<string>("dbUri");

    // return mongoose.connect(dbUri)
    //     .then(() => {
    //     console.log("MongoDB Connection Successfully Initiated")
    // })
    //     .catch(() => {
    //         console.log("MongoDB Connection Error")
    //         process.exit(1)
    //     })
    try {
        await mongoose.connect(dbUri);
        console.log("MongoDB Connection Successfully Initiated")
    } catch (error) {
        console.log("MongoDB Connection Error")
        process.exit(1)
    }
}