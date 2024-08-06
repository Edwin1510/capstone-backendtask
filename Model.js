const mongoose = require("mongoose")


const SingupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})


const ComposeSchema = mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }


})

const Signupmodel = mongoose.model("Signupdatas", SingupSchema)

const Composemodel = mongoose.model("Composedatas", ComposeSchema)

module.exports = {
    Signupmodel,
    Composemodel
}