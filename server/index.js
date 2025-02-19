const express = require("express");
const cors = require("cors");
const getIdentity = require("./middleware/getIdentity");
const registerIdentity = require("./middleware/registerIdentity");
const authoriseUser = require("./middleware/authoriseUser");

const app = express();
app.use(cors());

const PORT = 8000;

app.get("/getUserIdentity", async (request, response) => {
    getIdentity(request, response);
});

app.get("/registerIdentity", async (request, response) => {
    registerIdentity(request, response);
});

app.get("/authoriseUser", async(request, response) => {
    authoriseUser(request, response);
});

app.get("/getAuthorisedUsers", async(request, response) => {

});

app.listen(PORT, () => {
    console.log("server running on PORT: " + PORT)
});