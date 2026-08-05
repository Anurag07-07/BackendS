import express from 'express'
import { WelcomeHandler } from '../../controllers/welcome.controller.js'
import { middleware1 } from '../../middlewares/testing.middleware.js'

const welcomerouter = express.Router()

welcomerouter.get('/welcome',middleware1,WelcomeHandler)

export default welcomerouter