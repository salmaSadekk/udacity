import express from "express";
import images from "./api/images";
import test from "./api/test";
const routes = express.Router() ;


routes.use('/' , images) ;
routes.use('/' , test)

export default routes ;


