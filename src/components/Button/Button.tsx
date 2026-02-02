import { useState } from 'react';

export const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>Кнопка для теста {count}</button>
  );
};
