import mongoose from "mongoose";

const movieSchema=mongoose.Schema({
    genre:String,
    title:String,
    price:Number,
    priceCategory:String,
    img:String
})
const Movie=mongoose.model("Films", movieSchema);

export default Movie;