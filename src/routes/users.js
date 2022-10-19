import { Router } from "express";
import { cUser, rUsers} from "../controller/users.js";


const router = Router();

router.get("/users", rUsers);
router.post("/users", cUser);

export default router;