import sequelize from "../database.js";
import {DataTypes} from "sequelize";


const Event = sequelize.define('Event', {
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},

})

export default Event;