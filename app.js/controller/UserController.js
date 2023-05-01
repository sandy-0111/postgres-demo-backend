import UserProvider from "../provider/UserProvider.js";

class UserController {

    getUsers = async (req, res) => {
        const data = await UserProvider.getUsers();
        res.send({ data: data })
    }
    getUserById = async (req, res) => {
        const {id } = req.params;
        const data = await UserProvider.getUserById(id);
        res.send({ data: data })
    }

    addUser = (req, res) => {
        const payload = req.body;
        const data = UserProvider.postUsers(payload);
        if (data)
            res.status(200).send({ message: 'Successfully saved' })
        else
            res.send({ message: 'something is wrong' })
    }

    deleteUser = async (req, res) => {
        console.log(req);
        const { id } = req.params;
        const data = await UserProvider.removeUser(id);
        res.send({ data: data })
    }

    updateUser = async (req, res) => {
        const payload = req.body;
        const { id } = req.params
        const data = await UserProvider.updateUser(payload, { user_id: id });
        res.send({ data: data });
    }
}

export default new UserController()

