import { Request, Response, NextFunction } from 'express';
const { check, validationResult } = require('express-validator');

let validatorParams = [
  check('email_U').isEmail(),
  check('password_U').isLength({ min: 8, max: 15})
];

function validator(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

export {
  validatorParams,
  validator
};


