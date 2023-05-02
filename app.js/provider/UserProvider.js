import db from '../models/index.js'

class UserProvider {

    getAllusers = (data = {}) => {
        return db.user().findAll({
            ...data
        })
    };

    getUserById = (condition) => {
        return db.user().findOne({ where: condition });;
    }

    createUser = (payload) => {
        return db.user().create(payload)
    }

    removeUser = (condition) => {
        return db.user().destroy({
            where: condition
        });
    }

    updateUser = (payload, condition) => {
        return  db.user().update(payload, {
            where: condition
        })
    }
}
export default new UserProvider()