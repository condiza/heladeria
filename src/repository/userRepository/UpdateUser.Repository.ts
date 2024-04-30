import { connect } from "../../config/database";
import { User } from "../../interface/user.interface";

export async function Update(id:string,updateUser:User) {
    try {
        const conn = await connect();
        return await conn.query('UPDATE Users SET ? WHERE Id_User = ?',[updateUser,id]);
    } catch (error) {
        console.error('Error update user',error);
    }
}