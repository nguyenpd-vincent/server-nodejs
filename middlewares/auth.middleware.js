const validator = require('./../src/helpers/validate');
const bcrypt = require("bcryptjs")
const models = require('./../models/index');
// const { check, validationResult } = require("express-validator")

const signup = (req, res, next) => {
    const validationRule = {
        "email": "required|email",
        "username": "required|string|min:6",
        "password": "required|min:6",
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
                console.log(err.errors)
        } else {
            next();
        }
    });
}

const login = (req, res, next) => {
    const {email, password} = req.body;
    const validationRule = {
        "email": "required|email",
        "password": "required|min:6",
    }
    validator(req.body, validationRule, {},async (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        }else{
            const user = await models.users.findOne({where: {email}})
            if(!user){
                res.status(403).json({
                    'message': 'Not found user'
                });
            }
            if(user && !(await bcrypt.compare(password, user.password))){
                res.status(403).json({
                    'message': 'Password error'
                });
            }
            next();
        }
    });

    



}

module.exports = { 
  signup,
  login
}

