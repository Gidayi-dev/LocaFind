import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

// SIGNUP
router.post('/signup', async (req, res) => {
  try {
    console.log('Signup request received:', req.body);
    
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

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required'
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      phone,
      password,
      role,
      businessName: role === 'vendor' ? businessName : undefined,
      businessType: role === 'vendor' ? businessType : undefined,
      businessAddress: role === 'vendor' ? businessAddress : undefined,
      businessDescription: role === 'vendor' ? businessDescription : undefined
    });

    // Generate token
    const token = generateToken(user._id);

    // Return response
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
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error during signup',
      error: error.message
    });
  }
});

// SIGNIN
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Find user
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate token
    const token = generateToken(user._id);

    // Return response
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
      error: error.message
    });
  }
});

export default router;