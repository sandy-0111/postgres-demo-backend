import UserModel from "../models/User.js";

class UserProvider {
    getUsers = async () => {
        const users = await UserModel().findAll();
        return users;
    }

    postUsers = async (payload) => {
        const users = await UserModel().create(payload)
        console.log('users: ', users);
        return users;
    }
}
export default new UserProvider()