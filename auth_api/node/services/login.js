
import crypto from "crypto"
import { generateToken } from "../config/token"
import connectionPool from "../config/db"


export const loginFunction =  async (username, password) => {
	console.log(username, password);

	let salt;
	if (username === "admin") {
		salt = "F^S%QljSfV";
	}
	else if (username === "noadmin") {
		salt = "KjvFUC#K*i";
	}
	else {
		salt = "ykptwoT=M(";
	}

	const prependedPassword = password + salt;


	const hash = crypto.createHash('sha512').update(prependedPassword, 'utf-8').digest('hex');

	console.log(prependedPassword, hash)



	const [rows, fields] = await connectionPool.query('SELECT * FROM `users` WHERE `username` = ? AND `password` = ?',
		[username, hash])

		console.log(rows)
		if(rows.length > 0){
			return generateToken(rows[0].role)
		}
		return "Wrong Credentials"
		
	
	
};
