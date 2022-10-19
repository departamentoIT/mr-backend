import { Router } from "express";
import { cCatalogue, rCatalogue, rCatalogueP, rCatalogueS} from "../controller/catalogue.js";


const router = Router();

router.get("/catalogue", rCatalogue);
router.get("/catalogue/product", rCatalogueP);
router.get("/catalogue/service", rCatalogueS);
router.post("/catalogue", cCatalogue);

export default router;