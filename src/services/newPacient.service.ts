import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pacient } from "../entity/Pacient";


const newPacientService = async ({name,phone}:any):Promise<Response> => {

    if (!name || !phone){
        return {"msg":"name and phone fields required"} as any
    }

    const pacientRepository = AppDataSource.getRepository(Pacient)
    const newPacient = {
        name, phone
    }

    await pacientRepository.save(newPacient)

    return newPacient as any


}

export default newPacientService


