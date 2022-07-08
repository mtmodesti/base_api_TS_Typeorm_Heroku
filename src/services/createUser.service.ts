import { v4 as uuidv4 } from "uuid";
import * as bycrpt from "bcryptjs";
import { AppDataSource } from "../data-source";
import { Employee } from "../entity/Employee";



const createUserService = async ({name, password}:any) => {

  if (!name || !password){
    return {"msg":"name and password fields required"}
  }

     const hashedPassword = await bycrpt.hash(password, 8);
  
    const newEmployee = {
      name: name,
      hash_password: hashedPassword,
      id: uuidv4(),
    };

   const employeeRepository = AppDataSource.getRepository(Employee);
   await employeeRepository.save(newEmployee)



    return newEmployee
  };
  
  export default createUserService