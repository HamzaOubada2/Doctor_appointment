//Protected Routes
const jwt = require('jsonwebtoken');


const auth = (requiredRole = null) => {
    return async (req, res, next) => {
        const authHeader = req.header("Authorization");
        if (!authHeader) return res.status(401).json({ message: "Not Authorized!!" });

        // Check Bearer token
        const token = authHeader.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Invalid token format" });

        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded; // id and email from token

            if(requiredRole && decoded.role !== requiredRole) {
                return res.status(403).json({
                    message:"Access denied. Insufficient permissions!"
                })
            }
            next(); // go to route
        } catch (err) {
            res.status(401).json({ message: "Invalid or expired token" });
        }
    };
}
module.exports = auth;




//1- User will authenticate and the server will give them a JWT Token
//2- User wants to create a new Appointment
//3- User sends Authorization header: Bearer <JWT Token> with the request
//4- Middleware:
//     - reads the token from the header
//     - verifies the token
//     - decodes the token and puts the information (email and id) into req.user
//5- Route handler uses req.user.id to store it in the appointment along with date, doctor, and reason

