import { validationResult } from "express-validator";

const RegisterUser=(req, res)=>{
    return res.send("enregistrer");
}

const CreateUser=(req, res)=>{
    // Validation des données envoyées
    let errorsArr=[];
    let validationErrors=validationResult(req);
    if(!validationErrors.isEmpty()){
        let errors=Object.values(validationErrors.mapped());
        errors.forEach((item)=>{
            errorsArr.push(item.msg);
        });
        req.flash("errors",errorsArr);
        //return res.redirect("/getUsers");
        return res.send({"status":404,"erreurs":errorsArr});
    }

   return res.send(req.body);
   // return res.send("enregistrer creer");
    //console.log(req.body);
    
    // Creation d'un nouvel utilisateur
    try {
        
    } catch (error) {
        
    }
}

export default {
    RegisterUser,
    CreateUser
}