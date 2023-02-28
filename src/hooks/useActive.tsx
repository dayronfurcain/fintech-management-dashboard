import { useState } from 'react';

const useActive = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
  };

  return { active, handleToggle };
};

export default useActive;
