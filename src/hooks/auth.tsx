import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
}
interface AuthContextDate {
  token: string;
  signIn(code: object): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextDate>({} as AuthContextDate);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('GitHub:Token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ code }) => {
    const response = await api.get(`/api/login/${code}`);

    const { token } = response.data;
    localStorage.setItem('GitHub:Token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token });
  }, []);
  const signOut = useCallback(() => {
    localStorage.removeItem('GitHub:Token');

    setData({} as AuthState);
  }, []);
  
  return (
    <AuthContext.Provider
      value={{token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextDate {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth must be used within a AuthProvider');
  }
  return context;
}
export { AuthProvider, useAuth };
