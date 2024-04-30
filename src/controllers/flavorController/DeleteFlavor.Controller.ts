import {Request,Response} from'express'
import { Delete } from '../../repository/flavorsRepository/DeleteFlavor.Repository';


export async function deleteFlavor(req: Request,res:Response): Promise<Response> {
   try {
    const id = req.params.flavorId;
    const result = await Delete(id)
    return res.status(200).json(result);
   } catch (error) {
    return res.status(500).json({
       error: 'Internal Server Error'
      });
   } 
};