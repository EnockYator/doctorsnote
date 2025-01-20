const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../../models/User');

// Register Customer
const registerCustomer = async (req, res) => {
    const { userName, email, password, role } = req.body;
    try {
        const existingCustomer = await User.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({
                success: false,
                message: 'User with provided email already exists.',
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            role,
            password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'Registration successful, redirecting to Login.,',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An unexpected error occurred. Please check your internet connection or try again later.',
        });
    }
};

// Register Admin
const registerAdmin = async (req, res) => {
    const { userName, email, password, adminCode, role } = req.body;
    try {
        const existingAdmin = await User.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: 'User with provided email already exists.',
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
            adminCode,
            role
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'Registration successful, redirecting to Login.,',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An unexpected error occurred. Please check your internet connection or try again later.',
        });
    }
};

// Register Doctor
const registerDoctor = async (req, res) => {
    const { userName, gender, country, city, specialization, institution, certificate, email, password, confirmPassword, role} = req.body;
    try {
        const existingDoctor = await User.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({
                success: false,
                message: 'User with provided email already exists.',
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            userName,
            gender,
            country,
            city,
            specialization,
            institution,
            certificate,
            email,
            confirmPassword: hashedPassword,
            password: hashedPassword,
            role
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: 'Registration successful, redirecting to Login.,',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An unexpected error occurred. Please check your internet connection or try again later.',
        });
    }
};


// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: 'User with provided email does not exist.',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials, check your email or password.',
            });
        }

        // Check if JWT_SECRET is defined
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is undefined");
            return res.status(500).json({
                success: false,
                message: "Internal server error. Missing JWT secret.",
            });
        }

        // Sign your JWT token
        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            success: true,
            message: 'Login successful!',
            isAuthenticated: true,
            token,
            user: existingUser, // Return the role with the response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An unexpected error occurred. Please try again later.',
        });
    }
};

// Logout User
const logoutUser = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            isAuthenticated: false,
            user: null, 
            message: 'Logout successful!',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An unexpected error occurred while loging out.',
        });
    }
    
};

// Auth Middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Authentication token missing.',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Invalid or expired token.',
        });
    }
};

module.exports = { registerCustomer, registerDoctor, registerAdmin, loginUser, logoutUser, authMiddleware };
