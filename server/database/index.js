import mongoose from "mongoose";

export const connectDatabase = () => {
    mongoose.connect('mongodb+srv://Samarth709:qwerty123@cluster0.odmcegk.mongodb.net/dvd-database?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Database connected successfully...");
    })
    .catch((error) => {
        console.log(error);
    });
}