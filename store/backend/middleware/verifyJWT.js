const jwt = require("jsonwebtoken");

exports.verifyJWT = (req, res, next) => {
    console.log(req.headers);
    const authorizationHeader = req.headers["authorization"];

    console.log(authorizationHeader)

    if (!authorizationHeader) {
        return res.status(401).send("Authorization failed");
    }

    const token = authorizationHeader.substring(1, authorizationHeader.length - 1)
    // const token = authorizationHeader.split("")[1];
    console.log(token);

    const secret = "PrivateKey123"

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            console.error(err);
            res.status(401).send("Authorization failed");
            return;
        }

        console.log(decoded);
        next();
    })
}