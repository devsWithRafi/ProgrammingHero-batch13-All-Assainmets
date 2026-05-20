'use client';

import { jwtClientToken } from '@/lib/auth-client';
import { fetchMyBookSessionsData } from '@/services/apis/fetchMyBookSessionsData';
import { useContext, useEffect, useState } from 'react';
import { BookSessionContext } from './bookSessionContext';

const BookSessionContextProvider = ({ children }) => {
  const [myBookSession, setMyBookSession] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadSessionData = async () => {
    try {
      setLoading(true);
      const getToken = await jwtClientToken();
      if (getToken.success) {
        const data = await fetchMyBookSessionsData({ token: getToken.token });
        setMyBookSession(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSessionData();
  }, []);

  return (
    <BookSessionContext.Provider
      value={{ myBookSession, setMyBookSession, loading, loadSessionData }}
    >
      {children}
    </BookSessionContext.Provider>
  );
};

export default BookSessionContextProvider;

export const useMyBookSession = () => {
  const context = useContext(BookSessionContext);
  if (!context) {
    throw new Error(
      'useMyBookSession must be used within a BookSessionProvider',
    );
  }
  return context;
};
