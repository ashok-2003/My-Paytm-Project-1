// so now here we have to do the middleware checking 
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const authMiddleware = (req , res , next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({})
    }
    const token = authHeader.split(' ')[1] // taking the second element

    try{
        const decode = jwt.verify(token , JWT_SECRET)
        if(decode.userId){
            req.userId = decode.userId;

            next();
        }else{
            res.status(403).json({})
        }
    }catch (err){
        res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}