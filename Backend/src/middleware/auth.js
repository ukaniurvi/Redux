const jwt = require("jsonwebtoken")
const user = require("../models/usermodel");


exports.verify = async (req, res, next) => {
    const token = req.headers['authorization']

    console.log(token);

    if (token) {
        console.log("token", token);
        const decoded = jwt.verify(token, "asdesdfsgerdgtrgd");
        const data = await user.findOne({ _id: decoded._id })
        if (data) {
            req.token = token
            req.user = data
            next();

        } else {
            res.status(401).json({
                msg: "you are Unauthorized",
                status: 401
            })
        }
    } else {
        res.status(403).json({
            msg: "forbidden",
            status: 403
        })
    }
}