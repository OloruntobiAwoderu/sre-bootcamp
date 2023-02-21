import jwt from "jsonwebtoken";


const JWTSECRET = "my2w7wjd7yXF64FIADfJxNs1oupTGAuW";


const generateToken = (role) => {
	const payload = {
		role
	};
	const options = {
		expiresIn: '1d'
	};
	try {
		const token = jwt.sign(payload, JWTSECRET, options);
		return token
	} catch (err) {
		return "Error generating token";
	}
};

const verifyToken = (token) => {
	const decoded = jwt.verify(token, JWTSECRET)
	if(decoded.role == "admin" || decoded.role == "viewer" || decoded.role == "editor"){
		return next()
	}
	return "Invalid token"
}

module.exports = {
	verifyToken,
	generateToken
}