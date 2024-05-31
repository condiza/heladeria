
import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

const validatorParamsR = [
    check('email_U').isEmail().withMessage('Invalid email format'),
    check('password_U').isLength({ min: 8, max: 15 }).withMessage('Password must be between 8 and 15 characters'),
    check('Name_U').isLength({ min: 1, max: 255 }).withMessage('Name must be between 1 and 255 characters'),
    check('Phone_Number').isLength({ min: 1, max: 255 }).withMessage('Phone Number must be between 1 and 255 characters')
  ];
  
function validatorR(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

export { validatorParamsR, validatorR };