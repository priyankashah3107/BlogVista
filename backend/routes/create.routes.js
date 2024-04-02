import { Router } from "express";

import { create } from "../controllers/createpost.controllers.js";
import routers from "./auth.routes.js";

const routers = Router()

routers.post("/create", create);
