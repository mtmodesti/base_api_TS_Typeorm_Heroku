import { Request, Response } from "express";
import newPacientService from "../services/newPacient.service";


const newPacientController = async (req:Request,res:Response) => {

    const {name, phone} = req.body

    const newPacient = await newPacientService({phone,name}as any)


    return res.status(201).json(newPacient)

    

}

export default newPacientController