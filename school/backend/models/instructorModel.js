const { DataTypes } = require("sequelize");
const { sequelize } = require("./conn");

const Instructor = sequelize.define("instructor", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = Instructor;