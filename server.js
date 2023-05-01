const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./app.js/routes/index')
const {db} = require('./app.js/models/index')

const app = express()

db.sequelize.sync(() => console.log('db synced')).catch((error) => console.log('error', error))

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

app.listen(4000, () => {
    console.log("Server has been started");
})

