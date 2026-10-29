import sequelize from "../database.js";
import {DataTypes} from "sequelize";


const News = sequelize.define('News', {
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
})


export default News;