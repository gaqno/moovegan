import React, { createContext, useContext, useState } from 'react';
import LoginService from '../services/auth.service';
import { ILogin } from '../interface/login';

interface User {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user?: User | null;
  signIn(params: ILogin): Promise<void>;
  signOut(): void;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (login: ILogin) => {
    const response = await LoginService.postLogin(login);
    const { token, user } = response;
    setUser(response.user)
  }

  const signOut = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}

export { AuthProvider, useAuth };