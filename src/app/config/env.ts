import dotenv from "dotenv";

dotenv.config();
interface EnvConfig {
  PORT: string;
  DB_URL: string;
  NODE_ENV: "development" | "production";
}
const loadEnvVariables = (): EnvConfig => {
   const requiredEnvirabvariable:string[]=["PORT","DB_URL","NODE_ENV"];
   requiredEnvirabvariable.forEach(key=>{
    if(!process.env[key]){
        throw new Error(`missing require enviramental variable${key}`)
    }
   })
  return {
    PORT: process.env.PORT as string,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV as "development"|"production" ,
  };
};

export const envVars=loadEnvVariables();
