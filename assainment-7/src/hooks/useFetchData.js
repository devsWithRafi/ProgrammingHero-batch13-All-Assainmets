import React, { useEffect, useState } from 'react';

const useFetchData = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setError('');
      setLoading(true);
      const res = await fetch(url);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return res.json();
      
    } catch (error) {
      console.log(error);
      setError(error.message || 'Data Fetch Error');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchData };
};

export default useFetchData;
