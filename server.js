import bodyParser from 'body-parser';
import express from 'express';
import router from './app.js/routes/index.js'
import cors from 'cors'
import db from './app.js/models/index.js'

const app = express()

db.sequelize.sync(() => console.log('db synced')).catch((error) => console.log('error', error))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());
app.use('/', router)

app.listen(4000, () => {
    console.log("Server has been started");
})

