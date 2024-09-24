import express from "express";
import { getMovie } from "../controller/movie.controller.js";

const router=express.Router();
router.get("/", getMovie);

export default router;