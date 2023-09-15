const express = require("express");
const instructorRoutes = require("./routes/instructorRoutes");
const learnerRoutes = require("./routes/learnerRoutes");

const app = express();
const PORT = 3001;
app.use(express.json());

app.use("/instructors", instructorRoutes);
app.use("/learners", learnerRoutes);

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}`)});