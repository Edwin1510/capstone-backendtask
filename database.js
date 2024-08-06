const mongoose = require("mongoose")


const ConnectTODb = () => {
    mongoose.connect(`mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@sam.ltzmszw.mongodb.net/CapstoneTask`)
        .then((response) => {
            console.log("Database connection successfully")
        }).catch((error) => {
            console.log(error)
        })
}

module.exports = ConnectTODb