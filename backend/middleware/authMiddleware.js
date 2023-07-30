const checkAdminRole = (req, res, next) => {
    const userRole = req.user.role; // Assuming you have the user's role in the request object after authentication
    if (userRole === 'Admin' || userRole === 'Super Admin') {
      next();
    } else {
      return res.status(403).json({ error: 'Unauthorized. Admin access required.' });
    }
  };
  
  module.exports = {
    checkAdminRole
  };