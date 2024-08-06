const express = require("express")
const ConnectTODb = require("./database")
const { Getsignup, GetCompose, postsignnup, Postcompose, Postsignin } = require("./controller")

const Apiserver = express()

ConnectTODb()

Apiserver.get("/signupget", async (req, res) => {
    let response;
    response = await Getsignup(req, res)
    console.log(response)
    res.status(200).json({
        message: "signup data get request successfully",
        datas: response
    })
})
Apiserver.get("/composeget", async (req, res) => {
    let response;
    response = await GetCompose(req, res)
    console.log(response)
    res.status(200).json({
        message: "compose get data successfully",
        datas: response
    })
})

Apiserver.post("/signuppost", async (req, res) => {
    try {
        const response = await postsignnup(req)
        console.log(response)
        res.status(200).json({
            message: "signup post request successfully"
        })
    } catch (error) {
        console.log(error)
    }
})


Apiserver.post("/composepost", async (req, res) => {
    const response = await Postcompose(req)
    console.log(response)
    res.status(200).json({
        message: "compose post request successfully"
    })

})


Apiserver.patch("/passwordreset", async (req, res) => {
    const response = await Postsignin(req, res)
    if (response && response._id) {
        if (response.password === req.body.password) {
            if (req.body.newpassword) {
                response.password = req.body.newpassword
                await response.save()
                res.status(200).json({
                    message: "Password change successfully"
                })
            }
        } else {
            res.status(401).json({
                message: "password mismatch"
            })
        }
    } else {
        res.status(402).json({
            message: "Email not found"
        })
    }


})

Apiserver.post("/signinpost", async (req, res) => {
    const response = await Postsignin(req, res)
    if (response && response._id) {
        if (response.password === req.body.password) {
            return res.status(200).json({
                message: "signin successfully"
            })
        } else {
            return res.status(401).json({
                message: "password mismatch"
            })
        }
    } else {
        return res.status(402).json({
            message: "Email mismatch"
        })
    }


})




module.exports = Apiserver