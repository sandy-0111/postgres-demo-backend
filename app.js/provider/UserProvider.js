import db from '../models/index.js'

class UserProvider {
    getUsers = async () => {
        const users = await db.user().findAll();
        return users;
    }

    getUserById = async (id) => {
        const user = await db.user().findOne({ where: { user_id: id } });
        return user;
    }

    postUsers = async (payload) => {
        const users = await db.user().create(payload)
        return users;
    }

    removeUser = async (id) => {
        const users = await db.user().destroy({
            where: { user_id: id }
        });
        return users;
    }

    updateUser = async (payload, condition) => {
        try {
            const user = await db.user().update(payload, {
                where: condition
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}
export default new UserProvider()