import { Request, Response } from "express";
import listAllPacientsService from "../services/listAllPacients";

const listAllPacientController = async (req:Request,res:Response) => {

    const allPacients = await listAllPacientsService()

    return res.status(201).json(allPacients)

}

export default listAllPacientController