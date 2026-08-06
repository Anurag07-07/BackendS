import express from 'express'
import { WelcomeHandler } from '../../controllers/welcome.controller.js'
import { middleware1 } from '../../middlewares/testing.middleware.js'
import { requestBodyValidation } from '../../validators/RequestBodyValidtotors.js'
import z from 'zod'
import type { AnyZodObject } from 'zod/v3'



const welcomerouter = express.Router()



let obj = z.object({
  name:z.string().optional(),
  age:z.number()
})



// welcomerouter.get('/welcome',middleware1,WelcomeHandler)
welcomerouter.get('/welcome',requestBodyValidation(obj as any as AnyZodObject),WelcomeHandler)



export default welcomerouter