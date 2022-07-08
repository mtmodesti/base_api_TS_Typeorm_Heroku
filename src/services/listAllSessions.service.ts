import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MedicalAppointment } from "../entity/MedicalAppointment";

const listAllSessionsService = async ():Promise<Response> => {

    const sessionsRepository = AppDataSource.getRepository(MedicalAppointment)
    const sessions =  await sessionsRepository.find({
        select: {
            date:true,
            id: true,
        },
        relations:{
            pacient: true
        }
    })

    if(!sessions){
        return {"msg":"Empty list"} as any
    }


    return sessions as any
}

export default listAllSessionsService