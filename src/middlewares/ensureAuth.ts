import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export default function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {


  try {


  const verify = require('jsonwebtoken')

  const authHeader = request.headers.authorization;
  
  const token = authHeader?.split(" ")[1];

  const secret = process.env.SECRET_KEY || "SECRET_KEY";

  const decoded = verify.verify(token,secret)

  const { sub } = decoded;


  return next();


  }  catch {
    return response.status(201).json('Missing or wrong token')
  }

}

//   try {
//     const [, token] = authHeader.split(" ");

//     const secret = process.env.SECRET_KEY || "SECRET_KEY";

//     const decoded = verify(token, secret);

//     const { sub } = decoded;

//     request.body = {
//       id: sub as string,
//     };

    
//     
//   } catch (err) {
//     throw new AppError("Token inválido");
//   }
// }