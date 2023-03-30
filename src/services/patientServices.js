import bcrypt from "bcrypt";
import patientRepositories from "../repositories/patientRepositories.js";
import { v4 as uuidV4  } from "uuid";

async function create ({ name, email, password }) {
    const { rowCount } = await patientRepositories.findByEmail(email);
    if (rowCount) throw new Error ("User already exists");

    const hashPassword = await bcrypt.hash (password, 10);
    await patientRepositories.create ({ name, email, password: hashPassword});

}

async function signin ({ email, password }) {
    const {
        rowCount,
        rows: [patient],
    } = await patientRepositories.findByEmail(email);   
    if (!rowCount) throw new Error ("Incorrect email");

    const isValidPassword = await bcrypt.compare (password, patient.password);
    if (!isValidPassword) throw new Error ("Incorrect password")

    const token = uuidV4();
    
    }