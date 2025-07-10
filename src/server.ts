import {Server} from "http"

import mongoose from "mongoose"
import app from "./app"
import { envVars } from "./app/config/env"
let server:Server




const startServer=async()=>{
try{
    console.log(envVars.NODE_ENV)
    await mongoose.connect(envVars.DB_URL)
console.log("connecteded toDb")
 server=app.listen(5000,()=>{
    console.log("server is listening to port 5000")
})
}
catch(error){
    console.log(error)
}
}
startServer()

process.on("SIGTRN signal reacived",()=>{
    console.log("unhandale rejection detected",err);
    if(server){
        server.close(()=>{
  process.exit(1)
        });
      
    }
    process.exit(1)
})
process.on("uncaughtExecption",(err)=>{
    console.log("uncatch  expention detected server down",err);
    if(server){
        server.close(()=>{
  process.exit(1)
        });
      
    }
    process.exit(1)
})
//unhabndale rejection
// Promise.reject(new Error("i forget to catch this errro  "))
//uncatch exception error
// throw new Error(" I handale to this local error ")
/**
 * unhanaled rejection error
 * uncaugh erroer rejection error
 * signal termination error
 */
