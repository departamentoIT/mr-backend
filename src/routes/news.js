import { Router } from "express";
import { cNews, rNews} from "../controller/news.js";


const router = Router();

router.get("/news", rNews);
router.post("/news", cNews);

export default router;