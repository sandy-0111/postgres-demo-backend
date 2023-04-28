
import express  from "express"
import UserController from '../controller/UserController.js'

const userRouter = express.Router();

userRouter.get('/',UserController.getUsers)
userRouter.post('/',UserController.addUser)

export default userRouter;