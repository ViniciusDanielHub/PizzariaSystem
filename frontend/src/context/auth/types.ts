import { ReactNode } from "react";

export interface IContext{
  user: IUser | undefined;
  isAuthenticated: any;
  signIn: (credentials: IAuthentication) => Promise<void>
  signUp: (credentials: IRegister) => Promise<void>
  signOut: () => void;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IAuthentication {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface AuthProviderProps {
  children: ReactNode
}
