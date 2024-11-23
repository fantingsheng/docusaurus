import { useEffect, useState } from "react"

export default function useDoubleClick(callback, interval) {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 2) {
      callback();
      setClickCount(0);
    }

    const timer = setTimeout(() => {
      setClickCount(0);
    }, interval);

    return () => clearTimeout(timer);
  }, [clickCount, callback, interval]);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return handleClick;
}
