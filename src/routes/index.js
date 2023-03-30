import { Router } from "express";
import patientRoutes from "./patientRoutes";

const routes = Router();

routes.use("/patient", patientRoutes);

export default routes;