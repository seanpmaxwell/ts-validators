import express, { Request, Response } from 'express';

import { isNulBoolArr } from './validators';
import check from './express-checker';
import { isNumArr } from './validators';



console.log(isNulBoolArr([false, false, true]));


// Make check return type through check function
async function add(req: Request, res: Response) {
  const ids = check(req.body, 'ids', isNumArr);
  res.status(200).end();
}
