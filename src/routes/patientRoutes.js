import { Router } from "express";


const patientRoutes = Router();

patientRoutes.post("/signup", validateSchema (patientSchema), patientControllers.creat);
patientRoutes.post ("/signin", patientControllers.signin);

export default patientRoutes;