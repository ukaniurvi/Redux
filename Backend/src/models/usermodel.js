const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");


const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    phno: {
        type: String
    },
    token: {
        type: String
    }
});

userSchema.methods.generateauthtoken = async function () {
    try {

        const token = jwt.sign({ _id: this._id }, "asdesdfsgerdgtrgd");
        this.token = token
        await this.save();
        return token
    } catch (error) {
        console.log(error);
    }
}

const user = mongoose.model('userstbl', userSchema);
module.exports = user
