import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MedicalAppointment } from "../entity/MedicalAppointment";

const sessionsByUserIdService = async ({userId}:any):Promise<Response> => {

    try {
        
        const sessionsRepository = AppDataSource.getRepository(MedicalAppointment)
        
        const allSessions = await sessionsRepository.find(
            {
            relations:{
                pacient: true
                }
            })

        const sessions = allSessions.filter(session => 
        session.pacient.id == userId)

        if (sessions.length == 0){
            return {"msg":"No sessions found for this user Id"}as any
        }

        const formatedOutput = sessions.map(session =>  {
            return {
                sessionId: session.id,
                sessionDate: session.date.toLocaleDateString(),
                pacient: {
                    id: session.pacient.id,
                    name: session.pacient.name,
                    phone: session.pacient.phone
                     }
                }
            } )

            return formatedOutput as any

    } catch {
        return {"msg":"Internal server error"}as any
    }
}

export default sessionsByUserIdService