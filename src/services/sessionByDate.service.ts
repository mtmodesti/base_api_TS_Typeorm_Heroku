import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pacient } from "../entity/Pacient";
import { MedicalAppointment } from "../entity/MedicalAppointment";

const sessionsByDateService = async ({date}:any):Promise<Response> => {

    try {
        const validationDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        const isValid = date.match(validationDate)
        if (!date || !isValid){
            return {"msg":"missing/wrong date field"}as any
        }

        const sessionsRepository = AppDataSource.getRepository(MedicalAppointment)
        const sessions = await sessionsRepository.find({
            relations:{
                pacient: true
            }
        })

        const dateSearch = new Date(date)
        const day = dateSearch.getDate()
        const month = dateSearch.getMonth()
        const year = dateSearch.getFullYear()
        const fullDate = `${day}/${month}/${year}`
        
        
        
        
        let sessionsDated = sessions.filter(x => {
            
            const day = x.date.getDate()
            const month = x.date.getMonth()
            const year = x.date.getFullYear()
            const date = `${day}/${month}/${year}`
            
            return date == fullDate
        }
        )

        if (sessionsDated.length == 0){
            return {"msg":"No sessions in this date"}as any
        }

        

            return sessionsDated as any
    } catch {
        return {msg:"Internal server error"}as any

    }
}

export default sessionsByDateService