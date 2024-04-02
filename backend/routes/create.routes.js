import { Router } from "express";
import multer from 'multer';

const uploadMiddleware = multer({ dest: 'uploads/' });

import  createPost from "../controllers/createpost.controllers.js";
import routers from "./auth.routes.js";

const routers = Router()

routers.post("/post", uploadMiddleware.single('file') ,createPost);

export default  routers;