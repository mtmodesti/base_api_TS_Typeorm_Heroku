import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MedicalAppointment } from "../entity/MedicalAppointment";

const removeSessionService = async ({sessionId}:any):Promise<Response> => {

    try {
        const sessionsRepository = AppDataSource.getRepository(MedicalAppointment)
        const session =  await sessionsRepository.findBy({
            id: sessionId
        })
    
        if (session.length == 0){
            return {"msg":"No session found with this id"} as any
        }


        await sessionsRepository.delete(sessionId)
        return {
            msg:"Session deleted with success", 
            session}as any

    } catch {
        return {"msg":"There is no session with this id"}as any
    }

}

export default removeSessionService