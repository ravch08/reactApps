import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext({});

export type UserProps = {
  email: string;
  password: string;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
