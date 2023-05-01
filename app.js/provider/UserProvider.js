// const UserModel = require("../models/User.jsc
const { db } = require('../models/index')
class UserProvider {
    getUsers = async () => {
        const users = await db.user().findAll();
        return users;
    }

    postUsers = async (payload) => {
        const users = await db.user().create(payload)
        console.log('users: ', users);
        return users;
    }
}
module.exports = new UserProvider();