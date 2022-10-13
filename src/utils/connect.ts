import * as mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
    const dbUri = config.get<string>("dbUri");
    try {
        await mongoose.connect(dbUri);
        logger.info("MongoDB Connection Successfully Initiated");
    } catch (error) {
        logger.error("MongoDB Connection Error");
        process.exit(1);
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

export default connect()