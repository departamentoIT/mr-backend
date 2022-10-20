import { Router } from "express";
import { cUser, dUsers, oneUsers, rUsers, uUsers, rUserCatalogue} from "../controller/users.js";


const router = Router();

router.get("/users", rUsers);
router.get("/users:_id", oneUsers);
router.get("/users/cata:idCompany", rUserCatalogue);
router.post("/users", cUser);
router.delete("/users:id", dUsers);
router.patch("/users:id", uUsers)

export default router;