const express = require("express");
const router = express.Router();
const categoriesController = require("./../controllers/categories.controller");
const categoriesMiddlewarw = require("./../middlewares/categories.middleware");

router.get("/", (req, res)=>categoriesController.getList(req, res));

module.exports = router;
