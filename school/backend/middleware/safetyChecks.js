exports.idIsNotNumber = (req, res, next) => {
    if (isNaN(parseInt(req.params.id))) {
        res.status(403).send("id should be a number!");
    } else {
        next();
    }
}

exports.nameNotGiven = (req, res, next) => {
    if (!req.body.name) {
        res.status(403).send("please include a name")
    } else {
        next();
    }
}