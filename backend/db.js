const mongoose =require('mongoose');
const mongoURL="mongodb+srv://user:user@cluster0.abfu4n6.mongodb.net/awsmumbai?retryWrites=true&w=majority"
const connectToMongo=()=>{
    mongoose.connect(mongoURL , ()=>{
        console.log("connected!")
    })
}
module.exports=connectToMongo;