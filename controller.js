const { Signupmodel, Composemodel } = require("./Model")


const Getsignup = (req, res) => {
    return Signupmodel.find()
}


const GetCompose = (req, res) => {
    return Composemodel.find()
}

const postsignnup = (req, res) => {
    const data = new Signupmodel(req.body)
    return data.save()
}

const Postcompose = (req, res) => {
    const data = new Composemodel(req.body)
    return data.save()
}

const Postsignin = (req, res) => {
    return Signupmodel.findOne({ email: req.body.email })
}


module.exports = {
    Getsignup,
    GetCompose,
    postsignnup,
    Postcompose,
    Postsignin
}