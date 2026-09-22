const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});