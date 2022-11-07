import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


export interface UserDocument extends mongoose.Document {
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema({
    // Defining User Schema
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},


}, {
    timestamps: true,
});

// Creating User Model
const UserModel = mongoose.model("User", userSchema)

export default UserModel;



