import { Response, Request } from "express";
import bcrypt from 'bcrypt';
import { Auth } from "../../repository/authRepository/Auth.Repositosy";
import { createToken } from "../../helpers/GenerateToken/GenerateToken.Helper";
import { Id } from "../../repository/authRepository/validateId";

export async function authValidate(req: Request, res: Response){
    try {
        const { email_U, password_U } = req.body;

        const result: any = await Auth(email_U);

        if (result[0].length > 0) {
            
            const isPasswordValid = await bcrypt.compare(password_U, result[0][0].password_U);
  
            if(isPasswordValid){
                const id:any = await Id(email_U)
                const token = await createToken(id[0]);
                //guarda en cookies
                res.cookie('token1',token,{
                    httpOnly:true,
                });
                return res.status(200).json({ message: 'Successful authentication',
                token: token
                 });
            }else {
                return res.status(401).json({ error: 'Incorrect username or password' });
            }
        }
    } catch (error) {
        
            return res.status(500).json({ error: 'Internal Server Error' });
    }
}
