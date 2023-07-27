
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

const conn = require("./db/conn");
const { urlencoded } = require("body-parser");

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const route = require("./router/userrouter");
app.use("/user", route)

app.listen(port, () => {
    console.log(`server is connecting ${port}`);
})