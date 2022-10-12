import * as mongoose from "mongoose";
import config from "config";

function connect() {
    const dbUri = config.get<string>("dbUri");

    return mongoose.connect(dbUri)
        .then(() => {
        console.log("MongoDB Connection Successfully Initiated")
    })
        .catch(() => {
            console.log("MongoDB Connection Error")
        })
}