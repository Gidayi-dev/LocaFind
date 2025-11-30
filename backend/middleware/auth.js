// import jwt from 'jsonwebtoken';
// import User from '../models/User';

// // Generate JWT token
// export const generateToken = (userId) => {
//     return jwt.sign({ userId }, process.env.JWT_SECRET, {
//         expiresIn: '7d'
//     })
// }

// // Verify JWT token middleware
// export const protect = async (req, res, next) => {
//     try {
//         let token;

//         // Check if token exists in headers
//         if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//             token = req.headers.authorization.split(' ')[1]
//         }

//         if (!token) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'Not authorized to access this route'
//             })
//         }
//         // Verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET)

//         // Get user from token
//         req.user = await User.findById(decoded.userId).select('-password')

//         if (!req.user) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'User not found'
//             })
//         }
//         next()
//     } catch (error) {
//         return res.status(401).json({
//             success: false,
//             message: 'Not authorized to access thi route'
//         })
//     }
// }

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/**
 * Generate JWT token
 * @param {string} userId - The user ID to encode in the token
 * @returns {string} JWT token
 */
export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d' // Token expires in 7 days
  });
};

/**
 * Verify JWT token middleware
 * Protects routes by validating JWT tokens and attaching user to request
 */
export const protect = async (req, res, next) => {
  try {
    let token;

    // Check if token exists in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to access this route'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from token
    req.user = await User.findById(decoded.userId).select('-password');

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    });
  }
};