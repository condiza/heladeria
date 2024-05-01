import {Request,Response} from'express'
import { Gets } from '../../repository/flavorsRepository/GetFlavors.Repository';
import { Existences } from '../../helpers/validateExisences/Existences.Helper';

export async function getFlavors(req: Request, res:Response): Promise<Response> {
    try {
      const flavors = await Gets();
      await Existences(flavors)
      return res.json(flavors);
    } catch (error:any) {
      return res.status(500).json({
          error:error.message,
      });
    }
  };