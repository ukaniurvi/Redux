const route = require("express").Router();
const { verify } = require("../middleware/auth");

const {
    insertData,
    updateData,
    deleteData,
    viewData,
    viewById,
    userLogin
} = require("../controller/usercontroller");

route.post("/add", insertData);
route.post("/login", userLogin);
route.put("/update/:id", verify, updateData);
route.delete("/delete/:id", deleteData);
route.get("/view", viewData);
route.get("/viewById/:id", viewById);

module.exports = route;