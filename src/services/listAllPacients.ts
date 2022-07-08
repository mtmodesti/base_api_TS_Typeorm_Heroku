import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Pacient } from "../entity/Pacient";

const listAllPacientsService = async ():Promise<Response> => {

    const pacientsRepository = AppDataSource.getRepository(Pacient)
    const pacients =  pacientsRepository.find()

    if(!pacients){
        return {"msg":"Empty list"} as any
    }


    return pacients as any
}

export default listAllPacientsService