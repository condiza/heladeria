import { connect } from "../../config/database";
import { User } from "../../interface/user.interface";

export async function ValidateEmail(email_U: string){
  try {
    const conn = await connect();
    const [user] = await conn.query('SELECT * FROM Users WHERE email_U = ?', [email_U]);

    const userAsArray = user as User[];

    if (userAsArray && userAsArray.length > 0) {
      return userAsArray[0]; 
    }

    return null; 
  } catch (error) {
    console.error('Error while validating email:', error);
    throw error;
  }
}
