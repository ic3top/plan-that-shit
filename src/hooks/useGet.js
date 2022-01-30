import { useState } from 'react';
import axios from 'axios';

export function useGet(url) {
  const [res, setRes] = useState({ data: null, error: null, isLoading: false });

  const callAPI = () => {
    setRes((prevState) => ({ ...prevState, isLoading: true }));
    return axios.get(url).then((response) => {
      setRes({ data: response.data, isLoading: false, error: null });
      return response.data;
    }).catch((error) => {
      setRes({ data: null, isLoading: false, error });
    });
  };

  return [res, callAPI];
}
