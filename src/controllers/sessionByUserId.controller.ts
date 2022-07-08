import { Request, Response } from "express";
import sessionsByUserIdService from "../services/sessionByUserId.service";

const sessionByUserId = async (req:Request,res:Response) => {

    const {userId} = req.params

    const sessions = await sessionsByUserIdService({userId}as any)

    return res.status(200).json(sessions)

}

export default sessionByUserId