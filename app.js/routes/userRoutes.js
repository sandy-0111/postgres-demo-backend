
import express  from "express"
import UserController from '../controller/UserController.js'

const userRouter = express.Router();

userRouter.get('/',UserController.getUsers)
userRouter.get('/:id',UserController.getUserById)
userRouter.post('/',UserController.addUser)
userRouter.delete('/:id',UserController.deleteUser)
userRouter.put('/:id',UserController.updateUser)

export default userRouter;