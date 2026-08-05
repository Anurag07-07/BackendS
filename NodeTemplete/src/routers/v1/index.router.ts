import express from 'express'
import welcomerouter from './welcome.router.js'
const V1Router = express.Router()

V1Router.use('/v1',welcomerouter)

export default V1Router