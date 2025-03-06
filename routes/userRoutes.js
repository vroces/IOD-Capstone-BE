const express = require("express");
const { registerUser, loginUser, updateUser, getUserById, getAllUsers } = require("../controllers/userController");

const router = express.Router();

// Register route
router.post("/register", registerUser);
// http://localhost:5002/api/register

// Login route
router.post("/login", loginUser);
// http://localhost:5002/api/login

// Update user route
router.put("/update/:userId", updateUser);
// http://localhost:5002/api/update/{userID}

// Get user by ID route
router.get("/user/:userId", getUserById);
// GET http://localhost:5002/api/user/{userID}

// Get all users route
router.get("/users", getAllUsers);
// GET http://localhost:5002/api/users


module.exports = router;
