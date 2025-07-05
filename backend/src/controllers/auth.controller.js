import User from "../models/User.js";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
    // Handle signup logic here
    const {fullName, password, email} = req.body;

    try {
        if (!email || !password || !fullName) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists, please use a differnet mail" });
        }

        const idx = Math.floor(Math.random() * 100) + 1;
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`

        const newUser = await User.create({
            email,
            fullName,
            password,
            profilePic: randomAvatar,

        })

        //TODO: CREATE THE USER IN STREAM AS WELL

        const token = jwt.sign({userId: newUser._id},process.env.JWT_SECRET_KEY,{
            expiresIn:"7d"
        })
        res.cookie("jwt",token, {
            maxAge: 7*24*60*60*1000,
            httpOnly: true, // prevent xss attacks
            sameSite: "strict",
            secure: process.env.NODE_ENV ==="production"

        })
        res.status(201).json({success:true, user:newUser })



    }
    catch (error) {
        console.log("Error in signup controler", error);
        res.status(500).json({message: "Internal Server Error"});

    }
}

export async function login(req, res) {
    // Handle signup logic here
    res.send("Signup route");
}

export function logout(req, res) {
    // Handle signup logic here
    res.send("Signup route");
}