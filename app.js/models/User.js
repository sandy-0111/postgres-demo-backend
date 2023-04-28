import { sequelize } from '../models/index.js'
import { Sequelize } from 'sequelize';
export default function UserModel() {

    const User = sequelize.define("users", {
        user_id: {
            type: Sequelize.SMALLINT,
            autoIncrement:true,
            primaryKey: true,
        },
        user_firstname: {
            type: Sequelize.STRING
        },
        user_lastname: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.BOOLEAN
        }
    }, {
        timestamps: false
    });


    return User;
};
