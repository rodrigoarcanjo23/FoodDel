import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://artoriasarcanjo690:33858627@cluster0.rthhhpq.mongodb.net/food-del').then(() =>console.log("DB Connected"));
}