require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userRouter=require('./routes/userRouter')
const noteRouter=require('./routes/noteRouter')

const app=express()
app.use(express.json())
app.use(cors())
//Routes
app.use('/users',userRouter)
app.use('/api/notes',noteRouter)

//Listen server
const PORT=process.env.PORT||5000
app.listen(PORT,() => {
    console.log('server is running on port',PORT)
})
//connect to mongodb
const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
     useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> {
    console.log('data base connected')
})
.catch((err)=> console.log('Error',err))

// app.listen(PORT,()=>{
//     console.log('server in running on port',PORT)
// })