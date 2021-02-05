// Require express 
const express =  require('express')
//Require concteDb 
const connectDB = require('./config/connectDB')

const authRouter = require('./routes/auth')
const app = express()


app.use(express.json())

connectDB()

app.use('/api/auth',authRouter)
const port = process.env.PORT || 5000

app.listen(port , (error)=>{
    error ? 
    console.log(error)
    :console.log("the server is runnig on port ",port)
})
