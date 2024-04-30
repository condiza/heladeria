import { Response, Request } from "express";
import bcrypt from 'bcrypt';
import { Auth } from "../../repository/authRepository/Auth.Repositosy";
import { createToken } from "../../middleware/GenerateToken/GenerateToken";

export async function authValidate(req: Request, res: Response): Promise<Response> {
    try {
        const { email_U, password_U } = req.body;

        const result: any = await Auth(email_U);

        if (result[0].length > 0) {
            
            const isPasswordValid = await bcrypt.compare(password_U, result[0][0].password_U);
  
            if(isPasswordValid && email_U == 'jefferdcondiza@gmail.com'){
                const token = await createToken(email_U);
                return res.status(200).json({ message: 'Successful authentication',
                token: token
                 });
            }else if (isPasswordValid) {
                return res.status(200).json({ message: 'Successful authentication',
                 });
            }else {
                return res.status(401).json({ error: 'Incorrect username or password' });
            }
        } else {
            return res.status(401).json({ error: 'Incorrect username or password' });
        }

    } catch (error) {
        
            return res.status(500).json({ error: 'Internal Server Error' });
    }
}
