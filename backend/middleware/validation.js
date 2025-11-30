// export const validateSignup = (req, res, next) => {
//     const { name, email, password, role, businessName, businessType, businessAddress } = req.body

//     // Check required fields
//     if (!name || !email || !password) {
//         return res.status(400).json({
//             success: false,
//             messsage: 'Name, email, and password are required'
//         })
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//         return res.status(400).json({
//             success: false,
//             message: 'Please provide a valid email'
//         })
//     }

//     // Validate password length
//     if (password.length < 8) {
//         return res.status(400).json({
//             success: false,
//             message: 'Password must be atleast 8 characters'
//         })
//     } 

//     // Validate role
//     if (role && !['user', 'vendor'].includes(role)) {
//         return res.status(400).json({
//             success: false,
//             message: 'Role must be either "user" or "vendor"'
//         })
//     }

//     // Validate vendor-specific fields
//     if (role === 'vendor') {
//         if (!businessName || !businessType || !businessAddress) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Business name, type, and address are required for vendors'
//             })
//         }
//     }

//     next()
// }

// // Validation for signin
// export const validateSignin = (req, res, next) => {
//     const { email, password } = req.body

//     if (!email || !password) {
//         return res.status(400).json({
//             success: false,
//             message: 'Email and password are required'
//         })
//     }
//     next()
// }

export const validateSignup = (req, res, next) => {
    const { name, email, password, role, businessName, businessType, businessAddress } = req.body

    // Check required fields
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Name, email, and password are required'  // ← FIXED: Typo
        })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a valid email'
        })
    }

    // Validate password length
    if (password.length < 8) {
        return res.status(400).json({
            success: false,
            message: 'Password must be at least 8 characters'  // ← FIXED: Typo
        })
    } 

    // Validate role
    if (role && !['user', 'vendor'].includes(role)) {
        return res.status(400).json({
            success: false,
            message: 'Role must be either "user" or "vendor"'
        })
    }

    // Validate vendor-specific fields
    if (role === 'vendor') {
        if (!businessName || !businessType || !businessAddress) {
            return res.status(400).json({
                success: false,
                message: 'Business name, type, and address are required for vendors'
            })
        }
    }

    next()
}

// Validation for signin
export const validateSignin = (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required'
        })
    }
    next()
}