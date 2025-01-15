const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { User, Account } = require('../db');
const zod = require('zod');
const JWT_SECRET = require('../config');
const authMiddleware = require('../middleware').authMiddleware;

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(4),
    firstname: zod.string().min(1),
    lastname: zod.string().optional()
});

router.post('/signup', async (req, res) => {
    const { success, error } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid request body", error: error.errors });
    }

    const body = req.body;
    const user = await User.findOne({
        username: body.username
    });

    if (user) {
        return res.json({
            message: "Email already taken / Incorrect inputs"
        });
    }

    const dbuser = await User.create(body);
    // so now creating the account for the user here also 
    await Account.create({
        userId: dbuser._id, 
        balance: 1 + Math.random() * 10000
    });

    const token = jwt.sign({
        userId: dbuser._id 
    }, JWT_SECRET); // so this is the token per user 
    res.json({
        message: 'User created successfully',
        token
    });
});

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(4)
});

router.post('/signin', async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: 'Email already taken / Incorrect input'
        });
    }
    // so if this passes
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    // so now if user is found 
    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        });
        return;
    }
    // so now for the case user not found
    res.status(401).json({
        message: 'Invalid credentials'
    });
});

const updateSchema = zod.object({
    username: zod.string().optional(),
    password: zod.string().optional(),
    lastname: zod.string().optional()
});

router.put('/', authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Error while updating the information"
        });
    }
    // Update user logic here
    res.json({
        message: "User information updated successfully"
    });
});

module.exports = router;
