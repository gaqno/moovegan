import React, { createContext, useState } from 'react';

type UserType = {
  email: string;
  password: string;
  isAuth: boolean;
};

type AuthContextData = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    email: '',
    password: '',
    isAuth: false,
  },
  setState: () => {},
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <AuthContext.Provider value={{ state, setState }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
