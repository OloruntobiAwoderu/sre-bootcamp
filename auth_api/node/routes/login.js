import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
 
  let response = {
    "data": await loginFunction(username, password)
  };
  let status = 200
  if(response.data == "Wrong Credentials"){
	status = 403
  }
  res.status(status).send(response);
  next();
}
