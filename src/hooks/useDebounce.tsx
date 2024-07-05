import { useEffect, useState } from "react";

function useDebounce(searchTerm: string, delay: number) {
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, delay);

    return () => clearTimeout(debouncer);
  }, [searchTerm, delay]);

  return debouncedTerm;
}

export default useDebounce;
