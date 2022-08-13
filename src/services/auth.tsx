import { accessControl } from './index.axios';
import { ILogin } from '../interface/login';
import APIError from '../errors/api';

class LoginService {
  static postLogin(login: ILogin, res?: any) {
    console.log('postLogin');
    return accessControl
      .post(`/auth/login`, login)
      .then((res) => res.data)
      .catch((error) => {
        throw new APIError(error.response.status, `API problems`);
      });
  }
  static postRegister(dto: ILogin) {
    console.log('postRegister');
    return accessControl
      .post(`/auth/login`, dto)
      .then((res) => res.data)
      .catch((error) => {
        throw new APIError(error.response.status, `API problems`);
      });
  }
}

export default LoginService;
