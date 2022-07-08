import { Request, Response } from "express";
import listAllEmpoyeesService from "../services/listAllEmployess.service";

const listAllEmployees = async (req:Request,res:Response) => {

    const allEmpoyees = await listAllEmpoyeesService()

    return res.status(201).json(allEmpoyees)

}

export default listAllEmployees