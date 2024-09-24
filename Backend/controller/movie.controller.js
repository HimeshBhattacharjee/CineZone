import Films from "../model/movie.model.js";

export const getMovie=async(req,res) => {
    try {
        const movie=await Films.find();
        res.status(200).json(movie);
    }
    catch (error) {
        console.log("Error:",error);
        res.status(500).json(error);
    }
};