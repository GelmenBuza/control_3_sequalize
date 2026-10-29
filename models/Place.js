import sequelize from "../database.js";
import {DataTypes} from "sequelize";


const Place = sequelize.define('Place', {
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING},
})


export default Place;