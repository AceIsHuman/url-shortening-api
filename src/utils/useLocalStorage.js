import { useState } from 'react';

function useLocalStorage(id) {
  const initalState = JSON.parse(localStorage.getItem(id));
  const [value, setValue] = useState(initalState || []);

  const addValue = newValue => {
    const updated = [...value, newValue]
    setValue(updated);
    localStorage.setItem(id, JSON.stringify(updated));
  };

  return [value, addValue];
}

export default useLocalStorage;
