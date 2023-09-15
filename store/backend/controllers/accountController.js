const Account = require("../models/accountModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const saltRounds = 10; 

exports.getAllAccounts = async (req, res) => {
    const result = await Account.findAll();
    res.json(result);
}

exports.addNewAccount = async (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
        // A callback function called after hash() completes.    
        if(err){
            console.error(err);
            return;
        }
        console.log(hash);
        await Account.create({
            email: req.body.email,
            password: hash
        })
    })

    const result = await Account.findAll();
    res.json(result);
}

exports.login = async (req, res) => {
    const user = await Account.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!user) {
        res.status(403).send("User not found. Please check your username and password");
        return;
    }

    console.log(user);

    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
        const payload = {
            email: req.body.email
        }

        const secret = "PrivateKey123"

        const token = jwt.sign(payload, secret, { expiresIn: "30s" });

        res.json(token);
    })
}