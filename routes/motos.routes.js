import { getAllMotos } from "../controllers/motos.controller.js";
import { Router } from "express";

const router=Router()


router.get('/getmotos', getAllMotos)


export default router