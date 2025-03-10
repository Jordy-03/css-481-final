/* Imported so as not to clutter auth.routes.js */
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";	// Hashes passwords
import { generateToken } from "../lib/utils.js"; // import generatetoken from "../lib/utils.js";


export const signup = async (req, res) => {
	const { fullName, email, password } = req.body;
	try {
		if (!fullName || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		if (password.length < 2) {
			return res.status(400).json({ message: "Password must be at least 2 characters" });
		}

		const user = await User.findOne({ email })
		if (user) {
			return res.status(400).json({ message: "Email already exists" });
		}
		
		// Hash password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create new user
		const newUser = new User({
			fullName,
			email,
			password: hashedPassword
		});

		console.log("full name", fullName);

		if (newUser) {
			// generate jwt token
			generateToken(newUser._id, res) // Note: _id is how MongoDB stores the id
			await newUser.save();	// Save user to database

			res.status(201).json({ message: "User created successfully" }); // 201 = created
		} else {
			return res.status(400).json({ message: "Failed to create user" });
		}
	} catch (error) {
		console.log("ERROR [auth.controller.js]: signup controller failed", error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const login = (req, res) => {
	res.send("signup route");
};

export const logout = (req, res) => {
	res.send("signup route");
};