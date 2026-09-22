const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Website files
app.use(express.static(__dirname));

// Admin Login
app.post("/login", (req, res) => {
    const { Userid, password } = req.body;

    if (
        Userid === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASSWORD
    ) {
        res.json({
            success: true
        });
    } else {
        res.json({
            success: false
        });
    }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});