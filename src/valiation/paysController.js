import { check } from "express-validator";

const ValidateRegisterUser=[
    check("code","Code est obligatoire").trim().isEmpty(),
    check("libelle","Libelle est obligatoire").trim().isEmpty(),
    check("active","active est obligatoire").trim().isEmpty(),
    check("date_update","Date de mise à jour est obligatoire ").trim().isEmpty(),
];