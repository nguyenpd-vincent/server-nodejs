const express = require("express");
const router = express.Router();
const articleControler = require("./../controllers/article.controller");
const articleMiddleware = require("./../middlewares/article.middleware");
const authController  = require("./../controllers/auth.controller")
router.post("/",(req, res,next)=>authController.verifyToken(req, res,next),(req, res)=>articleControler.getAllArticle(req, res))


module.exports = router;