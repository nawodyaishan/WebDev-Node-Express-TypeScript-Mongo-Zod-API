import {DocumentDefinition} from "mongoose";
import UserModel, {UserDocument} from "../models/user.Model";


export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        return await UserModel.create(input);
    } catch (e: any) {
        throw new Error(e)
    }
}