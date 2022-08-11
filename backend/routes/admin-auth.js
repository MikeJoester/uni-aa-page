const router = require("express").Router();
const User = require("../models/admin.model");
const bcrypt = require("bcrypt")

// register
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            full_name: req.body.full_name,
            username: req.body.username,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        const validated = await bcrypt.compare(req.body.password, user.password)
        if (user && validated)
            res.status(200).json(user)
        else
            res.status(400).json("Something's wrong I can feel it")

        
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;