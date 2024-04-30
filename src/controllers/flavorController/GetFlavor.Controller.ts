import {Request,Response} from'express'
import { Get } from '../../repository/flavorsRepository/GetFlavor.Repository';
import { Existences } from '../../helpers/validateExisences/Existences.helper';




export async function getFlavor (req:Request,res:Response): Promise<Response>{
try {
  const id = req.params.flavorId;
  const flavors = await Get(id);
  await Existences(flavors)
    return res.json(flavors);
  
} catch (error:any) {
  return res.status(500).json({
    error: error.message
  })
}
};