//page routes
import express from "express";
// * as (because of getIndexPage and getAboutPage)
import * as photoController from "../controllers/photoController";

const router = express.Router();

router.route("/").get(photoController.createPhoto);

export default router;