const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
username:{
    type:String,
    require:true,
    trim:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    unique:true
}
},{
    timestamps:true
})
module.exports=mongoose.model('users',userSchema)