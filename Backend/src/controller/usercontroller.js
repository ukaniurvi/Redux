const userstbl = require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


//insert data
exports.insertData = async (req, res) => {
  try {

    const emailData = await userstbl.findOne({ email: req.body.email })

    if (emailData) {

      res.status(406).json({
        message: "email already exists",
        status: 406
      })

    } else {

      const userData = new userstbl({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
        // password: req.body.password,
        gender: req.body.gender,
        phno: req.body.phno
      })

      const Data = await userData.save();

      res.status(201).json({
        status: "201",
        message: "insert Successfully",
        Data: Data

      })
    }


  } catch (err) {
    console.log("err---", err);
    res.status(500).json({
      status: "500",
      message: "something went wrong(insert user)"
    })
  }
}


//login
exports.userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await userstbl.findOne({ email: email });
    console.log("--useremail--", useremail);

    if (useremail == null) {

      res.status(404).json({
        message: 'Data Not Exist',
        status: 404
      })

    } else {

      if (useremail) {

        bcrypt.compare(req.body.password, useremail.password, async (err, data) => {

          if (data) {

            const token = await useremail.generateauthtoken()
            res.cookie("jwt", token, {
              expires: new Date(Date.now() + 3000000 * 3),
              httpOnly: true
            });

            res.status(200).json({
              message: "login success",
              status: 200,
              token: token
            });

          } else {
            res.status(401).json({
              message: "password dose not matched",
              status: 401
            })
          }
        })
      } else {
        res.status(401).json({
          message: "you are Unauthorized",
          status: 401
        })
      }
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "SOMETHING WENT WRONG, PLEASE TRY AGAIN",
      status: 500,
      error: error.message
    })
  }
}


//update data
exports.updateData = async (req, res) => {
  try {
    const data = await userstbl.findById({ _id: req.params.id })


    if (data) {

      const result = await userstbl.findByIdAndUpdate({ _id: req.params.id }, {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          gender: req.body.gender,
          phno: req.body.phno
        }
      }, {
        new: true,
        userFindModify: false
      })


      res.status(200).json({
        status: "200",
        message: "updated successfully",
        //result:result
      });

    } else {

      res.status(404).json({
        message: "User data not found",
        status: 404
      })
    }

  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "500",
      message: "something went wrong(update user)"
    })

  }
}


//delete data
exports.deleteData = async (req, res) => {
  try {
    const data = await userstbl.findById({ _id: req.params.id })

    if (data) {

      const result = await userstbl.findByIdAndDelete({ _id: req.params.id })

      res.status(200).json({
        status: "200",
        message: "deleted  successfully"
      })

    } else {
      res.status(404).json({
        message: "User data not found",
        status: 404
      })
    }

  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "500",
      message: "something went wrong(delete user)"
    })
  }
}


//viewdata
exports.viewData = async (req, res) => {
  try {

    const result = await userstbl.find({})

    if (result[0]) {

      res.status(200).json({
        status: "200",
        message: "view successfully",
        data: result
      })
    } else {
      res.status(404).json({
        message: "User data not found",
        status: 404
      })
    }

  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "500",
      message: "something went wrong(view user)"
    })
  }
}


//view by id
exports.viewById = async (req, res) => {
  try {
    const data = await userstbl.findById({ _id: req.params.id })

    if (data) {

      const result = await userstbl.findById({ _id: req.params.id })

      res.status(200).json({
        status: "200",
        message: "view by id successfully",
        data: result
      })

    } else {
      res.status(404).json({
        message: "User data not found",
        status: 404
      })
    }

  } catch (err) {
    console.log(err)
    res.status(500).json({
      status: "500",
      message: "something went wrong(view by id user)"
    })
  }
}
