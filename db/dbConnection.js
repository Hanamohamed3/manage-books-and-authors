import mongoose from'mongoose';

export const dbConnection =mongoose.connect(`mongodb://localhost:27017/assignment8`)
.then(()=> console.log("DB connected"))
.catch((err)=> console.log("Db error",err))