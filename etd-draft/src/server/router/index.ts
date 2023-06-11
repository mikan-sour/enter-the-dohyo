import express from "express";


import api from '../api';
import clientRoutes from "../controllers/clientRoutes";

const router = express.Router();
router.get("/", api.getBanzuke);

router.get("/banzukeClient", clientRoutes.banzukeClient);

export default router;