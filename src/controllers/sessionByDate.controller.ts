import { Request, Response } from "express";
import sessionsByDateService from "../services/sessionByDate.service";

const sessionByDateController = async (req:Request,res:Response) => {

    const {date} = req.body
    const sessions = await sessionsByDateService({date})
    return res.status(201).json(sessions)

}

export default sessionByDateController