const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();

const usersRoutes = require("./routes/users");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users", usersRoutes);

app.listen(PORT, () => console.log(`Server listen on port ${PORT}`));
