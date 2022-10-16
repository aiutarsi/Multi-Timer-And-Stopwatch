import React, { useState } from 'react';

function usePersisit(ky: string) {
  const key: string = "hooks:" + ky;
  const value = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    catch (err) {
      console.log(err);
      return null;
    }
  }

  const setValue = (val:Object) => {
    try {
      setSavedValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    }
    catch (err) {
      console.log(err);
    }
  }

  const [savedValue, setSavedValue] = useState(value);
  return [savedValue, setValue];
}

export default usePersisit;