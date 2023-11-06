const { DataTypes, Model } = require('sequelize');
const dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class post extends Model {}

post.init({
    title: { type: DataTypes.STRING, allowNull: false, required: true},
    content: { type: DataTypes.STRING, allowNull: false, required: true},
    image: { type: DataTypes.STRING, allowNull: false, required: true},
}, {sequelize: sequelizeInstance, modelName: 'post', timestamps: true, freezeTableName: true});

module.exports = post;