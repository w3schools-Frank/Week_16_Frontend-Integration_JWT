const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("shop", "frankchambergo", "#SKCmta4908", {
    host: "localhost",
    dialect: "postgres"
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
}

module.exports = { sequelize, testConnection }