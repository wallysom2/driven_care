import patientServices from "../services/patientServices.js";

async function create(req, res){
    const { name, email, password } = req.body;
   try {
        await patientServices.create({ name, email, password });
        return res.status(201).send({ message: "Patient created successfully" });
   } catch (error) {
        return res.status(500).send({ message: error.message });
   }
}

async function signin(req, res){
    const { email, password } = req.body;
    try {
        const token = await patientServices.signin ({ email, password });
        return res.send({ token });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export default {
    create,
    signin
};