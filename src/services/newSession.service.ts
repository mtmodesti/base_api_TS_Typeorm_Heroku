import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MedicalAppointment } from "../entity/MedicalAppointment";
import { Pacient } from "../entity/Pacient";


const newSessionService = async ( {pacientId, date, time}:any):Promise<Response> => {


    try {
        
            if (!pacientId || !date || !time){
                return {"msg":"pacientId, date and time fields required"}as any
            }
        
        
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
                return {"msg": "Time not available"} as any
            }
            let sessionDate = new Date(`${year}-${month}-${day}T${hour}:${min}:00`);
            
    
            const teste = new Date (`${year}-${month}-${day} ${hour}:${min}:00`)

            const pacientRepository = AppDataSource.getRepository(Pacient)
            const pacient = await pacientRepository.findBy(
                {
                    id:pacientId
                },
                
                
                )
                
                if (pacient.length == 0){
                    return {"msg": "Pacient not found"}as any;
                }
                
                date = sessionDate
                const medicalAppointmentRepository = AppDataSource.getRepository(MedicalAppointment)
                
                const newSession = medicalAppointmentRepository.create({
                    date:teste,
                    pacient: pacientId
                })
                
                await medicalAppointmentRepository.save(newSession)

                const SessionDetails = {
                    sessionDate: teste.toLocaleString(),
                    pacientId, 
                }

                

          return {pacient, SessionDetails}as any;



    } catch {
        
        return {"msg":"Server error"}as any
    }


};
    

export default newSessionService;