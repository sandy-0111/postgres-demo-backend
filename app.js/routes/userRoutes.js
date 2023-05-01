const express = require('express')
const UserController = require('../controller/UserController')

const userRouter = express.Router();

userRouter.get('/', UserController.getUsers)
userRouter.post('/', UserController.addUser)

module.exports = userRouter;