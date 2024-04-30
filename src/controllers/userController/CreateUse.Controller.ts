import { Request,Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../../interface/user.interface";
import { Create } from "../../repository/userRepository/CreateUser.Repository";
import { ValidateEmail } from "../../repository/userRepository/ValidateEmail.Repository";

export async function createUser(req: Request, res: Response) {
   try {
    const { email_U, password_U, Name_U, Phone_Number, Address } = req.body;

    //validar si el usuario existe 
    const existingUser = await ValidateEmail(email_U);
    if (existingUser) {
        return res.status(400).json({
            error: 'User already exists'
        });
    }
    
    const hashedPassword = await bcrypt.hash(password_U, 10);
    const newUser: User = {
        email_U,
         password_U:hashedPassword, 
         Name_U, 
         Phone_Number, 
         Address
    };
    await Create(newUser);
    return res.status(200).json({
        menssage: 'Successfully created user',
    });
   } catch (error) {
    return res.status(500).json({
        error:'Server internal error'
    })
   }
};
