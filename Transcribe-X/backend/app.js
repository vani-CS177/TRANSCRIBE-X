// app.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => console.log("MongoDB connected successfully ✅"))
  .catch((err) => console.error("MongoDB connection error ❌", err));

// API Routes
const authRoutes = require("./routes/userRoutes");
app.use("/api/auth", authRoutes); // <-- IMPORTANT (login, register)

// ------------------------------
// Serve Frontend
// ------------------------------
const frontendPath = path.join(__dirname, "frontend");
app.use(express.static(frontendPath));

// Serve index.html for any other route (Frontend Routing Support)
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ------------------------------
// Error Handlers
// ------------------------------

// 404 Handler (for unmatched API routes)
app.use("/api/*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

// ------------------------------
// Start Server
// ------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
