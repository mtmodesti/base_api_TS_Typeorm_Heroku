import "express-async-errors";

//Import declaration conflicts with local declaration of 'express'.
import {AppDataSource} from "./data-source"
import router from "./routes";
import express, { Request, Response, NextFunction } from "express";


const port = process.env.PORT || 3000 
// 
export const app = express();
app.use(express.json())
app.use("/users", router); 

// app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
//   return response.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//   });
// });

app.get("/", (req:Request, res:Response) => {
  res.send("Welcome page");
});

// AppDataSource.initialize().then(() => {
//   console.log('data source initialized')
// }).catch((err) => {
  
  //   console.error("Error during Data Source initialization:", err)
  // })
  
  // app.listen(port, () => {
    //   console.log(`
    //     App rodando na porta ${port}
    //     `);
    // });
    
    