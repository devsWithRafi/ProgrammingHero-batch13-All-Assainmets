'use client';

import { useEffect, useState } from 'react';
import { FriendContext } from './friendContext';
import useFetchData from '@/hooks/useFetchData';

const FriendContextProvider = ({ children }) => {
  const [friendsData, setFriendsData] = useState([]);
  const { loading, fetchData } = useFetchData();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData('/data/friends.json');
      setFriendsData(data);
    };
    loadData();
  }, []);

  return (
    <FriendContext value={{ loading, friendsData }}>
       {children}
    </FriendContext>
  );
};

export default FriendContextProvider;
