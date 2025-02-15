const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8000;

app.listen(PORT, () => {
    console.log("server running on PORT: " + PORT)
});