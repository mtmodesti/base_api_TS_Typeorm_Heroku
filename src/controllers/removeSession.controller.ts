import { Request, Response } from "express";
import removeSessionService from "../services/removeSession.service";

const removeSessionController = async (req:Request,res:Response) => {

    const {sessionId} = req.params

    

    const session = await removeSessionService({sessionId})


    return res.status(201).json(session)

}

export default removeSessionController