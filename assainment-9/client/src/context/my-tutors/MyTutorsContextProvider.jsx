'use client';

import { jwtClientToken } from '@/lib/auth-client';
import { fetchMyTutors } from '@/services/apis/fetchMyTutors';
import { useContext, useEffect, useState } from 'react';
import { MyTutorsContext } from './MyTutorsContext';

const MyTutorsContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [myTutors, setMyTutors] = useState([]);

  const loadMyTutors = async () => {
    try {
      setLoading(true);
      const getToken = await jwtClientToken();
      if (getToken.success) {
        const result = await fetchMyTutors({ token: getToken.token });
        setMyTutors(result);
      } else {
        console.log('Auth-Token not found');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMyTutors();
  }, []);

  return (
    <MyTutorsContext.Provider value={{ loading, myTutors, loadMyTutors }}>
      {children}
    </MyTutorsContext.Provider>
  );
};

export default MyTutorsContextProvider;

export const useMyTutors = () => {
  const context = useContext(MyTutorsContext);
  if (!context) {
    throw new Error('useMyTutors must be used within a MyTutorsProvider');
  }
  return context;
};
