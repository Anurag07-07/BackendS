import express from 'express'
const app = express()
import {serverConfig} from './config/env.config.js';
import V1Router from './routers/v1/index.router.js';

app.use(express.json())

app.use('/api',V1Router)

app.listen(serverConfig.PORT,()=>{
  console.log(`Server started at http://localhost:${serverConfig.PORT}`);
})