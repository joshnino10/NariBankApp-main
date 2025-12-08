import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our context
interface GlobalContextType {
  email: string;
  password: string;
  confirmPassword: string;
  referralCode: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setReferralCode: (referralCode: string) => void;
  resetAll: () => void;
}

// Create the context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Provider Props
interface GlobalProviderProps {
  children: ReactNode;
}

// Provider Component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const resetAll = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setReferralCode('');
  };

  const value: GlobalContextType = {
    email,
    password,
    confirmPassword,
    referralCode,
    setEmail,
    setPassword,
    setConfirmPassword,
    setReferralCode,
    resetAll,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export default GlobalContext;