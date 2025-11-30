
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// User schema
const userSchema = new mongoose.Schema({
    // User fields
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {  
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 8,
        select: false 
    },
    role: {
        type: String,
        enum: ['user', 'vendor', 'admin'],
        default: 'user'
    },
    // Business fields (only for vendors)
    businessName: {
        type: String,
        required: function() {
            return this.role === 'vendor';
        }
    },
    businessType: {  // ← ADDED: Missing field!
        type: String,
        required: function() {
            return this.role === 'vendor';
        }
    },
    businessAddress: {
        type: String,
        required: function() {
            return this.role === 'vendor';
        }
    },
    businessDescription: {
        type: String,
        default: ''
    }

}, {
    timestamps: true // MongoDB will automatically add createdAt and updatedAt
});

// Middleware: Hash password before saving
userSchema.pre('save', async function () {
    // Only hash the password if it's modified or new
    if (!this.isModified('password')) return

    // Hash password with bcrypt
    this.password = await bcrypt.hash(this.password, 12)
})

// Method to check if password is correct
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

// Create the User model from the schema
const User = mongoose.model('User', userSchema)

export default User;