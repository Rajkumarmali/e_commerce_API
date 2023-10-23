const Users = require("../modles/Users");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const registerController = async (req, res) => {
    try {
        // console.log("Request body:", req.body);
        const existingUser = await Users.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "user already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashPassword;

        const user = new Users(req.body)
        await user.save();

        return res.status(201).send({
            success: true,
            message: "User Register Successful",
            user
        })

    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in Register API",
            err
        })
    }
}

const loginController = async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (!user) {
            return res.status(500).send({
                success: false,
                message: "User Not found"
            })
        }

        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: "Invalid Password"
            })
        }
        if (user.role != req.body.role) {
            return res.status(500).send({
                success: false,
                message: "Role does not match"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' });
        return res.status(200).send({
            success: true,
            message: "Successfully Login",
            token,
            user
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            message: "Error in Login API",
            err
        })
    }
}

module.exports = { registerController, loginController }