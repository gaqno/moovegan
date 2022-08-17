import { AxiosResponse } from 'axios';
import { IProfile } from './profile';

export interface a {
  username?: string;
  password?: string;
  request?: AxiosResponse;
  profile?: IProfile;
}
export interface ILogin {
  username?: string;
  password?: string;
}

export interface LoginContextData {
  actionsheet: boolean;
  user: ILogin
}