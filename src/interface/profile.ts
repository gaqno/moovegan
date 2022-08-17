export interface IProfile {
  id: number;
  dateTime: string;
  isLaunchOnly: boolean;
  token: string;
  isConcierge: boolean;
  lastIsOnline: boolean;
  avatar: string;
  name: string;
  email: string;
  androidInformation: string;
  ranking: number;
  isValidated: boolean;
  creci: number;
}
