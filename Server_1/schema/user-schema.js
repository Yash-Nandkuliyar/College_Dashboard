import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    name: String,
    mail: String,
    image: String,
});

const user =mongoose.model("souvik",UserSchema);
export default user;