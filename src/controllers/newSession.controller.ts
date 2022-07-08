import { Request, Response } from "express";
import newSessionService from "../services/newSession.service";

const newSessionController = async (req:Request,res:Response) => {

        const {pacientId, date, time} = req.body

        const newSession = await newSessionService({pacientId, date, time}as any)


    return res.status(201).json(newSession)
}

export default newSessionController