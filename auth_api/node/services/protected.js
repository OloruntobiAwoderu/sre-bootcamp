import { verifyToken } from "../config/token"

export const protectFunction = (authorization) => {
  if(authorization.startsWith("Bearer ")){
	const TokenArray = authorization.split(" ");
	const result = verifyToken(TokenArray[1])
	if(result == "Valid token"){
		return "You are under protected data"
	}
	return result;
  }

}
