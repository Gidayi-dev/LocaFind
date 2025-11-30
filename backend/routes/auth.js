// // import express from 'express';
// // import User from '../models/User.js';
// // import { generateToken } from '../middleware/auth.js'; 
// // import { validateSignin, validateSignup } from '../middleware/validation'

// // const router = express.Router()

// // router.post('/signup', validateSignup, async (req, res) => {
// //     try {
// //         const {name, email, phone, password, role = 'user', businessName, businessType, businessAddress, businessDescription = ''} = req.body
        
// //         // Check if user already exists
// //         const existingUser = await User.findOne({ email })
// //         if (existingUser) {
// //             return res.status(400).json({
// //                 success: false,
// //                 message: 'User already exists with this email'
// //             })
// //         }
// //         // Create user data object
// //         const userData = { name, email, phone, password, role }
// //         // Add business fields only for vendors
// //         if (role === 'vendor') {
// //             userData.businessName = businessName
// //             userData.businessName = businessType
// //             userData.businessAddress = businessAddress
// //             userData.businessDescription = businessDescription
// //         }

// //         // Create user in database
// //         const user = await User.create(userData)

// //         // Generate JWT token
// //         const token = generateToken(user._id)

// //         // Return response (excluding password)
// //         res.status(201).json({
// //             success: true,
// //             message: 'User created successfully',
// //             data: {
// //                 user: {
// //                     id: user._id,
// //                     name: user.name,
// //                     email: user.email,
// //                     phone: user.phone,
// //                     role: user.role,
// //                     businessName: user.businessName,
// //                     businessType: user.businessType,
// //                     businessAddress: user.businessAddress,
// //                     businessDescription: user.businessDescription,
// //                     createdAt: user.createdAt
// //                 },
// //                 token
// //             }
// //         })
// //     } catch (error) {
// //         console.error('Signup error:', error)

// //         // Handle duplicate email error (MongoDB unique constraint)
// //         if (error.code === 11000) {
// //             return res.status(400).json({
// //                 success: false,
// //                 message: 'User already exists with this email'
// //             })
// //         }

// //         res.status(500).json({
// //             success: false,
// //             message: 'Server error during signup',
// //             error: process.env.NODE_ENV === 'development' ? error.message : undefined
// //         })
// //     }
// // })

// // router.post('/signin', validateSignin, async (req, res) => {
// //     try {
// //         const { email, password } = req.body

// //         // Find user by email
// //         const user = await User.findOne({ email }).select('+password')

// //         // Check if user exists and password is correct
// //         if (!user || !(await user.correctPassword(password, user.password))) {
// //             return res.status(401).json({
// //                 success: false,
// //                 message: 'Invalid email or password'
// //             })
// //         }

// //         // Generate JWT token
// //         const token = generateToken(user._id)

// //         // Return response (excluding password)
// //         res.json({
// //             success: true,
// //             message: 'Login successful',
// //             data: {
// //                 user: {
// //                     id: user._id,
// //                     name: user.name,
// //                     email: user.email,
// //                     phone: user.phone,
// //                     role: user.role,
// //                     businessName: user.businessName,
// //                     businessType: user.businessType,
// //                     businessAddress: user.businessAddress,
// //                     businessDescription: user.businessDescription,
// //                     createdAt: user.createdAt

// //                 },
// //                 token
// //             }
// //         })
// //     } catch (error) {
// //         console.error('Signin error:', error)
// //         res.status(500).json({
// //             success: false,
// //             message: 'Serve error during signin',
// //             error: process.env.NODE_ENV === 'development' ? error.message : undefined
// //         })
// //     }
// // })

// // export default router

// import e from 'express';
// import User from '../models/User.js';
// import { generateToken } from '../middleware/auth.js';
// import { validateSignin, validateSignup } from '../middleware/validation.js'; 

// const router = e.Router();

// /**
//  * @desc    Sign up a new user
//  * @route   POST /api/auth/signup
//  * @access  Public
//  */
// router.post('/signup', validateSignup, async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       password,
//       role = 'user',
//       businessName,
//       businessType,
//       businessAddress,
//       businessDescription = ''
//     } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: 'User already exists with this email'
//       });
//     }

//     // Create user data object
//     const userData = {
//       name,
//       email,
//       phone,
//       password,
//       role
//     };

//     // Add business fields only for vendors
//     if (role === 'vendor') {
//       userData.businessName = businessName;
//       userData.businessType = businessType;
//       userData.businessAddress = businessAddress;
//       userData.businessDescription = businessDescription;
//     }

//     // Create user in database
//     const user = await User.create(userData);

//     // Generate JWT token
//     const token = generateToken(user._id);

//     // Return response (excluding password)
//     res.status(201).json({
//       success: true,
//       message: 'User created successfully',
//       data: {
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           phone: user.phone,
//           role: user.role,
//           businessName: user.businessName,
//           businessType: user.businessType,
//           businessAddress: user.businessAddress,
//           businessDescription: user.businessDescription,
//           createdAt: user.createdAt
//         },
//         token
//       }
//     });
//   } catch (error) {
//     console.error('Signup error:', error);
    
//     // Handle duplicate email error (MongoDB unique constraint)
//     if (error.code === 11000) {
//       return res.status(400).json({
//         success: false,
//         message: 'User already exists with this email'
//       });
//     }

//     res.status(500).json({
//       success: false,
//       message: 'Server error during signup',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// });

// /**
//  * @desc    Sign in user
//  * @route   POST /api/auth/signin
//  * @access  Public
//  */
// router.post('/signin', validateSignin, async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find user by email
//     const user = await User.findOne({ email }).select('+password');
    
//     // Check if user exists and password is correct
//     if (!user || !(await user.correctPassword(password, user.password))) {
//       return res.status(401).json({
//         success: false,
//         message: 'Invalid email or password'
//       });
//     }

//     // Generate JWT token
//     const token = generateToken(user._id);

//     // Return response (excluding password)
//     res.json({
//       success: true,
//       message: 'Login successful',
//       data: {
//         user: {
//           id: user._id,
//           name: user.name,
//           email: user.email,
//           phone: user.phone,
//           role: user.role,
//           businessName: user.businessName,
//           businessType: user.businessType,
//           businessAddress: user.businessAddress,
//           businessDescription: user.businessDescription,
//           createdAt: user.createdAt
//         },
//         token
//       }
//     });
//   } catch (error) {
//     console.error('Signin error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error during signin',
//       error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     });
//   }
// });

// export default router;

import express from 'express';
import User from '../models/User.js';
import { generateToken } from '../middleware/auth.js';
import { validateSignin, validateSignup } from '../middleware/validation.js'; 

const router = express.Router();

/**
 * @desc    Sign up a new user
 * @route   POST /api/auth/signup
 * @access  Public
 */
router.post('/signup', validateSignup, async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      role = 'user',
      businessName,
      businessType,
      businessAddress,
      businessDescription = ''
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    // Create user data object
    const userData = {
      name,
      email,
      phone,
      password,
      role
    };

    // Add business fields only for vendors
    if (role === 'vendor') {
      userData.businessName = businessName;
      userData.businessType = businessType;
      userData.businessAddress = businessAddress;
      userData.businessDescription = businessDescription;
    }

    // Create user in database
    const user = await User.create(userData);

    // Generate JWT token
    const token = generateToken(user._id);

    // Return response (excluding password)
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          businessName: user.businessName,
          businessType: user.businessType,
          businessAddress: user.businessAddress,
          businessDescription: user.businessDescription,
          createdAt: user.createdAt
        },
        token
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    
    // Handle duplicate email error (MongoDB unique constraint)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error during signup',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * @desc    Sign in user
 * @route   POST /api/auth/signin
 * @access  Public
 */
router.post('/signin', validateSignin, async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).select('+password');
    
    // Check if user exists and password is correct
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Return response (excluding password)
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          businessName: user.businessName,
          businessType: user.businessType,
          businessAddress: user.businessAddress,
          businessDescription: user.businessDescription,
          createdAt: user.createdAt
        },
        token
      }
    });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during signin',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;