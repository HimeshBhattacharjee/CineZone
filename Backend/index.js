import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import movieRoute from "./route/movie.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;

// MongoDB connection
try {
  mongoose.connect(MongoDBURI);
  console.log("Connected to MongoDB")
}
catch(error) {
  console.log("Error:",error);
}

// Defining routes
app.use("/movie",movieRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`CineZone listening on port ${PORT}`)
})