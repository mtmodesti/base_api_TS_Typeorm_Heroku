import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Pacient } from "../entity/Pacient";
import { MedicalAppointment } from "../entity/MedicalAppointment";


const updateSessionService = async ({sessionId, date, time}:any):Promise<Response> => {

     if (!sessionId || !date || !time ){
         return {"msg":"sessionId, date and time fields required"}as any
     }
    try {
        const sessionsRepository = AppDataSource.getRepository(MedicalAppointment)
        const session =  await sessionsRepository.findBy({
            id: sessionId
        })

    //data atual
    const data = new Date();
    const today = String(data.getDate()).padStart(2, '0');
    const thisMonth = String(data.getMonth() + 1).padStart(2, '0');
    const thisYear = data.getFullYear();
    //data sessão
    const day = date.replaceAll('/',' ').split(' ')[0]
    const month = date.replaceAll('/',' ').split(' ')[1]
    const year = date.replaceAll('/',' ').split(' ')[2]
    const hour = time.replace(':',' ').split(' ')[0]
    const min = time.replace(':',' ').split(' ')[1]

    const actualDate   = new Date(`${today}/${thisMonth}/${thisYear}`)
    const sessionDates = new Date(`${day}/${month}/${year}`)

    if (hour < 8 || hour > 17 || !(actualDate < sessionDates)){
        return {"msg": "Time not available"} as any;
    }

    session[0].date = new Date(`${year}-${month}-${day}T${hour}:${min}:00`);
    
    sessionsRepository.save(session)

    const outputViewer = {
        date: sessionDates.toLocaleDateString(),
        time: `${hour}:${min}`,
        sessionId: sessionId,
    }


    return outputViewer as any

    } catch{
        return {"msg":"There is no session with this id"}as any
    }

}

export default updateSessionService