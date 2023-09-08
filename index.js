
import * as dotenv from 'dotenv'
import express from 'express'
import initApp from './src/app.router.js';
import sendEmail from './src/utils/sendEmail.js';

dotenv.config()
const app = express()
const port = 5000

initApp(app, express)


app.listen(port, () => console.log(`app running on port ............... ${port}`));