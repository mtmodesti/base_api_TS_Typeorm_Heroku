import { Request, Response } from "express";
import userLoginService from "../services/loginUser.service";


const userLoginController = async (req:Request,res:Response) => {
    const {userId,password} = req.body
    
    const isAuthenticated = await userLoginService({userId,password}as any)
    
    return res.status(201).json(isAuthenticated)
}

export default userLoginController