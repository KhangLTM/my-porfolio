import { useState, useEffect } from "react";

// Custom Hook for handling scroll visibility
const useScrollVisibility = (): boolean => {
  const [position, setPosition] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [position]);

  return visible;
};

export default useScrollVisibility;
