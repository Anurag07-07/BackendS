import dotenv from 'dotenv'


//Create a function to load env Variable
export function loadEnv(){
  dotenv.config()
}

loadEnv()

//Import the PORT
interface ServerConfig{
  PORT:number
}

export const serverConfig:ServerConfig={
  PORT:Number(process.env.PORT) as number || 3000
}
