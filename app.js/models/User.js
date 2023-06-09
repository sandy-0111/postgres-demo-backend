import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

export default function() {

    const User = sequelize.define("users", {
        user_id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        user_firstname: {
            type: DataTypes.STRING
        },
        user_lastname: {
            type: DataTypes.STRING
        },
        user_email: {
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: false
    });


    return User;
};
