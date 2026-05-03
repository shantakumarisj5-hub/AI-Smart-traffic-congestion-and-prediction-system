const path = require("path");
const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: path.join(__dirname, ".env") });

// ✅ FIRST create app
const app = express();

// ✅ THEN use middleware
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://127.0.0.1:5500",
        "http://localhost:5500",
        "https://ai-smart-traffic-congestion-and-pre.vercel.app"
    ],
    credentials: true
}));

app.use(express.json({ limit: "1mb" }));