
const express = require("express")
const Appserver = express()
const bodyparser = require("body-parser")
Appserver.use(bodyparser.json())
const cors = require("cors")
Appserver.use(cors())

const dotenv = require("dotenv")
dotenv.config()




const hostname = "0.0.0.0"
const port = process.env.PORT;


Appserver.use("/api", require("./Router"))



Appserver.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port} /happily`)
})