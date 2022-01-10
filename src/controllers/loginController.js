import loginService from "../services/loginService.js";
import { validationResult } from "express-validator";

const LoginUser=async (req, res)=>{

    //return res.send("Hello login from controller");
    try {
        let user={
            email: req.body.email,
            password:req.body.password
        };
       // await registerService.CreateNewUser(user);
       //return res.send(user);
      // console.log(user);
        await loginService.LoginUser(user);
        return res.send({"status":200,"data":req.body});
    } catch (error) {
        
    }
};

export default {
    LoginUser
} 
