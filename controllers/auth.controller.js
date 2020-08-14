// var mysql = require('mysql');
var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")
const models = require('./../models/index');
// const { QueryTypes } = require('sequelize');
// const { validatorMiddleware } = require('./../middlewares/auth.middleware')
const { JWT_SECRET } = process.env;
register = async (req, res) => {
    const { email, username, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 8);
    const user = await models.users.create({
        email,
        username,
        password: passwordHash,
        role: 'customer'
    });
    res.status(200).json({
        'message': 'create user successfully',
    })
}

login = async (req, res) => {
    // console.log(req);
    const { email, password, role } = req.body;
    const user = await models.users.findOne({ where: { email } });
    const token = jwt.sign({ email, password, role }, JWT_SECRET);
    if (user && user.role === 'admin') {
        return res.status(200).json({
            'message': 'You are admin',
            token
        });
    }
    if (user && user.role === 'customer') {
        return res.status(200).json({
            'message': 'You are user',
            token
        });
    }
    console.log(res)
}

/**Format token: authorization: Bearer <access_token> */
verifyToken = (req, res, next)=>{
    console.log(req.headers)
    // const bearerHeader = req.headers(['authorization']);
    // if(typeof bearerHeader!== 'undefined'){
    //     const bearer = bearerHeader.split(' ');
    //     const bearerToken = bearer[1];
    //     req.token = bearerToken;
        next();

    // }else{
    //     res.sendStatus(403)
    // }
}

module.exports = {
    login: login,
    register: register,
    verifyToken:verifyToken
}

