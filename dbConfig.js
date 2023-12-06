import mongoose, { mongo } from "mongoose";

const URI="mongodb://127.0.0.1/RPMTestAndroid"

mongoose.connect(URI).then(()=>{
    console.log('database connected succesfully')
}).catch((err)=>{
    console.error(err)
})