require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const crypto = require('crypto');
const URI = process.env.MONGO_URI;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes');

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected Successfully!'))
.catch((error) => console.log("Failed to connect to mongodb:\n", error.message));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173', //Frontend URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            'Content-Type',
            'Cache-Control',
            'Authorization',
            'Expires',
            'Pragma',
        ],
        credentials: true, // Allow credentials (cookies)
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);

// log incoming requests to verify if reaches the server
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// generating jwt secret key using crypto
//const secret = crypto.randomBytes(64).toString("hex");
//console.log("JWT_Secret_key: \n" + secret);