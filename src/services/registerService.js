
import Connection from "../config/connectDB.js";
import bcryptjs from "bcryptjs";


const CreateNewUser=(user)=>{
  return new Promise( async (resolve, reject)=>{
        try {
            let check=await checkEmailUser(user.email);
           // console.log(check);
           if(check){
            reject(` Cet email " ${user.email}" existe deja `)
           }else{

           }
        } catch (error) {
            reject(error);
        }
  });
}

let checkEmailUser=(email)=>{
    return new Promise(((resolve, reject)=>{
        try {
            Connection.query(
                "SELECT * FROM users users where email = ?",
                email ,
                function(error, row){
                    if(error){
                        reject(error);
                    }
                    if(row.length>0){
                        resolve(true);
                    }
                    else{
                        resolve(false);
                    }
                } 
            )
        } catch (error) {
            reject(error);
        }
    }))
}

export default {
    CreateNewUser
}