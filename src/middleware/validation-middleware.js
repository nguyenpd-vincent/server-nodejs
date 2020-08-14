const validator = require('../helpers/validate');

const signup = (req, res, next) => {
    console.log(signup)
    const validationRule = {
        "email": "required|email",
        "username": "required|string",
        "password": "required|string|min:6|confirmed",
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = { 
  signup
}