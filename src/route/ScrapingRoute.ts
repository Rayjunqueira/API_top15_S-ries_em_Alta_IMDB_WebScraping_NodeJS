import { Router } from "express";

import Scrapping from '../controller/scraping';

const router = Router();

router.get('/', Scrapping.index);

export default router;