import mongoose from "mongoose";

const Connection = async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.e6acs0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true,});
        console.log("database connection successfull")

    }catch(error){
        console.log("database connection error");
    }
}
export default Connection