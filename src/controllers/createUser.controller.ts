import createUserService from "../services/createUser.service";
import express, { Request, Response } from "express";


const createUserController = async (request:Request,response:Response) => {
    const {name, password} = request.body
   
    const newEmployee = await createUserService({name, password})
    
    return response.status(201).json(newEmployee)
} 

export default createUserController 