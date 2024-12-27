import mongoose from "mongoose"

const URI = "mongodb+srv://dharamchandpatle917:dharamchandpatle917@cluster0.ozvkr.mongodb.net/"

const connectDB = async () =>{
    await mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    console.log("DB Connected .....");
    
}

export default connectDB ; 