import express from "express";
const { Router } = express;
// import { singnup, login, profile, logout } from './routes/auth.routes.js';

import { singnup, login, profile, logout, create } from "../controllers/auth.controllers.js"


const routers = Router();


routers.post("/signup", singnup);
routers.post("/login", login);
routers.get("/profile", profile);
routers.post("/logout", logout)
routers.post("/create", create);

export default routers