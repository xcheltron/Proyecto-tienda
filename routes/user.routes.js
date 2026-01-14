import { registerUserController } from "../controllers/user.controller.js";
import express from 'express'

const Route = express.Router();

Route.get('/', registerUserController);


export default Route;