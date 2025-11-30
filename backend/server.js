// import express from 'express'
// import cors from 'cors'
// import helmet from 'helmet'
// import morgan from 'morgan'
// import { config } from 'dotenv'
// import connectDB from './config/database.js'
// import authRoutes from './routes/auth.js'

// config()

// const app = express();
// const PORT = process.env.PORT

// // Connect to MongoDB
// connectDB()

// // Security headers
// app.use(helmet())

// // CORS - allow requests from frontend
// app.use(cors({
//     origin: process.env.CLIENT_URL || 'http://localhost:3000',
//     credentials: true

// }))

// // Logging
// app.use(morgan('combined'))

// // Parse JSON bodies
// app.use(express.json({ limit: '10mb' }))

// app.get('/', (req, res) => {
//     res.json({
//         message: "Locafind Backend Server is running",
//         timestamp: new Date().toISOString(),
//         status: 'OK'
//     });
// });

// app.get('/api/health', (req, res) => {
//     res.json({
//         success: true,
//         message: 'LocaFind Backend is running',
//         timestamp: new Date().toISOString(),
//         environment: process.env.NODE_ENV
//     });
// });

// // Authentication routes
// app.use('/api/auth', authRoutes)

// // 404 handler
// app.use('*', (req, res) => {
//     res.status(404).json({
//         success: false,
//         message: 'Route not found'
//     })
// })

// // Global error handler
// app.use((error, req, res, next) => {
//     console.error('Global error handler:', error)

//     res.status(500).json({
//         success: false,
//         message: 'Something went wrong on the server',
//         error: process.env.NODE_ENV === 'development' ? error.message : undefined
//     })
// })

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// })

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from 'dotenv'
import connectDB from './config/database.js'
import authRoutes from './routes/auth.js'

config()

const app = express();
const PORT = process.env.PORT || 5000  // ← FIXED: Added fallback

// Connect to MongoDB
connectDB()

// Security headers
app.use(helmet())

// CORS - allow requests from frontend
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}))

// Logging
app.use(morgan('combined'))

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }))

app.get('/', (req, res) => {
    res.json({
        success: true,  // ← ADDED: For consistency
        message: "LocaFind Backend Server is running",
        timestamp: new Date().toISOString(),
        status: 'OK'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'LocaFind Backend is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'  // ← ADDED: Fallback
    });
});

// Authentication routes
app.use('/api/auth', authRoutes)

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    })
})

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error handler:', error)

    res.status(500).json({
        success: false,
        message: 'Something went wrong on the server',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
})