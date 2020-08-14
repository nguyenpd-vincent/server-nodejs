const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const models = require("../models/index");

const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
const { JWT_SECRET } = process.env;


const secretOrKey = JWT_SECRET;

class JWTService {
    static generateTokenUser(userModel) {
        if (!userModel) {
            return false;
        }
        const { id, username, email, role } = userModel;
        return jwt.sign({ id, username, email, role }, secretOrKey)
    }

    static JWTStartegy() {
        return new JwtStrategy({ jwtFromRequest, secretOrKey, passReqToCallback: true },
            async(req, jwtPayload, next) => {
                const { id } = jwtPayload;
                try {
                    const userModel = await models.users.findOne({ where: { id } });
                    next(null, userModel || false);
                } catch (e) {
                    next(null, false)
                }
            },
        );
    }
}
module.exports = JWTService;