const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get token from header
    token = req.header('x-auth-token');

    // Check if not token
    if(!token) {
        // 401 = not authorized
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Verify token
    try {
        decoded = jwt.verify(token, config.get('testToken'));

        // Decoded value has user in its payload, user is attached with id in the payload
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status('401').json({ msg: "Token is not valid" });
    }
}
