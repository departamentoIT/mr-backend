import { Router } from "express";
import { cCatalogue, rCatalogue, rCatalogueP, rCatalogueS, dCatalogues, uCatalogues} from "../controller/catalogue.js";


const router = Router();

router.get("/catalogue", rCatalogue);
router.get("/catalogue/product", rCatalogueP);
router.get("/catalogue/service", rCatalogueS);
router.post("/catalogue", cCatalogue);
router.delete("/catalogue:_id", dCatalogues);
router.patch("/catalogue:id", uCatalogues);

export default router;