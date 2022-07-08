import { Request, Response } from "express";
import updateSessionService from "../services/updateSession.service";



const updateSessionController = async (req:Request,res:Response) => {

    const {sessionId, date,time} = req.body


    const updatedSession = await updateSessionService({sessionId, date,time})


    return res.status(201).json({
        "msg":"Status of your update request",
        updatedSession})
}

export default updateSessionController