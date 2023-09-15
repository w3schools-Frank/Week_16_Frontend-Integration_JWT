const express = require("express");
const accountRoutes = require("./routes/accountRoutes");
const cors = require("cors");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors())

app.use("/accounts", accountRoutes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})