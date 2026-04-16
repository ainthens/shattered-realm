import { useState, useEffect } from "react";

export function useIsAndroid(): boolean {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";
    setIsAndroid(/android/i.test(ua));
  }, []);

  return isAndroid;
}
