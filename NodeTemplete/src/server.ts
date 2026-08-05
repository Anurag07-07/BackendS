import express from 'express'
const app = express()
import welcomerouter from './routers/welcome.router.js';
import {serverConfig} from './config/env.config.js';

app.use(welcomerouter)


app.listen(serverConfig.PORT,()=>{
  console.log(`Server started at http://localhost:${serverConfig.PORT}`);
})