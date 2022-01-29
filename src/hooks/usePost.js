import { useCallback, useState } from 'react';
import axios from 'axios';

export const usePost = (url, payload = {}) => {
  const [res, setRes] = useState({ data: null, error: null, isLoading: false });

  const callAPI = useCallback(() => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    axios.post(url, payload).then((response) => {
      setRes({ data: response.data, isLoading: false, error: null });
    }).catch((error) => {
      setRes({ data: null, isLoading: false, error });
    });
  }, [url, payload]);
  return [res, callAPI];
};
