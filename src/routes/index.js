import express from "express";

// routes
import userRoute from "./user.route.js";
import genreRoute from "./genre.route.js"
import seriesRouter from './series.route.js'
import seasonRouter from './season.route.js'
import streamRouter from './stream.route.js'
import episodeRouter from './episode.route.js'
// const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/genre", genreRoute);
unProtectedRouter.use('/series',seriesRouter)
unProtectedRouter.use('/season',seasonRouter)
unProtectedRouter.use('/stream',streamRouter)
unProtectedRouter.use('/episode',episodeRouter)
export { unProtectedRouter };
