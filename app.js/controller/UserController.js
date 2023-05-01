const UserProvider = require("../provider/UserProvider.js");

class UserController {

    getUsers = async (req, res) => {
        const data = await UserProvider.getUsers();
        res.send({ data: data })
        console.log("Change")
    }

    addUser = (req, res) => {
        const payload = req.body;
        const data = UserProvider.postUsers(payload);
        if (data)
            res.status(200).send({ message: 'Successfully saved' })
        else
            res.send({ message: 'something is wrong' })
    }
}



// const getUsers = async (req, res) => {
//     // const data = await UserProvider.getUsers();
//     res.send({ data: data })
// }

module.exports = new UserController();

