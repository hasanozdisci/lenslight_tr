//page routes
import express from "express";
// * as (because of getIndexPage and getAboutPage)
import * as pageController from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);

export default router;
