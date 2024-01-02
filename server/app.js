const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const errorMiddleware = require('./middlewares/errors')
const path = require('path')

const app = express()

app.use(cors({
    origin:'*'
}))

const _dirname = path.dirname('')

const buildPath = path.join(_dirname,"../client/build")

app.use(express.static(buildPath))

app.get("/*",function(req,res){
    res.sendFile(__dirname,"../client/build/index.html"),
    function(err){
        if(err){
            res.status(500).send(err)
        }
    }
})

app.set("view engine","ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const todo = require('./Routes/todoRoutes')

app.use(morgan('dev'))

app.use('/api/v1',todo)


app.use(errorMiddleware)

module.exports = app