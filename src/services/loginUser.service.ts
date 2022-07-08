import { Employee } from "../entity/Employee";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";



const userLoginService = async ({ userId, password }:any):Promise<Response> => {
  
  if (!userId || !password){
    return {"msg":"userId and password fields required"}as any
  }
  
  try {
    
    let bcrypt = require('bcryptjs')
    let jsonwebtoken = require ('jsonwebtoken')
    
    const repository = AppDataSource.getRepository(Employee)
    const user = await repository.findBy({
      id: userId
    });
    
    const token = jsonwebtoken.sign(
      {
        userId: userId,
        password: password,
      },
      "SECRET_KEY",
      {
        expiresIn: "24h",
        subject: user[0].name,
      }
      );
      
      let passMatch = await bcrypt.compare(password, user[0].hash_password)
      
      
      if (!passMatch){
        return 'userId or password invalid' as any
      }
      
      return token;
      
      

  } catch {
    return {"msg":"wrong email or password"} as any
  }


};
    

export default userLoginService;