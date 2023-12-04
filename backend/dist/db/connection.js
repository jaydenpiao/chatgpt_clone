import { connect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        throw new Error("Cannot connect to MongoDB");
    }
}
//# sourceMappingURL=connection.js.map