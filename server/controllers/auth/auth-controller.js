const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./../../models/User');

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = '7d';

let refreshTokens = []; // Temporary storage, move this to a database for production

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
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User with provided email does not exist.',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials.',
            });
        }

        // Check if ACCESS_TOKEN_SECRET is defined
        if (!process.env.ACCESS_TOKEN_SECRET) {
            console.error("ACCESS_TOKEN_SECRET is undefined");
            return res.status(500).json({
                success: false,
                message: "Internal server error. Missing JWT secret.",
            });
        }

        // Generate tokens
        const accessToken = jwt.sign({ id: user._id, role: user.role }, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });
        const refreshToken = jwt.sign({ id: user._id }, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
        
        refreshTokens.push(refreshToken); // Save refresh token securely in DB

        // Save refresh token in cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            //sameSite: 'Strict',
            sameSite: 'None', // Allow cross-origin requests
        });

        res.status(200).json({
            success: true,
            message: 'Login successful!',
            isAuthenticated: true,
            accessToken,
            user: user, // Return the role with the response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
        });
    }
};

// Logout User
const logoutUser = (req, res) => {
    const { refreshToken } = req.cookies;
    try {
        if (!refreshToken) return res.status(400).json({ message: 'No refresh token provided' });
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken); // Remove from Databse
        // Clear the cookie
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'None',
        });
        res.status(200).json({
            success: true,
            isAuthenticated: false,
            message: 'Logged out successfully!',
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
    const accessToken = req.headers.authorization?.split(' ')[1];
    if (!accessToken) {
        return res.status(401).json({
            success: false,
            message: 'Authentication token missing.',
        });
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
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
