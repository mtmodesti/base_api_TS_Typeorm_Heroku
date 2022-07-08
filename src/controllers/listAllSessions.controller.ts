import { Request, Response } from "express";
import listAllSessionsService from "../services/listAllSessions.service";

const listAllSessionsController = async (req:Request,res:Response) => {

    const allSessions = await listAllSessionsService()

    return res.status(201).json(allSessions)

}

export default listAllSessionsController