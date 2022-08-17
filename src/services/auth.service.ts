import { ILogin } from '../interface/login';
import { accessControl } from './index.axios';

interface Response {
  token: string;
  user: {
    email: string,
    password: string
  }
}

class LoginService {
  static async postLogin(login: ILogin): Promise<Response> {
    return await accessControl
      .post('/auth/login', login)
      .then((res) => res.data)
      .catch((error) => {
        return console.error(error.response.status, 'API problems');
      });
  }
  static async getUser(login: ILogin) {
    return await accessControl.post('/auth/profile', login).then((res) => res.data);
  }
}
export default LoginService;
