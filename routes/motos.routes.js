import { getAllMotos, postMotos,  } from "../controllers/motos.controller.js";
import { Router } from "express";

const router=Router()


router.get('/motos', getAllMotos)
router.post('/motos', postMotos)


export default router