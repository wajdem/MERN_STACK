const User = require('../models/User');

// Controller function to create a new user
const createUser = (req, res) => {
  // Implement validation for user input if required
  const { username, email, password, role } = req.body;

  // Assuming the user's role is set based on the request or authentication
  // For example, if the request has a token with user information, you can set the role from there
  // Do not allow unauthorized users to set the 'role' field

  const newUser = new User({
    username,
    email,
    password,
    role
  });

  newUser.save((err, user) => {
    if (err) {
      return res.status(400).json({ error: 'Error creating user' });
    }
    return res.status(201).json({ message: 'User created successfully', user });
  });
};

// Implement other controller functions for getting, updating, and deleting users

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
