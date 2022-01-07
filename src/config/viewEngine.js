import express from "express";
/**
 * Config view engine for app
 */
const ConfigViewEngine = (app)=> {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views","./src/views");
};

export default ConfigViewEngine;