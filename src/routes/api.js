import express from "express";
import GetLogin from "../controllers/loginController.js";
//import RegisterUser from "../controllers/registerController.js";

import registerController from "../controllers/registerController.js";
import authValidation from "../valiation/authValidation.js";


const router = express.Router();

const InitWebRoutes = (app) => {
    router.get("/", (req, res)=>{
        return res.send("homepage")
    });
    router.get("/login",GetLogin);
    router.get("/getUsers", registerController.RegisterUser);
    router.post("/createUser", authValidation.ValidateRegister,registerController.CreateUser);
    return app.use("/", router);
};

export default InitWebRoutes;
