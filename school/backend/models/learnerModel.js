const { DataTypes } = require("sequelize");
const { sequelize } = require("./conn");
const Instructor = require("./instructorModel");

const Learner = sequelize.define("learner", {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     name: {
        type: DataTypes.STRING,
        allowNull: false
     },
     program: {
        type: DataTypes.STRING,
        allowNull: false
     },
     instructor_id: {
        type: DataTypes.INTEGER
     }
}, {
    timestamps: false
});

Learner.belongsTo(Instructor, {
    foreignKey: "instructor_id"
});

module.exports = Learner;