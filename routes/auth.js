const express = require("express");
const router = express.Router();
const authController = require('../controllers/auth.controller')
const AuthMiddleware = require('../middlewares/auth.middleware')


// router.post("/login", (req, res)=> authController.login(req, res))
router.post("/register", (req, res, next)=>AuthMiddleware.signup(req, res, next), (req,res)=>authController.register(req, res))
router.post("/login", (req, res, next)=>AuthMiddleware.login(req, res, next), (req,res)=>authController.login(req, res))

module.exports = router;
