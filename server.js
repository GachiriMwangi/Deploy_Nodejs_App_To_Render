import express from 'express'
import dotenv from 'dotenv'
import router from './Routes/router.js'
dotenv.config()
const app = express()

app.use("/", router)

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`))