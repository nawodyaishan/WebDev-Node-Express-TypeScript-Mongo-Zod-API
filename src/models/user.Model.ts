import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import {promise} from "zod";


export interface UserDocument extends mongoose.Document {
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,

    comparePassword(candidatePassword: string): Promise<boolean>
}

const userSchema = new mongoose.Schema({
    // Defining User Schema
    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},


}, {
    timestamps: true,
});

userSchema.pre("save", async function (next) {
        let user = this as UserDocument

        if (!(user.isModified("password"))) {
            return next();
        }

        // Configure Salt
        const salt = await bcrypt.genSalt(config.get<number>(`saltWorkFactor`));

        // Hashing Password
        const hash = await bcrypt.hashSync(user.password, salt);
        user.password = hash;
    }
)

// Comparing User passwords
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this as UserDocument
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
}

// Creating User Model
const UserModel = mongoose.model("User", userSchema)

export default UserModel;



