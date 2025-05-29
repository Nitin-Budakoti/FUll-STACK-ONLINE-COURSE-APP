import express from "express";
const router = express.Router();
import { register,login,getUserProfile,logout} from "../controllers/user.controller.js";
import isAuthenticated from "../Middlewares/isAutheticated.js";
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/profile').get(isAuthenticated,getUserProfile);
router.route('/logout').get(logout);
export default router;