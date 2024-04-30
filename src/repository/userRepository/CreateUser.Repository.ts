import { connect } from "../../config/database";
import { User } from "../../interface/user.interface";

export async function Create(newUser: User) {
    try {
        const conn = await connect();
        await conn.query('INSERT INTO Users SET ?',[newUser]);
    } catch (error) {
        console.error('error when creating user',error);
        throw error
    }
}