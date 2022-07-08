// import "reflect-metadata"
// import { DataSource } from "typeorm"
// import { Employee } from "./entity/Employee"
// import {MedicalAppointment} from './entity/MedicalAppointment'
// import {Pacient} from './entity/Pacient'
// import "dotenv/config";


import { DataSource } from "typeorm";
import "reflect-metadata";
import "dotenv/config";

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    synchronize: false,
    logging: true,
    entities: process.env.NODE_ENV === "production" ? ["dist/entity/*.js"] : ["src/entity/*.ts"],
    migrations: process.env.NODE_ENV === "production" ? ["dist/migration/*.js"] : ["src/migration/*.ts"],
});

//export default AppDataSource;



// const AppDataSource = new DataSource({
//     type: "postgres",
//     url: process.env.DATABASE_URL,
//     ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
//     synchronize: false,
//     logging: true,
//     entities: process.env.NODE_ENV === "production" ? ["dist/entity/*.js"] : ["src/entity/*.ts"],
//     migrations: process.env.NODE_ENV === "production" ? ["dist/migration/*.js"] : ["src/migration/*.ts"],
// });

// export default AppDataSource;







// export const AppDataSource = new DataSource({
//     type: "postgres",
//     url: process.env.DATABASE_URL,
//     ssl: process.env.NODE_ENV == 'production' ?
//     {rejectUnauthorized: false} : false,
//     synchronize: true,
//     logging: false,
//     entities: process.env.NODE_ENV == 'production' ? ["dist/entity/*.js"] : 
//     [Employee, MedicalAppointment,Pacient],

//     migrations: process.env.NODE_ENV == 'production' ? ["./src/migrations/*.js"] :["./src/migration/*.ts"] ,
//     subscribers: [],
// })



// import "reflect-metadata"
// import { DataSource } from "typeorm"
// import { Employee } from "./entity/Employee"
// import {MedicalAppointment} from './entity/MedicalAppointment'
// import {Pacient} from './entity/Pacient'


// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "modesti",
//     password: "1234",
//     database: "modesti",
//     synchronize: true,
//     logging: false,
//     entities: [Employee, MedicalAppointment,Pacient],
//     migrations: ["./src/migration/*.ts"],
//     subscribers: [],
// })


