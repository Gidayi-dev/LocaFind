import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Connect to DB
connectDB();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
  })
);

// app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined'));

// Body parsing
app.use(express.json({ limit: '10mb' }));

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'LocaFind Backend Server is running',
    timestamp: new Date().toISOString(),
    status: 'OK'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'LocaFind Backend is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Auth routes
app.use('/api/auth', authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Global error handler
app.use((error, req, res) => {
  console.error('Global error handler:', error);

  res.status(500).json({
    success: false,
    message: 'Something went wrong on the server',
    error:
      process.env.NODE_ENV === 'development'
        ? error.message
        : undefined
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
