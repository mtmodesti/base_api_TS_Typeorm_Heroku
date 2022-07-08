import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Employee } from "../entity/Employee";

const listAllEmpoyeesService = async ():Promise<Response> => {

    const employeeRepository = AppDataSource.getRepository(Employee)
    const employees =  employeeRepository.find({
        select:{
            id:true,
            name:true
        }
    })

    if(!employees){
        return {"msg":"Empty list"}as any
    }


    return employees as any
}

export default listAllEmpoyeesService
