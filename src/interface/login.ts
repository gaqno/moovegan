export interface ILogin {
  email: string;
  password: string;
}
export interface LoginResponse {
  id: number;
  dateTime: number;
  isLaunchOnly: boolean;
  worksWithPrepared: boolean;
  worksWithLaunch: boolean;
  token: string;
  isConcierge: false;
  lastIsOnline: true;
  avatar: string;
  name: string;
  email: string;
  androidInformations: undefined;
  ranking: number;
  isValidated: boolean;
  creci: undefined;
}
