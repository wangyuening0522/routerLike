import { useEffect } from 'react';

const useUnMount = (callback) => {
  useEffect(() => {
    return () => {
      if (typeof callback === 'function') {
        callback();
      }
    };
  }, []);
};

export default useUnMount;