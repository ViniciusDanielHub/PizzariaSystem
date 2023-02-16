import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub:string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  
  //receber token
  const authToken = req.headers.authorization;

  //se nao tiver nenhum token ele da erro
  if(!authToken){
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ")

    try{
      const { sub } = verify(
        token,
        process.env.JWT_SECRET
      ) as Payload;

      return next()
      
    }catch(err){
      return res.status(401).end();
   }

}