///import Connection from "../config/connectDB";
import Connection from "../config/connectDB.js";

const LoginUser=(user)=>{
    
    try {
        Connection.query(
            "SELECT * FROM users where password=? "
            , user.password,
            function(error, result){
                if(error){

                    reject(error)
                }
                else{
                    let user=result[0];
                    console.log(user)
                }
                   // reject(error);
                
                //resolve("Authentification");
            }
        )
    } catch (error) {
        reject(error);
        console.log("erreur");
    }
}

export default {
    LoginUser
}